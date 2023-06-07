import React from 'react'
import styles from './Header.module.css'
import Logo from './Logo'
import Cart from './Cart'

export default function Header() {
  return (
    <div className={styles.header}>
      <Logo/>
      <Cart/>

    </div>
  )
}
