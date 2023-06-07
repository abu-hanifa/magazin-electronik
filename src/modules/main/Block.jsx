import React from 'react'
import styles from './Main.module.css'

export default function Block({title,price,discount,img}) {
  return (
    <div className={styles.block}>
        <img src={img} alt="" />
        <div className={styles.price}>
            <span className={styles.one}>{price}</span>
            <span className={styles.two}>{discount}</span>
        </div>
        <div className={styles.name}>{title}</div>
        <button className={styles.button}>App</button>
    </div>
  )
}
