//SWIPERS
const swiperprojects = new Swiper('.swiper.is-projects', {
  loop: true,
  centeredSlides: true,
  spaceBetween: 32,
  slidesPerView: 'auto',
  speed: 1000,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 'auto',
      spaceBetween: 16,
      centeredSlides: true,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 'auto',
      spaceBetween: 16,
      centeredSlides: true,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 'auto',
      spaceBetween: 32,
    }
  }
});

const swiperprojectsmob = new Swiper('.swiper.is-projects.is-mob', {
  loop: true,
  centeredSlides: true,
  spaceBetween: 32,
  slidesPerView: 'auto',
  speed: 1000,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 'auto',
      spaceBetween: 16,
      centeredSlides: true,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 'auto',
      spaceBetween: 16,
      centeredSlides: true,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 'auto',
      spaceBetween: 32,
    }
  }
});

const swipertestimonials = new Swiper('.swiper.is-testimonials-brand', {
  loop: true,
  centeredSlides: true,
  spaceBetween: 48,
  slidesPerView: 'auto',
  grabCursor: true,
  speed: 1000,
  autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
  
   breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 'auto',
      spaceBetween: 16
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 'auto',
      spaceBetween: 16
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 'auto',
      spaceBetween: 48,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
    }
  }
});

//NAV
function initnav() {
  const tl1 = gsap.timeline({ delay: -1, duration: 1.2, ease: "circ.out" });

  tl1.fromTo(".navbar", {
    opacity: 0,
    y: -10,
  }, {
    opacity: 1,
    y: 0,
  })

}
//HERO
function init() {
  const textheadinghome = new SplitType('#title-hero-branding', { types: 'lines' })
  const tl2 = gsap.timeline({ delay: -1, duration: 1.8, ease: "circ.out" });

  tl2.fromTo(".vetor-hero-brading", {
    opacity: 0,
    scale: 1.5,
  }, {
    scale: 1,
    opacity: 1,
    duration: 0.7,
  })
    .fromTo(textheadinghome.lines, {
      opacity: 0,
      yPercent: 100
    }, {
      opacity: 1,
      yPercent: 0,
      stagger: {
        amount: 0.7,
      },
    }, '-=0.2').fromTo(".text-align-center.max-width-hero-sub", {
      opacity: 0,
    }, {
      opacity: 1,
    }, '-=0.2').fromTo(".button-component", {
      opacity: 0,
      yPercent: 100
    }, {
      opacity: 1,
      yPercent: 0,
    }, '-=0.2').fromTo(".image-overlay", {
      height: '100%'
    }, {
      height: '0%',
      stagger: {
        amount: 0.7,
      },
      duration: 1.5
    }, '-=0.5').fromTo(".swiper-btn-next", {
      opacity: 0,
    }, {
      opacity: 1,
      },'-=0.1')
}

  initnav();
  init();

const tl3 = gsap.timeline({ delay: -0.3, duration: 0.8, ease: "circ.inOut", scrollTrigger: { trigger: ".section_marquee", start: "-95% center", end: "80% center" } }); //MARQUEE

const tl5 = gsap.timeline({ delay: -0.3, duration: 1.2, ease: "circ.inOut", scrollTrigger: { trigger: ".section_process-branding", start: "-20% center", end: "80% center" } }); //PROCESS


//SECTION - MARQUEE
tl3.fromTo(".heading-style-h4.text-align-center", {
  opacity: 0,
}, {
  opacity: 1,
}).fromTo(".text-size-medium.text-align-center", {
  opacity: 0,
}, {
  opacity: 1,
}, '-=0.1').fromTo(".marquee-list", {
  opacity: 0,
  yPercent: 100
}, {
  opacity: 1,
  yPercent: 0,
}, '-=0.1')



//SECTION - PROCESS
const textheadingprocess = new SplitType('#process', { types: 'lines' })
tl5.fromTo(".process-branding-wrap", {
  opacity: 0,
}, {
  opacity: 1,
}).fromTo(".tag", {
  opacity: 0,
}, {
  opacity: 1,
}, '-=0.2').fromTo(textheadingprocess.lines, {
  opacity: 0,
  yPercent: 100
}, {
  opacity: 1,
  yPercent: 0,
  stagger: {
    amount: 0.2,
  },
}, '-=0.2').fromTo(".logo-ctr-process", {
  opacity: 0,
}, {
  opacity: 1,
}, '-=0.2')




