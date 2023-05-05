import "./style.css";
import './scrollReveal.css'
import Header from "./Components/Header";
import SectionHome from "./Components/SectionHome";
import SobreSection from "./Components/SobreSection";
import Brands from "./Components/Brands";
import WhyDopeCar from "./Components/WhyDopeCar";
import PopularCars from "./Components/PopularCars";
import Newsletter from "./Components/Newsletter";
import Products from "./Components/Products";
import AppCar from "./Components/AppCar";
import FooterSite from "./Components/Footer";
import ScrollReveal from 'scrollreveal'
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import mixitup from "mixitup";
import Scripts from "./scripts/scripts";
SwiperCore.use([Pagination]);





function App() {  
  
  
  return (
    <>
    <Scripts />
    
      {/* <!--HEADER SECTION--> */}
      <Header />

      {/* <!--MAIN--> */}
      <main className="main">
        {/* <!--HOME SECTION--> */}

        <SectionHome />

        {/* <!--SOBRE SECTION--> */}

        <SobreSection />

        {/* <!--BRANDS--> */}
        <Brands />

        {/* <!--WHY DOPECAR--> */}
        <WhyDopeCar />

        {/* <!--POPULAR--> */}
        <PopularCars />

        {/* <!--NEWLETTER--> */}
        <Newsletter />

        {/* <!--PRODUCTS--> */}
        <Products />

        {/* <!--APP--> */}
        <AppCar />

        {/* <!--FOOTER--> */}
        <FooterSite />
      </main>

      {/* <!--SCROLL UP--> */}
    <a href="#" className="scollup" id="scroll-up">
        <i className="ri-arrow-up-fill"></i>
      </a>


     
    </>

    
  );

}

export default App;
