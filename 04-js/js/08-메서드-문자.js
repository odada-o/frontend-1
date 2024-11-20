const str = " hello world ";
console.log(str);
console.log(str.length); /* 문자의 길이를 반환 */
console.log(str.trim()); /* 문자열 공백 제거 */

console.log(str.includes("world")); //includes('확인 원하는 문자')가 있는지 여부 확인 해주는 메서드
console.log(str.includes("galaxy"));
console.log(str.indexOf("fall"));
console.log(str.indexOf("world")); /* 변수 안에 내용이 몇번째 에 있는지 index 확인 */

const str2 = "12345";
console.log(str2.padStart(10, "!")); /* 자리수 , 맨앞부터 자리수 채우기 위한 내용 (자리수가 부족하면 2번째 인수로 채워진다) */
console.log(str2.padEnd(10, "?")); /* 자리수 , 맨뒤부터 자리수 채우기 위한 내용 (자리수가 부족하면 2번째 인수로 채워진다) */

/* 문자열에서 특정 문자열을 찾아서 다른 문자열로 변경한다 */
const str3 = " hello winter winter ";
console.log(str3.replace("winter", "summer")); /* replace(변경했으면 하는 내용, 변경할 내용) */

console.log(str3.replace(/winter/g, "summer")); /* winter를 다 두번째 인수로 변경 (전역으로 변경) */

console.log(str3); /* 기존 원본은 수정되지 않는다 메모리에만 저장 된다 */

const str4 = " hello world";

console.log(str4.slice(0, 6)); /* 첫번째 인수 : 시작점  두번째 인수: 마지막
첫번째 인수에서 시작해서 두번째 인수까지 짤라서 추출*/
console.log(str4.slice(7)); /* 인수 한개면 인덱스번째부터 추출 */
console.log(str4.slice(-5)); /* -는 1부터 시작 뒤에서 부터 */

console.log(str.slice(0, -6));
console.log(str4);

const str5 = "spring,summer,fall,winter";
console.log(str5.split(",")); /* 통 문자열일때 () 괄호 안에 넣으면 그 내용기준으로 쪼개서 배열로 만들어진다 */

console.log(str5.toLowerCase()); /* 소문자로 변환 */
console.log(str5.toUpperCase()); /* 모든 글자 대문자로 변환 */

console.log(str4.trim()); /* 양쪽 공백 제거 */
const price = 1000;
console.log(price.toLocaleString());

//숫자메서드
const num = 3.1415926535;
num.toFixed(3);

const price2 = 10000000000000;
console.log(price2.toLocaleString() + "원");
console.log(Number.isInteger(5)); //괄호안에 넣은게 정수인지 여부 true,false

console.log(Math.abs(-1)); //절대값이 반환된다
console.log(Math.random() * 100);

const num1 = parseInt(Math.random() * 45);
const IH = document.querySelector(".inner-html");
IH.innerHTML = "<div><p>innerHTML이 잘 작동합니다!</p></div>";
const IT = document.querySelector(".innertext");

IT.innerText = "New Text Content";

const element = document.querySelector(".example");
element.innerHTML = `<div>${num1}</div>`;
//innerText는 DOM 요소의 텍스트 콘텐츠를 가져오거나 설정하는 데 사용되는 속성입니다. HTML 태그 안의 텍스트를 가져오거나, 텍스트만을 설정하고, 그 텍스트가 그대로 렌더링되도록 합니다. innerText는 HTML 태그를 인식하지 않으며, 텍스트 안의 태그들은 텍스트로 처리됩니다.

//innerHTML은 HTML 요소의 HTML 콘텐츠를 가져오거나 설정하는 속성입니다. innerHTML을 사용하면 HTML 태그를 포함한 전체 콘텐츠를 읽거나 변경할 수 있습니다. 이 속성은 텍스트뿐만 아니라 HTML 구조도 다룰 수 있기 때문에 매우 유용하게 사용됩니다.

