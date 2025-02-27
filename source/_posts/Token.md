---
title: HTTP怎么保存状态？ Token设计与选型
date: 2025-01-07 19:43:33
categories: 
- 计算机工程
tags:
- 计算机基础
- 分布式系统
- 网络安全
---

### 认证系统的设计与选型：JWT到长短生命周期的Token管理

HTTP 本身是无状态的，但我们可以通过 Token 机制来保持状态，而不依赖传统的 Session 存储。JWT通过加密签名保证 Token 的完整性，并可以在无状态的分布式架构中验证用户身份，解决了 Session 依赖服务器存储的问题。

在现代的认证与授权机制中，**Token**扮演着关键角色，用于标识和验证用户的身份。

Token是一个令牌，客户端访问服务器时，验证通过后服务端会为其签发一张令牌，之后客户端就可以携带令牌访问服务器，服务端只需要验证令牌的有效性即可。一句话概括；**访问资源接口（API）时所需要的资源凭证**
JWT（JSON Web Token）常常是一个热门选择。下面我将从设计原则、优势与劣势、以及实际应用场景等角度详细说明 JWT 的设计与选型问题。JWT 的标准结构由三部分组成：

Header（头部）：通常包含令牌的类型（通常为 JWT）以及所使用的签名算法（如 HMAC SHA256 或 RSA）。
Payload（载荷）：包含声明（Claims），如注册声明（如 iss、sub、aud、exp、nbf、iat 和 jti）以及自定义数据。
Signature（签名）：通过对 Header 和 Payload 进行编码后，使用指定的算法和密钥（或私钥）进行签名，确保数据未被篡改。

然而，如何设计Token，尤其是在选择使用**Access Token**和**Refresh Token**的组合（简称AT&RT方案）还是单Token方案时，往往需要根据业务需求和安全性做权衡。本文将从原理、场景和安全性三个角度入手，深入探讨Token设计中的抉择。

---

#### **Access Token 与 Refresh Token 的角色分工**

Access Token（简称AT）和 Refresh Token（简称RT）的设计，背后的核心思想是将**授权**与**资源访问**的行为分离：

1. **Access Token**：用于快速访问受保护的资源。它通常有较短的有效期，直接携带用户授权信息（如权限、身份等），在API请求中传递给服务器进行验证。
   - **特点**：短时有效、高频使用。
   - **风险**：一旦被窃取，可能导致短期内资源被恶意访问。

2. **Refresh Token**：用于刷新Access Token的有效期。它通常只在认证服务器（Authorization Server）和客户端之间交互，不会直接参与资源访问。
   - **特点**：长时有效、低频使用。
   - **风险**：被窃取后可能允许恶意用户长期续签Access Token。

通过将两者分工，AT&RT方案将**获取授权**这一高危、低频的操作与**获取资源**这一低危、高频的操作分离开，从而降低安全风险。

---

#### **AT&RT 与单Token方案的核心区别**

AT&RT方案与单Token方案的区别，可以总结为一个核心理念：**控制风险的暴露面**。

1. **单Token方案**：
   - 单Token同时承担授权和资源访问功能。
   - 一旦泄漏，恶意用户可以直接访问资源，且可能长时间有效。
   - 适用场景：小型应用、内网服务、对安全性要求较低的系统。

2. **AT&RT方案**：
   - 将授权功能剥离到Refresh Token，Access Token则专注于资源访问。
   - **好处**：
     - 如果Access Token泄漏，由于其短时效性，攻击者只能在有限时间内使用。
     - 即使Refresh Token泄漏，也可以通过令牌轮换机制（Token Rotation）降低风险。
   - 适用场景：安全敏感、用户访问频繁的场景，如银行、社交媒体、云服务等。

---

#### **设计Token时需要考虑的关键问题**

在实际系统中，选择单Token还是AT&RT方案，取决于以下几个因素：

1. **安全性需求**：
   - 如果系统中涉及敏感数据或存在较高的Token泄露风险（如公网环境、多终端接入），推荐使用AT&RT方案。
   - 单Token方案适用于风险较低的场景，如开发测试环境或不涉及关键数据的内部服务。

2. **使用频率**：
   - 高频访问的API更倾向于AT&RT方案，因为Access Token的短时效性可以有效减少潜在攻击窗口。
   - 如果访问频率较低，单Token方案可能更简洁高效。

3. **复杂度与成本**：
   - AT&RT方案需要维护多种令牌状态（如失效、刷新、轮换），实现复杂度较高。
   - 单Token方案实现简单，适合中小型团队或初创项目。

4. **Token有效期**：
   - Access Token通常设置为几分钟到几小时的有效期，降低泄漏风险。
   - Refresh Token的有效期则更长，通常为数天到数月。

---

#### **AT&RT方案的安全机制**

为了进一步提高安全性，AT&RT方案通常配合以下技术：

1. **令牌轮换（Token Rotation）**：
   - 每次使用Refresh Token时，返回新的Refresh Token并使旧的失效。
   - 即使Refresh Token被窃取，也只能使用一次，降低攻击风险。

2. **短期有效Access Token**：
   - 将Access Token有效期控制在较短时间内（如5分钟）。
   - 即便被窃取，攻击窗口也极为有限。

3. **设备绑定与IP限制**：
   - 将Refresh Token绑定到特定设备或IP，防止跨设备滥用。

4. **安全存储**：
   - 客户端应妥善存储Refresh Token（如使用Secure Storage或HttpOnly Cookie）。

---

#### **实践中的选型建议**

