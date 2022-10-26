import React, { useState, useContext } from 'react';
import '../CSS/Search.css';
import { Context } from '../Context/Provider';
import { Link } from 'react-router-dom';

function Search() {
  const [clicked, setClicked] = useState(false);
  const [filtro, setFiltro] = useState('');
  const {
    filtrado,
    setCopiaBaralho,
  } = useContext(Context);

  const filtrar = (e) => {
    setFiltro(e);
  };
  const buscarRaridade = (filtroo) => {
    if (filtroo === 'Raro') {
      const filtradoRaro = filtrado.filter((item) => item.raridade === filtroo);
      return setCopiaBaralho(filtradoRaro);
    }
    if (filtroo === 'Normal') {
      const filtradoRaro = filtrado.filter((item) => item.raridade === filtroo);
      return setCopiaBaralho(filtradoRaro);
    }
    if (filtroo === 'Lenda') {
      const filtradoRaro = filtrado.filter((item) => item.raridade === 'Lenda');
      return setCopiaBaralho(filtradoRaro);
    }
    if (filtroo === 'Todas') {
      return setCopiaBaralho(filtrado);
    }
    if (filtroo === 'Super Carta') {
      const trunfoss = filtrado.find((item) => item.cardTrunfo === true);
      return setCopiaBaralho([trunfoss]);
    }
    if(filtroo) {
      const filtradoNome = filtrado.filter((item) => item.nomeCarta.toUpperCase().includes(filtroo.toUpperCase()));
      console.log(filtradoNome);
      setCopiaBaralho(filtradoNome);
    }
    else {
      return setCopiaBaralho(filtrado);
    }
  }

  return (
    <div className="search-area">
      { clicked === true
        ? (
          <div className="header-clicked-on">
            <div id="area-filtro">
              <span id="label-busca">Busca por: </span> {' '}
              <input
                id="input-nome"
                placeholder="Nome da carta"
                onChange={ (e) => {
                  filtrar(e.target.value);
                  buscarRaridade(e.target.value);
                } }
                />
              <span id="label-busca"> ou </span>
              <label className="labels" htmlFor="select-raridade">
                
                <select
                  onChange={ (e) => {
                    filtrar(e.target.value);
                    buscarRaridade(e.target.value);
                  } }
                  id="select-raridade"
                >
                  <option>Todas</option>
                  <option>Normal</option>
                  <option>Raro</option>
                  <option>Lenda</option>
                  <option>Super Carta</option>
                </select>
                Raridade
              </label>
            </div>
            <div id="area-botao-on">
              <Link to="/" id="botao-voltar">Voltar</Link>
            </div>
          </div>)
        : (
          <div className="header-clicked-off">
          <Link to="/" id="botao-voltar">Voltar</Link>
          <Link
            onClick={ () => setClicked(true) }
            id="pesquisa"
            >
            Pesquisar carta
          </Link>
          </div>
        )}
    </div>

  );
}

export default Search;
