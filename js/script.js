// Swiper Slider
var swiper = new Swiper(".mySwiperslide", {
    spaceBetween: 30,
    effect: "fade",
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
    },
});
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
    },
});
var swiper = new Swiper(".projectswiper", {
    // direction: "horizontal",
    slidesPerView: 5,
    spaceBetween: 50,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        250: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});



// GSAP

gsap.to(".hero-scroll-images-wrapper", {
    xPercent: 700,
    x: () => innerWidth,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero-scroll-images-wrapper",
        start: "top bottom",
        end: () => innerWidth * 18,
        scrub: true,
        // pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        // markers: true,
    },

});
gsap.to(".hero-section", {
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        // markers: true
    },
    backgroundPosition: "100",
    ease: "none"
});
gsap.to(".about-section", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        // markers: true
    },
    backgroundPosition: "100",
    ease: "none"
});
gsap.to(".fresh-ideas-section", {
    scrollTrigger: {
        trigger: ".fresh-ideas-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        // markers: true
    },
    backgroundPosition: "100",
    ease: "none"
});
gsap.to(".testimonial-section", {
    scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        // markers: true
    },
    backgroundPosition: "100",
    ease: "none"
});






ScrollTrigger.matchMedia({
    '(min-width:768px)': function () {

        gsap.to(".rotation-one-img", {
            ease: "none",
            rotation: 360,
            scrollTrigger: {
                trigger: ".hero-scroll-images-wrapper",
                start: "top bottom",
                end: () => innerWidth * 7,
                scrub: true,
                // pin: true,
                invalidateOnRefresh: true,
                anticipatePin: 1,
                // markers: true,
            },

        });
        gsap.to(".rotation-two-img", {
            ease: "none",
            rotation: -360,
            scrollTrigger: {
                trigger: ".hero-scroll-images-wrapper",
                start: "top bottom",
                end: () => innerWidth * 12,
                scrub: true,
                // pin: true,
                invalidateOnRefresh: true,
                anticipatePin: 1,
                // markers: true,
            },

        });
        gsap.to(".rotation-three-img", {
            ease: "none",
            rotation: 360,
            scrollTrigger: {
                trigger: ".hero-scroll-images-wrapper",
                start: "top bottom",
                end: () => innerWidth * 10,
                scrub: true,
                // pin: true,
                invalidateOnRefresh: true,
                anticipatePin: 1,
                // markers: true,
            },

        });
        gsap.to(".scroll-para", {
            xPercent: 100,
            x: () => innerWidth,
            ease: "none",
            scrollTrigger: {
                trigger: ".scroll-para",
                start: "top bottom",
                end: () => innerWidth * 10,
                scrub: true,
                // pin: true,
                invalidateOnRefresh: true,
                anticipatePin: 1
            }
        });
        gsap.to(".scroll-para-last", {
            xPercent: -100,
            x: () => innerWidth,
            ease: "none",
            scrollTrigger: {
                trigger: ".scroll-para-last",
                start: "top bottom",
                end: () => innerWidth * 10,
                scrub: true,
                // pin: true,
                invalidateOnRefresh: true,
                anticipatePin: 1
            }
        });

    },
    '(max-width:767px)': function () {

        gsap.to(".hero-scroll-image", {
            ease: "none",
            rotation: 360,
            scrollTrigger: {
                trigger: ".hero-scroll-images-wrapper",
                start: "top center",
                end: () => innerWidth * 15,
                scrub: true,
                // pin: true,
                invalidateOnRefresh: true,
                anticipatePin: 1,
                // markers: true,
            },

        });
        gsap.to(".scroll-para", {
            xPercent: 100,
            x: () => innerWidth,
            ease: "none",
            scrollTrigger: {
                trigger: ".scroll-para",
                start: "top bottom",
                end: () => innerWidth * 15,
                scrub: true,
                // pin: true,
                invalidateOnRefresh: true,
                anticipatePin: 1
            }
        });
        gsap.to(".scroll-para-last", {
            xPercent: -100,
            x: () => innerWidth,
            ease: "none",
            scrollTrigger: {
                trigger: ".scroll-para-last",
                start: "top bottom",
                end: () => innerWidth * 15,
                scrub: true,
                // pin: true,
                invalidateOnRefresh: true,
                anticipatePin: 1
            }
        });

    }
})






