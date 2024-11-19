// 함수
// 1. 함수 선언하기
// 함수 선언식
hello1(); // 함수 호출

function hello1() {
  console.log("hello1");
}
// 함수 표현식
const hello2 = function () {
  console.log("hello2");
};

hello2(); // 함수 호출

// return
// 함수를 호출한 곳으로 값을 반환 및 종료
function h1() {
  return "hello";
  console.log("world"); // 실행되지 않음
}
console.log(h1());

function h2() {
  return;
}
console.log(h2()); // undefined

function h3() {
  console.log("hello");
  return 1;
  return 2; // 실행되지 않음
}
console.log(h3());

// 매개변수
function sum(x = 0, y = 0) {
  return x + y;
}
console.log(sum(1, 2));
console.log(sum(5));

// 함수의 구조 분해
// 객체 분해
const user = {
  name: "윈터",
  age: 24,
};
function getName({ name, age, email = "이메일이 없습니다." }) {
  // const props = {
  //   name: "윈터",
  //   age: 24,
  // }

  // const { name, age } = props;

  console.log(name);
  // 윈터는 24살 입니다.
  console.log(`${name}는 ${age}살 입니다.`);
  console.log(email);
}
getName(user);

// 배열 분해
const animals = ["dog", , "fish"];
function getSecond([, b = "없음"]) {
  // const arr = ["dog", "cat", "fish"];
  // const [, b] = arr;

  console.log(b);
}
getSecond(animals);

// 나머지 매개변수
function print(...num) {
  console.log(num);
}
print(1, 2, 3, 4, 5);

// 화살표 함수
// function hello() {}
// hello();

// const hello3 = function () {};
// hello3();

const hello4 = () => {
  console.log("hello4");
};
hello4();

// 화살표 함수의 축약
const a = () => {};
const b = (x) => {};
const c = (x, y) => {};
const d = (x, y) => x + y;
const e = (x, y) => {
  console.log("hello");
  return x + y;
};
const f = () => ({ name: "윈터" });
const g = () => [1, 2, 3];

// 3초 후에 콘솔창
// const timeOut = setTimeout(() => {
//   console.log('3초 뒤에 실행됩니다.')
// }, 3000)

// document.querySelector(".btn1").addEventListener("click", () => {
//   console.log('버튼이 클릭되었습니다.')
//   clearTimeout(timeOut);
// })


// // setInterval
// const timer = setInterval(() => {
//   console.log('3초마다 실행됩니다.')
// }, 3000)

// // clearInterval
// document.querySelector(".btn2").addEventListener("click", function() {
//   console.log('취소취소취소');
//   clearInterval(timer);
// })

// 콜백 함수
// 원하는 시점에 호출되도록 설정할 수 있는 함수

const aa = (callback) => {
  // b함수를 실행
  callback();
  console.log('aa')
}
const bb = () => {console.log('b')}

aa(bb);


// this

// 일반 함수 this
// 일반 함수: 호출 위치에서 this 가 결정된다.
// 화살표 함수: 자신이 선언된 함수 범위에서 this가 결정된다.

function userss () {
  this.firstName = '윈터';
  this.lastName = '이';

  return {
    getFullName: () => {
      return `${this.firstName} ${this.lastName}`;
    }
  }
}

const user2 = userss();
console.log(user2.getFullName()); // 윈터 이

const obj2 = {
  firstName: '윈터',
  lastName: '이',
  // 메서드
  // fullName() {
  //   return `${this.lastName} ${this.firstName}`;
  // }
  fullName: () => {
    return `${this.lastName} ${this.firstName}`;
  }
}

console.log(obj2.fullName()); // 이윈터