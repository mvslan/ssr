# ssr
手写简而全的服务端渲染

一个简单的服务端渲染项目，包含如下内容：
1，webpack打包
2，自动检测代码更新，手动刷新页面
3，express创建html模板，获取public中的客户端打包代码，使某些方法可以在客户端运行（如onClick）
4，使用react-router-dom中的StaticRouter配置浏览器路由，客户端路由正常配置即可
5，使用react-dom/server的renderToString 处理路由信息，并将其手动挂载到root标签中
6，给组件配置loadData方法，使用redux获取远程数据
7，修改路由配置，增加loadData方法，内容就是6中的获取数据的方法
8，使用react-router-config中的matchRoutes匹配当前路由，拿到loadData返回的Promise方法
9，将获取到的所有Promise执行一次，数据通过store加载到组件中，并且把数据都写到window.context下，客户端store初始化时拿到这些数据，这就是数据的注水和脱水
10，使用thunk的withExtraArgument函数做优化
11，renderRoutes方法实现多级路由
12，配置css
