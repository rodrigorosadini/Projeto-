import React from "react";

const SobreSection = () => {
  return( 
    <section className="section sobre area-2" id="sobre">
          <div className="sobre_container container grid">
            <div className="sobre_grupo">
              <div className="sobre_data">
                <span className="subtitle sobre-sub">
                  Venha fazer um Teste Drive
                </span>
                <h2 className="section_title">
                  Venha conferir nossos modelos de Altíssimo Nível
                </h2>
                <p className="sobre-descriçao">
                  Nós garantimos que você terá uma experiência de compra
                  excepcional, com qualidade e luxo incomparáveis. Explore nossa
                  seleção de carros de luxo hoje mesmo e comece sua jornada para
                  a estrada em grande estilo.
                </p>

                <div className="sobre_data-card">
                  <div className="sobre_card">
                    <img
                      src="./imagens de carros/about-card-img1.jpg"
                      alt=""
                      
                    ></img>
                    <h3 className="sobre_card-title">Confira</h3>
                    <p className="sobre_card-desc">Interiores</p>
                    <i className="ri-arrow-right-s-fill sobre-card-icon"></i>
                  </div>
                  <div className="sobre_card">
                    <img
                      src="./imagens de carros/about-card-img3.png"
                      alt=""
                    ></img>
                    <h3 className="sobre_card-title">Confira</h3>
                    <p className="sobre_card-desc">Exteriores</p>
                    <i className="ri-arrow-right-s-fill sobre-card-icon"></i>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="./imagens de carros/savio.png"
              alt=""
              className="sobre_img"
            ></img>
          </div>
        </section>
  )
}

export default SobreSection