import React from 'react'
import debounce from 'lodash.debounce'
//Редакс
import { useSelector, useDispatch } from 'react-redux'
import { setSortTitle } from '../redux/filter/filterSlice'
//Пикчи
import searchPath from '../assets/images/search.svg'
import clearPath from "../assets/images/clear.svg"


export default function Search(props) {
  const inputRef = React.useRef(null)
  const [value, setValue] = React.useState('')
  const debounceSearch = React.useCallback(
  debounce((evt) => {
    dispatch(setSortTitle(evt))
  }, 500),[])


  const searchValue = useSelector(state => state.filter.sortTitle)
  const dispatch = useDispatch()


  const onClickClear = () => {
    setValue('')
    dispatch(setSortTitle(''))
    inputRef.current.focus()
  }

  const onChangeInput = (e) => {
    setValue(e.target.value)
    debounceSearch(e.target.value)
  }

  return (
    <div className="search">
      <button className="search__button search__button_type_search">
        <img src={searchPath} alt="Поиск" className="search__svg"/>
      </button>
      <input ref={inputRef} className="search__input" type="text" placeholder="Поиск пиццы" value={value || ''} onChange={onChangeInput}/>
      {value &&
        <button className="search__button search__button_type_clear" onClick={onClickClear}>
          <img src={clearPath} alt="Поиск" className="search__svg"/>
        </button>
      }
    </div>
  )
}