// 기본 문자열에 풀이시 O(n)이라서 시간복잡도가 너무 크다..
function bigSol(num){
    let str='';
    for(let i=1;i<=num;i++){
        str=str+i;
    }
    return str[num]
}

function beforeSol(num){
    let n = 10;
    let temp = 0;
    for(let i = 1; i <= n; ++i) {
        temp += i.toString().length;

        if(temp >= n) {
            let m = i;
            while(temp > n) {
                m = parseInt(m / 10);
                --temp;
            }
            console.log(m % 10);
            break;
        }
    }
}

//10이면 1이 왜 아닐까..

//이게 옳바른 풀이
function countIndex(num){
    let digit = 0;
    for(let i = 1; i <= num; ++i) {
        digit += i.toString().length;
        //반복문의 해당 i의 자릿수 길이만큼 더한다
        //9=>9,10=>11
        //자릿수의 합한digit이 주어진 자리수보다 크거나 같아지면

        if(digit >= num) {
            let m = i;//i를 변경하면 안되니까
            while(digit > num) {//digit이 num보다 작아지지않을때까지 반복
                m = parseInt(m / 10);
                --digit;
            }
            console.log(m % 10);
            break;
        }
    }
}
countIndex(10)
