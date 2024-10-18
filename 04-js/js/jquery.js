// btn을 클릭했을 때
$(".btn1")
  .on("mouseenter", function () {
    $(".box").slideDown(1000);
  })
  .on("mouseleave", function () {
    $(".box").slideUp(1000);
  });

$(".btn2")
  .mouseenter(function () {
    $(".box2").hide();
  })
  .mouseleave(function () {
    $(".box2").show();
  });

// animate
// .btn3을 클릭했을 때
$(".btn3").click(function () {
  // .box3가 1초 동안 왼쪽으로 100px 이동
  $(".box3").animate(
    {
      left: 300,
    },
    1000
  );
});
