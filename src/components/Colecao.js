import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Context } from '../Context/Provider';
import '../CSS/Colecao.css';
import Header from './Header';
import forca from '../Images/forca.png';
import vida from '../Images/vida.png';
import escudo from '../Images/escudo.png';

function Colecao() {
  const {
    filtrado,
    setFiltrado,
    setBaralho,
    baralhoPrincipal,
  } = useContext(Context);

  useEffect(() => {
    setFiltrado(baralhoPrincipal);
  }, [setFiltrado, baralhoPrincipal]);

// const copiaa = localStorage.getItem('copiaBaralho');
  const apagar = (carta) => {
    const filtroCard = baralhoPrincipal.filter((i) => i.nomeCarta !== carta);
    setBaralho(filtroCard)
    setFiltrado(filtroCard);
  };
  const { pathname } = useLocation();
  return (
    <div className="secao-baralho">
      <header id="area-botoes">
      { pathname === '/colecao'
      &&  <Header url={ pathname }/>
      }
      </header>
      <div className="area-cartas">
        { filtrado.length === 0 ? <p>Seu baralho está vazio!</p>
        : filtrado.map((carta, index) => (
          <div className={carta.cardTrunfo === true ? "carta-super" : "cartas"} key={ index }>
            <div className="top-text">
              <span id="custo-card-colecao">{ carta.custoCarta }</span>
              <p id="nome-card-colecao">
                { carta.nomeCarta }
              </p>
              <p id="rare-card-colecao">
                { carta.raridade }
              </p>
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
              <div className="secao-attr-colecao">
                <div id="attr1-card-colecao">
                  <img className="textos-card-bottom"
                    data-testid="attr1-card"
                    height="25px"
                    alt="ícone de coração"
                    src={vida}>
                  </img>
                  <span>{ carta.attr1 }</span>
                </div>
                <div id="attr2-card-colecao">
                <img className="textos-card-bottom"
                    height="25px"
                    alt="ícone de punho"
                    src={forca}>
                  </img>
                  <span>{ carta.attr2 }</span>
                </div>
                <div id="attr3-card-colecao">
                  <img className="textos-card-bottom"
                    height="25px"
                    alt="ícone de escudo"
                    src={escudo}>
                  </img>
                  <span>{ carta.attr3 }</span>
                </div>
              </div>
            </div>
            <div
              id="descricao-area">
              <textarea
                className="textos-card-bottom"
                id="descricao-colecao"
                disabled={true}
              >
                { carta.descricaoCarta }
              </textarea>
            </div>
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
export default Colecao;
