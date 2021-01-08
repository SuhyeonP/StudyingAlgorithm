#React에서의 Props,State차이점       

:공통점=> 데이터를 다룰 때 사용되는 개념이다.

###PROPS
:부모 컴포넌트가 자식 컴포넌트에게 전달하는 데이터로, (자식입장에서) 읽기 전용이다.    
부모 구성 요소로부터 전달된 속성, 불변의 데이터 , 변경불가       
=>초기 마운트 속도가 빠름, 불필요한 기능이 없음     

###State
: 자신이 들고있는 값을 의미한다.   
구성요소가 있는 상태, 가변데이터 , 구성요소에 의해 유지, 변경가능     
State구성 요소 자체에 의해 유지되고 구성요소에서 구성요소에 전달되지 않는다.    
UI에 관련된 상태 또는 외부데이터와 관련된 상태와 같은것을 담당한다.
State값은 this.setState()구성 요소에서 호출하여 업데이트된다.    
setState가 호출되면 기존 state로 대체하고 구성요소의 render()메소드가 실행된다.       
(읽기 전용인 Props와 비교해보자면, 쓰기전용이라고 볼수있다.)      

####JSX     
:자바스크립트 안에 html태그가 자리잡고있는것을 JSX라고 한다.     
JSX는 리액트 컴포넌트를 만들 때 사용하는 언어이다.     

###React vs React-dom     
react는 ui라이브러리이고, React DOM은 React를 웹사이트에 출력(render) 하는것을 도와주는 모델이다.     
React를 웹사이트에 올리고싶을때 , React Dom 을 사용.     
React를 모바일앱에 올려놓고 싶을때, React Native사용함...    

React Dom 은 1개의 컴포넌트를 출력(render)하고, Document안에 Element가 있는데 , Element의 ID는 root(가정..)이다.     
해당 ID는 , 사용할 HTML파일에 숨어있음.    
이러한 방식으로 출력(render)시 해당 컴포넌트가, Document에 표출될것이다.


컴포넌트->render->return->jsx     
위 순서로 흐름.        
