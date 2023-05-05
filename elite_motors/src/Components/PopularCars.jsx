import React from "react";




const PopularCars = () => {
  return (
    <section className="section popular area-4" id="popular">
          <img
            src="./imagens de carros/vlad-tchompalov-qqwC1K7od0E-unsplash.jpg"
            className="popular-bg"
            alt=""
          ></img>

          <div className="container popular_container swiper">
            <h2 className="section_title">Mais Procurados</h2>

            <div className="popular_cards swiper-wrapper">
              {/* <!--cards 1--> */}
              <article className="popular_card swiper-slide">
                <h3 className="car-name">Tesla</h3>
                <span className="car-model">Model Y</span>
                <img
                  src="./imagens de carros/Tesla1.png"
                  className="car-img"
                  alt=""
                ></img>

                <div className="car_detalhe">
                  <span className="speed">
                    <img
                      src="./imagens de carros/acceleration.png"
                      alt=""
                    ></img>
                    217km/h
                  </span>
                  <span className="ano">2020</span>
                  <div className="car_line"></div>
                  <span className="price">R$ 350K</span>
                </div>

                <div className="car_btn">
                  <a href="#" className="buy_btn">
                    Comprar
                  </a>
                  <a href="#" className="alugue_btn">
                    Alugar
                  </a>
                </div>
              </article>

              {/* <!--cards 2--> */}
              <article className="popular_card swiper-slide">
                <h3 className="car-name">Mercedes</h3>
                <span className="car-model">D63</span>
                <img
                  src="./imagens de carros/Benz3.png"
                  className="car-img"
                  alt=""
                ></img>

                <div className="car_detalhe">
                  <span className="speed">
                    <img
                      src="./imagens de carros/acceleration.png"
                      alt=""
                    ></img>
                    330km/h
                  </span>
                  <span className="ano">2022</span>
                  <div className="car_line"></div>
                  <span className="price">R$ 511K</span>
                </div>

                <div className="car_btn">
                  <a href="#" className="buy_btn">
                    Comprar
                  </a>
                  <a href="#" className="alugue_btn">
                    Alugar
                  </a>
                </div>
              </article>

              {/* <!--cards 3--> */}
              <article className="popular_card swiper-slide">
                <h3 className="car-name">Lamborghini</h3>
                <span className="car-model">Gallardo</span>
                <img
                  src="./imagens de carros/Lambo3.png"
                  className="car-img"
                  alt=""
                ></img>

                <div className="car_detalhe">
                  <span className="speed">
                    <img
                      src="./imagens de carros/acceleration.png"
                      alt=""
                    ></img>
                    337km/h
                  </span>
                  <span className="ano">2017</span>
                  <div className="car_line"></div>
                  <span className="price">R$ 998K</span>
                </div>

                <div className="car_btn">
                  <a href="#" className="buy_btn">
                    Comprar
                  </a>
                  <a href="#" className="alugue_btn">
                    Alugar
                  </a>
                </div>
              </article>
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </section>
  )
}

export default PopularCars;