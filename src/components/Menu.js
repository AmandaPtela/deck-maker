import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../CSS/Menu.css';
import criacao from '../Images/logo-header2.png';
import { Context } from '../Context/Provider';

function Menu() {
  const page = useLocation();
  const { setDeck } = useContext(Context);
  return (
      <div>
        <Header url={page} title="Menu"/>
        <div  className="menu-geral">
          <div className="form-deck">
            <div id="area-img-menu">
              <img src={ criacao } />
            </div>
            <label htmlFor="form-create-deck">
              <form>
                <label id="form-create-deck" htmlFor="input-name-deck"> Dê um nome ao seu baralho
                  <input id="input-name-deck" type="text"/>
                  <Link to="/criacao">
                    <button type="button" onClick={ setDeck } id="botao-criar-deck">Iniciar criação</button>
                  </Link>
                </label>
              </form>
            </label>
          </div>
        </div>
      </div>
  );
}
export default Menu;