import React from "react";

const Products = () => {
  return (
    <section className="section produtos area-6" id="produtos">
          <span className="produtos_subtitle">Escolha o Melhor para Você</span>
          <h2 className="section_title">Destaques</h2>
          <div className="container produtos_container">
            <ul className="produtos_filtros">
              <li>
                <button
                  className="produtos_item active-product"
                  data-filter="all"
                >
                  <span>ALL</span>
                </button>
              </li>
              <li>
                <button className="produtos_item" data-filter=".tesla">
                  <img src="./imagens de carros/Tesla Logo.png" alt=""></img>
                </button>
              </li>
              <li>
                <button className="produtos_item" data-filter=".mercedes">
                  <img src="./imagens de carros/Mercedes Logo.png" alt=""></img>
                </button>
              </li>
              <li>
                <button className="produtos_item" data-filter=".lamborghini">
                  <img
                    src="./imagens de carros/Lamborghini Logo.png"
                    alt=""
                  ></img>
                </button>
              </li>
            </ul>

            <div className="produtos_content grid">
              {/* <!--produto 1--> */}
              <article className="popular_card produtos_card mix tesla">
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

              {/* <!--produto 2--> */}
              <article className="popular_card produtos_card mix tesla">
                <h3 className="car-name">Tesla</h3>
                <span className="car-model">Model 3</span>
                <img
                  src="./imagens de carros/Tesla2.png"
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
                  <span className="ano">2021</span>
                  <div className="car_line"></div>
                  <span className="price">R$ 420K</span>
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

              {/* <!--produto 3--> */}
              <article className="popular_card produtos_card mix mercedes">
                <h3 className="car-name">Mercedes</h3>
                <span className="car-model">i-className</span>
                <img
                  src="./imagens de carros/Benz1.png"
                  className="car-img"
                  alt=""
                ></img>

                <div className="car_detalhe">
                  <span className="speed">
                    <img
                      src="./imagens de carros/acceleration.png"
                      alt=""
                    ></img>
                    255km/h
                  </span>
                  <span className="ano">2018</span>
                  <div className="car_line"></div>
                  <span className="price">R$ 380K</span>
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

              {/* <!--produto 4--> */}
              <article className="popular_card produtos_card mix mercedes">
                <h3 className="car-name">Mercedes</h3>
                <span className="car-model">AMG-GT</span>
                <img
                  src="./imagens de carros/Benz2.png"
                  className="car-img"
                  alt=""
                ></img>

                <div className="car_detalhe">
                  <span className="speed">
                    <img
                      src="./imagens de carros/acceleration.png"
                      alt=""
                    ></img>
                    280km/h
                  </span>
                  <span className="ano">2022</span>
                  <div className="car_line"></div>
                  <span className="price">R$ 430K</span>
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

              {/* <!--produto 5--> */}
              <article className="popular_card produtos_card mix mercedes">
                <h3 className="car-name">Mercedes</h3>
                <span className="car-model">S63</span>
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

              {/* <!--produto 6--> */}
              <article className="popular_card produtos_card mix mercedes">
                <h3 className="car-name">Mercedes</h3>
                <span className="car-model">C-className</span>
                <img
                  src="./imagens de carros/Benz4.png"
                  className="car-img"
                  alt=""
                ></img>

                <div className="car_detalhe">
                  <span className="speed">
                    <img
                      src="./imagens de carros/acceleration.png"
                      alt=""
                    ></img>
                    270km/h
                  </span>
                  <span className="ano">2017</span>
                  <div className="car_line"></div>
                  <span className="price">R$ 250K</span>
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

              {/* <!--produto 7--> */}
              <article className="popular_card produtos_card mix lamborghini">
                <h3 className="car-name">Lamborghini</h3>
                <span className="car-model">Huracan</span>
                <img
                  src="./imagens de carros/Lambo1.png"
                  className="car-img"
                  alt=""
                ></img>

                <div className="car_detalhe">
                  <span className="speed">
                    <img
                      src="./imagens de carros/acceleration.png"
                      alt=""
                    ></img>
                    312km/h
                  </span>
                  <span className="ano">2018</span>
                  <div className="car_line"></div>
                  <span className="price">R$ 898k</span>
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

              {/* <!--produto 8--> */}
              <article className="popular_card produtos_card mix lamborghini">
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
                  <span className="price">R$ 998k</span>
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

              {/* <!--produto 9--> */}
              <article className="popular_card produtos_card mix lamborghini">
                <h3 className="car-name">Lamborghini</h3>
                <span className="car-model">Veneno</span>
                <img
                  src="./imagens de carros/Lambo2.png"
                  className="car-img"
                  alt=""
                ></img>

                <div className="car_detalhe">
                  <span className="speed">
                    <img
                      src="./imagens de carros/acceleration.png"
                      alt=""
                    ></img>
                    390km/h
                  </span>
                  <span className="ano">2016</span>
                  <div className="car_line"></div>
                  <span className="price">R$ 999k</span>
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
          </div>
        </section>
  )
}

export default Products