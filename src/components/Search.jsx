import React from 'react'

import searchPath from '../assets/images/search.svg'
import clearPath from "../assets/images/clear.svg"
import { SearchContext } from '../contexts/SearchContext/SearchContext'
export default function Search(props) {

  const { searchValue, setSearchValue } = React.useContext(SearchContext)

  return (
    <div className="search">
      <button className="search__button search__button_type_search">
        <img src={searchPath} alt="Поиск" className="search__svg"/>
      </button>
      <input className="search__input" type="text" placeholder="Поиск пиццы" value={searchValue || ''} onChange={(e) => setSearchValue(e.target.value)}/>
      {props.searchValue &&
        <button className="search__button search__button_type_clear" onClick={() => setSearchValue('')}>
          <img src={clearPath} alt="Поиск" className="search__svg"/>
        </button>
      }
    </div>
  )
}