// 변수 선언 var a;

var a = 1;

a = 2;

let b = "2";
b = 3;

const c = true;

const d = c; /* c의 값을 복사 */

const listitem = 5;
console.log(a, b, c, d);

const g = 1;
function test() {
  const e = 2;

  console.log(g, e);
}
test();
