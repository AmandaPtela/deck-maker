import React, { useContext } from 'react';
import { Context } from '../Context/Provider';
import '../CSS/Card.css';
import forca from '../Images/forca.png';
import vida from '../Images/vida.png';
import escudo from '../Images/escudo.png';
// Feito com ajuda de Pesquisa no https://reactjs.org/docs/handling-events.html
function Card() {
  const {
    custoCarta,
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
    <div id="carta-preview-area">
{/*       <div id="carta-preview-text">
        <span>Preview</span>
      </div> */}
      <div id={cardTrunfo === false ? "carta-preview" : "super-preview"}>
        <div className="top-preview">
          <span id="custo-card">{ custoCarta }</span>
          <p id="nome-card">
            { nomeCarta }
          </p>
          <p id="rare-card">
            { raridade }
          </p>
          {/* { cardTrunfo === true
            ? <span id="trunfo-card-text"> Super </span>
            : <span id="logo-card-text"> Simples </span> } */}
        </div>
        <div id="img-attr">
          <img
            className="imagem"
            src={ imagem }
            alt={ nomeCarta }
            height="190px"
            width="200px"
            id="image-card"
          />
          <div className="secao-attr">
            <div id="attr1-card">
              <img className="status"
                data-testid="attr1-card"
                height="20px"
                alt="ícone de coração"
                src={vida}>
              </img>
              <span>{ cardAttr1S }</span>
            </div>
            <div id="attr2-card">
            <img className="status"
                height="20px"
                alt="ícone de punho"
                src={forca}>
              </img>
              <span>{ cardAttr2S }</span>
            </div>
            <div id="attr3-card">
              <img className="status"
                height="20px"
                alt="ícone de escudo"
                src={escudo}>
              </img>
              <span>{ cardAttr3S }</span>
            </div>
          </div>
        </div>
        <label htmlFor="descricao">
          <textarea
            className="description-card"
            id="descricao-preview"
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
