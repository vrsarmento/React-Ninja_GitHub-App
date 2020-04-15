'use strict'

const centerRule = ({ total, activePage }) => {
  if (activePage - 1 <= 0) {
    return 1
  }
  return activePage - 1
}

const pagination = ({ total, activePage }) => {
  if (total <= 5) {
    // ES5 hack
    // return Array.apply(null, { length: total }).map((_, i) => i + 1)
    return Array.from({ length: total }, (_, i) => i + 1)
  }
  const visiblePages = 3
  let pages = [
    1,
    ...Array.from(
      { length: visiblePages }, 
      (_, i) => i + centerRule({ total, activePage })
    ),
    total
  ]
  pages = pages.filter((page, index, array) => array.indexOf(page) === index)

  let penultimatePage = pages[pages.length - 2]

  if (penultimatePage === (total - 2)) {
    pages = [
      ...pages.slice(0, -1),
      total - 1,
      total
    ]
  }

  penultimatePage = pages[pages.length - 2]
  if (penultimatePage <= (total -2)) {
    pages = [
      ...pages.slice(0, -1),
      '...',
      total
    ]
  }

  return pages
}

export default pagination