import React, { useContext } from 'react';
import { Context } from '../Context/Provider';
import '../CSS/Card.css';
// Feito com ajuda de Pesquisa no https://reactjs.org/docs/handling-events.html
function Card() {
  const {
    nomeCarta,
    descricaoCarta,
    imagem,
    attr1,
    attr2,
    attr3,
    raridade,
    cardTrunfo,
  } = useContext(Context);
  const cardAttr1S = String(attr1);
  const cardAttr2S = String(attr2);
  const cardAttr3S = String(attr3);
  return (
    <div id="carta-preview">
{/*       <div id="carta-preview-text">
        <span>Preview</span>
      </div> */}
      <div className="secao-carta">
        <div className="top-preview">
          <p className="textos-card" data-testid="name-card">
            { nomeCarta }
          </p>
          { cardTrunfo === true
            ? <span id="trunfo-card-text"> Super </span>
            : <span id="logo-card-text"> Simples </span> }
        </div>
        <div id="img-attr">
          <img
            className="imagem"
            src={ imagem }
            alt={ nomeCarta }
            height="200px"
            width="200px"
            data-testid="image-card"
          />
          <div className="secao-attr">
            <div>
              <p className="textos-card" id="rare-card">
                { raridade }
              </p>
            </div>
            <div className="line-attr">
              <p className="textos-card-bottom" data-testid="attr1-card">
                Vida
              </p>
              <span>{ cardAttr1S }</span>
            </div>
            <div className="line-attr">
              <p className="textos-card-bottom" data-testid="attr2-card">
                Força
              </p>
              <span>{ cardAttr2S }</span>
            </div>
            <div className="line-attr">
              <p className="textos-card-bottom" data-testid="attr3-card">
                Defesa
              </p>
              <span>{ cardAttr3S }</span>
            </div>
          </div>
        </div>
        <label htmlFor="descricao">
          <textarea
            className="textos-card-bottom"
            id="descricao"
            data-testid="description-card"
            value={ descricaoCarta }
            disabled={true}
            placeholder="Descrição da carta"
          >
            { descricaoCarta }
          </textarea>
        </label>
      </div>
    </div>
  );
}
export default Card;
