'use strict'

import React, { PropTypes } from 'react'
import Pagination from 'components/pagination'
import './repos.css'

const Repos = ({ title, className, repos, handlePagination }) => (
  <div className={className}>
    <h2>{title}:</h2>
    <ul>
      {repos.repos.map((repo) => (
        <li key={repo.id}><a href={repo.link}>{repo.name}</a></li>
      ))}
    </ul>
    <Pagination total={10} activePage={2} onClick={handlePagination} />
  </div>
)

Repos.defaultProps = {
  className: '',
  title: ''
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.shape({
    repos: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired,
    pagination: PropTypes.shape({
      total: PropTypes.number.isRequired,
      activePage: PropTypes.number.isRequired
    }).isRequired
  }),
  handlePagination: PropTypes.func.isRequired
}

export default Repos
