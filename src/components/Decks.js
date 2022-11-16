import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import { Context } from '../Context/Provider';
import Header from './Header';
import '../CSS/Decks.css';
import { Link } from 'react-router-dom';

function Decks() {
  const { deck, setSelection,filtrado } = useContext(Context);
  const { pathname } = useLocation();
  return (
    <div>
      <header id="header-decks">
      { pathname === '/decks'
      &&  <Header url={ pathname } title="Baralhos"/>
      }
      </header>
      <div className="secao-decks">
        { deck.map((baralho, index) => 
          (
            <Link to="/colecao"
              key={ index }>
              <button
                onClick={ () => setSelection(baralho)}
                type="button"
                className="decks-card"
              >
                  { baralho }
              </button>
            </Link>
          ) 
        )}
      </div>
    </div>
  );
}
export default Decks;