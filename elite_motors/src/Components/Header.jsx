import React from "react";

const Header = () => {
  return (
    <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav-logo">
            <i className="ri-roadster-line"></i>
            Elite Motors
          </a>

          <div className="nav_menu" id="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#sobre" className="nav-link">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a href="#popular" className="nav-link">
                  Popular
                </a>
              </li>
              <li className="nav-item">
                <a href="#produtos" className="nav-link">
                  Produtos
                </a>
              </li>
              <li className="nav-item">
                <a href="#app" className="nav-link dowload_link">
                  Baixar
                </a>
              </li>
            </ul>

            <div className="nav_close" id="nav-close">
              <i className="ri-close-line"></i>
            </div>
          </div>

          {/* <!--fechamento do menu para nao dar conflito no TOGGLE--> */}

          <div className="nav_toggle" id="nav-toggle">
            <i className="ri-menu-3-line"></i>
          </div>
        </nav>
      </header>
  )


}

export default Header; 