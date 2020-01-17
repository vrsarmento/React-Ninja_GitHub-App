'use strict'

import React from 'react'

const UserInfo = () => (
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
  </div>
)

export default UserInfo
