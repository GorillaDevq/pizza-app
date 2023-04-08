import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/PizzaSkeleton";
import Paginate from "../components/Pagination";

import { useSelector } from "react-redux";

import { api } from "../utils/api";

export default function HomePage(props) {
  //Стейты
  const [pizzaList, setPizzaList] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  const activeCategory = useSelector(state => state.filter.sortCategory)
  const activeType = useSelector(state => state.filter.sortType)
  const searchValue = useSelector(state => state.filter.sortTitle)
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
  
  const renderList = () => pizzaList.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => <PizzaBlock {...item} key={item.id}/>)
  const renderSkeleton = () => [...new Array(6)].map((item, index) => <PizzaSkeleton key={index}/>)
  return (
    <main className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading 
          ? renderSkeleton()
          : renderList()
          }
        </div>
        <div className="navigation">
          <Paginate />
        </div>
      </div>
    </main>   
  )
}