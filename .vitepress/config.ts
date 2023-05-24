import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "哞哞队长",
  description: "记录养牛生活",
  lang: 'zh-CH',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '西门塔尔', items: [
        { text: '二代', link: '/simmental/second/' },
        { text: '三代', link: '/simmental/third/' },
        { text: '四代', link: '/simmental/fourth/' },
      ] },
      { text: '知识点', link: '/knowledge' }
    ],

    sidebar: [
      {
        text: '西门塔尔',
        items: [
          {
            text: '二代',
            link: '/simmental/second/',
            items: [
              { text: '花脸', link: '/simmental/second/face' }
            ]
          },
          {
            text: '三代',
            link: '/simmental/third/',
            items: [
              { text: '1号', link: '/simmental/third/1' },
              { text: '7号', link: '/simmental/third/7' },
              { text: '11号', link: '/simmental/third/11' },
              { text: '12号', link: '/simmental/third/12' },
              { text: '15号', link: '/simmental/third/15' },
              { text: '18号', link: '/simmental/third/18' },
              { text: '22号', link: '/simmental/third/22' }
            ]
          },
          { text: '四代', link: '/simmental/fourth/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
