const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8080)

// get() 메서드 사용해서 라우팅 설정
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

// posts 경로에서 블로그 글 목록을 가져오는 API
app.get('/posts', (req, res) => {
  res.send('블로그 글 목록');
})

app.listen(app.get("port"), () => {
  console.log("서버 실행");
});