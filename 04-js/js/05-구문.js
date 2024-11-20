//구조분해 할당

//배열이나 객체의 속성을 해체하여 값을 변수에 담는 문법

//배열이나 객체의 속성을 해체하여 그 값을 개별 변수에
//담을 수 있게 하는 자바스크립트 표현식

const arr = [1, 2, 3];

/* for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
 */
/* const a = arr[0];
const b = arr[1];
const c = arr[2]; */

//
const [apple, banna, cidea] = arr;
/* 구조분해 할당 문법 [배열안에 변수명 적고] = 배열이름 입력하면 각각에 들어간다 */
console.log(apple);

//재할당
let x = 0;
let y = 0;

const arr1 = [1, 2];
[, y] = arr1; /* 재할당 */
console.log(x, y);

const arr2 = [1, 2, 3, 4, 5];
const [d, ...rest] = arr2; //... 전개연산자 나머지 다 가져오는 것
console.log(d);
console.log(rest);

const obj = {
  width: 1,
  height: 150,
};

const { width: w, height: h } = obj;
console.log(w, h);

//선택적 체이닝 연산자
const user = null;
//console.log(user.name);
//TypeError가 발생한다 왜냐면 null이기 때문에

console.log(user?.name);

//?. (선택적 체이닝)을 사용하면 user 유효한지 확인하고 그렇지 않으면
//undefined 반환한다

const user1 = {
  name: "mike",
  age: 30,
};

const mi = {
  name: "mija",
};

function pringAge(user) {
  return console.log(mi.age > 19 ? "성인" : "미성년자");
}
pringAge(mi);

//조건문
//if문
function inPositive(num) {
  if (typeof num === "number") {
    console.log("숫자입니다.");
  } else {
    console.log("문자입니다.");
  }
}
inPositive(42);

//swtich
/* switch (조건) {
  case 값1:
    //값1일 때 실행
    break;
  case 값2:
}
 */
function Header(type) {
  switch (type) {
    case "type1":
      console.log("타입1 헤더 출력");
      break;
    case "type2":
      console.log("타입2 헤더 출력");
      break;
  }
}
Header("type1");

function getSound(animal) {
  if (animal === "개") {
    return "멍멍";
  }
}

console.log(getSound("개"));

const number = [1, 2, 3, 4, 5];

const num = [6, 7, 8, 9];

const concatenated = number.concat(num);
console.log(concatenated);

function header2(type) {
  if (type === "type1") return "타입1 heaer출력";
  if (type === "type2") return "타입2 heaer출력";
  return "타입3 heaer 출력";
}

console.log(header2("type1"));

console.log(header2("type2"));

console.log(header2("type3")); /* 조건이 없으면  */

//for문
//for (초기값 ; 조건; 증감연산자) {실행문}

//콘솔창에 0부터 9까지 출력
/* for (let i = 9; i > -1; i -= 2) {
  if (i < 4) {
    break;
  }
  console.log(i);
} */

//continue문
for (i = 9; i > 0; i--) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

/* 배열 반복문 */
const animals = ["cat", "dog", "bird"];

/* for(변수 of 배열) */
for (let animal of animals) {
  if (animal === "bird") {
    console.log("내가 키우는 동물은" + animal);
    break;
  }
  console.log(`내가 좋아하는 동물은 ${animal}`);
}

//for in 문 객체 출력
const user3 = {
  name: "겨울",
  age: "2",
  address: "서울시",
};
/* for(변수 in 객체명){
변수를 출력하면 key(프로퍼티가 나온다)

key의 value를 보고 싶으면
객체명[변수명]

} */
for (let key in user3) {
  console.log(key);
  console.log(user3[key]);
}

//while문
//while(조건){실행문}
let i = 1;
let sum = 0;
while (i < 10) {
  sum += i;
  i++;
  break;
}

console.log(sum);
