import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import { Context } from '../Context/Provider';
import Header from './Header';
import '../CSS/Decks.css';

function Decks() {
  const { deck } = useContext(Context);
  const { pathname } = useLocation();
  return (
    <div>
      <header id="header-decks">
      { pathname === '/decks'
      &&  <Header url={ pathname } title="Baralhos"/>
      }
      </header>
      <div className="secao-decks">
        { deck.map(baralho => 
          (<button type="button" className="decks-card">{baralho}</button>) 
        )}
      </div>
    </div>
  );
}
export default Decks;