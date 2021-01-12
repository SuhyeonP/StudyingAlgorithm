##가상DOM vs DOM      

####DOM:        
DOM document object model 의 줄임말.
DOM이란 트리구조로 되어있는 객체모델로써        
js의 getElementByID()같은 함를 이용해 HTML문서의 각 요소들을 접근하고 사용할 수 있는 <span style="color:red">객체 모델</span> 이다.      
DOM은 트리구조 되어있어서 이해하기 쉽다는 장점이 있다.   
구조덕분에 거대한 DOM트리에서는 속도이슈가 발생하였고, 지속적인 DOM업데이트는 잦은오류와 사용자 인터페이에 악영향을 미쳤다.      

또한 DOM을 제대로 찾지 못한다면 , 코드를 분석하려고 거대한 HTML을 들여다봐야한다는 단점이 있다     

####가상DOM :       
비슷하게 기존의 DOM은 많은 일을 수행하다가 버그가 발생하거나 브라우저가 죽는일이 종종 발생했다.     
위의 DOM의 단점을 극복하고자 나온것이 가상 DOM이다.      
가상돔은 실제돔문서를 추상화된 개념으로, 변화가 많은 view를 실제dom에서 처리하는 방식이 아닌 가상돔(virtual dom)과 메모리에서 미리 처리하고, 저장후 
실제 dom 과 동기 하는 프로그래밍 개념이다.      
         
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsK2db%2FbtqCoR6Sefb%2FbWCCnmtGeZKkabCwwxBCn0%2Ftfile.svg"/>      
이러한 가상돔은 실제돔보다 가볍고, 빠른 렌더링이 가능하기때문에 , 압도적으로 DOM의 부담을 줄여준다.     
몇가지의 특수 키워드(ref, key, htmlFor)등 조금씩 다른부분이 존재하지만 실제 DOM과 Virtual Dom은 구조상 큰 차이가 없어 이해하기 편하다는 장점이 있다.
때문에 React뿐만아니라 Vue또한 이러한 Virtual DOM 방식을 채택하였으며, 앞으로도 지속적으로 성장할 여지가 있는 패턴이라 생각한다.



##MVC패턴     
[생활코딩 참고 사이트](https://opentutorials.org/course/697/3828)      

MVC란 Model View Controller의 약자로 에플리케이션을 세가지의 역할로 구분한 개발 방법론이다.     
사용자가 Controller를 조작하면 Controller는 Model을 통해서 데이터를 가져오고 그 정보를 바탕으로 시각적인 표현을 담당하는 View를 제어해서 사용자에게 전달하게 된다. 
<img src="https://s3.ap-northeast-2.amazonaws.com/opentutorials-user-file/module/327/1262.png"/>


##Binary Search Tree의 시간복잡도
[참고 사이트](https://ggodong.tistory.com/36)     

먼저 이진탐색을 하기위해서는 배열이 필요하다.이진탐색은 정렬된 데이터가 아니면 적용할수 없기 때문이다.
