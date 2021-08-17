# uniapp
uni-app 小程序目录

.
├─ components/          # uni-app组件目录
│  ├─ comp-a.vue        # 可复用的a组件
├─ models/              # APi页面
├─ pages/               # 业务页面文件存放的目录
│  ├─ home/            
│  │  ├─ index.vue      # home页面
│  ├─ list/            
│  │  ├─ index.vue      # list页面
├─ static/              # 存放应用引用静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├─ unpackage/           # 打包目录
├─ utils/               # 工具库
├─ wxcomponents/        # 存放小程序组件的目录
├─ App.vue              # 应用配置，用来配置App全局样式以及监听
├─ main.js              # Vue初始化入口文件
├─ manifest.json        # 配置应用名称、appid、logo、版本等打包信息
├─ package.json         # 配置页面路由、导航条、选项卡等页面类信息


接下来我们来配置重要的东西
	#首先，uni-app 内置了 vuex。但是vuex是不支持持久化存储的，所以需要结合第三方来一起协作。
	#默认的模板项目首先是没有node-modules模块依赖的，也就是说你没法进行一些第三方的扩展，所以为了让你的项目更加的灵活性，你需要执行以下命令来搭配一些第三方来更随心所欲的开发项目
	#npm init -y 项目初始化
	#npm install vuex-persistedstate --save 持久化插件(vuex-persistedstate)-解决刷新数据消失的问题
	
	