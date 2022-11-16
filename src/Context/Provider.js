import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export function Provider({ children }) {
  const [custoCarta, setCustoCarta] = useState(0);
  const [nomeCarta, setNomeCarta] = useState('');
  const [descricaoCarta, setDescricao] = useState('');
  const [imagem, setImg] = useState('');
  const [attr1, setAttr1] = useState('0');
  const [attr2, setAttr2] = useState('0');
  const [attr3, setAttr3] = useState('0');
  const [isSaveButtonDisabled, setButtonState] = useState(true);
  const [raridade, setRaridade] = useState('Normal');
  const [cardTrunfo, setCardTrunfo] = useState(false);
  const [carta, setCarta] = useState('');
  const [copiaBaralho, setCopiaBaralho] = useState([]);
  const [id, setId] = useState(false);
  // const [filtro, setFiltro] = useState('');
  const [baralhoPrincipal, setBaralho] = useState([]);
  const [filtrado, setFiltrado] = useState([]);
  const [deck, setDecks ] = useState([]);
  const [baralho, setBaralhoTeste ] = useState({nome:'', cartas: []});
  const [logged, setLoggedOn ] = useState(false);

  return (
    <Context.Provider
      value={ {
        custoCarta,
        setCustoCarta,
        nomeCarta,
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
        carta,
        setCarta,
        copiaBaralho,
        setCopiaBaralho,
        id,
        setId,
        baralhoPrincipal,
        setBaralho,
        isSaveButtonDisabled,
        setButtonState,
        // filtro,
        // setFiltro,
        filtrado,
        setFiltrado,
        deck,
        setDecks,
        baralho,
        setBaralhoTeste,
        logged,
        setLoggedOn,
      } }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
