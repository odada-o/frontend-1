// gsap.to("누구를", { 어떻게 });

gsap.fromTo(".green", { x: 200, y: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
gsap.to(".green", { y: 0, duration: 1 }, 1);
gsap.from(".orange", { x: -200, opacity: 0, duration: 1 }, 2);
gsap.from(".yellow", { x: 200, opacity: 0, duration: 1 }, 1);
gsap.to(".box-area", { rotation: 90, duration: 1 }, 3);
gsap.to(".green, .yellow, .orange", { borderRadius: "50%", duration: 1 }, 4);
gsap.from(".intro .txt", { scale: 0, opacity: 0, duration: 1 }, 5);
