//객체 생성하는 생성자 함수
//new Promise (함수,초기값 몇초후 실행할지)

const a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("첫번째  a의 비동기");
      resolve(); //성공시 호출
    }, 1000);
  });
};

//a함수가 실행되면
//resolve가 실행되면 then()메서드 실행

const b = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("b의 첫번째 비동기");
      resolve(); //성공시 호출
    }, 1000);
  });
};
const c = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("c의 첫번째 비동기");
      resolve(); //성공시 호출
    }, 1000);
  });
};
const d = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("d의 첫번째 비동기");
      resolve(); //성공시 호출
    }, 1000);
  });
};

//축약
/* a()
  .then(() => b())
  .then(() => c())
  .then(() => d()); */

//원래 코드
/* a().then(() => {
  return b();
}); */

Promise.all([a(), b(), c(), d()]).then(() => {
  console.log("all done");
});

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

/* promis로 출력 */
const getUser = (userId) => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`) //fetch 함수 안에는 데이터 주소
      .then((res) => res.json()) //데이터 객체를 매개변수 res 또는 response로 받는다 그리고 json 형태로 바꾸고
      .then((data) => resolve(data)); //바꾼다음 data로 받음 성공되면 성공되었을때 받는 resolve 함수로 data 값을 받는다
  }); //생성자 함수 생성
};
getUser(1).then((data) => {
  console.log(data.userId);
  return getUser(2).then((data) => {
    console.log(data.title);
    return getUser(3).then((data) => {
      console.log(data.title);
    });
  });
}); //64번째 줄 data 값을 매개변수로 data로 받는다

//비동기 구문 자바스크립트로 여러 작업을 동시에 처리하기 위해 비동기(Asynchronous)

const aa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("aa");
      resolve();
    }, 1000);
  });
};

const bb = () => {
  console.log("2024-11-20 bb");
};
aa().then(() => {
  return bb(); //실행될 구문 여기다가 입력
});
//생성자함수를 넣은 변수.then (())

const cc = () => {
  console.log("cc");
};
const dd = () => {
  console.log("dd");
};

const main = async () => {
  await cc();
  dd();
}; //단독으로 사용 안되고 함수에 할당에해야함

main();

//async await
