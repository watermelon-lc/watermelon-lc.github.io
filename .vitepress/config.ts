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
      { text: '养殖技术', link: '/technique/' }
    ],

    sidebar: [
      {
        text: '西门塔尔',
        collapsed: true,
        items: [
          {
            text: '二代',
            link: '/simmental/second/',
            collapsed: false,
            items: [
              { text: '花脸', link: '/simmental/second/face' }
            ]
          },
          {
            text: '三代',
            link: '/simmental/third/',
            collapsed: false,
            items: [
              { text: '1号', link: '/simmental/third/1' },
              { text: '7号', link: '/simmental/third/7' },
              { text: '10号-黑嘴头', link: '/simmental/third/10' },
              { text: '11号', link: '/simmental/third/11' },
              { text: '12号', link: '/simmental/third/12' },
              { text: '14号', link: '/simmental/third/14' },
              { text: '15号-大秃头', link: '/simmental/third/15' },
              { text: '16号', link: '/simmental/third/16' },
              { text: '17号', link: '/simmental/third/17' },
              { text: '18号', link: '/simmental/third/18' },
              { text: '20号', link: '/simmental/third/20' },
              { text: '21号', link: '/simmental/third/21' },
              { text: '22号', link: '/simmental/third/22' },
              { text: '24号-1号孩子', link: '/simmental/third/24' },
              { text: '25号-花脸孩子', link: '/simmental/third/25' },
              { text: '26号-12号孩子', link: '/simmental/third/26' },
              { text: '27号-狸花孩子', link: '/simmental/third/27' },
              { text: '28号', link: '/simmental/third/28' },
              { text: '29号-背上2片白', link: '/simmental/third/29' },
              { text: '30号', link: '/simmental/third/30' },
              { text: '31号-前腿背上1片白', link: '/simmental/third/31' },
              { text: '32号-前腿屁股2片白', link: '/simmental/third/32' },
              { text: '33号-背上3片白', link: '/simmental/third/33' },
              { text: '34号', link: '/simmental/third/34' },
              { text: '35号', link: '/simmental/third/35' },
              { text: '36号-23号孩子', link: '/simmental/third/36' },
              { text: '37号', link: '/simmental/third/37' },
            ]
          },
          {
            text: '四代',
            link: '/simmental/fourth/',
            collapsed: false,
            items: [
              { text: '狸花', link: '/simmental/fourth/flower' },
              { text: '6号', link: '/simmental/fourth/6' },
              { text: '19号', link: '/simmental/fourth/19' },
              { text: '23号', link: '/simmental/fourth/23' },
            ]
          },
        ]
      },
      // {
      //   text: '养殖技术',
      //   collapsed: true,
      //   items: [
      //     {
      //       text: '常见病的防治',
      //       link: '/technique/common-ill',
      //       items: [
      //         {  }
      //       ]
      //     }
      //   ]
      // }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
