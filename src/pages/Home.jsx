import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/PizzaSkeleton";
import { api } from "../utils/api";

export default function HomePage() {
  // Стейты
  const [pizzaList, setPizzaList] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  
  //Жизненные циклы
  React.useEffect(() => {
    api.getPizzas()
      .then((res) => {
        setPizzaList(res)
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }, [])
  
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
          ? [...new Array(6)].map((item, index) => <PizzaSkeleton key={index}/>)
          : pizzaList.map((item) => <PizzaBlock {...item} key={item.id}/>)}
        </div>
      </div>
    </main>   
  )
}