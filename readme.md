#创建基本的webpack4.x项目
1. 运行npm init -y 快速初始化项目
2. 在项目的根目录下创建src源代码目录和dist产品目录
3. 在src目录下创建index.html
4. 使用cnpm安装webpack，运行cnpm i webpack -D   cnpm i webpack-cli -D
5. 注意：webpack 4.x 提供了 约定大于配置的概念；目的是为了尽量减少配置文件的体积
   .默认约定了
   .打包入口是 scr->index.js
   .打包的输出文件是dist ->main.js
   .4.x中新增了mode选项（必须加不可省略），可选值为development和production

 

dev 的配置

//  --open 自动打开浏览器  --port 端口号  --host域名地址
"dev":"webpack-dev-server --open --port 3000 --hot "