//MATCHMEDIA
ScrollTrigger.matchMedia({
  "(min-width: 800px)": function() {
    const tl6 = gsap.timeline({ delay: -0.3, duration: 0.9, ease: "circ.inOut", scrollTrigger: { trigger: ".section_process-branding", start: "-15% center", end: "75% center", scrub: 1 } }); //PROCESS

    const tl12 = gsap.timeline({ delay: -0.3, duration: 0.7, ease: "circ.inOut", scrollTrigger: { trigger: ".section_process-branding", start: "-40% center", end: "60% center", scrub: 1 } }); //PROCESS

    const tl13 = gsap.timeline({ delay: -0.3, duration: 0.9, ease: "circ.inOut", scrollTrigger: { trigger: ".section_process-branding", start: "-15% center", end: "75% center", scrub: 1 } }); //PROCESS

    const tl4 = gsap.timeline({ delay: -0.3, duration: 0.8, ease: "circ.inOut", scrollTrigger: { trigger: ".section_words", start: "0% center", end: "80% center" } }); //WORDS

    const tl7 = gsap.timeline({ delay: -0.3, duration: 0.8, ease: "circ.inOut", scrollTrigger: { trigger: ".section_webflow", start: "0% center", end: "99% center" } }); //WEBFLOW

    const tl8 = gsap.timeline({ delay: -0.3, duration: 1, ease: "circ.inOut", scrollTrigger: { trigger: ".section_plus-branding", start: "-15% center", end: "80% center" } }); //PLUS

    const tl9 = gsap.timeline({ delay: -0.3, duration: 1, ease: "circ.inOut", scrollTrigger: { trigger: ".section_testimonials-brand", start: "-5% center", end: "80% center" } }); //TESTIMONIALS

    const tl11 = gsap.timeline({ delay: 2, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".footer", start: "70% bottom", end: "90% bottom" } }); //FOOTER

    // SECTION - PROCESS
    tl6.fromTo(".bar-process.is-style", {
      opacity: 0,
      height: '0rem'
    }, {
      opacity: 1,
      height: '26.125rem',
      scrub: true,
    })
    
    tl12.fromTo(".process-branding-content-item", {
  opacity: 0,
}, {
  opacity: 1,
  stagger: {
    amount: 0.7,
  },
})

  tl13.fromTo(".icon-process", {
  opacity: 0,
}, {
  opacity: 1,
  stagger: {
    amount: 0.9,
  },
})

    // SECTION - WORDS
    tl4.fromTo(".words-wrap", {
      opacity: 0,
    }, {
      opacity: 1,
    }).fromTo(".words-content-left", {
      opacity: 0,
    }, {
      opacity: 1,
    }).fromTo(".heading-style-h3.is-words", {
        opacity: 0,
        yPercent: 100
      }, {
        opacity: 1,
        yPercent: 0,
        stagger: {
          amount: 0.5,
        },
      })

    //SECTION - WEBFLOW
    const textheadingwebflow = new SplitType('#webflow_phrase', { types: 'chars' })
    tl7.fromTo(textheadingwebflow.chars, {
      opacity: 0,
      yPercent: 100
    }, {
      opacity: 1,
      yPercent: 0,
      stagger: {
        amount: 0.8,
      },
    })

    //SECTION - PLUS BRANDING
    tl8.fromTo(".plus-branding-wrap", {
      opacity: 0,
    }, {
      opacity: 1,
    }).fromTo(".plus-branding-content-wrap", {
      opacity: 0,
    }, {
      opacity: 1,
    }, '-=0.1').fromTo(".image-plus-branding", {
      opacity: 0,
      scale: 0.85
    }, {
      opacity: 1,
      scale: 1,
      stagger: {
        amount: 0.8,
      }
    }, '-=0.1')
    //SECTION - TESTIMONIALS
    const textheadingtestimonials = new SplitType('#testimonial', { types: 'lines' })
    tl9.fromTo(textheadingtestimonials.lines, {
      opacity: 0,
      yPercent: 100
    }, {
      opacity: 1,
      yPercent: 0,
      stagger: {
        amount: 0.5,
      },
    }).fromTo(".testimonials-brand-card", {
      y: 25,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      stagger: {
        amount: 0.9,
      },
    },'-=0.5')

    //SECTION - CTA
    let typeSplit;
// Split the text up
function runSplit() {
  typeSplit = new SplitType(".heading-style-h2.is-cta", {
    types: "lines, words"
  });
  $(".word").append("<div class='line-mask'></div>");
  createAnimation();
}

runSplit();

function createAnimation() {
  let allMasks = $(".word").map(function() {
    return $(this).find(".line-mask");
  }).get();

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_cta-branding",
      start: "20% center",
      end: "99% bottom",
      scrub: 1
    }
  });

  tl.to(allMasks, {
    width: "0%",
    duration: 9,
    stagger: 0.85
  });
}

    //SECTION - FOOTER
    tl11.fromTo(".footer-title-wrap", {
      opacity: 0,
    }, {
      opacity: 1,
    }).fromTo(".footer-info", {
      opacity: 0,
    }, {
      opacity: 1,
      stagger: {
        amount: 0.3,
      }
    }, '-=0.1').fromTo(".logo-footer-wrap", {
      opacity: 0,
    }, {
      opacity: 1,
    }, '-=0.1').fromTo(".footer-link", {
      opacity: 0,
      y: 32
    }, {
      opacity: 1,
      y: 0,
      stagger: {
        amount: 0.3,
      },
    }, '-=0.1')
    
