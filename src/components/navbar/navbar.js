import React from 'react'
import styles from './navbar.module.css'

export default function Navbar () {
  return (
    <nav className={styles.container}>
      <img src={require('../../assets/RyM.png')} alt='logo cic' />
      <ul className={styles.menu}>
        <li><a href='/#'>Inicio</a></li>
        <li><a href='/#'>Acerca de</a></li>
        <li><a href='/#'>Fechas</a></li>
        <li><a href='/#'>Expositores</a></li>
        <li><a href='/#'>Hackathon</a></li>
        <li><a href='/#'>Registro</a></li>
        <li><a href='/#'>Organizadores</a></li>
      </ul>
    </nav>
  )
}