// Logo slide-up on hero scroll
// window.addEventListener("scroll", function () {
//   const heroSection = document.getElementById("hero-section");
//   // const logo = heroSection.querySelector(".logo");
//   const sectionRect = heroSection.getBoundingClientRect();
//   if (sectionRect.bottom < window.innerHeight * 0.6) {
//     logo.classList.add("slide-up");
//   } else {
//     logo.classList.remove("slide-up");
//   }
// });

// Curtain open and image zoom-in
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".curtain-container").classList.add("curtain-open");
    setTimeout(() => {
      document.getElementById("hero-img").classList.add("zoom-in");
      AOS.refresh();
      // Optionally hide curtain completely after animation
      document.querySelector(".curtain-container").style.display = "none";
    }, 500);
  }, 1000);
});

// Navbar visibility on scroll
let navbarShown = false;
let navbarTimer;

window.addEventListener(
  "scroll",
  function handleScrollOnce() {
    if (!navbarShown) {
      clearTimeout(navbarTimer);
      navbarTimer = setTimeout(() => {
        document.getElementById("main-navbar").classList.add("visible");
        document.getElementById("initial-logo").classList.add("hide");
        navbarShown = true;
      }, 300); // 3 seconds
      // Remove the listener so it doesn't keep running
      window.removeEventListener("scroll", handleScrollOnce);
    }
  },
  { once: true }
);

// Blue section slide up on scroll
// window.addEventListener("scroll", function () {
//   const blueSection = document.getElementById("main-blue-section");
//   const heroSection = document.getElementById("hero-section");
//   const blueEnd = document.getElementById("blue-end-trigger");
//   const heroRect = heroSection.getBoundingClientRect();
//   const blueEndRect = blueEnd.getBoundingClientRect();
//   const windowHeight = window.innerHeight;

//   // When blue section should slide up
//   if (heroRect.bottom < windowHeight && blueEndRect.top > 0) {
//     blueSection.classList.add("visible");
//     blueSection.classList.remove("static");
//   }
//   // When blue section is finished (scrolled past)
//   else if (blueEndRect.top <= 0) {
//     blueSection.classList.add("static");
//     blueSection.classList.remove("visible");
//   } else {
//     blueSection.classList.remove("visible");
//     blueSection.classList.remove("static");
//   }
// });

// GSAP and ScrollTrigger setup
// gsap.registerPlugin(ScrollTrigger);

// Blue section covers hero
// gsap.to("#main-blue-section", {
//   y: "-60vh",
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#main-blue-section",
//     start: "top bottom",
//     end: "bottom top",
//     scrub: true,
//   },
// });

// hero content to fade/scale out slightly
// gsap.to("#hero-section", {
//   scale: 0.4,
//   opacity: 0.1,
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#main-blue-section",
//     start: "top bottom",
//     end: "center bottom",
//     scrub: true,
//   },
// });

// Animate cement bag drop-in when the section loads
// gsap.fromTo(
//     ".product-center",
//     { y: 500, opacity: 1 },
//     {
//         y: 0,
//         opacity: 1,
//         // duration: 2,
//         ease: "power1.inOut",
//         scrollTrigger: {
//             trigger: ".main-blue-section",
//             start: "bottom center",
//             end: "top center",
//             // toggleActions: "play none none none",
//             scrub: true,
//             once: true
//         }
//     }
// );

// window.addEventListener("load", function () {
//   gsap.fromTo(
//     ".product-center",
//     { y: 500, opacity: 1 },
//     {
//       y: 0,
//       opacity: 1,
//       ease: "power1.inOut",
//       scrollTrigger: {
//         trigger: ".main-blue-section",
//         start: "bottom center",
//         end: "top center",
//         scrub: true,
//         once: true,
//       },
//     }
//   );
// });

// Your panel elements
// const panel3 = document.getElementById("panel-3");
// const panel4 = document.getElementById("panel-4");

// // to show the feature panels and lines in sequence as user scroll
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".feature-reveal-sticky",
//     start: "top top",
//     end: "+=300%",
//     scrub: true,
//     pin: true,
//     // markers: true // Uncomment for debugging

