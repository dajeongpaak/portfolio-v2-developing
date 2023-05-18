import React from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


// import Navbar from '../navigation/Navbar'
import styles from './Header.module.scss'

function Header() {
  return ( 
    <header className={styles._container}> 
      <nav className={styles.nav}>
          <ul className={styles.flex}>
            <li className={styles.nav__logo}>
              <Link to="/">DAJEONGPARK</Link>
            </li> 
            <li className={styles.nav__item}>
              <Link to="/about">ABOUT</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/work">WORK</Link>
            </li>
          </ul>
      </nav>
    </header>
  )
}

export default Header
