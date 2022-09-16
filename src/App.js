import styles from './App.module.css'
import Navbar from './components/navbar/navbar'
import React from 'react'

export default function App() {
  return (
    <div>
      <Navbar />
      <header className={styles.header} >
        <div className={styles.title} >
          <h1>3er COLOQUIO DE CÓMPUTO CUÁNTICO DEL CIC</h1>
          <p>Organziado por el laboratorio de Robótica y Mecátronica</p>
        </div>
      </header>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div>
            <h2>Acerca de</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit a doloremque saepe exercitationem ullam corrupti commodi id perspiciatis magni molestias, facilis possimus iusto earum modi sunt magnam unde voluptatum voluptate quod dignissimos optio, officiis laborum nulla. Et, cum labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit a doloremque saepe exercitationem ullam corrupti commodi id perspiciatis magni molestias, facilis possimus iusto earum modi sunt magnam unde voluptatum voluptate quod dignissimos optio, officiis laborum nulla. Et, cum labore!</p>
          </div>
          <img className={styles.images} src={require('./assets/FallFestWordMark.png')} alt='logo evento' />
        </div>
        <div className={styles.container}>
          <div>
            <h2>Fechas</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit a doloremque saepe exercitationem ullam corrupti commodi id perspiciatis magni molestias, facilis possimus iusto earum modi sunt magnam unde voluptatum voluptate quod dignissimos optio, officiis laborum nulla. Et, cum labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit a doloremque saepe exercitationem ullam corrupti commodi id perspiciatis magni molestias, facilis possimus iusto earum modi sunt magnam unde voluptatum voluptate quod dignissimos optio, officiis laborum nulla. Et, cum labore!</p>
          </div>
          <div style={{background: '#00000055', width:'100%', height:'20rem', borderRadius: 20}}></div>
        </div>
        <div className={styles.container}>
          <div>
            <h2>Expositores</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit a doloremque saepe exercitationem ullam corrupti commodi id perspiciatis magni molestias, facilis possimus iusto earum modi sunt magnam unde voluptatum voluptate quod dignissimos optio, officiis laborum nulla. Et, cum labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit a doloremque saepe exercitationem ullam corrupti commodi id perspiciatis magni molestias, facilis possimus iusto earum modi sunt magnam unde voluptatum voluptate quod dignissimos optio, officiis laborum nulla. Et, cum labore!</p>
          </div>
          <div style={{background: '#00000055', width:'100%', height:'20rem', borderRadius: 20}}></div>
        </div>
        <div className={styles.container}>
          <div>
            <h2>Hackathon</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit a doloremque saepe exercitationem ullam corrupti commodi id perspiciatis magni molestias, facilis possimus iusto earum modi sunt magnam unde voluptatum voluptate quod dignissimos optio, officiis laborum nulla. Et, cum labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit a doloremque saepe exercitationem ullam corrupti commodi id perspiciatis magni molestias, facilis possimus iusto earum modi sunt magnam unde voluptatum voluptate quod dignissimos optio, officiis laborum nulla. Et, cum labore!</p>
          </div>
          <div style={{background: '#00000055', width:'100%', height:'20rem', borderRadius: 20}}></div>
        </div>
        <div className={styles.prueba}></div>
        <div className={styles.container}>
          <div>
            <h2>Hackathon</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit a doloremque saepe exercitationem ullam corrupti commodi id perspiciatis magni molestias, facilis possimus iusto earum modi sunt magnam unde voluptatum voluptate quod dignissimos optio, officiis laborum nulla. Et, cum labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit a doloremque saepe exercitationem ullam corrupti commodi id perspiciatis magni molestias, facilis possimus iusto earum modi sunt magnam unde voluptatum voluptate quod dignissimos optio, officiis laborum nulla. Et, cum labore!</p>
          </div>
          <div style={{width:'100%', height:'100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10}}>
            <div style={{background: '#00000055', width:'100%', height:'4rem', borderRadius: 20}}></div>
              <p>Para registrarse de click en el botón</p>
              <a href='https://airtable.com/shrUZ218gQFxLE1ML' className={styles.boton}>Registro</a >
          </div>
        </div>
        <div className={styles.containerSecondary}>
          <h2>Organizadores</h2>
          <div className={styles.organizadores}>
            <ul>
              <li style={{ listStyle: 'none', marginBottom: 10 }}><strong>Presidente: </strong></li>
              <li>M. en C. Alberto Maldonado Romo</li>
            </ul>
            <ul>
              <li style={{ listStyle: 'none', marginBottom: 10 }}><strong>Comité técnico: </strong></li>
              <li>Dr. Jesús Yaljá Montiel Pérez</li>
              <li>Dr. Juan Humberto Sossa Azuela</li>
              <li>Dr. Ponciano Jorge Escamilla Ambrosio</li>
              <li>Dra. Elsa Rubio Espino</li>
              <li>Dr. Erik Zamora Gómez</li>
              <li>Dr. Sergio Vidal Beltrán</li>
            </ul>
            <ul>
              <li style={{ listStyle: 'none', marginBottom: 10 }}><strong>Coordinador adm.: </strong></li>
              <li>Dr. Juan Carlos Chimal Eguia</li>
            </ul>
            <ul>
              <li style={{ listStyle: 'none', marginBottom: 10 }}><strong>Apoyo logístico: </strong></li>
              <li>M en C. Elizabeth López Lozada</li>
              <li>M en C. David Peréz Martínez</li>
              <li>M en C. José Angel Martínez Navarro</li>
              <li>M en C. Mario Alfredo Ibarra Carrillo</li>
              <li>Ing. Diana Patricia Barragán Vázquez</li>
            </ul>
          </div>
        </div>
      </div>
      <footer className={ styles.footer}>
        <img src={require('./assets/logoLab.png')} alt='logo cic' />
        <div style={{ marginTop: 10 }}>
          <p>Instituto Politécnico Nacional</p>
          <p>Centro de Investigación en Computación</p>
          <p>Laboratorio de Robótica y Mecatrónica</p>
        </div>
        <div style={{ marginTop: 10 }}>
          <p><strong>Dirección</strong></p>
          <p>Av. Juan de Dios Bátiz, esq. Miguel Othón de Mendizábal,</p>
          <p>Col.Nueva Industrial Vallejo, Alcaldía Gustavo A. Madero,<br></br> C.P. 07738, CDMX</p>
        </div>
      </footer>
    </div>
  )
}