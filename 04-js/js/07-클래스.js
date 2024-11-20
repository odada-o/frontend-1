//클래스 함수
//const animals = ["강아지", "고양이", "사자", "앵무새", "코끼리", "원숭이", "하이에나", "너구리", "코알라", "캥거루", "기린", "말", "물고기", "돌고래", "곰"];
/* console.log(animals.length);
console.log(animals);
console.log(animals[0]);
console.log(animals.includes("강아지")); */ /* 배열안의 내용이 여부에 따라 참 거짓 반환 */

//생성자함수
//생성자 함수는 객체를 반환
//자바스크립트에서는 배열도 객체이다

//생성자 함수로 배열을 만든다
const anmimals = new Array("강아지", "고양이", "사자", "앵무새", "코끼리", "원숭이", "하이에나", "너구리", "코알라", "캥거루", "기린", "말", "물고기", "돌고래", "곰");
/* 일반 함수랑 구별하기 위해서 생성자 함수는 처음 대문자  써야 한다 */
console.log(anmimals.length);
console.log(anmimals);
console.log(anmimals[0]);
console.log(anmimals.includes("강아지"));

//우리 커피숍에서 파는 메뉴 출력 자동화

//생성자함수 만드는 방법
//new Array(1,2,3)
const startbucks = new Array("아메리카노", "카페라떼", "에이드");

//메서드 만드는 방법
//생성자함수.prototype.메소드명 = fucntion(){}
Array.prototype.menu = function () {
  console.log(this); /* this는 생성자함수에서 사용하는 배열을 가리킨다 */
};
startbucks.menu();

const mega = ["메가리카노", "메가라떼", "메가치노"];
mega.menu();

//메소드 재활용
const americano = {
  name: "아메리카노",
  price: "3500",
  orderMenu: function () {
    console.log(`${this.name}는 ${this.price}입니다. `);
  },
};

/* const americano = {
  name: "아메리카노",
  price: "3500",
  orderMenu: function () {
    console.log(`${this.name}는 ${this.price}입니다. `); 함수가 들어간게 메서드
  },
};
객체에 있는 value값에 함수도 들어갈 수 잇다  */

americano.orderMenu();

const latte = {
  name: "라떼",
  price: "4000",
};

americano.orderMenu.call(latte);

//생성자 함수를 이요한 메뉴판 만들기

function OrderMenu(name, price) {
  this.name = name;
  this.price = price;
}

OrderMenu.prototype.order = function () {
  console.log(`${this.name}는 ${this.price}입니다.`);
};

const ame2 = new OrderMenu("아메리카노", 3500);

console.log(ame2);

//클래스 문법

/* class OrderCoffee {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  printMenu() {
    console.log(`${this.name}는 ${this.price}원입니다.`);
  }

  making() {
    console.log(`${this.name}를 만들고 있습니다.`);
  }
}
const ame3 = new OrderCoffee("아메리카노", "3500");
ame3.printMenu();
const latte2 = new OrderCoffee("라떼", "4,000"); */
//class 클래스 이름 대문자로 시작 {
// 생성자 함수 : 문법이다 constructor (매개변수){매개변수 값 할당}
//메서드(){ 실행할 구문}
//}

//생성자 함수 호출 해야함
// 클래스 함수를 호출

/* latte2.printMenu();
latte2.making(); */

//생성자 함수 생성
//객체를 만들기 위한 템플릿
function Birds(name, address, age) {
  this.name = name;
  this.address = address;
  this.age = age;
}

//생성자 함수로 객체 생성
const bird1 = new Birds("노랑", "중랑구", "1세");
const bird2 = new Birds("초콩", "중랑구", "1세");

Birds.prototype.info = function () {
  console.log(`${this.name}`);
};
bird1.info();

//생성자 함수 생성

//생성자 함수 : 객체를 만들기 위한 템플릿

function Car(name, brand) {
  this.name = name;
  this.brand = brand;
}

//객체를 생성한다
const newCar = new Car("sonata", "Hyundai");

//메서드를 만든다 메서드는 객체의 속성에 접근하고 객체와 관련된 동작을 수행할 수 있는 데 사용할 내용

Car.prototype.made = function () {
  console.log(`새로운 ${this.name}를 ${this.brand} 출시 했습니다!`);
};
newCar.made();

class OrderCoffee {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  printOrder() {
    console.log(`${this.name} ,가격 ${this.price} 주문 들어왔습니다.`);
  }
}

const num1 = new OrderCoffee("피지오", "6500원");
num1.printOrder();
