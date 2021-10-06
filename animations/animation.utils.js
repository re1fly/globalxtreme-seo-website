import {gsap, TweenMax} from 'gsap/dist/gsap'
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export const animateOpeningIndex = () => {
    document.body.style.overflow = 'hidden'

    TweenMax.from(".opening-gx .gx-logo", 2, {
        delay: .2,
        opacity: 0,
        scale: 0
    })

    TweenMax.to(".opening-gx .gx-logo", 2, {
        delay: 2,
        opacity: 0,
        ease: 'expo.easeInOut'
    })

    gsap.to(".opening-gx", {
        duration: 1,
        delay: 3,
        opacity: 0,
        display: 'none',
        stagger: 0.5,
        ease: 'expo.easeInOut',
        onComplete: () => {
            document.body.style.overflow = 'unset'
        }
    });
}

export const animateCursorCircle = () => {
    let cursor = $(".cursor-circle");
    let follower = $(".cursor-follower");

    let posX = 0;
    let posY = 0;

    let mouseX = 0
    let mouseY = 0;

    TweenMax.to({},
        // 0.016,
        0.01,
        {
        repeat: -1,
        onRepeat: function() {
            posX += (mouseX - posX) / 5;
            posY += (mouseY - posY) / 5;

            TweenMax.set(follower, {
                css: {
                    // left: posX - 32,
                    // top: posY - 34
                    left: posX - 18,
                    top: posY - 18
                }
            });

            TweenMax.set(cursor, {
                css: {
                    left: mouseX-3,
                    top: mouseY-4
                }
            });
        }
    });

    $(document).on("mousemove", function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        document.querySelector(".cursor-circle").style.display = 'block';
        document.querySelector(".cursor-follower").style.display = 'block';
    });


    $("a").on("mouseenter", function() {
        cursor.addClass("active");
        follower.addClass("active");
    });
    $("a").on("mouseleave", function() {
        cursor.removeClass("active");
        follower.removeClass("active");
    });

}

const funcOnHover = (className) => {
    const nameClassCss = '.' + className
    $().on("mouseenter", function() {
        cursor.addClass("active");
        follower.addClass("active");
    });
    $('.' + classCss).on("mouseleave", function() {
        cursor.removeClass("active");
        follower.removeClass("active");
    });
}


export const shakeElement = (elementWP, e, target, movement) => {
    let wp = $(elementWP);
    let relX = e.pageX - wp.offset().left;
    let relY = e.pageY - wp.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - wp.width() / 2) / wp.width() * movement,
        y: (relY - wp.height() / 2) / wp.height() * movement
    });
}


export const animateScrollTest = () => {
    gsap.from(".pContent", {
        // yPercent: -100,
        // ease: "none",
        scrollTrigger: {
            trigger: ".pSection",
            // start: "top bottom", // the default values
            // end: "bottom top",
            // scrub: true,
            // x: -1500
        },
        // x: -400
    });

    gsap.to('.pImage', {
        // yPercent: 50,
        // ease: "none",
        scrollTrigger: {
            trigger: ".pSection",
            // start: "top bottom", // the default values
            // end: "top top",
            // scrub: true,
            x: 90400
        },
    })

    // gsap.to(".pImage", {
    //     yPercent: 50,
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: ".pSection",
    //         // start: "top bottom", // the default values
    //         end: "bottom top",
    //         scrub: true
    //     },
    // });
}


export const animateScrollTwo = () => {

    gsap.utils.toArray(".panel").forEach((panel, i) => {
        ScrollTrigger.create({
            trigger: panel,
            start: "bottom top",
            pin: true,
            pinSpacing: false
        });
    });


    ScrollTrigger.create({
        snap: 1 / 4 // snap whole page to the closest section!
    });


}



