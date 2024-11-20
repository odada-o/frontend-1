/* 생성자함수 만들기 : 객체를 만들기 위한 탬플릿 */
/* function OrderCoffee(name, price) {
  this.name = name;
  this.price = price;
} */

/* 생성자함수 객체 생성 */
/* const menu1 = new OrderCoffee("아메리카노", "3500원"); */

/* 메서드 : 객체 속성에 접근 하거나 객체와 관련된 동작을 수행하기 위해 사용한다 */
/* OrderCoffee.prototype.made = function () {
  console.log(`${this.name}은 ${this.price}입니다.`);
};
menu1.made();
 */

class OrderCoffee {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  order() {
    console.log(`${this.name}은 ${this.price}입니다.`);
  }
  makeing() {
    console.log(`${this.name}를 만들고 있습니다.`);
  }
}

const latte = new OrderCoffee("라떼", "8000원");
latte.order();
latte.makeing();

class Special extends OrderCoffee {
  constructor(name, price, charcacter) {
    super(name, price);
    this.charcacter = charcacter;
  }

  order() {
    console.log(`${this.charcacter} ${this.name}은  ${this.price + 1500}원 입니다.`);
  }
  limit() {
    `${this.charcacter} ${this.name}은 한정판매입니다`;
  }
}
const americanoS = new Special("아인슈페너", 6500, "미니언즈");
const ame = new Special("아메리카노", 3500, "미니언즈");
ame.order();
