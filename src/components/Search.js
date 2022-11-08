import React, { useState, useContext } from 'react';
import '../CSS/Search.css';
import { Context } from '../Context/Provider';
import { Link } from 'react-router-dom';
import img from '../Images/logo-header2.png';
import criacao from '../Images/img-criacao2.png';

function Search() {
  const [clicked, setClicked] = useState(false);
     /* eslint-disable */ const [filtro, setFiltro] = useState('');
  const {
    baralhoPrincipal,
    filtrado,
    setFiltrado,
  } = useContext(Context);

  const filtrar = (e) => {
    setFiltro(e);
  };
  const buscarRaridade = (filtroo) => {
    if (filtroo === 'Raro') {
      const filtradoRaro = baralhoPrincipal.filter((item) => item.raridade === filtroo);
      return setFiltrado(filtradoRaro);
    }
    if (filtroo === 'Normal') {
      const filtradoRaro = baralhoPrincipal.filter((item) => item.raridade === filtroo);
      return setFiltrado(filtradoRaro);
    }
    if (filtroo === 'Lenda') {
      const filtradoRaro = baralhoPrincipal.filter((item) => item.raridade === 'Lenda');
      return setFiltrado(filtradoRaro);
    }
    if (filtroo === 'Todas') {
      return setFiltrado(baralhoPrincipal);
    }
    if (filtroo === 'Super Carta') {
      const trunfoss = baralhoPrincipal.find((item) => item.cardTrunfo === true);
      return setFiltrado([trunfoss]);
    }
    if(filtroo) {
      const filtradoNome = baralhoPrincipal.filter((item) => item.nomeCarta.toUpperCase().includes(filtroo.toUpperCase()));
      setFiltrado(filtradoNome);
    }
    else {
      return setFiltrado(baralhoPrincipal);
    }
  }

  return (
    <div className="search-area">
      { clicked === true
        ? (
          <div className="header-clicked-on">
            <div id="logo-card-search-on">
              <img id="logo-icon-on" height="20px" src={ img } alt="ícone de carta" />
              <p id="logo-text-search-on" >Deck Maker. </p>
            </div>
            <div id="mid-header-search-on">
              <label className="labels" htmlFor="label-busca">Busca por:
                <input
                  id="input-nome"
                  placeholder="Nome da carta"
                  onChange={ (e) => {
                    filtrar(e.target.value);
                    buscarRaridade(e.target.value);
                  } }
                />
              </label>
              <label className="labels">ou</label>
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
            <div id="logo-card-search-off">
              <img id="logo-icon-search-off" height="23px" src={ img } alt="ícone de carta" />
              <p id="logo-text-search-off" >Deck Maker. </p>
            </div>
            <div id="mid-header-search-off">
              <img className="header-icon-search-off" height="30px" src={ criacao } />
              <span id="title-header-search-off">Coleção</span>
            </div>
            <div id="area-botao-off">
              <Link
                onClick={ () => setClicked(true) }
                id="pesquisa"
                >
                Pesquisar carta
              </Link>
              <Link to="/" id="botao-voltar">Voltar</Link>
            </div>
          </div>
        )}
    </div>

  );
}

export default Search;
