import React from "react"
import { categories } from "../utils/constant"
import { setSortCategory } from "../redux/filter/filterSlice"
import { useSelector, useDispatch } from "react-redux"

export default function Categories(props) {
  const activeCategory = useSelector(state => state.filter.sortCategory)
  const dispatch = useDispatch()
  
  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) =>{
          return (
            <li key={item} onClick={() => dispatch(setSortCategory(index))} className={activeCategory === index ? "active" : ''}>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}