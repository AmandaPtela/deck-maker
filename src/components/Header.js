import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context/Provider';
import Search from './Search';
import img from '../Images/loguinho.png';
import criacao from '../Images/img-criacao.png';
import '../CSS/Header.css';

function Header(page) {
  const { setId } = useContext(Context);
  return (
    <div className="header">
      <div className="botao-baralho">
        { page.url === '/baralho'
          ? (
            <Search />
            )
            : (
            <>
            <div id="logo-card-area">
              <img className="header-icon" height="40px" src={ img } alt="ícone de carta" />
              <p id="logo-text" >Deck Maker. </p>
            </div>
            <div id="mid-header">
              <img className="header-icon" height="40px" src={criacao} />
              <span id="title-header">Criação</span>
            </div>
            {/* <div id="botao-area">
              <Link to="/baralho">
              <button
                onClick={ () => setId(true) }
                type="button"
                id="ir-baralho"
                >
                Ir para baralho
              </button>
              </Link>
            </div> */}
            </>) }
      </div>
    </div>
  );
}

export default Header;
