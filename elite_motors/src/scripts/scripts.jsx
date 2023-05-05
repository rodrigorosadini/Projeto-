import ScrollReveal from 'scrollreveal'
import React, { useEffect, useRef, useState } from "react";
import { SwiperSlide } from "swiper/react";
import "./swiper-bundle.min.css";
import mixitup from "mixitup";
import SwiperCore, { Pagination } from "swiper/core";
import Swiper from "swiper"



SwiperCore.use([Pagination]);

function Scripts() {
{

  //== HEADER NAV MENU ==
  const navMenuRef = useRef(null);
  const navToggleRef = useRef(null);
  const navCloseRef = useRef(null);

  const showMenu = () => {
    navMenuRef.current.classList.add("show-menu");
  };

  const hideMenu = () => {
    navMenuRef.current.classList.remove("show-menu");
  };

  // CHANGE THE BACKGROUND ON SCROLL ==
  const [headerClass, setHeaderClass] = useState("");

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 200) {
        setHeaderClass("scroll-header");
      } else {
        setHeaderClass("");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // REMOVE MENU ON CLICK FOR MOBILE ==

  function linkAction() {
    navMenuRef.current.classList.remove("show-menu");
  }

  //ACTIVE SECTION LINK ==
  const navLinkRefs = useRef([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    if (navToggleRef.current && navCloseRef.current) {
      navToggleRef.current.addEventListener("click", () => {
        navMenuRef.current.classList.add("show-menu");
      });
      navCloseRef.current.addEventListener("click", () => {
        navMenuRef.current.classList.remove("show-menu");
      });
    }
  }, [navToggleRef.current, navCloseRef.current]);

  function scrollActive() {
    const scrollY = window.pageYOffset;
    sectionRefs.current.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 50;
      const sectionId = section.getAttribute("id");
      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight &&
        navMenuRef.current
      ) {
        navLinkRefs.current.forEach((link) => {
          link.classList.remove("active-link");
        });
        const activeLink = navMenuRef.current.querySelector(
          `.nav-menu a[href*=${sectionId}]`
        );
        activeLink.classList.add("active-link");
      } else if (navMenuRef.current) {
        const activeLink = navMenuRef.current.querySelector(
          `.nav-menu a[href*=${sectionId}]`
        );
        activeLink.classList.remove("active-link");
      }
    });
  }

  //SWIPER ==
  
  
      var swiper = new Swiper('.popular_container', {
        loop: true,
        spaceBetween: 24,
        slidesPerView: 'auto',
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
          1024: {
            spaceBetween: 48,
          },
        },
      });
    
  
  
  // SCROLL REVEAL

window.sr = ScrollReveal({reset: false})


useEffect(() => {
  ScrollReveal().reveal(".home_sub", { delay: 200 });
  ScrollReveal().reveal(".home_title", { delay: 500 });
  ScrollReveal().reveal(".home_descriçao", { delay: 600 });
  ScrollReveal().reveal(".home-btn", { delay: 700 });
  ScrollReveal().reveal(".home_value-number, .home_value-descriçao", {
    delay: 800,
    interval: 100,
  });
  ScrollReveal().reveal(".line-h", { delay: 800 });
  ScrollReveal().reveal(".home_img", { delay: 900, origin: "bottom" });
  ScrollReveal().reveal(".sobre_data", { origin: "right" });
  ScrollReveal().reveal(".sobre_img", { origin: "left" });
  ScrollReveal().reveal(".brands_content", { interval: 100 });
  ScrollReveal().reveal(".why_data");
  ScrollReveal().reveal(".popular h2");
  ScrollReveal().reveal(".popular_cards", { delay: 500, origin: "right" });
  ScrollReveal().reveal(".newletter_data", { origin: "bottom" });
  ScrollReveal().reveal(".produtos_subtitle");
  ScrollReveal().reveal(".produtos h2", { delay: "500" });
  ScrollReveal().reveal(".produtos_filtros", { delay: "500" });
  ScrollReveal().reveal(".produtos_card", { delay: "700", interval: 100 });
  ScrollReveal().reveal(".app_container", { origin: "bottom" });
  ScrollReveal().reveal(".app_data", { delay: "500", origin: "left" });
  ScrollReveal().reveal(".app_img", { delay: "600", origin: "right" });



}, []);

// useEffect(() => {
//   ScrollReveal().reveal(".area-1", { delay: 200 });
// }, []);
// useEffect(() => {
//   ScrollReveal().reveal(".area-2", { delay: 200 });
// }, []);
// useEffect(() => {
//   ScrollReveal().reveal(".area-3", { delay: 200 });
// }, []);
// useEffect(() => {
//   ScrollReveal().reveal(".area-4", { delay: 200 });
// }, []);
// useEffect(() => {
//   ScrollReveal().reveal(".area-5", { delay: 200 });
// }, []);
// useEffect(() => {
//   ScrollReveal().reveal(".area-6", { delay: 200 });
// }, []);
// useEffect(() => {
//   ScrollReveal().reveal(".area-7", { delay: 200 });
// }, []);



// MIXITUP

  useEffect(() => {
    var mixerProdutos = mixitup(".produtos_content", {
      selectors: {
        target: ".produtos_card",
      },
      animation: {
        duration: 300,
      }
    })
  })

  const linkProduct = document.querySelectorAll(".produtos_item");

function activeProduct() {
linkProduct.forEach((link) => link.classList.remove("active-product"));
this.classList.add("active-product");
}

linkProduct.forEach((link) => link.addEventListener("click", activeProduct));

// SCROLLUP ==
function scrollUp() {
const scrollUp = document.getElementById("scroll-up");

if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);
}
}

export default Scripts