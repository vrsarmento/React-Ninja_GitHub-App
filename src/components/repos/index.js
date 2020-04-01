'use strict'

import React, { PropTypes } from 'react'
import './repos.css'

const Repos = ({ title, className, repos }) => (
  <div className={className}>
    <h2>{title}:</h2>
    <ul>
      {repos.map((repo) => (
        <li key={repo.id}><a href={repo.link}>{repo.name}</a></li>
      ))}
    </ul>
  </div>
)

Repos.defaultProps = {
  className: '',
  title: ''
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
