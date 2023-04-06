import React from "react"
import { categories } from "../utils/constant"

export default function Categories(props) {
  

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) =>{
          return (
            <li key={item} onClick={() => props.onClickCategory(index)} className={props.activeCategory === index ? "active" : ''}>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}