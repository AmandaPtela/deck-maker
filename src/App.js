import React from 'react';
import { Route, Routes } from 'react-router';
import MainPage from './components/MainPage';
import Colecao from './components/Colecao';
import Decks from './components/Decks';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/colecao" element={ <Colecao /> } />
        <Route path="/decks" element={ <Decks /> } />
      </Routes>
    );
  }
}
export default App;
