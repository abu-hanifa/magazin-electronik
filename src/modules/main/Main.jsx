import React from 'react'
import styles from './Main.module.css'
import Block from './Block'
import Menu from './Menu'

export default function Main() {
  return (
    <div className={styles.main1}>
    <Menu/>
    <div className={styles.main}>
      <Block title="АЙФОН" price="1888" discount="7777" img="https://img.mvideo.ru/Big/30064939bb.jpg"/>
      <Block title="macbook" price="120000" discount="14000" img="https://img.mvideo.ru/Pdb/30064275b.jpg"/>
      <Block title="подводный скутер" price="68000" discount="72000" img="https://img.mvideo.ru/Big/10025102bb.jpg"/>
      <Block title="телевизор" price="35000" discount="28500" img="https://img.mvideo.ru/Big/10030422bb.jpg"/>
      <Block title="стиральная машина" price="40000" discount="51000" img="https://img.mvideo.ru/Big/20065088bb.jpg"/>
      <Block title="playstation 5" price="55000" discount="71000" img="https://img.mvideo.ru/Pdb/400147711b.jpg"/>
    </div>
    </div>

  )
}
