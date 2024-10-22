// gsap.to("누구를", { 어떻게 });
// gsap.to(".green", { left: "50%", transform: "translateX(-50%)" });
// gsap.to(".green", { y: 100 }, 1);

gsap.fromTo(".green", { x: 200, y: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
gsap.to(".green", { y: 0, duration: 1 }, 1);
