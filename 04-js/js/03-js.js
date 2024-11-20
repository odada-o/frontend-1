const string1 = "hello";

const string2 = "javascript";

const string3 = `World ${(string1, string2)}`;

console.log(string3);

const number1 = 123;

console.log();

//3. boolean 참 거짓
const boolean1 = true;
const boolean2 = false;

if (boolean1) {
  console.log("참");
}

//4. array(배열)
const array1 = [1, 2, 3];
console.log(array1);
console.log(array1[0]);
console.log(array1[2]);

const user = {
  name: "가을",
  age: 2,
};

const userA = {
  name: "겨울",
  age: 2,
};

const name = userA.name; /* 온점표기법 */
const age = userA["age"]; /* 대괄호 표기법 */
console.log(name);

console.log(age);
console.log(`${name}이는 ${age}살 입니다.`);

const userB = {
  age: 100,
  name: "odada",
  parent: userA,
};
console.log(userB);
console.log(userB.parent.name);
console.log(userB["parent"]["name"]); /* 대괄호표기법 */

const users = [userA, userB];

console.log(users);
console.log(users[0]);
console.log(users[0].name); /* 온점표기법 */
console.log(users[0]["name"]); /* 대괄호표기법 */

//함수 function ()

function add(a, b) {
  console.log(a + b);
  return a + b;
}
let result = add(1, 2);
console.log(result);

function add2(a, b) {
  console.log("add2");
}

add2();

/* 화살표 함수 es6 버젼 */
const add3 = (a, b) => {
  a + b;
};
const result3 = add3(8, 2);
console.log(result3);

console.log(isNaN(1 + "2"));