const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth() + 1); //달은 +1
console.log(now.getDate());
const day = now.getDay();

switch (day) {
  case 0:
    console.log("일요일");
    break;
  case 1:
    console.log("월요일");
    break;
}
console.log(now.getMilliseconds());
console.log(new Date(2024, 11, 1));
console.log(now.getTime());
console.log(now.getMinutes());

const atime = now.getTime();

const today = new Date();
const dday = new Date(2025, 10, 30); //월은 -1이다

console.log(today.getTime());
console.log(dday.getTime());
const result = dday.getTime() - today.getTime();
console.log(result);

var result2 = Math.ceil(result / (1000 * 60 * 60 * 24)); // 밀리초를 일수로 변환
console.log(result2); // 일수 출력

//1초 1000 1분 60000 1시간 60*60000 1일 24 * 60 * 60000

//at(-1) 뒤에서부터 첫번째
//.concat() 배열 합치기

//getTime()은 현재 시간을 1970년 1월 1일부터 경과한 밀리초로 반환하는 메서드입니다.

const user = [
  {
    name: "홍길동",
    age: 32,
  },
  {
    name: "둘리",
    age: 1,
  },
  {
    name: "마이콜",
    age: 28,
  },
];
//user.filter(함수)
const filteredUsers = user
  .filter((item) => {
    return item.age >= 7;
  })
  .map((item) => item.name);

console.log(filteredUsers);

/* filter() 메서드는 JavaScript 배열에서 조건을 만족하는 요소들만 추출하여 새로운 배열을 반환하는 메서드입니다. 원본 배열은 변경되지 않습니다. */

//map()은 배열의 요소에서 특정 속성만을 추출하는 데 사용됩니다.
const honggildong = user.find((item) => {
  return item.name === "홍길동";
});

console.log(honggildong.name);

// find() 메서드 JavaScript 배열 메서드로, 주어진 조건을 만족하는 첫 번째 요소를 반환합니다. 조건을 만족하는 요소가 없으면 undefined를 반환 .find((item 배열을 item으로 받고)=>{ return 조건 적으면 됨})

const fruit = ["apple", "banna", "melon"];
fruit.forEach((item) => {
  console.log(`${item} 신선한 과일 있어요`);
});

const animals = ["Cat", "Dog", "Fish"];
console.log(animals[1].toLowerCase());
console.log(animals.includes()); //배열.includes("찾아야할 배열", 시작인덱스));
console.log(animals.includes("너구리", 3));

console.log(fruit.join(","));

const user2 = [
  {
    name: "홍길동",
    age: 30,
  },
  {
    name: "고길동",
    age: 12,
  },
  {
    name: "둘리",
    age: 6,
  },
];

user2.map((item) => console.log(item));

const newUsers = user2.map((item) => ({ ...item, email: null }));
//전개연산자 매개변수 받아온거에  ... 앞에

console.log(newUsers);

const arr = ["2", "3", "4"];
/* console.log(arr.pop()); */ //마지막만 추출
console.log(arr.push(5));

const user4 = [
  {
    name: "홍길동",
    age: 30,
  },
  {
    name: "고길동",
    age: 12,
  },
  {
    name: "둘리",
    age: 6,
  },
];

const totalAge = user4.reduce(function (total, current) {
  return total + current.age;
}, 0);
//user4.reduce(()=>{},초기값)
console.log(totalAge);

const averageAge = user4.reduce((total, user) => total + user.age, 0) / user4.length;
console.log(averageAge); // 16

//array.reduce((accumulator, currentValue, currentIndex, array) => {
// 반환값이 accumulator로 전달됨
//}, initialValue);

//accumulator: 누적된 값.
/* currentValue: 현재 처리 중인 배열 요소.
initialValue: 누산값의 초기값. 생략하면 배열의 첫 번째 요소가 초기값이 됨. */
const arr12 = ["1", "2", "3", "4"];
const slice = arr12.slice("0", "3"); //마지막 인수는 인덱스 제외하고 추출
console.log(slice);
