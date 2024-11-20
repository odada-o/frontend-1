// getUser 함수: userId를 매개변수로 받도록 수정
const getUser = (userId) => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`) // 각 ID별 데이터 요청
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP 에러! 상태 코드: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => resolve(data)) // 성공 시 데이터 반환
      .catch((error) => reject(error)); // 에러 발생 시 처리
  });
};

// printUser 함수
const printUser = async () => {
  try {
    const user1 = await getUser(1); // ID 1의 데이터 가져오기
    console.log(`-async----getUser1의 title은 ${user1.title}`);

    const user2 = await getUser(2); // ID 2의 데이터 가져오기
    console.log(`-async-----getUser2의 title은 ${user2.title}`);
  } catch (error) {
    console.error("에러 발생:", error); // 에러 처리
  } finally {
    console.log("-async---- 모두 완료");
  }
};

// 함수 호출
printUser();
///////////////////////////////////////////////////////////
// getUser 함수: userId를 매개변수로 받도록 수정
const getUser2 = (userId) => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`) //fetch 함수 안에는 데이터 주소
      .then((res) => {
        //실패시 처리
        if (!res.ok) {
          throw new Error(`${userId}번 유저를 찾을 수 없습니다`);
        } //ok는 메서드
        //성공시 처리
        return res.json();
      }) //데이터 객체를 매개변수 res 또는 response로 받는다 그리고 json 형태로 바꾸고
      .then((data) => resolve(data))
      .catch((error) => reject(error)) //바꾼다음 data로 받음 성공되면 성공되었을때 받는 resolve  함수로 data 값을 받는다
      .finally(() => {
        console.log("promise ---- 모두완료");
      });
  }); //생성자 함수 생성
};

getUser2(1).then((data) => {
  console.log(`promise ----  ${data.title}`);
  return getUser2(2).then((data) => {
    console.log(`promise ---- ${data.title}`);
    return getUser2(3).then((data) => {
      console.log(`promise ---- ${data.title}`);
    });
  });
});

function Car(name, brand, price) {
  this.name = name;
  this.brand = brand;
  this.price = price;
}
//생성자 함수 객체를 만들기 위한 템플릿
//매개변수로 받은 것을 this로 받아온다
//객체 생성을 위한 템플릿이기 때문에 새로 생성된 객체에 값을 설정하기 위해서

const myCar = new Car("니로", "Hyundai", 35000000);
//객체 생성

//메서드 만들기
Car.prototype.getOrder = function () {
  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(this.price);

  console.log(`${this.brand} ${this.name} 주문이 들어왔어요 가격은 ${formattedPrice} `);
};
myCar.getOrder();

class Shoes {
  constructor(name, price, size) {
    this.name = name;
    this.price = price;
    this.size = size;
  }

  getOrder() {
    const formattedPrice = new Intl.NumberFormat("ko-KR", {
      style: "currency",
      currency: "KRW",
    }).format(this.price);
    console.log(`${this.name} 사이즈 ${this.size} ${formattedPrice} 주문 들어왔어요`);
  }
}

const newShoes = new Shoes("뉴발란스", 295000, 225);
newShoes.getOrder();
