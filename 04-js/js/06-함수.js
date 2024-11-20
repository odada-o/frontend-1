//함수
//1. 함수 선언하기
//함수 선언식
hello1();
function hello1() {
  console.log("hello1");
}
/* 함수선언식만 호이스팅이 가능 */
//함수 호출

//함수 표현식
const hello3 = function () {
  console.log("hello2");
};

//return
//함수 호출한 곳으로 값을 반환 및 종료

const add = function (a, b) {
  return a + b;
};

let result = add(3, 4);
console.log(result);

function h2() {
  return "안녕";
}
function h3() {
  return;
}

console.log(h2());
console.log(h3());

//매겨변수
function sum(x, y) {
  return x + y;
}
console.log(sum(1, 2));

//함수의 구조 분해
const user = {
  name: "윈터",
  age: 24,
};

function getName(user) {
  const { name } = user;
  return name;
}

console.log(getName(user)); /* getName(user)가 호출되면 user 객체가 props 매개변수로 전달됩니다. */

/* 객체를 함수 호출시 인수로 입력해서 함수 선언했을때 매개변수를 만들어서
구조분해 할당한다 프로퍼티를 const  { 객체프로퍼티 } = 매개변수 (객체를 매개변수에 전달햇음)
함수에서 객체 프로퍼티 추출했고 그다음 return으로 반환해야함 함수 호출시 값을 반환

*/

//배열 분해
const animals = ["dog", "", "bird"];
function getSecound([, b = "없음"]) {
  //const arr = ["dog", "cat", "bird"];
  /*  const [, b] = arr; */ /* 배열 구조분해  배열을 변수로 만들어 준다*/

  console.log(b);
}
getSecound(animals);

function sum(...rest) {
  console.log(rest);
}

sum(1, 2, 3, 4, 6);

const box = {
  width: "30px",
  height: "100px",
  background: "gray",
};

function getBox(props) {
  const { width, height, background: bg } = props;
  return bg;
}
console.log(getBox(box));

const kimchi = ["마늘", "배추", "고춧가루"];
function made(add) {
  const [a, b, c] = add;
  return { b, c };
}
console.log(made(kimchi));

//나머지 매개변수
function print(...num) {
  console.log(num);
}
print(1, 2, 3, 4, 5, 6);
/* 
function hello() {}
hello();

const hello3 = function () {};
hello3();
 */
const hello4 = () => {
  console.log("hello");
};
hello4();

//화살표함수의 축약
/* const a = () => {}; */
const b = (x) => {
  console.log("dd");
};

const d = (x, y) => {
  return x + y;
};

b(); // "dd" 출력
console.log(d(1, 2)); // 3 출력

const e = (x, y) => {
  console.log("hello");
  return x + y;
};

const o = () => ({ name: "윈터" });
const g = () => {
  return [1, 2, 3];
};
const n = () => {};
const q = () => {};
const r = () => {};
const s = () => {};

const hello = setTimeout(() => {
  console.log("안녕하세요");
}, 3000);
//3초 후에 콘솔 창
document.querySelector(".btn1").addEventListener("click", () => {
  clearTimeout(hello); //setTimout out 취소 시키기
  console.log("정지되었습니다.");
});

const hello2 = setInterval(() => {
  console.log("안녕");
}, 3000);

document.querySelector(".btn2").addEventListener("click", () => {
  clearInterval(hello2);
  console.log("setInterval 함수는 종료되었습니다.");
  document.querySelector(".btn2").innerHTML = "<buttom>종료</button>";
});

//콜백함수
//원하는 시점에 호출되도록 설정할 수 있는 함수

const a = (callback) => {
  callback();
  console.log("a");
};
const b2 = () => {
  console.log("b");
};
a(b);

/* const sum = (a, b) => {
  () => {
    setTimeout(() => {
      return a + b;
    }, 1000);
  };
};
console.log(sum(1, 2)); */

//일반 함수 this
//일반 함수는 호출 위치에서 this가 결정된다
//화살표 함수는 자신이 선언된 함수 범위에서 this가 결정된다

const obj = {
  firstName: "winter",
  lastName: "kim",
  getFullName() {
    return `${obj.lastName} ${obj.firstName}`;
  }, //우리집 사람을 이름을 쓰기 때문에 this라고 슨다 :function을 줄일수 있다
};
console.log(obj.getFullName());
//객체 안에 함수를 만들면 메서드가 된다

//화살표함수
const obj2 = {
  firstName: "winter",
  lastName: "Kim",
  getFullName: () => {
    // 일반 함수를 화살표 함수로 변경하면
    return `${this.firstName} ${this.lastName}`; //
    //this는 자신이 선언된 함수에서 결정되기 때문에
  },
};

console.log(obj2.getFullName());

function userss() {
  this.firstName = "윈터";
  this.lastName = "이";

  return {
    getFullName: () => {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

const user2 = userss();
console.log(user2.getFullName());

setTimeout(() => {
  console.log("느린 미니언즈 라떼");
}, 1000);

console.log("빠른 아메리카노");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("데이터 요청 중...");
