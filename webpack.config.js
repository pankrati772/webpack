const path =require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
	template:path.join(__dirname,'./src/index.html'),
	filename:'index.html'
})



module.exports={
	mode:'production',
	plugins:[
		htmlPlugin
	]
}