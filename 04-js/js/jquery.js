// btn을 클릭했을 때
$(".btn1").on("click", function () {
  // .box를 없애기
  $(".box").toggle(5000);
});

$(".btn2").mouseenter(function () {
  $(".box2").hide();
});

// .btn2에 마우스가 떠났을 때
$(".btn2").mouseleave(function () {
  // .box2를 보이기
  $(".box2").show();
});
