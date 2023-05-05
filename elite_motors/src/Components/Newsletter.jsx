import React from "react";

const Newsletter = () => {
  return(
    <section className="section newletter area-5">
          <div className="container newletter_container">
            <div className="newletter_data">
              <h2 className="section_title">
                Você gostaria de receber nossas Ofertas Especiais?
              </h2>
              <p className="newletter_descriçao">
                Recebe em Primeira Mão todas as informações sobre ofertas e
                novidades da nossa loja diretamente no seu E-mail
              </p>
              <div className="newletter_form">
                <input type="email" className="newletter_input"></input>
                <button className="newletter-btn">Inscreva-se</button>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Newsletter