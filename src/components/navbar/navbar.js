import React, {useState} from 'react'
import styles from './navbar.module.css'
import { Link } from "react-scroll";
import { Sidebar, useProSidebar } from 'react-pro-sidebar';

export default function Navbar () {
  const [isMenuActive, setMenuActive] = useState(true);

  const handleMenu = () => {
    setMenuActive(isMenuActive ? false : true);
  }

  const { collapseSidebar } = useProSidebar();

  return (
    <nav className={styles.container}>
      {isMenuActive && <div className={styles.sidebarMenu}>
        <Sidebar collapsedWidth='0px' backgroundColor='#00000022'>
          <Link to="header" spy={true} smooth={true} offset={-85} duration={500}>Inicio</Link>
          <Link to="acerca" spy={true} smooth={true} offset={-85} duration={500}>Acerca de</Link>
          <Link to="fechas" spy={true} smooth={true} offset={-85} duration={500}>Fechas</Link>
          <Link to="expositores" spy={true} smooth={true} offset={-85} duration={500}>Expositores</Link>
          <Link to="registro" spy={true} smooth={true} offset={-85} duration={500}>Registro</Link>
          <Link to="hack" spy={true} smooth={true} offset={-85} duration={500}>Hackathon</Link>
          <Link to="talleristas" spy={true} smooth={true} offset={-15} duration={500}>Talleristas</Link>
        </Sidebar>
      </div>}
        <div className={styles.barsMenu} onClick={() => {
          collapseSidebar()
          handleMenu()
        }}>
          <span className={isMenuActive ? styles.activeline1Bars : undefined}></span>
          <span className={isMenuActive ? styles.activeline2Bars : undefined}></span>
          <span className={isMenuActive ? styles.activeline3Bars : undefined}></span>
        </div>
      <img src={require('../../assets/RyM.png')} alt='logo cic' />
      <ul className={styles.menu}>
        <li><Link activeClass={styles.active} to="header" spy={true} smooth={true} offset={-85} duration={500}>Inicio</Link></li>
        <li><Link activeClass={styles.active} to="acerca" spy={true} smooth={true} offset={-85} duration={500}>Acerca de</Link></li>
        <li><Link activeClass={styles.active} to="fechas" spy={true} smooth={true} offset={-85} duration={500}>Fechas</Link></li>
        <li><Link activeClass={styles.active} to="registro" spy={true} smooth={true} offset={-85} duration={500}>Registro</Link></li>
        <li><Link activeClass={styles.active} to="expositores" spy={true} smooth={true} offset={-85} duration={500}>Expositores</Link></li>
        <li><Link activeClass={styles.active} to="hack" spy={true} smooth={true} offset={-85} duration={500}>Hackathon</Link></li>
        <li><Link activeClass={styles.active} to="talleristas" spy={true} smooth={true} offset={-15} duration={500}>Talleristas</Link></li>
      </ul>
    </nav>
  )
}