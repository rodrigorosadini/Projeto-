import React from "react";

const AppCar = () => {
  return (
    <section className="section app area-7" id="app">
          <div className="container app_container grid">
            <div className="app_img">
              <img src="./imagens de carros\Phone.png" alt=""></img>
            </div>
            <div className="app_data">
              <h2 className="section_title">
                A Elite Motors também no seu celular
              </h2>
              <p className="app_descriçao">
                Descubra o aplicativo da Elite Motors, a sua loja de carros
                favorita! Baixe agora mesmo e tenha acesso a uma ampla seleção
                de veículos de alta qualidade. Baixe agora o aplicativo da Elite
                Motors na App Store ou Google Play Store e comece a sua busca
                pelo seu próximo veículo.
              </p>
              <div className="app_btn">
                <div className="ios-btn">
                  <a href="#">
                    <img src="elite_motors\imagens de carros\apple-logo.png" alt=""></img>
                    Baixar para IOS
                  </a>
                </div>
                <div className="android-btn">
                  <a href="#">
                    <img
                      src="./imagens de carros/android-logo.png"
                      alt=""
                    ></img>
                    Baixar para ANDROID
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default AppCar