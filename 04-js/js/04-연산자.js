// 1. 산술 연산자
console.log(10 / 2);

/* 나누어지는 수 (피제수 )  /나누는 수 (제수)*/

//나머지 연산자

console.log(6 % 3); // 0

function isEVen(num) {
  console.log(num % 2 === 0);
}

isEVen(4);

//
a = 2;
a += 1;
console.log(a);

//3. 증감연산자
let b = 1;
/* b++; */
console.log(b++); /* 선출력 후연산 1 */
console.log(++b); /* 선연산 후출력 */

//4.부정연산자
console.log(!true);
console.log(!false);
console.log(!0);
console.log(!!0);

//5.비교연산자

const c = 1; //숫자
const d = "1"; //문자
console.log(c == d); /* 느슨한 비교,,  값만 비교*/
console.log(c === d); /* 엄격한 비교,, 값이랑 자료형 동일해야 함 */

console.log(c !== d);

const e = 2;

c > e;
console.log(c > e);
console.log(c <= e);
console.log(c != d); //1과 1은 같다 그래서 부정을 물어보니까 false
console.log(c !== d); //자료형 까지 확인 하기 때문에 1과 "1"은 달라 true

console.log(true && true);

//or연산자 ( || )
//둘 중 하나만 참이면 참
console.log(true || false);
console.log("" || "이메일 없음");

//nullish 병합 연산자 (??)
//null 또는 undefined 일때만 오른쪽 값 반환

const h = 0;
console.log(h ?? 5);
console.log(null ?? 5);
console.log(undefined ?? 5);
console.log(undefined ?? null);
console.log(undefined ?? NaN);

function isCat(a) {
  console.log(a === "고양이" ? "고양이" : "고양이 아님");
}

isCat("고양이");
isCat("강아지");

//8.전개 연산자

//객체의 전개

const dog = {
  name: "멍멍이",
};
const dogInfo = {
  ...dog,
  age: 2,
};
console.log(dogInfo);

//배열 복사 기존에 있는 배열에 두번째 배열 추가
const arr1 = [1, 2, 10];
const arr2 = [4, 5, 6];

const r = arr1.concat(arr2);
console.log(r);
console.log(...arr1);

//함수 인자 전달
function sum(a, b) {
  return console.log(a + b);
}
const numbers = [2, 3];

sum(...numbers);
