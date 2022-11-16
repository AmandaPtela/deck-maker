import React, { useContext } from "react";
import "../CSS/Form.css";
import { Context } from "../Context/Provider";
import criacao from '../Images/upload.png';
import forca from '../Images/forca.png';
import vida from '../Images/vida.png';
import escudo from '../Images/escudo.png';
import custo from '../Images/custo.png';
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
    baralho,
    setBaralhoTeste,
    deck,
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
    const cartinha = {
      custoCarta,
      nomeCarta,
      descricaoCarta,
      imagem,
      raridade,
      attr1,
      attr2,
      attr3,
      cardTrunfo,
    }

    /* eslint-disable */ setBaralho([
      ...baralhoPrincipal,
      {
        custoCarta,
        nomeCarta,
        descricaoCarta,
        imagem,
        raridade,
        attr1,
        attr2,
        attr3,
        cardTrunfo,
      },
    ]),
    setBaralhoTeste(prevState => {
      return { ...prevState, cartas: [...baralho.cartas, cartinha]}} )
      localStorage.setItem("baralhos", JSON.stringify([{...baralho}]));
      setFiltrado(
        [...baralhoPrincipal],
        );
        /* eslint-disable */ setCustoCarta(0),
        /* eslint-disable */ setNomeCarta(""),
        /* eslint-disable */ setDescricao(""),
        /* eslint-disable */ setImg(""),
        /* eslint-disable */ setAttr1(0),
        /* eslint-disable */ setAttr2(0),
        /* eslint-disable */ setAttr3(0),
        /* eslint-disable */ setRaridade("Normal"),
        /* eslint-disable */ setCardTrunfo(false);
        console.log(deck);
        console.log(baralho);
 };

  const trunfo = baralhoPrincipal.filter((carta) => carta.cardTrunfo === true);
  const trunfoCheck = trunfo.length > 0;
  return (
    <div className="form-total">
      <form className="formulario">
        <div id="top-section-form">
          <div id="custo-area">
            <div id="label-area">
              <img height="20px" src={custo} />
              <label htmlFor="custo-input">Custo</label>
            </div>
            <input
              id="custo-input"
              type="text"
              name="custoCarta"
              value={ custoCarta }
              maxLength={1}
              onChange={(e) => setCustoCarta(e.target.value)}
            />
          </div>
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
            id="image-input"
            value={imagem}
            />
          ou
          <input
            type="file"
            alt="Submit"
            width="20"
            height="20"
            id="upload-img"
            onChange={(e) => setImg(e.target.value)}
            />
          
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
                maxLength={3}
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
                maxLength={3}
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
                maxLength={3}
                max={999}
                onChange={(e) => setAttr3(e.target.value)}
                value={attr3}
                id="attr3-input"
              />
            </div>
          </div>
        </div>
        <textarea
          className={descricaoCarta.length >= 170 ? "input-form-max" : "input-form"}
          id="descricao-input"
          type="textarea"
          placeholder="Descrição da Carta"
          name="descricaoCarta"
          value={descricaoCarta}
          maxLength={170}
          onChange={(e) => setDescricao(e.target.value)}
          data-testid="description-input"
        />
        <div id="checkbox-save">
          {trunfoCheck ? (
            <span id="aviso-sp" >Já existe uma Super Carta em seu baralho</span>
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
