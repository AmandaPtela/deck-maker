import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../CSS/Menu.css';
import criacao from '../Images/logo-header2.png';

function Menu() {
  const page = useLocation()
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
                    <button type="button" id="botao-criar-deck">Iniciar criação</button>
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