| **场景**                               | **推荐方案**         | **原因**                                                                 |
|----------------------------------------|----------------------|--------------------------------------------------------------------------|
| 内网微服务通信                         | 单Token方案          | 安全风险较低，实现简单，且内部环境对Token泄漏容忍度高。                   |
| 移动端应用（电商、社交媒体等）          | AT&RT方案            | 需要支持多终端、频繁访问资源且对安全性要求较高。                           |
| 低频后台管理系统                       | 单Token方案          | 后台系统操作频率低，可通过严格控制用户行为降低风险。                        |
| 高敏感性业务（银行、金融等）             | AT&RT方案+Token轮换  | 涉及敏感数据，需最大限度减少Token泄漏后的攻击可能性。                       |

---

## **总结**

AT&RT方案的核心在于用双Token机制分隔高频和高危操作，从而降低风险的暴露面。而单Token方案则以简洁性取胜，适合对安全性要求较低的场景。在实际应用中，开发者需要根据业务特点、用户行为模式以及系统复杂度，选择最合适的方案。

**Token设计没有“银弹”，但对风险的正确理解，才是高效与安全并行的基石。**

## 背景知识
在身份验证和授权领域，"有状态"（stateful）和"无状态"（stateless）通常用来描述系统处理用户认证信息的方式。

有状态（Stateful）：

有状态的认证系统在服务器端会维护用户的会话状态信息。这意味着服务器端会存储关于用户认证状态的信息，比如用户的登录状态、会话信息、权限等。
在有状态的认证系统中，服务器端在处理用户请求时，会根据存储的会话状态来验证用户的身份和权限，通常会使用会话标识（如 Session ID）来识别用户的会话状态。
典型的例子包括传统的基于会话的认证方式，用户在登录后会获得一个会话标识（Session ID），服务器端会在会话管理中保持用户的登录状态，并在后续请求中使用该会话标识来验证用户的身份。

使用有状态令牌（Stateful Token）在特定场景中具有显著优势，特别是在需要服务器端管理会话状态和即时控制会话生命周期的情况下。以下是一些适合使用有状态令牌的场景：

### 1. **高度安全性要求的应用**

- **即时会话撤销**：在高安全性应用中，例如金融服务、在线支付和医疗系统，可能需要立即撤销某些会话。服务器端存储会话状态，可以在需要时立即无效化令牌。
- **敏感操作**：对于涉及敏感数据和操作的系统，服务器端管理可以提供额外的控制和审计能力。

### 2. **单一服务器或共享存储的系统**

- **集中式会话管理**：在单服务器应用或使用集中式共享存储的环境中，服务器端存储和管理会话状态较为简单和高效。
- **小规模系统**：对于小规模系统或负载较低的系统，管理会话状态的开销相对较低。

### 3. **需要复杂的会话控制,需长时间会话管理的应用**

- **细粒度权限控制**：服务器端可以根据用户会话状态进行细粒度的权限控制，例如临时提升权限、基于活动时间段的权限控制等。
- **动态会话属性**：在会话期间可能需要动态调整用户的会话属性（如角色、权限等），服务器端管理更加灵活。
- **长期会话**：在需要长时间保持用户会话的应用中，例如企业内部应用或需要频繁交互的应用，服务器端可以更好地管理和维护会话状态。
- **会话恢复**：支持会话恢复，用户可以在不同设备和会话中无缝切换。

### 4. **严格的会话一致性需求,不需要跨域**

- **强一致性**：需要确保会话状态的一致性，如电商购物车、多人协作工具等，服务器端可以更好地保证一致性和数据同步。
- **内部系统**：主要用于内部系统，不需要跨域、跨平台访问，这类系统更适合使用有状态令牌。

无状态（Stateless）：

无状态的认证系统不会在服务器端维护用户的会话状态信息。每个请求都是独立的，服务器不会存储任何关于用户的会话状态。
在无状态的认证系统中，服务器端不需要存储任何会话状态，所有的认证信息都被包含在每个请求中，通常是在请求的头部（Header）或参数中。
典型的例子包括基于令牌（Token）的认证方式，比如 JSON Web Token（JWT）。在这种方式下，用户在登录后会获得一个令牌（Token），服务器端会使用令牌中的信息来验证用户的身份和权限，而不需要存储任何会话状态。

即使使用 JWT 进行用户认证，后端数据库仍然需要存储用户的账户和密码信息。这是因为：

- **用户注册和登录**：在用户注册时，需要存储他们的账户信息（如用户名、邮箱）和密码（通常是经过哈希处理的密码）。
- **身份验证**：在用户登录时，后端需要验证用户输入的密码是否正确，这需要与数据库中存储的密码进行比对。

JWT 是在用户成功登录后生成的令牌，通常包含用户的身份信息和权限信息。其生成和使用过程如下：

- **用户登录**：用户提交用户名和密码。
- **身份验证**：服务器验证用户名和密码。如果验证成功，服务器生成一个 JWT，包含用户的身份信息（如用户ID）和其他必要的声明（claims）。
- **返回 JWT**：服务器将生成的 JWT 返回给客户端。
- **后续请求**：客户端在后续请求中携带 JWT，服务器通过验证 JWT 的签名和有效期来确认用户身份。


JWT 在用户认证和授权方面具有以下优势：

- **无状态性**：服务器不需要存储用户的会话信息，每次请求都可以通过验证 JWT 来确认用户身份。
- **扩展性**：适用于分布式系统和微服务架构，因为令牌是自包含的，不需要共享会话状态。
- **安全性**：通过加密和签名，确保令牌的完整性和可信度。
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


**参考文献与数据来源**：
- [RFC 7519 - JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519)
- [JWT Best Practices](https://auth0.com/blog/jwt-best-practices/)
- [OWASP JWT Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java.html)
- [NIST Guidelines on Authentication](https://pages.nist.gov/800-63-3/)