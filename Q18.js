// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
// 단, 소숫점 자리는 모두 버립니다.

const scores = prompt("세 과목의 점수를 입력해주세요.", "70 80 90").split(" ");

let sum = 0;

for (let i = 0; i < 3; i++) {
  sum += parseInt(scores[i]);
}

console.log(Math.floor(sum / 3));

// 입출력

// 입력 : 20 30 40
// 출력 : 30
