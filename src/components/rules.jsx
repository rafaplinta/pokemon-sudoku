import React from 'react';
import comojogar from '../images/comojogar.png';
import './Rules.css';

export default function Rules() {
  return (
    <div className='rules-container'>
      <header>
        <img
          src={comojogar}
          alt="Imagem Como Jogar"
        />
      </header>
      <body>
        <p>O objetivo do Pokédoku é preencher todo o tabuleiro, conforme os requisitos de cada linha e coluna, sem repetir personagens.</p>
        <p>Digite o nome do pokémon desejado na caixa de pesquisa e, então, clique na célula desejada para adicioná-lo.</p>
        <p>Divirta-se!</p> 
        <img
          src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/55e9f737-071f-43e4-95a1-e364df4055f1/deb92i3-cdbced98-2769-4322-b8db-e3a504a295e7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1ZTlmNzM3LTA3MWYtNDNlNC05NWExLWUzNjRkZjQwNTVmMVwvZGViOTJpMy1jZGJjZWQ5OC0yNzY5LTQzMjItYjhkYi1lM2E1MDRhMjk1ZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ZprqWr3pA4_HR5JuNFU1eLz_lBl1GyzZvoPIOGjO1Ig'
          alt="Furret walking"
        />
      </body>
    </div>
  );
}