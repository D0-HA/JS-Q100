// 입력값에 따른 별 트리 만들기


let num = prompt("몇 단 트리를 만들까요?");
let tree = "";

for(let i = 1; i <= num; i++) {
    tree += " ".repeat(num - i) + "*".repeat(2 * i - 1) + "\n";
}

console.log(tree);