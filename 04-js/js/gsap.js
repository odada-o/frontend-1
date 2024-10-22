gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro",
    pin: true,
    start: "top 0",
    end: "+=500",
    scrub: 1,
    markers: true,
  },
});

// gsap.to("누구를", { 어떻게 });
tl.fromTo(".green", { x: 200, y: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }).to(".green", { y: 0, duration: 1 }).from(".orange", { x: -200, opacity: 0, duration: 1 }).from(".yellow", { x: 200, opacity: 0, duration: 1 }).to(".box-area", { rotation: 90, duration: 1 }).to(".green, .yellow, .orange", { borderRadius: "50%", duration: 1 }).from(".intro .txt", { scale: 0, opacity: 0, duration: 1 });

gsap.to(".grow", {
  scrollTrigger: ".grow",
  width: "70%",
  height: "70%",
  fontSize: "3rem",
  duration: 1,
  scrollTrigger: {
    trigger: ".sec-grow",
    pin: true,
    start: "top 0",
    end: "+=500",
    scrub: 1,
    // markers: true,
  },
});
