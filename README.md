# demo2nuxt

> My demo2nuxt project

## 相关文档
- 不支持低版本node,可安装node多版本管理工具
	- [windows通过nvm管理多个node版本](https://github.com/coreybutler/nvm-windows)
	- [mac通过n管理多个node版本](https://www.npmjs.com/package/n)
- nuxt(vue的ssr框架)
	- [中文文档](https://zh.nuxtjs.org/guide)
	- [英文文档(最新版文档)](https://nuxtjs.org/guide)
- mock(模拟数据)
	- [文档](https://github.com/nuysoft/Mock/wiki)
	- [示例](http://mockjs.com/examples.html)
- vue-i18n(国际化)
	- [文档](http://kazupon.github.io/vue-i18n/)
	- [源码地址](https://github.com/kazupon/vue-i18n)


## 项目构建

- 安装最新稳定版node（当前使用的8.10.0）
	``` bash
	# windows
	$ nvm install 8.10.0
	$ nvm use 8.10.0
	
	# mac
	$ n use 8.10.0
	$ n
	```

- 安装依赖
	``` bash
	$ npm install
	```

- 开发时的热加载服务开启([运行地址](http://localhost:5211)) 
	``` bash
	$ npm run dev
	```

- 构建生产版本
	``` bash
	$ npm run build
	```

- 生产版本的服务开启
	``` bash
	$ npm start
	```

- 生成静态文件项目
	``` bash
	$ npm run generate
	```
