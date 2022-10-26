import React from 'react';
import { Route, Routes } from 'react-router';
import MainPage from './components/MainPage';
import Baralho from './components/Baralho';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/baralho" element={ <Baralho /> } />
      </Routes>
    );
  }
}
export default App;
