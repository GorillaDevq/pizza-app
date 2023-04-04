import React from "react"
import { categories } from "../utils/constant"

export default function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) =>{
          return (
            <li key={item} onClick={() => setActiveIndex(index)} className={activeIndex === index ? "active" : ''}>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}