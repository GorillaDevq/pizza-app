import React from 'react'

import searchPath from '../assets/images/search.svg'
import clearPath from "../assets/images/clear.svg"
import { useSelector, useDispatch } from 'react-redux'
import { setSortTitle } from '../redux/filter/filterSlice'

export default function Search(props) {
  const searchValue = useSelector(state => state.filter.sortTitle)
  const dispatch = useDispatch()

  return (
    <div className="search">
      <button className="search__button search__button_type_search">
        <img src={searchPath} alt="Поиск" className="search__svg"/>
      </button>
      <input className="search__input" type="text" placeholder="Поиск пиццы" value={searchValue || ''} onChange={(e) => dispatch(setSortTitle(e.target.value))}/>
      {props.searchValue &&
        <button className="search__button search__button_type_clear" onClick={() => dispatch(setSortTitle(''))}>
          <img src={clearPath} alt="Поиск" className="search__svg"/>
        </button>
      }
    </div>
  )
}