'use strict'

import React from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

const App = () => (
  <div className='app'>
    <Search />

    <UserInfo />

    <Actions />

    <Repos
      title='Repositórios'
      className='repos'
      repos={[{ name: 'Nome do Repositório', link: '#' }]}
    />

    <Repos
      title='Favoritos'
      className='starred'
      repos={[{ name: 'Nome do Repositório', link: '#' }]}
    />

  </div>
)

export default App
