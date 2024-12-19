const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<p>노드 공부 중...</p>");
});

server.listen(8080, () => {
  console.log("8080 서버 실행 중");
})
