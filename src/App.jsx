import React from 'react'
import Header from './modules/header/Header'
import Main from './modules/main/Main'

import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
        <Header/>
        <Main/>
        
    </div>
  )
}
