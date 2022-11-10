import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context/Provider';
import Search from './Search';
import img from '../Images/logo-header2.png';
import criacao from '../Images/img-criacao2.png';
import '../CSS/Header.css';

function Header(page) {
  const { setId, baralho } = useContext(Context);
  if (page.url === '/colecao') {
  return (
    <div className="header">
      <div className="header-baralho">
        <Search />
      </div>
    </div>
  )}
  return(
    <div className="header">
      <div className="header-baralho">
        <div id={page.url.pathname === '/' ? "logo-card-menu" : "logo-card-area"}>
          <img height="23px" src={ img } alt="ícone de carta" />
          <p id={page.url.pathname === '/' ? "logo-text-menu" : "logo-text"}>{page.url.pathname === '/criacao' ? baralho.nome : 'Deck Maker.'}</p>
        </div>
        <>
          { page.url.pathname === '/criacao'
            && (
              <>
                <div id="mid-header-criacao">
                  <img height="30px" src={ criacao } />
                  <span id="title-header">{ page.title }</span>
                </div>
                <nav id={page.url.pathname === '/criacao' && "botao-area-criacao"}>
                  <Link to="/">
                    <button
                      onClick={ () => setId(true) }
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
              </>
            )
          }
          { page.url === '/decks'
            && (
              <>
                <div id="mid-header-decks">
                  <img height="30px" src={ criacao } />
                  <span id="title-header">{ page.title }</span>
                </div>
                <nav id={ page.url=== '/decks' && "botao-area-decks" }>
                  <Link to="/criacao">
                    <button
                      type="button"
                      id="ir-criacao"
                      >
                      Voltar
                    </button>
                  </Link>
                </nav>
              </>
            )
          }
        </>
      </div>
    </div>
  )
}
export default Header;
