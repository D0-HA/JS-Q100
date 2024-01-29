// 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하기


// 데이터
var arr = [200, 100, 300];
arr.splice(2, 0, 10000);

console.log(arr);

// 출력
[200, 100, 10000, 300]


// splice()
// 배열의 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다.

// splice(start, deleteCount, item)

// start : 배열의 변경을 시작할 인덱스
// deleteCount : 배열에서 제거할 요소의 수
// item : 배열에 추가할 요소