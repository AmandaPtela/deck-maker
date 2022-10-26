import React from 'react';
import '../CSS/MainPage.css';
import Form from './Form';
import Card from './Card';
import Header from './Header';

function MainPage() {
  // resolvido com ajuda dos colegas Carla (turma 20A) e Jessy Damasceno(Turma 21A)
  return (
    <div className="MainPage-geral">
      <Header />
      <div className="form-e-preview-area">
        <Form />
        <Card />
      </div>
    </div>
  );
}
export default MainPage;
