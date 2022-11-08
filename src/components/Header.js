import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context/Provider';
import Search from './Search';
import img from '../Images/logo-header2.png';
import criacao from '../Images/img-criacao2.png';
import '../CSS/Header.css';

function Header(page) {
  const { setId, filtrado } = useContext(Context);
  return (
    <div className="header">
      <div className="header-baralho">
        { page.url === '/colecao'
          ? (
            <Search />
            )
            
            : (
            <>
            <div id="logo-card-area">
              <img height="23px" src={ img } alt="ícone de carta" />
              <p id="logo-text">Deck Maker.</p>
            </div>
            { page.url === '/decks' || page.url === '/criacao'
            ? (
              <>
                <div id="mid-header">
                  <img height="30px" src={ criacao } />
                  <span id="title-header">{ page.title }</span>
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
                  <Link to="/decks">
                    <button
                      onClick={ () => setId(true) }
                      type="button"
                      id="ir-decks"
                      >
                      Baralhos
                    </button>
                  </Link>
                </nav>
                </>)
            : '' }
          </>) }
      </div>
    </div>
  );
}

export default Header;