export const animateMenuFO = () => {
    let breakPointIPad = window.matchMedia("(min-width: 768px)");
    let isMinIPad = breakPointIPad.matches

    let objPLineLeft = isMinIPad ?
        {opacity: 0, x: 100, duration: 2} :
        {opacity: 0, y: -900, duration: 2}
    let partLeft = gsap.timeline()
    partLeft.from('.product-line-left', objPLineLeft)
    // if (isMinIPad) {
    //     partLeft.from('.product-line-left', {
    //         opacity: 0,
    //         x: 100,
    //         duration: 2
    //     })
    // } else {
    //     partLeft.from('.product-line-left', {
    //         opacity: 0,
    //         y: -900,
    //         duration: 2
    //     })
    // }

    let partTimelineLeft = gsap.timeline()
    partTimelineLeft.from('.product-hand-left', {
        x: -200,
        duration: 1,
        opacity: 0
    })
    partTimelineLeft.from('.icon-plus-left', {
        scaleX: 0,
        transformOrigin: 'right'
    })
    partTimelineLeft.from('.btn-left-position', {
        scaleX: 0,
        transformOrigin: 'right'
    })


    let partRight = gsap.timeline()
    partRight.from('.product-line-right', {
        opacity: 0,
        x: -100,
        duration: 2
    })

    let partTimelineRight = gsap.timeline()
    partTimelineRight.from('.product-hand-right', {
        x: 200,
        duration: 1,
        opacity: 0
    })
    partTimelineRight.from('.icon-plus-right', {
        scaleX: 0,
        transformOrigin: 'left'
    })
    partTimelineRight.from('.btn-right-position', {
        scaleX: 0,
        transformOrigin: 'left'
    })
}

export const animateCloseMenuFO = async () => {
    let partLeft = gsap.timeline()

    let partTimelineLeft = gsap.timeline()
    partTimelineLeft.to('.btn-left-position', {
        scaleX: 0,
        transformOrigin: 'right'
    })
    partTimelineLeft.to('.icon-plus-left', {
        scaleX: 0,
        transformOrigin: 'right',
        onComplete: () => {
            haveCompleteLeft()
        }
    })

    const haveCompleteLeft = () => {

        partLeft.to('.product-line-left', {
            opacity: 0,
            x: 100,
            duration: 3
        })

        partTimelineLeft.to('.product-hand-left', {
            x: -200,
            duration: 1,
            opacity: 0
        })
    }


    let partRight = gsap.timeline()

    let partTimelineRight = gsap.timeline()
    partTimelineRight.to('.btn-right-position', {
        scaleX: 0,
        transformOrigin: 'left'
    })
    partTimelineRight.to('.icon-plus-right', {
        scaleX: 0,
        transformOrigin: 'left',
        onComplete: () => {
            haveCompleteRight()
        }
    })

    const haveCompleteRight = () => {
        partRight.to('.product-line-right', {
            opacity: 0,
            x: -100,
            duration: 3
        })

        partTimelineRight.to('.product-hand-right', {
            x: 200,
            duration: 1,
            opacity: 0,
            onComplete: () => {
                $('#modalMenuProduct').modal('hide');
            }
        })
    }
}


export const animateMenuInfo = () => {
    let polygonLeft = gsap.timeline()
    polygonLeft.from('.polygon-left', {
        x: -200,
        duration: 1,
        opacity: 0
    })
    polygonLeft.from('.icon-plus-info-event', {
        scaleX: 0,
        transformOrigin: 'right'
    })
    polygonLeft.from('.btn-info-event', {
        scaleX: 0,
        transformOrigin: 'right'
    })


    let polygonRight = gsap.timeline()
    polygonRight.from('.img-overlay', {
        x: 200,
        duration: 1,
        opacity: 0
    })
    polygonRight.from('.icon-plus-info-blog', {
        scaleX: 0,
        transformOrigin: 'left'
    })
    polygonRight.from('.btn-info-blog', {
        scaleX: 0,
        transformOrigin: 'left'
    })
}
