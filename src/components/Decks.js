import React from 'react';
import { useLocation } from 'react-router';
import '../CSS/Colecao.css';
import Header from './Header';

function Decks() {

  const { pathname } = useLocation();
  return (
    <div className="secao-decks">
      <header id="header-decks">
      { pathname === '/decks'
      &&  <Header url={ pathname }/>
      }
      </header>
    </div>
  );
}
export default Decks;