// NAVBAR - LINK - HOVER
const letterWrapClass = 'navbar_link';
const letterWrapElements = document.getElementsByClassName(letterWrapClass);
[...letterWrapElements].forEach(el => {
  letterWrap(el, letterWrapClass);
  letterAnimation(el, letterWrapClass);
});
function letterWrap(el, cls) {
  const words = el.textContent.split(' ');
  const letters = [];
  cls = cls || 'navbar_link'
  words.forEach(word => {
    let html = '';
    for (var letter in word) {
      html += `
        <span class="${cls}__char">
          <span class="${cls}__char-inner" data-letter="${word[letter]}">
            ${word[letter]}
          </span>
        </span>
      `;
    };
    let wrappedWords = `<span class="${cls}__word">${html}</span>`;
    letters.push(wrappedWords);
  });
  return el.innerHTML = letters.join(' ');
}
function letterAnimation(el, cls) {
  const tl = new TimelineMax({ paused: true });
  const characters = el.querySelectorAll(`.${cls}__char-inner`);
  const duration = el.hasAttribute('data-duration') ? el.dataset.duration : 0.3;
  const stagger = el.hasAttribute('data-stagger') ? el.dataset.stagger : 0.025;
  el.animation = tl.staggerTo(characters, duration, {
    y: '-100%',
    delay: 0.1,
    ease: Power2.easeOut
  }, stagger);
  el.addEventListener('mouseenter', (event) => event.currentTarget.animation.play());
  el.addEventListener('mouseout', (event) => el.animation.pause(0)());
}

  },

  // mobile
  "(max-width: 799px)": function() {
    const tl6 = gsap.timeline({ delay: -0.3, duration: 0.3, ease: "circ.inOut", scrollTrigger: { trigger: ".section_process-branding", start: "-50% center", end: "95% center", scrub: 1 } }); //PROCESS

    const tl12 = gsap.timeline({ delay: -0.3, duration: 0.5, ease: "circ.inOut", scrollTrigger: { trigger: ".section_process-branding", start: "-5% center", end: "60% center", scrub: 1 } }); //PROCESS

    const tl13 = gsap.timeline({ delay: -0.3, duration: 0.5, ease: "circ.inOut", scrollTrigger: { trigger: ".section_process-branding", start: "-5% center", end: "75% center", scrub: 1 } }); //PROCESS

    const tl4 = gsap.timeline({ delay: -0.3, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".section_words", start: "-10% center", end: "80% center" } }); //WORDS
    
    const tl7 = gsap.timeline({ delay: -0.3, duration: 0.5, ease: "circ.inOut", scrollTrigger: { trigger: ".section_webflow", start: "-10% center", end: "99% center" } }); //WEBFLOW
    
    const tl8 = gsap.timeline({ delay: -0.3, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".section_plus-branding", start: "-10% center", end: "80% center" } }); //PLUS

    const tl9 = gsap.timeline({ delay: -0.3, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".section_testimonials-brand", start: "top center", end: "80% center",  makers: true } }); //TESTIMONIALS

    const tl11 = gsap.timeline({ delay: -0.3, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".footer", start: "20% center", end: "99% center" } }); //FOOTER

       // SECTION - PROCESS
       tl6.fromTo(".bar-process.is-style", {
       height: '0%',
      opacity: 0,
    }, {
      opacity: 1,
      height: '74%',
      scrub: true,
    })
    tl12.fromTo(".process-branding-content-item", {
  opacity: 0,
}, {
  opacity: 1,
  stagger: {
    amount: 0.9,
  },
})
  tl13.fromTo(".icon-process", {
  opacity: 0,
}, {
  opacity: 1,
  stagger: {
    amount: 0.9,
  },
})

    // SECTION - WORDS
    tl4.fromTo(".words-wrap", {
      opacity: 0,
    }, {
      opacity: 1,
    }).fromTo(".words-content-left", {
      opacity: 0,
    }, {
      opacity: 1,
    })
      .fromTo(".heading-style-h3.is-words", {
        opacity: 0,
        yPercent: 100
      }, {
        opacity: 1,
        yPercent: 0,
        stagger: {
          amount: 0.5,
        },
      })
      
      //SECTION - PLUS BRANDING
    const textheadingwebflow = new SplitType('#webflow_phrase', { types: 'lines' })
    tl7.fromTo(textheadingwebflow.lines, {
      opacity: 0,
      yPercent: 100
    }, {
      opacity: 1,
      yPercent: 0,
      stagger: {
        amount: 0.8,
      },
    })

    //SECTION - PLUS BRANDING
    tl8.fromTo(".plus-branding-wrap", {
      opacity: 0,
    }, {
      opacity: 1,
    }).fromTo(".plus-branding-content-wrap", {
      opacity: 0,
    }, {
      opacity: 1,
    }, '-=0.1').fromTo(".image-plus-branding", {
      opacity: 0,
      scale: 0.85
    }, {
      opacity: 1,
      scale: 1,
      stagger: {
        amount: 0.2,
      }
    }, '-=0.1')
    //SECTION - TESTIMONIALS
    const textheadingtestimonials = new SplitType('#testimonial', { types: 'lines' })
    tl9.fromTo(textheadingtestimonials.lines, {
      opacity: 0,
      yPercent: 100
    }, {
      opacity: 1,
      yPercent: 0,
      stagger: {
        amount: 0.3,
      },
    }, '-=0.1').fromTo(".testimonials-brand-card", {
      y: 25,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      stagger: {
        amount: 0.5,
      },
    })

    //SECTION - FOOTER
    tl11.fromTo(".footer-title-wrap", {
      opacity: 0,
    }, {
      opacity: 1,
    }).fromTo(".footer-info", {
      opacity: 0,
    }, {
      opacity: 1,
      stagger: {
        amount: 0.3,
      }
    }, '-=0.1').fromTo(".footer-link", {
      opacity: 0,
      y: 32
    }, {
      opacity: 1,
      y: 0,
      stagger: {
        amount: 0.3,
      },
    }, '-=0.1').fromTo(".logo-footer-wrap", {
      opacity: 0,
    }, {
      opacity: 1,
    }, '-=0.1')
    
        //SECTION - CTA
    let typeSplit;
// Split the text up
function runSplit() {
  typeSplit = new SplitType(".heading-style-h2.is-cta", {
    types: "lines, words"
  });
  $(".word").append("<div class='line-mask'></div>");
  createAnimation();
}

runSplit();

function createAnimation() {
  let allMasks = $(".word").map(function() {
    return $(this).find(".line-mask");
  }).get();

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_cta-branding",
      start: "70% center",
      end: "100% bottom",
      scrub: 1,
    }
  });

  tl.to(allMasks, {
    width: "0%",
    duration: 20,
    stagger: 0.85
  });
}
  }
  
});
