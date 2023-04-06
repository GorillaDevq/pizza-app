import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/PizzaSkeleton";
import { api } from "../utils/api";
import { sortList } from "../utils/constant"

export default function HomePage() {
  // Стейты
  const [pizzaList, setPizzaList] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [activeType, setActiveType] = React.useState(sortList[0])
  const [activeCategory, setActiveCategory] = React.useState(0)

  const handleClickType = (item) => {
    setActiveType(item)
  }

  const handleClickCategory = (index) => {
    setActiveCategory(index)
  }

  //Жизненные циклы
  React.useEffect(() => {
    setIsLoading(true)
    api.getPizzas(activeCategory, activeType.sort)
      .then((res) => {
        setPizzaList(res)
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }, [activeType, activeCategory])
  
  return (
    <main className="content">
      <div className="container">
        <div className="content__top">
          <Categories activeCategory={activeCategory} onClickCategory={handleClickCategory}/>
          <Sort activeType={activeType} onClickType={handleClickType} sortList={sortList}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading 
          ? [...new Array(6)].map((item, index) => <PizzaSkeleton key={index}/>)
          : pizzaList.map((item) => <PizzaBlock {...item} key={item.id}/>)}
        </div>
      </div>
    </main>   
  )
}