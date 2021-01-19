인공지능(Artificial intelligence)     
:인간의 지능을 기계로 구현하다.      
환경을 인지하고, <span style="color:red ;font-size:17px;">의사결정 </span>을 하며, 행동을 취하는 컴퓨터 체계     
머신러닝(Machine Learning)     
:인공지능을 구현하는 구체적인 접근방식     
컴퓨터과학의 영역으로써 일일이 프로그래밍 하는 대신 통계적인 기술을 이용하여 컴퓨터 체계가 데이터를 통해 <span style="color:green">학습 </span>하는것을 말한다.     

###머신러닝의 네가지 주요 학습    
* 자율(unsupervised) 학습 
* 지도(supervised) 학습
* 강화(reinforcement) 학습
* 딥(deep)러닝

1. 자율학습 / 비 지도형 학습    
:특정하게 분류되지않은(unlabeled) 데이터로 부터 해당 데이터의 구조를 유추해 내는 학습 방법으로 , 대표적인 예로 클러스터 기법이 잇다.
<br/><img src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9913EA3C5D89C5D103" width="400px"/>      
왼쪽에서 흩어져있는 데이터를 자율/비 지도형 학습을 통해 자율적으로 그 구조를 유추하게 해본다면, 학습결과는 오른쪽처럼 3가지 종류로 구분짓게 되는데,      
이러한 학습은 서술식(Descriptive)분석으로써 주어진 데이터를 요약해서 더 의미있게 만들어주는 방식이다.      


2. 지도 학습 / 지도형 학습     
:입력과 출력 쌍(Input-Output Pairs)으로 구성된 예제로부터 학습하여, 특정 입력이 주어졌을때, 출력을 산출해 내도록 학습하는 방식이다. 대표적인 예로 이미지 분류가 있다.
<br/><img src="https://lh3.googleusercontent.com/proxy/L6Th_M62kd95H_8fKi1mnIbV5oJ_w64NiaRqGi0LhikFLkhoIUE2_5_RL0eOjcsyStthf63XYA8moeRKOH56x2ucYw_m7dTZVPB_ehLL0UmxWiQP4LY5oudo30PXOm6pafsxskq-6D4DuGZo1pNNFBo3UUklR5mlvhUrDyNTjQ"  width="400px"/>
<br/>위와같이 방대한 양의 훈련데이터가 있다. 모든 이미지는 종류별로 분류가 되어있고, 이러한 데이터를 통해 학습을 시킨후, 처음보는 이미지를 주고 무엇인지 유추하도록 해보면, 학습된 내용을 바탕으로 그 이미지를 분류하는 방식이다. 이러한 학습방법을 통해 예측하고, 이미지분류 이외에도 손글씨를 문자로 인식하거나, 이메일에서 스팸을 걸러내고, 사진에서 얼굴을 인식하는 등의 방식이 있다.    
   

3. 강화학습
스스로 시행착오를 통해 학습하는 방법. 이 학습은 보상을 최대화 하기 위한 행동을 취하게 되는데, 즉 최고의 결과를 내기위한 행동을 취한다고 보면 된다.     
   불확실성 속에서, 최적의 연속적인 의사결정을 하기 위한 학습방법이다. <br/>대표적인 예로 이세돌 바둑기사를 이긴 알파고 바둑을 생각하면 된다.     
   

4. 딥러닝    
인간의 뇌속의 뉴런이 연결된 형태를 모델로 삼았으며, 주어진 훈련 데이터(training set)로 부터 학습하여 이를 새로운 데이터에 적용하는 학습방법이다. <br/>
   여기서 Deep으로 쓰인 이유는 입력과 출력이 한줄로 연결된것이 아닌, 여러층(multiple layers)으로 구성되어있기 때문이다. 자율주행, 음성인식등 많은 부분에 활용되고있다. 


딥러닝은 자율/지도/강화 학습과 완벽히 분리되는 개념은 아니다. <br/>학습을 하는 방법에 있어서 여러층(multiple layers)를 구성하여 심도깊은(deep) 학습을 하는것을 지칭하고, 그 방식에 따라 자율학습(unsupervised learning)또는 지도학습(supervised learning)또는 강화학습(reinforcement learning)이 될 수 있다.     
자율,지도,강화 학습은 특징에 따라 명확히 구분되는데,     
자율학습은 주어진 데이터를 요약(summary)하여 설명해 주는 (descriptive)형식 이고, 
지도학습은 주어진 데이터로부터 학습하여 새로운 데이터를 예측(predictive)하는 기법이고, 
강화학습은 시행착오를 통해 학습된 방법으로 최적의 의사결정을 지시(prescriptive)하는 방법이라고 할수있다.      





[기본 용어 및 정리](https://blog.naver.com/droneaje/222002679692)