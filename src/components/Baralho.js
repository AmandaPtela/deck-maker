import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import { Context } from '../Context/Provider';
import '../CSS/Baralho.css';
import Header from './Header';

function Baralho() {
  const {
    copiaBaralho,
    setCopiaBaralho,
  } = useContext(Context);

const copiaa = localStorage.getItem('baralho');  
  const apagar = (carta) => {
    const filtroCard = copiaa.filter((i) => i.nomeCarta !== carta);
    setCopiaBaralho(filtroCard);
  };
  
  const { pathname } = useLocation();
  return (
    <div className="secao-baralho">
      <header id="area-botoes">
      { pathname === '/baralho'
      &&  <Header url={ pathname }/>
      }
      </header>
      <div className="area-cartas">
        { copiaBaralho.map((carta, index) => (
          <div className="cartas" key={ index }>
            <div className="top-text">
              <p className="textos-card" data-testid="name-card">
                { carta.nomeCarta }
              </p>
              { carta.cardTrunfo === true
              ? <p id="trunfo-card"> Super </p>
              :<p id="logo-card">Simples</p>}
            </div>
            <div id="img-attr-area">
              <img
                className="imagem"
                src={ carta.imagem }
                alt={ carta.nomeCarta }
                height="200px"
                width="200px"
                data-testid="image-card"
              />
              <div className="secao-attr">
                <div className="line-attr">
                  <p className="textos-card" id="rare-card">
                    { carta.raridade }
                  </p>
                </div>
                <div className="line-attr">
                  <p className="textos-card-bottom" data-testid="attr1-card">
                    Vida
                  </p>
                  <span>{ carta.attr1 }</span>
                </div>
                <div className="line-attr">
                  <p className="textos-card-bottom" data-testid="attr2-card">
                    Força
                  </p>
                  <span>{ carta.attr2 }</span>
                </div>
                <div className="line-attr">
                  <p className="textos-card-bottom" data-testid="attr3-card">
                    Defesa
                  </p>
                  <span>{ carta.attr3 }</span>
                </div>
              </div>
            </div>
            <p
              className="textos-card-bottom"
              id="descricao-baralho"
              data-testid="description-card"
            >
              { carta.descricaoCarta }
            </p>
            <button
              id="botao-excluir"
              name={ carta.nomeCarta }
              type="button"
              data-testid="delete-button"
              onClick={ (event) => apagar(event.target.name) }
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Baralho;
