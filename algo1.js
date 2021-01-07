function countIndex(num){
    let temp=0;
    let answer='';
    for(let i=1;i<=num;i++){
        temp+=i.toString().length;
        if(temp>=num){
            while(temp>num){
                num=parseInt(num/10);
                temp--;
            }
            break;
        }
    }
    return temp;
}

console.log(countIndex(9))
//10이면 1이 왜 아닐까..
// 기본 문자열에 풀이시 O(n)이라서 시간복잡도가 너무 크다..
