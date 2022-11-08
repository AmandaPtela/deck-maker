import React from 'react';
import '../CSS/MainPage.css';
import Form from './Form';
import Card from './Card';
import Header from './Header';
import { useLocation } from 'react-router-dom';

function MainPage() {
  const page = useLocation();
  return (
      <div className="MainPage-geral">
        <Header url={page} title="Criação"/>
        <div className="form-e-preview-e-botoes">
          <Form />
          <Card />
      </div>
    </div>
  );
}
export default MainPage;
