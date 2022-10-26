import React, { useContext } from 'react';
import '../CSS/Form.css';
import { Context } from '../Context/Provider';

// Feito com ajuda de Pesquisa no https://reactjs.org/docs/handling-events.html
function Form() {
  const {
    nomeCarta,
    setNomeCarta,
    descricaoCarta,
    setDescricao,
    imagem, setImg,
    attr1, setAttr1,
    attr2, setAttr2,
    attr3, setAttr3,
    raridade,
    setRaridade,
    cardTrunfo, setCardTrunfo,
    copiaBaralho, setCopiaBaralho,
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
    setNomeCarta(''),
    setDescricao(''),
    setImg(''),
    setAttr1(0),
    setAttr2(0),
    setAttr3(0),
    setRaridade('normal'),
    setCardTrunfo(false),
    setBaralho([
      ...baralhoPrincipal,
      {
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
    setCopiaBaralho([...baralhoPrincipal,
      {
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
    setFiltrado([...baralhoPrincipal,
      {
        nomeCarta,
        descricaoCarta,
        imagem,
        raridade,
        attr1,
        attr2,
        attr3,
        cardTrunfo,
      },
    ]);
    localStorage.setItem('baralho', baralhoPrincipal);
  };
  /*
    const { name } = target;
    const valor = (target.type === 'checkbox')
      ? target.checked
      : target.value;
    this.setState({
      [name]: valor,
    }, this.onSaveButtonClick); */

  const trunfo = copiaBaralho.filter((cartaa) => cartaa.cardTrunfo === true);
  const trunfoCheck = trunfo.length > 0;
  return (
    <div className="form-total">
      <form className="formulario">
        <input
          className="input-form"
          placeholder="Nome da Carta"
          type="text"
          name="nomeCarta"
          value={ nomeCarta }
          onChange={ (e) => setNomeCarta(e.target.value) } // o que for escrito, vira valor do onInput
          data-testid="name-input"
        />
        <textarea
          className="input-form"
          id="descricao-input"
          type="textarea"
          placeholder="Descrição da Carta"
          name="descricaoCarta"
          value={ descricaoCarta }
          onChange={ (e) => setDescricao(e.target.value) }
          data-testid="description-input"
        />
        <div className="number-area">
          <input
            className="input-form-n"
            type="number"
            placeholder="Valor atributo 1"
            name="attr1"
            onChange={ (e) => setAttr1(e.target.value) }
            value={ attr1 }
            data-testid="attr1-input"
          />
          <input
            className="input-form-n"
            type="number"
            inputMode="numeric"
            placeholder="Valor atributo 2"
            name="attr2"
            onChange={ (e) => setAttr2(e.target.value) }
            value={ attr2 }
            data-testid="attr2-input"
          />
          <input
            className="input-form-n"
            type="number"
            placeholder="Valor atributo 3"
            name="attr3"
            onChange={ (e) => setAttr3(e.target.value) }
            value={ attr3 }
            data-testid="attr3-input"
          />
        </div>
        <input
          name="imagem"
          className="input-form"
          placeholder="Link imagem"
          type="text"
          onChange={ (e) => setImg(e.target.value) }
          value={ imagem }
          data-testid="image-input"
        />
        <div className="secao-raridade">
          <span className="texto-raridade-check-form">Raridade:</span>
          <select
            id="select-form-raridade"
            name="raridade"
            value={ raridade }
            data-testid="rare-input"
            onChange={ (e) => setRaridade(e.target.value) }
          >
            <option>Normal</option>
            <option>Raro</option>
            <option>Lenda</option>
          </select>
        </div>
        {trunfoCheck ? (<span>Você já tem uma Super Carta em seu baralho</span>
        ) : (
          <div className="secao-checkbox">
            <input
              className="input-check-trunfo"
              name="cardTrunfo"
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ () => setCardTrunfo(!cardTrunfo) }
              data-testid="trunfo-input"
            />
            <span className="texto-trunfo">Super Carta</span>
          </div>) }
        <button
          id={ /* isSaveButtonDisabled ? "botao-salvar-off" : */ 'botao-salvar-on' }
          name="save-button"
          type="button"
          disabled={ false }
          onClick={ handleSaveButton }
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}
export default Form;
