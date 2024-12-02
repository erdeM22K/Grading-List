gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".title", {
    y: -10,
    opacity: 0,
},
{
    delay: 4,
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
});


gsap.fromTo(".left-box", {
    x: -500,
    opacity: 0,
},
{
    delay: 5,
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
    delay: 5,
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.out",
});
