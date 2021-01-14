const VueLoaderPlugin=require('vue-loader/lib/plugin');
const path=require('path');

module.exports={
    mode:'development',
    devtool:'eval',
    resolve:{
        extensions:['.js','.vue'],
    },
    entry:{
        app:path.join(__dirname,'main.js'),
    },
    module:{
        rules:[{
            test:/\.vue$/,
            use:'vue-loader',
        }],
    },
    plugins:[
        new VueLoaderPlugin(),
    ],
    output:{
        filename:'[name].js',
        path:path.join(__dirname,'dist')//path를 통해서 join메서드를 쓰고,  __dirname을 하면 현재 경로에 접근 가능함. 거기에 있는 dist폴더를 말하는거임
    }
}
