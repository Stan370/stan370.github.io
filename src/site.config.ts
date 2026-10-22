// Single source of truth for site-wide settings. Edit freely.
export const site = {
  url: 'https://stan370.github.io',
  title: 'StanBlog',
  author: 'Stan Ke',
  // Used for <meta name="description"> on index pages and in the feed.
  description:
    'Stan Ke 的个人博客：Go、分布式系统、操作系统、网络与 LLM 的工程笔记，以及一些关于技术与社会的随笔。',
  intro: '软件工程师。写 Go、分布式系统、操作系统和 LLM 的工程笔记，偶尔也写点随笔。',
  defaultLang: 'zh-CN',
  career: 'Software Engineer',
  avatar: '/avatar.jpg',
  // Drives the contribution map on the home page.
  githubUser: 'Stan370',
  social: {
    github: 'https://github.com/Stan370',
    zhihu: 'https://www.zhihu.com/people/chat.openai',
  },

  // Google AdSense auto ads. Leave empty to disable.
  adsenseClient: 'ca-pub-3592614110969127',

  // GA4 measurement ID, e.g. 'G-XXXXXXXXXX'. Nothing is emitted while empty.
  ga4Id: '',

  // Giscus comments: https://giscus.app — enable Discussions on the repo,
  // install the giscus app, then paste repoId / categoryId here.
  giscus: {
    repo: 'Stan370/stan370.github.io',
    repoId: '',
    category: 'Announcements',
    categoryId: '',
  },
} as const;
