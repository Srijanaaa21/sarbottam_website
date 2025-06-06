
AOS.init();


// Logo slide-up on hero scroll
window.addEventListener('scroll', function () {
    const heroSection = document.getElementById('hero-section');
    const logo = heroSection.querySelector('.logo');
    const sectionRect = heroSection.getBoundingClientRect();
    if (sectionRect.bottom < window.innerHeight * 0.6) {
        logo.classList.add('slide-up');
    } else {
        logo.classList.remove('slide-up');
    }
});



// Curtain open and image zoom-in
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.curtain-container').classList.add('curtain-open');
        setTimeout(() => {
            document.getElementById('hero-img').classList.add('zoom-in');
            AOS.refresh();
            // Optionally hide curtain completely after animation
            document.querySelector('.curtain-container').style.display = "none";
        }, 500);
    }, 1000);
});


// Navbar visibility on scroll
let navbarShown = false;
let navbarTimer;

window.addEventListener('scroll', function handleScrollOnce() {
    if (!navbarShown) {
        clearTimeout(navbarTimer);
        navbarTimer = setTimeout(() => {
            document.getElementById('main-navbar').classList.add('visible');
            navbarShown = true;
        }, 300); // 3 seconds
        // Remove the listener so it doesn't keep running
        window.removeEventListener('scroll', handleScrollOnce);
    }
}, { once: true });


// Blue section slide up on scroll
window.addEventListener('scroll', function () {
    const blueSection = document.getElementById('main-blue-section');
    const heroSection = document.getElementById('hero-section');
    const blueEnd = document.getElementById('blue-end-trigger');
    const heroRect = heroSection.getBoundingClientRect();
    const blueEndRect = blueEnd.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // When blue section should slide up
    if (heroRect.bottom < windowHeight && blueEndRect.top > 0) {
        blueSection.classList.add('visible');
        blueSection.classList.remove('static');
    }
    // When blue section is finished (scrolled past)
    else if (blueEndRect.top <= 0) {
        blueSection.classList.add('static');
        blueSection.classList.remove('visible');
    } else {
        blueSection.classList.remove('visible');
        blueSection.classList.remove('static');
    }
});


// SCROLL-DRIVEN REVEAL
// const panels = [
//     document.getElementById('panel-1'),
//     document.getElementById('panel-2'),
//     document.getElementById('panel-3'),
//     document.getElementById('panel-4')
// ];
// const lines = [
//     document.getElementById('line-1'),
//     document.getElementById('line-2'),
//     document.getElementById('line-3'),
//     document.getElementById('line-4')
// ];
// const container = document.getElementById('scroll-step-container');
// const steps = panels.length * 2; // 8 steps (line, panel, ...)

// const outroStep = steps + 1; // 9th step triggers the outro

// const headingEl = document.querySelectorAll('.feature-header h2');
// const paraEl = document.querySelectorAll('.feature-header p');

// window.addEventListener('scroll', function () {
//     const rect = container.getBoundingClientRect();
//     const windowHeight = window.innerHeight;
//     // Offset progress to start at 20% (adjust as you wish)
//     let progress = (scrollProgress - 0.2) / 0.8;
//     progress = Math.max(0, Math.min(1, progress));
//     let currentStep = Math.floor(progress * steps);
//     // this is new but old worked perfectly. 

//     // let progress = Math.min(1.1, Math.max(0, (windowHeight - rect.top) / (container.offsetHeight - windowHeight)));
//     // let currentStep = Math.floor(progress * steps);

//     // Reveal lines and panels in alternating steps
//     lines.forEach((line, i) => {
//         if (currentStep >= i * 2) line.classList.add('visible');
//         else line.classList.remove('visible');
//     });
//     panels.forEach((panel, i) => {
//         if (currentStep >= i * 2 + 1) panel.classList.add('visible');
//         else panel.classList.remove('visible');
//     });

//     // Show all buttons at the very end (after last panel is fully visible)
//     const showButtons = (currentStep >= steps - 1 && currentStep < steps + 1);
//     panels.forEach(panel => {
//         if (showButtons) panel.classList.add('show-buttons');
//         else panel.classList.remove('show-buttons');
//     });

//     // Outro: hide buttons, change text when fully scrolled past
//     if (progress >= 1) {
//         panels.forEach(panel => panel.classList.remove('show-buttons'));
//         if (headingEl && paraEl) {
//             headingEl.textContent = outroHeading;
//             paraEl.textContent = outroParagraph;
//         }
//     } else {
//         // Restore original texts if scrolling back up
//         if (headingEl && paraEl) {
//             headingEl.textContent = "Your original heading";
//             paraEl.textContent = "Your original paragraph text goes here...";
//         }
//     }
// });


// GSAP and ScrollTrigger setup
gsap.registerPlugin(ScrollTrigger);

// Intro Timeline (runs once on load)
// const intro = gsap.timeline();
// intro
//     .from(".logo-interaction", {
//         y: -100,
//         opacity: 0,
//         duration: 1,
//         ease: "power2.out"
//     })
//     .from(".building-img", {
//         scale: 0.5,
//         opacity: 0,
//         duration: 0.8,
//         ease: "power2.out"
//     }, "-=0.6")
//     .from(".cement-bag", {
//         y: 80,
//         opacity: 0,
//         duration: 0.9,
//         ease: "power2.out"
//     }, "-=0.5");

