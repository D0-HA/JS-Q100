// 다음 코드의 출력값은?


var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i;
}

console.log(a+b); // 16


// i는 1부터 시작해서 5보다 작을 때까지 반복하고,
// 한 번 순환할 때마다 i값이 2씩 증가한다.
// a += i => a = a + i