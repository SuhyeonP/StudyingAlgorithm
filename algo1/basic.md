## BFS vs DFS

### BFS:너비우선탐색(breadth first search)

정점들과 같은 레벨에 있는 노드들(형제 노드들)을 먼저 탐색하는 방식이다.

* 두개의 큐를 사용한다.
* root와 가까운 node들부터 찾기 때문에 최단거리를 탐색할 때 유용하다.
* queue에 각 노드의 정보를 기록해야 하기 때문에 메모리를 많이 잡아 먹는다.
* 찾고자 하는 target node가 root node와 가까이 있다고 예상될 경우 BFS를 사용한다.
* 지도 어플에서 특정 위치까지의 최단거리 안내, 혹은 소셜미디어에서 친구 추천 등에 이용된다.

### DFS:깊이 우선 탐색(Depth first search)

정점의 자식들을 먼저 탐색하는 방식이다.

* 한 개의 큐와 한 개의 스택을 사용한다.
* BFS보다 속도가 느릴 수 있다.
* 미로 게임 등에서 경로가 존재하는지를 판별할 때 유용하다.

<img src="https://www.fun-coding.org/00_Images/BFSDFS.png"/>


###BFS코드:
<pre><code>const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"]
};

const bfs = (graph, startNode) => {
    let visited = []; // 탐색을 마친 노드들
    let needVisit = []; // 탐색해야할 노드들
    
    needVisit.push(startNode); // 노드 탐색 시작
    
    while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
        const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
        if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
            visited.push(node);
            needVisit = [...needVisit, ...graph[node]];
        }
    }
    return visited;
};

console.log(bfs(graph, "A"));
</code></pre>

###DFS코드:

<pre><code>const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

// (graph, 시작 정점)
const dfs = (graph, startNode) => {
  let needVisitStack = []; // 탐색을 해야 할 노드들
  let visitedQueue = []; // 탐색을 마친 노드들

  needVisitStack.push(startNode);

  // 탐색을 해야 할 노드가 남아 있다면
  while (needVisitStack.length !== 0) {
    const node = needVisitStack.pop();
    if (!visitedQueue.includes(node)) {
      visitedQueue.push(node);
      needVisitStack = [...needVisitStack, ...graph[node]];
    }
  }

  return visitedQueue;
};

console.log(dfs(graph, "A"));
</code></pre>

###시간복잡도:      
DFS와 BFS는 모두 노드 수+간선 수만큼의 복잡도를 지닌다. 즉, O(n)



###해쉬맵 vs 맵   
해시(Hash) 란 데이터를 다루는 기법 중 하나이며,해시 함수(Hash Function) 는 데이터를 효율적으로 관리하기 위해서 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수이다.
매핑전 원래 데이터의 값을 키(key), 매핑 후 데이터의 값을 해시값(Hash Value) 또는 해시코드 라고 하며, 키(key)와 값(value)으로 매핑되는 과정 자체를 해싱(Hashing) 이라고 한다.     

해시 테이블(Hash Table)?     
해시 테이블(Hash Table) 은 키(key)와 값(value)이 하나의 쌍을 이루는 데이터 구조이다.      
즉, 키(key)와 배열의 인덱스(index)를 이용하여 키를 저장하는 자료구조이다. 해시 테이블은 해시 맵, 맵, 딕셔너리, 연관 배열 이라는 이름으로 알려져있다.    
해시 테이블은 키를 해시 함수(hash function) 로 계산하여 그 값을 배열의 인덱스로 사용한다. 이때, 해시 함수에 의해 반환된 데이터의 고유 숫자 값을 해시값 또는 해시코드 라고 한다. 즉, key 값을 해시 함수를 통해서 배열의 인덱스로 바꿔주고, 그 자리에 데이터를 저장한다.     

* 원래데이터의 값(key) → Hash Function → Hash Function의 결과 = Hash Code → Hash Code를 배열의 Index로 사용 → 해당하는 Index에 data넣기         

해시테이블의 장점:     
* 적은 리소스로 많은 데이터를 효과적으로 관리할수있다.
* 배열의 인덱스를 사용해 검색, 삽입, 삭제가 빠르다 (평균 시간복잡도 :O(n))     
    + 인덱스를 사용해 배열의 검색이 빠르다는것은 당연한 소리이다. 하지만 왜 삽입과 삭제는 O(1)일까?     
    + 여기서 인덱스는 데이터만의 고유한 위치이기때문에 만약 삽입이나 삭제를 한다고 해도, 다른 데이터로 채울 필요가 없다.     
    즉 , 삽입이나 삭제할때 데이터를 이동할 필요가 없기 때문이다.      
* 키와 해쉬값이 연관성이 없어 보안에도 많이 이용된다.     
* 데이터 캐싱(Data Caching)에 많이 사용된다.    
    + get(key),put(key)에 캐시 로직을 추가하면 자주 hit하는 데이터를 바로 찾을수있다.    
* 중복을 제거하는데 유용하다.     

단점:     
* 충돌     
* 공간복잡도가 커진다.     
* 순서가 있는 배열에는 어울리지 않는다.     
* 해시 함수 의존도가 높아진다.      

