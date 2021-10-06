import gsap from 'gsap'
import {gsapS, TweenMax} from 'gsap/dist/gsap'
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


const animationPageIndex = () => {
    let speed = 100

    // let scene1 = gsap.timeline({
    //
    // })

    // ScrollTrigger.create({
    //     animation: scene1,
    //     trigger: '.scrollElement',
    //     start: 'top top',
    //     end: '45% 100%',
    //     scrub: 3,
    // })
    //
    // scene1.from('.text-pop-up', {
    //     duration: 1.5,
    //     start: 'top top',
    //     opacity: 0,
    //     y: -100,
    //     ease: 'bounce'
    // })

    // scene1.from(".text-pop-up", {
    //
    //     }, 0)


    // gsap.from('.text-pop-up', {
    //     duration: 1.5,
    //     start: 'top top',
    //     opacity: 0,
    //     y: -100,
    //     ease: 'bounce'
    // })

    // gsap.from('.animate-text-fromTop', {
    //     duration: 1.2,
    //     opacity: 0,
    //     y: -100
    // })

    // mainGsap.timeline()

    // scrollTrigger

    // gsap.from('.text-pop-up', {
    //     duration: .8,
    //     opacity: 0,
    //     y: -100
    // })
    // gsap.to('.text-pop-up', {
    //     y: 400,
    //     opacity: 0
    // })

    // const gSlide = gsap.timeline()
    // gSlide.to('.wp-slider', {
    //     scale: 0
    // })
    // ScrollTrigger.create({
    //     animation: gSlide,
    //     trigger: '.wp-slider',
    // })



    // const sTwo = gsap.timeline()
    // sTwo.from('.s-two', {
    //     scale: 0,
    //     // duration: 3,
    //     ease: "power2.out"
    // })
    // ScrollTrigger.create({
    //     animation: sTwo,
    //     trigger: '.wp-slider',
    //     scrub: .5,
    //     toggleActions: "restart pause reverse reverse"
    // })



    gsap.from('.sTwo-t-one',  {
        x: 300,
        // opacity: 0,
        duration: 2,
        transformOrigin: '50% 50%',
        // ease: 'none',
        scrollTrigger: {
            trigger: '.wp-slider',
            start: "top bottom",
            scrub: true,
            // pin: true,
            // markers: true,
            // toggleActions: 'restart none restart none'
        }
    })

    gsap.timeline().from('.sTwo-t-two', {
        x: -300,
        // opacity: 0,
        duration: 2.9,
        // ease: "power2.inOut",
        scrollTrigger: {
            trigger: '.wp-slider',
            scrub: true,
            start: 'top bottom',
            // scrub: .9
        }
    }).from('.sTwo-t-there', {
        // opacity: 0,
        // y: -100,
        scale: 0,
        // duration: 9,
        scrollTrigger: {
            trigger: '.wp-slider',
            start: 'top top',
            scrub: 1
        }
    })

    // gsap.from('.s-two-text-rl', .4, {
    //     y: 100,
    //     opacity: 0,
    //     scrollTrigger: {
    //         trigger: '.wp-slider',
    //         scrub: .5
    //     }
    // })


    // const tl = gsap.timeline();
    // tl.from('.text-pop-up', 1,{
    //     duration: 1,
    //     opacity: 0,
    //     y: -100
    // })

    // tl.from('.show-up', 1,{
    //     opacity: 0,
    //     duration: .9,
    //     y: 200
    // })

    // tl.from('.show-from-left', {
    //     // duration: .3,
    //     opacity: 0,
    //     x: -50,
    //     ease: "power2",
    // })
    // tl.from('.show-from-right', {
    //     // duration: .5,
    //     opacity: 0,
    //     x: 50,
    //     ease: "power2",
    // })


    const moveFL = gsap.timeline();
    moveFL.from('.show-from-left', {
        // scale: 0,
        // x: -100,
        // opacity: 0,
        y: 200,
        duration: 1,
        // ease: 'expo'
    })

    const moveFR = gsap.timeline();
    moveFR.from('.show-from-right', {
        // scale: 0,
        // x: 100,
        // opacity: 0,
        y: 200,
        duration: 3,
        ease: 'power4.out'
    })


    ScrollTrigger.create({
        animation: moveFL,
        trigger: '.s-two',
        toggleActions: 'restart none none reverse',
        // start: 'top 100%',
        // scrub: true,
        // markers: true
    })

    ScrollTrigger.create({
        animation: moveFR,
        trigger: '.s-two',
        toggleActions: 'restart none none reverse',
        // pin: true,
        // start: 'top top',
        // scrub: true
    })




    // tl.from('.text-pop-up', {
    //     scrollTrigger: {
    //         trigger: '.text-pop-up',
    //         toggleActions: "restart pause reverse none",
    //         // scrub: true
    //     },
    //     duration: 1,
    //     opacity: 0,
    //     y: -100
    // })

    // ScrollTrigger.create({
    //     animation: tl,
    //     trigger: '.s-two',
    //     // toggleActions: "restart none none none",
    //     // start: 'top bottom',
    //     // end: 'bottom top',
    //     start: 'top bottom',
    //     end: 'top 100px',
    //     scrub: true,
    //     markers: true
    // })



}

export default animationPageIndex