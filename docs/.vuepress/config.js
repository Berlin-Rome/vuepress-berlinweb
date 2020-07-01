module.exports = {
  title: '柏林的博客',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    logo: '/logo.png',  // 左上角logo
    nav: [ // 导航栏配置
      { text: '首页', link: '/' },
      { text: '技术文档', link: '/tech/interview.vue' },
      { text: '个人中心', link: 'https://blog.csdn.net/Berlin_Rome' }
    ],
    sidebar: 'auto', // 侧边栏配置
  }
};