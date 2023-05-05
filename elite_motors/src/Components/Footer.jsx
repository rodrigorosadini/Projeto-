import React from "react";

const FooterSite = () => {
  return (
    <footer className="footer section">
          <div className="container footer_container">
            <div className="footer_data grid">
              <div className="logo-info footer-box">
                <a href="#" className="nav-logo">
                  <i className="ri-roadster-line"></i>
                  Elite Motors
                </a>
                <p className="footer_descriçao">
                  A sua escolha inteligente para a compra de carros premium.
                </p>
              </div>
              <div className="informaçao footer-box">
                <h3 className="footer_title">Informativo</h3>
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Suporte</a>
                  </li>
                </ul>
              </div>
              <div className="compahia footer-box">
                <h3 className="footer_title">Empresa</h3>
                <ul>
                  <li>
                    <a href="./sobre.html">Sobre nós</a>
                  </li>
                  <li>
                    <a href="#">Politica</a>
                  </li>
                  <li>
                    <a href="#">Contato</a>
                  </li>
                  <li>
                    <a href="#">Elite Media</a>
                  </li>
                </ul>
              </div>
              <div className="social footer-box">
                <h3 className="footer_title">Siga nas Redes Sociais</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i className="ri-linkedin-box-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ri-instagram-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ri-facebook-circle-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="direitos">
              <div className="footer-line">
                <small>
                  &copy;Todos os direitos reservados por Elite Motors Company
                </small>
              </div>
            </div>
          </div>
        </footer>
  )

}

export default FooterSite