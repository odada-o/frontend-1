export default function hello() {
  console.log("Hello");
}

/* default 쓰는 이유 : 안에 모듈을 두개 이상 만들 수 있기때문에 대표값 만듬 */

export function str() {
  console.log("str");
}

export function str2() {
  console.log("str2");
}

export function background() {
  console.log("background");
}
