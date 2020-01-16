'use strict'

import React from 'react'

const App = () => (
  <div className='app'>
    <div className='search'>
      <input type='search' placeholder='Digite o nome de usuário no GitHub' />
    </div>

    <div className='user-info'>
      <img src='https://avatars2.githubusercontent.com/u/2380231?v=4' />
      <h1 className='username'>
        <a href='https://github.com/vrsarmento'>Victor Rocha</a>
      </h1>

      <ul className='repos-info'>
        <li>Repositórios: 122</li>
        <li>Seguidores: 12</li>
        <li>Seguindo: 30</li>
      </ul>

      <div className='actions'>
        <button>Ver repositórios</button>
        <button>Ver favoritos</button>
      </div>

      <div className='repos'>
        <h2>Repositórios</h2>
        <ul>
          <li><a href='#'>Nome do repositório</a></li>
          <li><a href='#'>Nome do repositório</a></li>
          <li><a href='#'>Nome do repositório</a></li>
        </ul>
      </div>

      <div className='starred'>
        <h2>Favoritos</h2>
        <ul>
          <li><a href='#'>Nome do repositório</a></li>
          <li><a href='#'>Nome do repositório</a></li>
          <li><a href='#'>Nome do repositório</a></li>
        </ul>
      </div>
    </div>
  </div>
)

export default App
