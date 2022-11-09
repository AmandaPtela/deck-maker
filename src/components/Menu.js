import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../CSS/Menu.css';
import criacao from '../Images/logo-header2.png';
import { Context } from '../Context/Provider';

function Menu() {
  const page = useLocation();
  const [criarDeck, setCriarOn] = useState(false);
  const [nomeBaralho, setNomeBaralho] = useState('');
  const { setDecks, baralho, setBaralho } = useContext(Context);

/*   const makeDeck = () => {
    baralho.nome
  } */
  return (
      <div>
        <Header url={page} title="Menu"/>
        <div  className="menu-geral">
          <div className="form-deck">
            <div id="area-img-menu">
              <img height="120px" src={ criacao } />
            </div>
          { criarDeck ?
            <label htmlFor="form-create-deck">
              <form>
                <label id="form-create-deck" htmlFor="input-name-deck"> Dê um nome ao seu baralho
                  <input id="input-name-deck" onChange={ (e) => setNomeBaralho(e.target.value)} type="text"/>
                  <div id="botoes-form-menu">
                    <button
                      type="button"
                      onClick={ () => setBaralho({ nome: nomeBaralho, cartas: [] }) }
                      id="botao-iniciar-criacao">
                      <Link to="/criacao">
                        Iniciar criação
                      </Link>
                    </button>
                    <button
                      type="button"
                      id="botao-criar-baralho-menu"
                      onClick={ () => setCriarOn(!criarDeck)}
                    >
                      Voltar
                    </button>
                  </div>
                </label>
              </form>
            </label>
            : 
              <div id="botoes-menu">
                <button
                type="button"
                id="botao-criar-baralho-menu"
                onClick={ () => setCriarOn(true)}
                >
                  Criar Baralho
                </button>
                  <button
                    type="button"
                    id="ir-decks-menu"
                  >
                    <Link to="/decks">
                      Baralhos
                    </Link>
                  </button>

                  <button
                    type="button"
                    id="ir-colecao-menu"
                  >
                    <Link to="/colecao">
                     Coleção
                    </Link>
                  </button>
              </div>}
          </div>
        </div> 
      </div>
  );
}
export default Menu;