//     // onLeave: () => {
//     //     swapTextFade(panel3, "Advanced Efficiency", "Our VRM tech delivers peak performance and cost savings.");
//     //     swapTextFade(panel4, "National Trust", "Relied on by major projects, homes, and industries across Nepal.");
//     // }
//   },
// });

//each line & panel in strict turn order:
// tl.to("#line-1", { opacity: 1, x: 0, duration: 0.2 }, ">+=0.2")
//   .to("#panel-1", { opacity: 1, scale: 1, duration: 0.3 }, ">+=0.1")
//   .to("#line-2", { opacity: 1, x: 0, duration: 0.2 }, ">+=0.2")
//   .to("#panel-2", { opacity: 1, scale: 1, duration: 0.3 }, ">+=0.1")
//   .to("#line-3", { opacity: 1, x: 0, duration: 0.2 }, ">+=0.2")
//   .to("#panel-3", { opacity: 1, scale: 1, duration: 0.3 }, ">+=0.1")
//   .to("#line-4", { opacity: 1, x: 0, duration: 0.2 }, ">+=0.2")
//   .to("#panel-4", { opacity: 1, scale: 1, duration: 0.3 }, ">+=0.1")
//   // Optionally: reveal all buttons at end
//   .to(
//     ".feature-panel button",
//     { opacity: 1, duration: 0.2, stagger: 0.05 },
//     ">+=0.1"
//   );

// Panel 3
// const panel3Heading = document.querySelector("#panel-3 h2");
// const panel3Para = document.querySelector("#panel-3 p");
// const orig3H = panel3Heading.textContent;
// const orig3P = panel3Para.textContent;
// const new3H = "Advanced Efficiency";
// const new3P = "Our VRM tech delivers peak performance and cost savings.";

// // Panel 4
// const panel4Heading = document.querySelector("#panel-4 h2");
// const panel4Para = document.querySelector("#panel-4 p");
// const orig4H = panel4Heading.textContent;
// const orig4P = panel4Para.textContent;
// const new4H = "National Trust";
// const new4P =
//   "Relied on by major projects, homes, and industries across Nepal.";

// // Fade text swap (after scroll stuck, when 30% left)
// ScrollTrigger.create({
//   trigger: ".feature-reveal-sticky",
//   start: "bottom 70%",
//   // once: true,
//   onEnter: () => {
//     swapTextFade(
//       panel3,
//       "Advanced Efficiency",
//       "Our VRM tech delivers peak performance and cost savings."
//     );
//     swapTextFade(
//       panel4,
//       "National Trust",
//       "Relied on by major projects, homes, and industries across Nepal."
//     );
//   },
//   onLeaveBack: () => {
//     swapTextFade(panel3, orig3H, orig3P);
//     swapTextFade(panel4, orig4H, orig4P);
//   },
// });

// The swapTextFade function
// function swapTextFade(panel, newH, newP) {
//   const h2 = panel.querySelector("h2");
//   const p = panel.querySelector("p");
//   // Animate out
//   gsap.to([h2, p], {
//     opacity: 0,
//     duration: 0.6,
//     onComplete: () => {
//       h2.textContent = newH;
//       p.textContent = newP;
//       // Animate in
//       gsap.to([h2, p], { opacity: 1, duration: 0.6 });
//     },
//   });
// }

// Our Products - Parallax effect

// PARALLAX: Make the Our Products container move slower than scroll
// gsap.to(".product-container", {
//   yPercent: -20, // Parallax effect (move up slower than scroll)
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".product-container",
//     start: "top bottom",
//     end: "bottom top",
//     scrub: true,
//   },
// });

// REVEAL: Fade in & move up the whole section only after 70% of Cement Features section is complete
// (Assumes .feature-reveal-sticky is the cement features section)
// const productsContainer = document.querySelector(".product-container");
// productsContainer.classList.add("products-animate-in"); // Start hidden

// ScrollTrigger.create({
//   trigger: ".feature-reveal-sticky",
//   start: "bottom 70%",
//   once: true,
//   onEnter: () => {
//     productsContainer.classList.add("visible");
//   },
//   // Optional: fade out when going back up
//   onLeaveBack: () => {
//     productsContainer.classList.remove("visible");
//   },
// });
