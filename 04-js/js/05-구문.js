// 구조 분해 할당 (개별 포장)
// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식

const arr = [1, 2, 3];
// console.log(arr[0], arr[1], arr[2]); // 1 2 3
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [a, b, c] = arr;

console.log(a, b, c); // 1 2 3

// 재할당
let x = 0;
let y = 0;
const arr1 = [1, 2];

[x, y] = arr1;

console.log(x, y); // 1 2

// 나머지 할당
const arr2 = [1, 2, 3, 4, 5];
const [d, ...rest] = arr2;

console.log(d, rest); // 1 [2, 3, 4, 5]

// 객체 구조 분해
const mini = {
  w: 100,
  // h: 200,
  bg: "red",
};
const { bg, w: width, h = 100 } = mini;

console.log(width, h, bg); // 100 200 red

// 선택적 체이닝
const user = null;
console.log(user?.name);

const user1 = {
  name: "Mike",
  age: 30,
};
const user2 = {
  name: "mija",
};
// console.log(user2?.age);
function printAge(user) {
  console.log(user?.age || "나이 정보 없음");
}

printAge(user1); // 30
printAge(user2); // 나이 정보 없음

// 조건문
// if문
// if (조건) {
//   // 조건이 참일 때 실행
// } else if (조건2) {
//   // 조건2가 참일 때 실행
// } else {
//   // 조건이 거짓일 때 실행
// }

function isPositive(num) {
  console.log(num);
  if (num > 0) {
    console.log("양수입니다.");
  } else if (num < 0) {
    console.log("음수입니다.");
  } else {
    console.log("0입니다.");
  }
}

isPositive(5); // 5
isPositive(-2); // -2
isPositive(0); // -2

// switch문
// switch (조건) {
//   case 값1:
//     // 값1일 때 실행
//     break;
//   case 값2:
//     return "값2일실행";
//   default:
//     // 값1, 값2가 아닐 때 실행
//     break;
// }

function header(type) {
  switch (type) {
    case "type1":
      return "타입1 header 출력";
    case "type2":
      return "타입2 header 출력";
    default:
      return "타입3 header 출력";
  }
}

console.log(header("type1")); // 타입1 header 출력
console.log(header("type2")); // 타입2 header 출력

// if문으로 변경
function header2(type) {
  if (type === "type1") return "타입1 ddddd 출력";
  if (type === "type2") return "타입2 ddddd 출력";
  return "타입3 ddddd 출력";
}
console.log(header2("type1"), header2("type2"), header2("type3"));

// 반복문
// for문
// for (초기값; 조건; 증감) {실행문}

// 콘솔창에 0부터 9까지 출력
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 9부터 0까지 출력
for (let i = 9; i > -1; i -= 2) {
  if (i < 4) {
    break;
  }
  console.log(i);
}

// continue문
// 9부터 1까지 출력
for (let i = 9; i > 0; i--) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`i : ${i}`);
}

// for of문 (배열)
const animals = ["dog", "cat", "fish"];

for (let animal of animals) {
  console.log(`내가 좋아하는 동물은? ${animal}`);
}

// for in문 (객체)
const user3 = {
  name: "겨울",
  age: 2,
  city: "seoul",
};

for (let key in user3) {
  console.log(key);
  console.log(user3[key]);
}

// while문
// while (조건) {실행문}
let i = 1; // 전역 변수
let sum = 0;

while (i <= 10) {
  sum += i; // sum = sum + i;
  i++;
}

console.log(`sum : ${sum}, i : ${i}`);

// i=1: sum = 0+1 = 1
// i=2: sum = 1+2 = 3
// i=3: sum = 3+3 = 6
// i=4: sum = 6+4 = 10
// i=5: sum = 10+5 = 15
// i=6: sum = 15+6 = 21
// i=7: sum = 21+7 = 28
// i=8: sum = 28+8 = 36
// i=9: sum = 36+9 = 45
// i=10: sum = 45+10 = 55

// do while문

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);
