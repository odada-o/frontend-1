// 변수

// 변수 선언, 할당
const a = 1;
// 재할당
// a = 2;
console.log(a);

// 재할당 가능한 변수 : let
let b = 1;
b = 2;
console.log(b);

// 데이터 타입
// number
const num = 1;
console.log(num);

// string
const str = "w-3 h-3 bg-gray-100";
console.log(str);

// boolean
const bool = true;
console.log(bool); // true
console.log(!bool); // false

// object
{
  /* <Name name="kim" age="20" />; */
}
const props = { name: "kim", age: 20 };
console.log(props);
console.log(props.name); // kim
console.log(props.age); // 20
// kim 씨는 20살입니다.
console.log(`${props.name} 씨는 ${props.age}살입니다.`);

// array
const arr = [
  { name: "겨울", age: 2 },
  { name: "가을", age: 3 },
  { name: "여름", age: 4 },
];
console.log(arr);
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[1].name); // 가을
console.log(arr[2].name); // 여름
console.log(`${arr[0].age}살`); // 2살

// function
// 함수 선언
const func = function () {
  console.log("함수 호출");
};
func(); // 함수 호출

// 컴포넌트
const func2 = (props) => {
  console.log(props);
};
// 컴포넌트 호출
func2("w-3");

// 연산자
// 비교 연산자
// 일치 연산자 (===)
console.log(1 === 1); // true
// 불일치 연산자 (!==)
console.log(1 !== 1); // false

// 논리 연산자
// 그리고 (&&)
// c가 참일 경우 d를 출력
const c = true;
const d = "<div>출력</div>";

console.log(c && d); // <div>출력</div>

// 또는 (||)
// e가 참일 경우 e를 출력
const e = "";
const f = "주소가 없습니다.";

console.log(e || f); // 서울시...

// 삼항 연산자
// 조건 ? 참 : 거짓
console.log(false ? "btn-primary" : "btn-gray");
