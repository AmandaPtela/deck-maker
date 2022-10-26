import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context/Provider';
import Search from './Search';
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
          <Link to="/baralho">
          <button
            onClick={ () => setId(true) }
            type="button"
            id="ir-baralho"
          >
            Ir para baralho
          </button>
        </Link>) }
      </div>
    </div>
  );
}

export default Header;
