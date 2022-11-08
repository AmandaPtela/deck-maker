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
      <div className="header-baralho">
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
            <nav id="botao-area">
            <Link to="/">
              <button
                /* onClick={ () => setId(true) } */
                type="button"
                id="ir-menu"
                >
                Menu
              </button>
            </Link>
            <Link to="/colecao">
              <button
                onClick={ () => setId(true) }
                type="button"
                id="ir-colecao"
                >
                Coleção
              </button>
            </Link>
            <Link to="/baralhos">
              <button
                onClick={ () => setId(true) }
                type="button"
                id="ir-baralhos"
                >
                Baralhos
              </button>
            </Link>
          </nav>
          </>) }
      </div>
    </div>
  );
}

export default Header;
