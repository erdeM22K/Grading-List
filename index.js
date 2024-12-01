gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".title", {
    y: -10,
    opacity: 0,
},
{
    delay: 1,
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".section2",
        start: "top 90%",
        toggleActions: "play none none none",
        once: true,
    }
});

gsap.fromTo(".left-box", {
    x: -500,
    opacity: 0,
},
{
    opacity: 1,
    x: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".section2",
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
    }
});

gsap.fromTo(".right-box", {
    x: 500,
    opacity: 0,
},
{
    opacity: 1,
    x: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".section2",
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
    }
});
