# 开眼视频官网

>依赖Vue技术栈构建的开眼视频官网

## 预览

在线预览地址：http://www.kaiyanapp.com/
（与官网效果一致）

## 构建工具

**vue-cli**

## 技术栈

- **Vue**：Vue框架
- **Vue-router**：Vue路由
- **Vuex**：Vue状态管理工具
- **axios**：http请求
- **fastclick**：去除移动端点击延迟

## 启动项目
``` bash
#git clone
https://github.com/snowballer/Eyepetizer-app.git

# install vue-cli
npm install -g vue-cli

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

## 疑难解析

**跨域问题**：项目中遇到了跨域问题，参阅了segmentfault论坛上有关vue-cli上的跨域解决方法，在config文件夹下index.js添加proxyTable，成功解决

```javascript
{
  env: require('./dev.env'),
  port: 8080,
  autoOpenBrowser: true,
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  proxyTable: {
    '/api':{
      target:'http://baobab.kaiyanapp.com/api',
      changeOrigin:true,
      pathRewrite:{
        '^/api':''
      }
    }
  }
}
```

**组件更新**：针对不同路由路径下同一组件如何更新的问题，vue-router官方文档给出了watch路由路径改变的解决方案，但考虑到使用React曾经出现过同样问题，想到vue也是虚拟DOM进行渲染，在router-view组件上加上key从而解决

```html
<template>
  <div id="app">
    <router-view :key="this.$router.history.current.params.id">
    </router-view>
  </div>
</template>
```

**Router history**：默认采用hashhistory，路径匹配时会多出/#/部分，为了提供优雅的url，查阅了vue-router官方文档，增加了mode代码行，但同时发现路由会出现匹配不到页面时跳转到首页的问题，因此在路由中增加了其他路径匹配NotFound组件

```javascript
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
```

## 项目心得

**Vue-router**：对比于React-router的v4版本，Vue-router采用的静态映射的方式来匹配路由，更易于理解和使用

**Vuex**：Vue的数据管理与React有较大区别，相较于自顶而下的单一数据流，Vuex通过mutations和actions来更新获取数据，通过getters来组件间共享数据，数据的获取和分发非常方便，易操作，但随着项目增大，数据管理可能会出现混乱

**vue-loader**：不得不说vue-loader是相当好用的loader，模板、样式和js完全分离，使得vue组件的编码效率提升不少，vue-loader中的样式可以通过scoped来很好的控制局部和全局样式

**Vue**：Vue的template对于前端开发者来说，写起来更自然。Vue的模板语法实现对应的功能更加方便。Vue的router和vuex都是官方维护，相对稳定，加上vue-loader这个利器，Vue使用起来感觉非常方便，实现项目也比较畅快


## 声明

开眼视频是一款精品短视频日报应用，此应用仅作学习交流之用，数据来源于开眼视频，数据接口来源于网路，请勿用于商业用途，原作公司拥有所有权利。
