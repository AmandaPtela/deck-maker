import React from 'react';
import { Route, Routes } from 'react-router';
import Menu from './components/Menu';
import MainPage from './components/MainPage';
import Colecao from './components/Colecao';
import Decks from './components/Decks';

function App () {
  return (
    <Routes>
      <Route path="/" element={ <Menu /> } />
      <Route path="/criacao" element={ <MainPage /> } />
      <Route path="/colecao" element={ <Colecao /> } />
      <Route path="/decks" element={ <Decks /> } />
    </Routes>
  );
}
export default App;