// Parallax effect on scroll (same as before)
// gsap.to("#hero-section .logo-interaction", {
//     y: -60,
//     scrollTrigger: {
//         trigger: "#main-blue-section",
//         start: "top bottom",
//         end: "top top",
//         scrub: true
//     }
// });
// gsap.to("#hero-section .building-img", {
//     y: -100,
//     scrollTrigger: {
//         trigger: "#main-blue-section",
//         start: "top bottom",
//         end: "top top",
//         scrub: true
//     }
// });
// gsap.to("#hero-section .cement-bag", {
//     y: -140,
//     scrollTrigger: {
//         trigger: "#main-blue-section",
//         start: "top bottom",
//         end: "top top",
//         scrub: true
//     }
// });

// Blue section covers hero
gsap.to("#main-blue-section", {
    y: "-60vh",
    ease: "none",
    scrollTrigger: {
        trigger: "#main-blue-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});


// Animate cement bag drop-in when the section loads
gsap.fromTo(
    ".product-center",
    { y: 500, opacity: 1 },
    {
        y: 0,
        opacity: 1,
        // duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".main-blue-section",
            start: "bottom center",
            end: "top center",
            // toggleActions: "play none none none",
            scrub: true,
            once: true
        }
    }
);

// to show the feature panels and lines in sequence as user scroll
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".feature-reveal-sticky",
        start: "top top",
        end: "+=300%",   // Section lasts 3x viewport, adjust for slower/faster step timing
        scrub: true,
        pin: true,
        // markers: true // Uncomment for debugging
    }
});

//each line & panel in strict turn order:
tl.to("#line-1", { opacity: 1, x: 0, duration: 0.2 }, ">+=0.2")
    .to("#panel-1", { opacity: 1, scale: 1, duration: 0.3 }, ">+=0.1")
    .to("#line-2", { opacity: 1, x: 0, duration: 0.2 }, ">+=0.2")
    .to("#panel-2", { opacity: 1, scale: 1, duration: 0.3 }, ">+=0.1")
    .to("#line-3", { opacity: 1, x: 0, duration: 0.2 }, ">+=0.2")
    .to("#panel-3", { opacity: 1, scale: 1, duration: 0.3 }, ">+=0.1")
    .to("#line-4", { opacity: 1, x: 0, duration: 0.2 }, ">+=0.2")
    .to("#panel-4", { opacity: 1, scale: 1, duration: 0.3 }, ">+=0.1")
    // Optionally: reveal all buttons at end
    .to(".feature-panel button", { opacity: 1, duration: 0.2, stagger: 0.05 }, ">+=0.1");

// hero content to fade/scale out slightly
gsap.to("#hero-section", {
    scale: 0.4,
    opacity: 0.1,
    ease: "none",
    scrollTrigger: {
        trigger: "#main-blue-section",
        start: "top bottom",
        end: "center bottom",
        scrub: true,
    }
});


// Sticky text swap on scroll
const originalPanel3Heading = "VRM Technology";
const originalPanel3Paragraph = "Vertical Roller Mill (VRM), can reduce up to 50% of energy consumption when compared to traditional Ball Mills employed in cement.";

const originalPanel4Heading = "Used Everywhere";
const originalPanel4Paragraph = "Sarbottam Cement have been awarded with the Nepal Standard Mark. The ISO Certified Company situated.";

// Select headings/paras for panel 3 and 4
const panel3 = document.getElementById('panel-3');
const panel4 = document.getElementById('panel-4');
const panel3Heading = panel3.querySelector('h2');
const panel3Para = panel3.querySelector('p');
const panel4Heading = panel4.querySelector('h2');
const panel4Para = panel4.querySelector('p');

// Place an invisible trigger DIV *after* your sticky section (for accuracy)
const swapTrigger = document.createElement('div');
swapTrigger.id = "swap-trigger";
swapTrigger.style = "height: 1px; margin-top: 160px;"; // adjust as needed
container.appendChild(swapTrigger);

// GSAP ScrollTrigger for sticky text swap
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: "#swap-trigger",
    start: "top center", // When swap-trigger reaches center of viewport
    end: "+=150",        // How long the swap stays active
    onEnter: () => {
        panel3Heading.textContent = newPanel3Heading;
        panel3Para.textContent = newPanel3Paragraph;
        panel4Heading.textContent = newPanel4Heading;
        panel4Para.textContent = newPanel4Paragraph;
        // Hide the buttons
        panel3.querySelector("button").style.display = "none";
        panel4.querySelector("button").style.display = "none";
    },
    onLeaveBack: () => {
        panel3Heading.textContent = originalPanel3Heading;
        panel3Para.textContent = originalPanel3Paragraph;
        panel4Heading.textContent = originalPanel4Heading;
        panel4Para.textContent = originalPanel4Paragraph;
        // Show buttons again if scrolling back up
        panel3.querySelector("button").style.display = "";
        panel4.querySelector("button").style.display = "";
    }
});


