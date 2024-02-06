// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들기

const n = prompt("입력하세요.");

const reverseString = n.split("").reverse().join("");

console.log(reverseString);

// 입출력

// 입력 : 거꾸로
// 출력 : 로꾸거

// split(separator, limit);
// separator: 원본 문자열을 끊어야 할 부분을 나타내는 문자열
// limit: 끊어진 문자열의 최대 개수를 나타내는 정수

// 입력 : 일이삼
// split("") -> ['일','이','삼']

// split(" ") -> ['일이삼']

//reverse();
// 배열의 순서를 반전한다.

// join();
// 배열의 모든 요소를 구분하여 연결한 새 문자열을 만들어 반환한다.
