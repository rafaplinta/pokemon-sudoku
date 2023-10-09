import React from 'react';
import './Header.css';
import logo from '../images/pokedoku-logo.png'
import DocumentTitle from 'react-document-title';

export default function Header() {
  return (
    <DocumentTitle title="Pokédoku">
    <header className='Header'>
    <img
        src={logo}
        alt="Logo Pokédoku"
    />
    </header>
  </DocumentTitle>
  );
}