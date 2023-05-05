import React from "react";

const SectionHome = () => {
  return (
    <section className="section home area-1" id="home">
          <div className="container home_container grid">
            <div className="home_data">
              <span className="subtitle home_sub">
                A Elite dos Carros de Luxo
              </span>
              <h1 className="home_title">
                Os veículos mais sofisticados do mercado.
              </h1>
              <p className="home_descriçao">
                Deixe-nos ajudá-lo a encontrar o carro dos seus sonhos, com uma
                equipe de especialistas em vendas prontos para guiá-lo em cada
                passo do caminho.
              </p>

              <div className="home_flex">
                <div className="home-btn">
                  <a href="#home" className="home-button">
                    Comece aqui
                    <i className="ri-arrow-right-down-fill"></i>
                  </a>
                </div>
              </div>

              <div className="home_value">
                <h1 className="home_value-number">
                  4K<span>+</span>{" "}
                </h1>
                <span className="home_value-descriçao">
                  Estoque de <br />
                  Super Carros{" "}
                </span>

                <div className="line-h"></div>
                {/* <!--linha--> */}

                <h1 className="home_value-number">
                  29K<span>+</span>{" "}
                </h1>
                <span className="home_value-descriçao">
                  Clientes <br />
                  Satisfeitos{" "}
                </span>
              </div>
              {/* <!--value-->     */}
            </div>
            <div className="home_img">
              <img
                src="./imagens de carros/hero-img.png"
                alt="oi"
                srcSet=""
              ></img>
            </div>
          </div>
        </section>

  )
}

export default SectionHome