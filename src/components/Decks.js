import React, { useCallback, useContext } from 'react';
import { useLocation } from 'react-router';
import { Context } from '../Context/Provider';
import Header from './Header';

function Decks() {
  const { deck } = useContext(Context);
  const { pathname } = useLocation();
  return (
    <div className="secao-decks">
      <header id="header-decks">
      { pathname === '/decks'
      &&  <Header url={ pathname } title="Baralhos"/>
      }
      </header>
      <div>{deck.map(element => <li>{element}</li>)}</div>
    </div>
  );
}
export default Decks;