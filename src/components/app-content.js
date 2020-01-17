'use strict'

import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = () => (
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

export default AppContent
