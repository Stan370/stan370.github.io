---
title: Token设计与选型
date: 2024-08-01 19:43:33
categories: 
- 计算机科学
tags:
- 计算机基础
- 分布式系统
---
## Token设计

**Cookie-Based Session**：

- **优点**：简单、安全性高（服务器端存储）。
- **缺点**：扩展性差，服务器压力大。

**Token-Based Authentication**：

- **优点**：无状态、扩展性好。
- **缺点**：客户端存储安全性较差。

**JWT**：

- **优点**：无状态、自包含、适合分布式系统。
- **缺点**：安全性依赖于客户端存储和令牌签名。

**Cookie-Based Session**：适用于简单的 Web 应用，特别是单服务器或小规模应用。

**Token-Based Authentication**：适用于需要跨多个客户端（如移动端、单页应用）的应用。

**JWT**：适用于分布式系统和微服务架构，提供更高的扩展性和灵活性。

如果是在一个只有帐号跟密码的世界上，我就必须要把我的 Google 帐号和密码告诉给这第三方服务行事历服务，它才有办法取得这些资讯。但如果我把帐号密码告诉了第三方，它可能就可以在暗地里窃取行事历以外的资讯，像是在 Gmail 里的机密资讯。这时候就出现了使用 **Access Token 来解决这个问题的协议，OAuth 2.0。**

在 OAuth 2.0 中，使用短期的 Access Token 有几个主要的优势和原因：

1. **安全性：** 短期的 Access Token 有效期较短，如果被盗或泄露，攻击者可利用的时间窗口较小，减少了被滥用的风险。相比之下，长期有效的 Token 更容易成为攻击者的攻击目标。
2. 可控制资源的访问权限（最小权限原则
3. **强制刷新：** 通过设定较短的有效期，强制客户端定期刷新 Access Token。这有助于保持令牌的有效性和安全性，并且可以促使客户端与认证服务器交互，更新并重新授权访问权限。
4. **可撤销性:** 您可以随时撤销第三方服务的访问权限。

但同时也要权衡安全性和效率。 Access Token应该维持在较短有效期，**过长不安全，过短也会影响用户体验**，因为频繁去刷新带来没有必要的网络请求。可以参考我们常常在某些网站停止操作一段时间之后就会掉线，这个时间是Refresh Token的有效期，Access Token不应长过这个时间。

Refresh Token的有效期就是允许用户在多久时间内不用重新登录的时间，可以很长，视业务而定。我们在使用某些APP的时候，即使一个月没有开过也是登录状态的，这6y就是Refresh Token决定的。授权服务在接到Refresh Token的时候还要进一步做客户端的验证，尽可能排除盗用的情况。

A refresh token can help you balance security with usability. Since refresh tokens are typically longer-lived, you can use them **to request new access tokens after the shorter-lived access tokens expire**.

 **It's a common practice for some JWT frameworks or authentication systems to use a combination of JWT access tokens and opaque refresh tokens. This hybrid approach aims to leverage the advantages of both token types while mitigating their respective drawbacks.**

**通过引入 refresh token，系统设计者实现了一种混合模型：保持了大部分请求的无状态性（通过 JWT），同时通过 refresh token 实现必要的有状态管理（如 token 的更新和撤销）。这种方法有效地在用户体验、安全性和系统性能之间取得了平衡。
你的总结确实很好地解释了为什么在现代架构中，尽管追求无状态（stateless）**，但还是需要一些有状态（stateful）元素来解决实际问题。这样的设计既保持了分布式系统的优势，又提供了必要的安全控制和用户体验优化。

所有token应该保管在private的地方，也就是只能客户端自己使用，所有token都应该在[TLS](https://link.juejin.cn/?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2F%25E5%2582%25B3%25E8%25BC%25B8%25E5%25B1%25A4%25E5%25AE%2589%25E5%2585%25A8%25E6%2580%25A7%25E5%258D%2594%25E5%25AE%259A%23TLS_1.3)信道下发送（比如HTTPS）。

In an SSO/Auth system, the token you design should store information essential for secure and efficient authentication and authorization. Here's a breakdown of the key information that should be included in your token:

```
v.Set("scope", "iauth_token")
	v.Set("response_type", "code")
	v.Set("client_id", testService.ServiceID)
	v.Set("state", uuid.NewString())
	v.Set("redirect_uri", "https://test.hotstar.com:9999/callback")
	tokenClaims := &iauth.TokenClaims{}
		parser := jwt.Parser{}
		_, _, err = parser.ParseUnverified(result.AccessToken, tokenClaims)
		assert.Nil(t, err)
		assert.Equal(t, tokenClaims.SubjectID, testUserId)
		assert.Equal(t, tokenClaims.ExpiresAt, int64(result.ExpiresAt))
		assert.Equal(t, tokenClaims.ExpiresAt-12*3600-2, tokenClaims.IssuedAt) //we set 2 second offset in issueAt
		assert.True(t, tokenClaims.IssuedAt == tokenClaims.NotBefore)
		assert.NotNil(t, tokenClaims.Id)
```

**Essential Information:**

- **User Identifier (UID):** A unique identifier for the user, typically a numerical ID. This is crucial for identifying the user associated with the token.
- **Issuer (iss):** Identifies the system that issued the token. This helps verify the token's origin and prevent forgery.
- **Audience (aud):** Specifies the intended recipient or service for the token. This ensures the token is used only by the intended service.
- **Expiration Time (exp):** A timestamp indicating when the token expires. This limits the token's validity and reduces the risk of unauthorized access if compromised.
- **Issued At Time (iat):** A timestamp indicating when the token was issued. This helps track token age and detect potential issues.
- **Token Type (typ):** Specifies the type of token being used (e.g., JWT, opaque token). This helps the receiving service correctly handle the token.

**Optional but Recommended Information:**

- **Scope (scp):** Defines the permissions granted to the token holder. This allows for fine-grained control over what resources the user can access.
- **Nonce (jti):** A unique identifier for the token, preventing replay attacks where a stolen token is used multiple times.
- **Session ID:** A unique identifier for the user's session. This allows for session management and revocation.
- **User Roles/Groups:** Information about the user's roles or groups within the system. This can be used for authorization decisions.
- **Refresh Token ID:** If using a refresh token strategy, this identifies the associated refresh token for seamless token renewal.

**Considerations:**

- **Security:** Prioritize security by using strong encryption algorithms and proper key management for token generation and validation.
- **Performance:** Balance the amount of information stored in the token with performance considerations. Larger tokens can impact performance.
- **Privacy:** Only include necessary information to minimize the risk of exposing sensitive user data.
- **Token Format:** Choose a suitable token format like JWT (JSON Web Token) for its standardized structure and ease of parsing.