//Библиотеки
import React from "react";

//Стили
import styles from "./NotFoundBlock.module.scss"

export default function NotFoundBlock() {
  console.log(styles)
  return (
    <main className={styles.content}>
      <h1>Ничего не найдено 😕</h1>
      <p>К сожалению данная страница отсутствует в нашем магазине</p>
    </main>
  )
}