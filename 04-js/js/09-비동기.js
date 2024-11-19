const a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("a 비동기");
      resolve();
    }, 1000);
  });
}

const b = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("b 비동기");
      resolve(); // 성공 시 호출
    }, 1000);
  });
};

const c = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("c 비동기");
      resolve(); // 성공 시 호출
    }, 1000);
  });
};

const d = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("d 비동기");
      resolve(); // 성공 시 호출
    }, 1000);
  });
};

Promise.all([a(), b(), c(), d()]).then(() => {
  console.log("모두 완료");
})

// a()
// .then(b)
// .then(c)
// .then(d)
// .then(() => {
//   console.log("모두 완료");
// })

// a().then(() => {
//   console.log("a함수 완료");
//   b().then(() => {
//     console.log("b함수 완료");
//     c().then(() => {
//       console.log("c함수 완료");
//       d().then(() => {
//         console.log("d함수 완료");
//       })
//     })
//   })
// })

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

  const getUser = userId => {
    return new Promise((resolve) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then(res => res.json())
        .then(data => resolve(data))
    })
  }

  getUser(1)
    .then((data) => {
      console.log(data.title);
      return getUser(2);
    })
    .then((data) => {
      console.log(data.title);
      return getUser(3);
    })
    .then((data) => {
      console.log(data.title);
    });