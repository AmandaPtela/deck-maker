import React, { useContext } from "react";
import "../CSS/Form.css";
import { Context } from "../Context/Provider";
import criacao from '../Images/img-criacao.png';
import forca from '../Images/forca.png';
import vida from '../Images/vida.png';
import escudo from '../Images/escudo.png';
// Feito com ajuda de Pesquisa no https://reactjs.org/docs/handling-events.html
function Form() {
  const {
    nomeCarta,
    custoCarta,
    setCustoCarta,
    setNomeCarta,
    descricaoCarta,
    setDescricao,
    imagem,
    setImg,
    attr1,
    setAttr1,
    attr2,
    setAttr2,
    attr3,
    setAttr3,
    raridade,
    setRaridade,
    cardTrunfo,
    setCardTrunfo,
    baralhoPrincipal,
    setBaralho,
    setFiltrado,
  } = useContext(Context);
  /*
  const onSaveButtonClick = () => {
    const maxCard = 90;
    const minCard = 0;
    const somaTotal = 210;
    const attr1N = Number(attr1);
    const attr2N = Number(attr2);
    const attr3N = Number(attr3);
    const somaAttr = attr1N + attr2N + attr3N;
    if (
      nomeCarta === '' || imagem === '' || descricaoCarta === ''
      || attr1 > maxCard || attr1 < minCard
      || attr2 > maxCard || attr2 < minCard
      || attr3 > maxCard || attr3 < minCard
      || somaAttr > somaTotal
    ) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  } */

  const handleSaveButton = () => {
    /* eslint-disable */ setCustoCarta(0),
    /* eslint-disable */ setNomeCarta(""),
    /* eslint-disable */ setDescricao(""),
    /* eslint-disable */ setImg(""),
    /* eslint-disable */ setAttr1(0),
    /* eslint-disable */ setAttr2(0),
    /* eslint-disable */ setAttr3(0),
    /* eslint-disable */ setRaridade("Normal"),
    /* eslint-disable */ setCardTrunfo(false),
    /* eslint-disable */ setBaralho([
      ...baralhoPrincipal,
    ]),
    setFiltrado(
      [...baralhoPrincipal],
    ),
    localStorage.setItem("copiaBaralho", JSON.stringify(baralhoPrincipal));
  };

  const numberOnly = (evt) => {
    const theEvent = evt || window.event;
    const key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    const regex = /([0-9]{4})/gm;
    if (!regex.test(key)) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 };

  const trunfo = baralhoPrincipal.filter((cartaa) => cartaa.cardTrunfo === true);
  const trunfoCheck = trunfo.length > 0;
  return (
    <div className="form-total">
      <form className="formulario">
        <div id="top-section-form">
          <input
            id="custo-input"
            type="text"
            name="custoCarta"
            value={ custoCarta }
            maxLength={3}
            onChange={(e) => setcustoCarta(e.target.value)}/>
          <input
            className={ nomeCarta.length >= 20 ? "input-form-max" : "input-form" }
            placeholder="Nome da Carta"
            type="text"
            name="nomeCarta"
            value={ nomeCarta }
            maxLength={20}
            onChange={(e) => setNomeCarta(e.target.value)} // o que for escrito, vira valor do Input
            id="name-input"
            />
          <div className="secao-raridade">
            <label
              className="texto-raridade-check-form"
              htmlFor="select-form-raridade"
            >
              Raridade
              <select
                id="select-form-raridade"
                name="raridade"
                value={raridade}
                data-testid="rare-input"
                onChange={(e) => setRaridade(e.target.value)}
                >
                <option>Normal</option>
                <option>Raro</option>
                <option>Lenda</option>
              </select>
            </label>
          </div>
        </div>
        <div id="img-area">
          <input
            name="imagem"
            className="input-form"
            placeholder="Link imagem"
            type="text"
            onChange={(e) => setImg(e.target.value)}
            value={imagem}
            id="image-input"
            />
          ou
          <label
          id="upload-img-label"
          htmlFor="upload-img">
            Upload
            <input
              type="image"
              src={criacao}
              alt="Submit"
              width="28"
              height="28"
              id="upload-img"
              />
          </label>
        </div>
        <div className="number-area">
          <span id="title-status">Status</span>
          <div id="attr-area">
            <div id="attr1-area">
              <img height="20px" src={vida} />
              <input
                className={attr1 === '999' ? "input-form-n-max" : "input-form-n"}
                type="text"
                placeholder="Valor atributo 1"
                name="attr1"
                max={999}
                onChange={(e) => setAttr1(e.target.value)}
                value={attr1}
                id="attr1-input"
              />
            </div>
            <div id="attr2-area">
            <img height="25px" src={forca} />
              <input
                className={attr2 === '999' ? "input-form-n-max" : "input-form-n"}
                type="text"
                inputMode="numeric"
                placeholder="Valor atributo 2"
                name="attr2"
                max={999}
                onChange={(e) => setAttr2(e.target.value)}
                value={attr2}
                id="attr2-input"
              />
            </div>
            <div id="attr3-area">
            <img height="20px" src={escudo} />
              <input
                className={attr3 === '999' ? "input-form-n-max" : "input-form-n"}
                type="text"
                placeholder="Valor atributo 3"
                name="attr3"
                max={999}
                onChange={(e) => setAttr3(e.target.value)}
                value={attr3}
                id="attr3-input"
              />
            </div>
          </div>
        </div>
        <textarea
          className={descricaoCarta.length >= 231 ? "input-form-max" : "input-form"}
          id="descricao-input"
          type="textarea"
          placeholder="Descrição da Carta"
          name="descricaoCarta"
          value={descricaoCarta}
          maxLength={237}
          onChange={(e) => setDescricao(e.target.value)}
          data-testid="description-input"
        />
        <div id="checkbox-save">
          {trunfoCheck ? (
            <span>Você já tem uma Super Carta em seu baralho</span>
          ) : (
            <div className="secao-checkbox">
              <input
                className="input-check-trunfo"
                name="cardTrunfo"
                type="checkbox"
                checked={cardTrunfo}
                onChange={() => setCardTrunfo(!cardTrunfo)}
                data-testid="trunfo-input"
              />
              <span className="texto-trunfo">Super Carta</span>
            </div>
          )}
          <button
            id={/* isSaveButtonDisabled ? "botao-salvar-off" : */ "botao-salvar-on"}
            name="save-button"
            type="button"
            disabled={false}
            onClick={handleSaveButton}
            data-testid="save-button"
            >
            Salvar
          </button>
          </div>
      </form>
    </div>
  );
}
export default Form;
