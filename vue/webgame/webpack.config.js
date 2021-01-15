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
            test:/\.vue$/,//정규표현식을 이용해 파일확장자가 vue인것을 이용할수있음(js만 되는데 rules를 통해서 이용가능하게됨)
            use:'vue-loader',//vue파일을 만나면 vue-loader가 처리하게 되는것임
            //loader:'vue-loader' 이렇게 use아니고 loader로 해도됨.
            // vue랑 vue-template-compiler랑 버전 일치해야함
        }],
    },
    plugins:[
        new VueLoaderPlugin(),//이거 안너으면 에러나는데 이유는 딱히 없....다고 한다......
    ],
    output:{
        filename:'[name].js',
        path:path.join(__dirname,'dist')//path를 통해서 join메서드를 쓰고,  __dirname을 하면 현재 경로에 접근 가능함. 거기에 있는 dist폴더를 말하는거임
    }
}
