//== HEADER NAV MENU ==
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});


// CHANGE THE BACKGROUND ON SCROLL ==
function changeHeaderColor() {
	const header = document.getElementById("header");

	if (this.scrollY >= 200) header.classList.add("scroll-header");
	else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", changeHeaderColor);


// REMOVE MENU ON CLICK FOR MOBILE ==
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");

	navMenu.classList.remove("show-menu");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));


// ACTIVE SECTION LINK ==
const sections = document.querySelectorAll("section[id");

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((section) => {
		const sectionHeight = section.offsetHeight;
		const sectionTop = section.offsetTop - 50;
		sectionId = section.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(".nav-menu a[href*=" + sectionId + "]")
				.classList.add("active-link");
		} else {
			document
				.querySelector(".nav-menu a[href*=" + sectionId + "]")
				.classList.remove("active-link");
		}
	});
}
window.addEventListener("scroll", scrollActive);


// SWIPPER JS ==
var swiper = new Swiper(".polular_container", {
    loop: true,
    spaceBetween:24,
    slidesPerView: "auto",
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
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


// MIXITUP ==
var mixerProdutos = mixitup(".produtos_content", {
    selectors: {
        target: ".produtos_card",
    },
    animation: {
        duration: 300
    }
});

// LINK ATIVO DO PROJETO ==
const linkProduct = document.querySelectorAll(".produtos_item");

function activeProduct(){
    linkProduct.forEach((link) => link.classList.remove("active-product"));
    this.classList.add("active-product");
}

linkProduct.forEach((link) => link.addEventListener("click", activeProduct));

// SCROLLUP ==
function scrollUp(){
    const scrollUp = document.getElementById("scroll-up");

    if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

// SCROLL Revel JS ==
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
});

sr.reveal(".home_sub");
sr.reveal(".home_title", {delay: 500});
sr.reveal(".home_descriçao", {delay: 600});
sr.reveal(".home-btn", {delay: 700});
sr.reveal(".home_value-number, .home_value-descriçao", {delay: 800, interval:100, });
sr.reveal(".line-h", {delay: 800});
sr.reveal(".home_img", {delay: 900, origin: "bottom"});


sr.reveal(".sobre_data", {origin: "right"});
sr.reveal(".sobre_img", {origin: "left"});


sr.reveal(".brands_content", {interval: 100});


sr.reveal(".why_data",);

sr.reveal(".popular h2",);
sr.reveal(".popular_cards", {delay: 500, origin: "right"});


sr.reveal(".newletter_data", {origin: "bottom"});


sr.reveal(".produtos_subtitle",);
sr.reveal(".produtos h2", {delay: "500"});
sr.reveal(".produtos_filtros", {delay: "500"});
sr.reveal(".produtos_card", {delay: "700", interval: 100});


sr.reveal(".app_container", {origin: "bottom"});
sr.reveal(".app_data", {delay: "500", origin: "left"});
sr.reveal(".app_img", {delay: "600", origin: "right"});

