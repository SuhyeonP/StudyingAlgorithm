##NEXT.JS

 : Rendering 성능을 향상시키기 위해 Server side rendering 기술을 도입하게 되었고, code splitting 과 Image optimization 등 다양한 기능이 활발히 업데이트 되고 있는 React 의 SSR 프레임워크인 Next.js 를 사용하고 있습니다.      

Server Side:최초에 Next서버로 요청이 들어왔을 때, Next서버에서는 요청이 들어온 페이지에 들어갈 데이터를 Fetch하고 Html을 구성하여 Client로 보내준다.    

#### _app.js와 _document.js      
최초로 실행되는건데, 사실 없어도 무방하다. Next자체에서 제공하는 로직으로 실행되기때문이다.    
하지만, 항상 프로젝트를 진행하다보면 자체 제공 로직은 언젠가 커스텀하기에 커스텀을 위해 pages폴더에 각각 _app.js, _document.js파일을 생성하고 코드를 작성한다.

위의 두 파일은 server only file이다. Next server logic에 사용되는 파일이라는 뜻인것이다. client에서 사용하는 로직(eventlistner등의 window/Dom 로직)을 사용하면 안됨.
`window is not defined`라는 에러가 보이면 해당사항을 다시 확인하도록!    

최초로 실행되는 것은 _app.js로 client에서 뛰우길 바라는 전체 컴포넌트의 레이아웃이라 생각하면 될듯. 공통 레이아웃이므로 최초에 실행되어 내부에 들어갈 컴포넌트들을 실행한다. 내부에 content들이 있다면 전부 실행하고, Html 의 Body로 구성한다.     
이후 document.js가 실행된다._document.js는 static html를 구성하기 위한 _app.js에서 구성한 html body가 어떤 형태로 들어갈지 구성하는 곳이다. Content들은 브라우저가 html로 이해하도록 구조화 시켜주는 곳이라고 이해하면 된다.

_app.js가 실행되면서 갖추어진 content들은 Main Component 아래에 생성된다.

기억하자!


```_documents.js에 어플리케이션 로직을 넣지 말자. 브라우저는 Main을 제외한 다른 component들을 initialize하지 않는다. 공통된 어플리케이션 로직이 필요하다면, _app.js를 활용하자.```


__getInitialProps__    
:웹페이지는 각 페이지마다 사전에 불러와야할 데이터들이 있다. Data Fetching이라고도 하는 로직은 CSR에서는 react로직에 따라 useEffect로 컴포넌트가 마운트되고 나서 하는 경우가 많다. 이 과정을 __*서버에서 미리 처리하도록*__ 도와주는 것이 바로 getInitialProps이다.      

Data Fetching을 서버에서 하게되면    
1. 속도가 빨라진다 :  브라우저에서 연산을 서버와 함께 하면서 미리 데이터를 받아오고 브라우저는 렌더링만 할 수있기 때문
2. 코드상의 처리가 깔끔해진다. 데이터가 꼭 필요한 페이지의 경우 브라우저가 데이터를 가져올때까지 화면 렌더링을 잠시 null처리하는 경우가 있는데 이 과정이 없어지고 initial한 데이터가 들어오는 과정을 전제로 코드를 작성할수있다.     

#####사용법    
목적에 따라 사용법이 다른데, 해당 페이지에만 미리 데이터를 불러오는 로직을 넣을것인지, 혹은 전체페이지에 대해 동일한 Data fetching을 할것인지를 정해야한다.이는 기획에 따라 달라지는 부분이다. 공통된 Data Fetching이 필요하다면 _app.js에 getInitialProps를 붙이면 된다. 페이지마다 다른 Data가 필요하면 페이지마다 getInitialProps를 붙이면 된다. 방법은 기존에 내가한 방법인데,

```javascript
import axios from 'axios';

const Page = ({ stars }) => {
  
  return <div>Next stars: {stars}</div>;
};

Page.getInitialProps = async ctx => {
  const { data } = await axios.get('...url');
  // 상태관리툴 안쓴다는 가정.        
  return { stars: data };
}

export default Page;
```

####사용시 주의!
* getInitialProps내부 로직은 서버에서 실행된다. 따라서 Client에서만 가능한 로직은 피해야함(window, document등)   
* 한 페이지를 로드시 , 하나의 getInitialProps 로직만 실행된다. 얘를들어 _app.js에 getInitialProps를 달아서 사용하면 그 하부페이지의 getInitialProps는 실행되지 않는다. 하지만 아래와같이 커스텀하면 최종결과를 담을수있다.   
```javascript
export default class MyApp extends App {

	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
    
    // 실행하고자 하는 component에 getInitialprops가 있으면 실행하여 props를 받아올 수 있다.
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return {
			pageProps
		};
	}

	render() {
		const { Component, pageProps, router } = this.props;
    
		return (
			<div>
				<Component {...pageProps} />
			</div>

		);
	}
};
```
