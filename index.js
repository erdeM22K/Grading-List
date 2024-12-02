gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".title", {
    y: -10,
    opacity: 0,
},
{
    delay: 0,
    opacity: 2,
    y: 0,
    duration: 2,
    ease: "power2.out",
});


gsap.fromTo(".left-box", {
    x: -500,
    opacity: 0,
},
{
    delay: 3,
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.out",
});

gsap.fromTo(".right-box", {
    x: 500,
    opacity: 0,
},
{
    delay: 3,
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.out",
});
