// Single source of truth for site-wide settings. Edit freely.
export const site = {
  url: 'https://stan370.github.io',
  title: 'StanBlog',
  author: 'Stan Ke',
  // Used for <meta name="description"> on index pages and in the feed.
  description:
    'Stan Ke 的个人博客：Go、Typescript、操作系统、网络与 LLM 的工程笔记，以及一些关于技术与社会的随笔。',
  descriptions: {
    zh: 'Stan Ke 的个人博客：Go、Typescript、操作系统、网络与 LLM 的工程笔记，以及一些关于技术与社会的随笔。',
    en: "Stan Ke's personal blog: engineering notes on Go, TypeScript, operating systems, networking, and LLMs, plus essays on technology and society.",
  },
  intro: 'Learning ability is the most important skill in the world.',
  defaultLang: 'zh-CN',
  career: 'Write for fun',
  avatar: '/avatar.jpg',
  // Drives the contribution map on the home page.
  githubUser: 'Stan370',
  // Shown in the footer and About page, in this order. Add or remove freely.
  social: [
    { label: 'GitHub', labelEn: 'GitHub', url: 'https://github.com/Stan370' },
    { label: 'Repo', labelEn: 'Repo', url: 'https://github.com/Stan370/stan370.github.io' },
    { label: '知乎', labelEn: 'Zhihu', url: 'https://www.zhihu.com/people/chat.openai' },
  ],

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
