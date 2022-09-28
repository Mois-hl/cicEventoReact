import React from 'react'
import styles from './navbar.module.css'
import { Link } from "react-scroll";

export default function Navbar () {
  return (
    <nav className={styles.container}>
      <img src={require('../../assets/RyM.png')} alt='logo cic' />
      <ul className={styles.menu}>
        <li><Link activeClass={styles.active} to="header" spy={true} smooth={true} offset={-85} duration={500}>Inicio</Link></li>
        <li><Link activeClass={styles.active} to="acerca" spy={true} smooth={true} offset={-85} duration={500}>Acerca de</Link></li>
        <li><Link activeClass={styles.active} to="fechas" spy={true} smooth={true} offset={-85} duration={500}>Fechas</Link></li>
        <li><Link activeClass={styles.active} to="expositores" spy={true} smooth={true} offset={-85} duration={500}>Expositores</Link></li>
        <li><Link activeClass={styles.active} to="registro" spy={true} smooth={true} offset={-85} duration={500}>Registro</Link></li>
        <li><Link activeClass={styles.active} to="hack" spy={true} smooth={true} offset={-85} duration={500}>Hackathon</Link></li>
        <li><Link activeClass={styles.active} to="organizadores" spy={true} smooth={true} offset={-85} duration={500}>Organizadores</Link></li>
      </ul>
    </nav>
  )
}