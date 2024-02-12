// 만약 입력으로 김도하이라는 이름이 주어지면 "안녕하세요. 저는 김도하입니다."라고 출력하게 해주세요.

let myName = +prompt("이름을 입력해주세요.");

if (typeof myName === "string") {
  alert(`안녕하세요. 저는 ${myName}입니다.`);
} else {
  alert("이름을 입력해주세요.");
}

// 입출력

// 입력 : 김도하
// 출력 : 안녕하세요. 저는 김도하입니다.

// const name = prompt('이름을 입력하세요.');

// console.log(`안녕하세요. 저는 ${name}입니다.`);

// Template literals(템플릿 리터럴)
// backtick 문자열(``) 안에서 $와 중괄호로 표현식 사용 가능
