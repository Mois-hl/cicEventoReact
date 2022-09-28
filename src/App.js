import styles from './App.module.css'
import Navbar from './components/navbar/navbar'
import React from 'react'

export default function App() {
  return (
    <div>
      <Navbar />
      <header id='header' className={styles.header} >
        <div className={styles.title} >
          <h1>3er COLOQUIO DE CÓMPUTO CUÁNTICO DEL CIC</h1>
          <p>Organziado por el laboratorio de Robótica y Mecátronica</p>
        </div>
      </header>
      <div className={styles.mainContainer}>
        <div className={styles.containerSecondary}>
          <h2>Sponsors Coloquio</h2>
          <div className={styles.imagenesSponsor}>
            <img src={require('./assets/sponsors/entropica.png')} alt='imagen sponsor' />
            <img src={require('./assets/sponsors/Hood_College_Shield.png')} alt='imagen sponsor' />
            <img src={require('./assets/sponsors/ibm_quantum.jpeg')} alt='imagen sponsor' />
            <img src={require('./assets/sponsors/multiverse.png')} alt='imagen sponsor' />
            <img src={require('./assets/sponsors/oxford.png')} alt='imagen sponsor' />
            <img src={require('./assets/sponsors/qbraid_logo_verbose-large.png')} alt='imagen sponsor' />
            <img src={require('./assets/sponsors/quantum_universal_education.png')} alt='imagen sponsor' />
            <img src={require('./assets/RyM.png')} alt='imagen sponsor' />
            <img src={require('./assets/IPN-logo.png')} alt='imagen sponsor' />
            <img src={require('./assets/cic-logo.png')} alt='imagen sponsor' />
            <img src={require('./assets/sponsors/tec_monterrey.png')} alt='imagen sponsor' />
            <img src={require('./assets/sponsors/UF-logo-tagline.png')} alt='imagen sponsor' />
            <img src={require('./assets/sponsors/universidad de cordoba.png')} alt='imagen sponsor' />
            <img src={require('./assets/sponsors/Xanadu Horizontal Logo — Black.png')} alt='imagen sponsor' />
            <img src={require('./assets/sponsors/zapatalogo_2.png')} alt='imagen sponsor' />
          </div>
        </div>
        <div id='acerca' className={styles.container}>
          <div>
            <h2>Acerca de</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit a doloremque saepe exercitationem ullam corrupti commodi id perspiciatis magni molestias, facilis possimus iusto earum modi sunt magnam unde voluptatum voluptate quod dignissimos optio, officiis laborum nulla. Et, cum labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit a doloremque saepe exercitationem ullam corrupti commodi id perspiciatis magni molestias, facilis possimus iusto earum modi sunt magnam unde voluptatum voluptate quod dignissimos optio, officiis laborum nulla. Et, cum labore!</p>
          </div>
          <img className={styles.images} src={require('./assets/FallFestWordMark.png')} alt='logo evento' />
        </div>
        <div id='fechas' className={styles.containerSecondary} style={{marginTop: 0}}>
          <h2>Fechas</h2>
          <div className={styles.containerFechas}>
            <div>
              <h3>Coloquio</h3>
              <ul>
                <li>28 de noviembre del 2022, de 10:00 hrs a 14:00 hrs</li>
                <li>29 de noviembre del 2022, de 10:00 hrs a 14:00 hrs</li>
                <li>30 de noviembre del 2022, de 10:00 hrs a 14:00 hrs</li>
              </ul>
            </div>
            <div>
              <h3>Hackathon</h3>
              <ul>
                <li style={{ listStyle: 'none', marginBottom: 10 }}><strong>Semana de talleres</strong></li>
                <li>17 - 21 de octubre del 2022, de 12:00 hrs a 20:00 hrs</li>
                <li style={{ listStyle: 'none', marginBottom: 10 }}><strong>Semana del Hackathon y retos</strong></li>
                <li>24 - 28 de octubre del 2022</li>
              </ul>
            </div>
          </div>
        </div>
        <div id='expositores' className={styles.containerSecondary} style={{ width: '85%' }}>
          <h2>Expositores</h2>
          <div style={{ display:'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/sponsors/tec_monterrey.png')} alt='imagen sponsor' />
              <p><strong>Tec de Monterrey</strong></p>
              <p>Salvador E. Venegas-Andraca</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/cic-logo.png')} alt='imagen sponsor' />
              <p><strong>CIC-IPN</strong></p>
              <p>Guohua Sun</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/sponsors/ibm_quantum.jpeg')} alt='imagen sponsor' />
              <p><strong>IBM Quantum</strong></p>
              <p>Ginés Carrascal</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/cic-logo.png')} alt='imagen sponsor' />
              <p><strong>CIC-IPN</strong></p>
              <p>Ivan Fernández Cid</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/sponsors/multiverse.png')} alt='imagen sponsor' />
              <p><strong>Multiverse Computing</strong></p>
              <p>Victor Onofre</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/sponsors/multiverse.png')} alt='imagen sponsor' />
              <p><strong>Multiverse Computing</strong></p>
              <p>Cristina Sanz Fernández</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/sponsors/Xanadu Horizontal Logo — Black.png')} alt='imagen sponsor' />
              <p><strong>Xanadu</strong></p>
              <p>Catalina Albornoz Anzola</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/sponsors/entropica.png')} alt='imagen sponsor' />
              <p><strong>Entropica Labs</strong></p>
              <p>Leonardo Disilvestro</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/sponsors/universidad de cordoba.png')} alt='imagen sponsor' />
              <p><strong>Universidad de Córdoba</strong></p>
              <p>Cristian E. Susa Quintero</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/sponsors/Hood_College_Shield.png')} alt='imagen sponsor' />
              <p><strong>Hood College</strong></p>
              <p>Daniel Sierra-Sosa</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/sponsors/oxford.png')} alt='imagen sponsor' />
              <p><strong>Oxford</strong></p>
              <p>Lia Yeh</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/sponsors/qbraid_logo_verbose-large.png')} alt='imagen sponsor' />
              <p><strong>Qbraid</strong></p>
              <p>Ricky Young</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/cic-logo.png')} alt='imagen sponsor' />
              <p><strong>Unitary Fund</strong></p>
              <p>Nathan Sharma</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/sponsors/zapatalogo_2.png')} alt='imagen sponsor' />
              <p><strong>Zapata Computing</strong></p>
              <p>Michał Stęchły</p>
            </div>
          </div>
        </div>
        <div id='' className={styles.containerSecondary} style={{ width: '82%' }}>
          <h2>Organizadores Coloquio</h2>
          <div className={styles.organizadores} style={{ gap: 40 }}>
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
        <div id='registro' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>Registro para el Coloquio</h2>
          <div className={styles.container}>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit a doloremque saepe exercitationem ullam corrupti commodi id perspiciatis magni molestias, facilis possimus iusto earum modi sunt magnam unde voluptatum voluptate quod dignissimos optio, officiis laborum nulla. Et, cum labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit a doloremque saepe exercitationem ullam corrupti commodi id perspiciatis magni molestias, facilis possimus iusto earum modi sunt magnam unde voluptatum voluptate quod dignissimos optio, officiis laborum nulla. Et, cum labore!</p>
            </div>
            <div style={{width:'100%', height:'100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10}}>
              <img src={require('./assets/icon_2.png')} alt='imagen sponsor' height='100px' />
              <div>
                <p style={{ marginBottom: 50 }}>Para registrarse de click en el <strong>bóton</strong></p>
                <a href='https://airtable.com/shrUZ218gQFxLE1ML' className={styles.boton}>Registro</a >
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imagencic}></div>
        <div id='hack' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>Hackathon</h2>
          <div className={styles.container}>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit a doloremque saepe exercitationem ullam corrupti commodi id perspiciatis magni molestias, facilis possimus iusto earum modi sunt magnam unde voluptatum voluptate quod dignissimos optio, officiis laborum nulla. Et, cum labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit a doloremque saepe exercitationem ullam corrupti commodi id perspiciatis magni molestias, facilis possimus iusto earum modi sunt magnam unde voluptatum voluptate quod dignissimos optio, officiis laborum nulla. Et, cum labore!</p>
            </div>
            <div style={{width:'100%', height:'100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10}}>
              <div style={{background: '#00000055', width:'100%', height:'4rem', borderRadius: 20}}></div>
                <p>Para registrarse de click en el <strong>bóton</strong></p>
                <a href='https://airtable.com/shrUZ218gQFxLE1ML' className={styles.boton}>Registro</a >
            </div>
          </div>
        </div>
        <div className={styles.containerSecondary} style={{ marginTop: 0 }}>
          <h2>Sponsors Hackathon</h2>
          <div className={styles.imagenesSponsor}>
            <img src={require('./assets/sponsors/entropica.png')} alt='imagen sponsor' />
            <img src={require('./assets/sponsors/multiverse.png')} alt='imagen sponsor' /> 
            <img src={require('./assets/sponsors/ibm_quantum.jpeg')} alt='imagen sponsor' />
            <img src={require('./assets/sponsors/qbraid_logo_verbose-large.png')} alt='imagen sponsor' />
            <img src={require('./assets/sponsors/qnexico.png')} alt='imagen sponsor' />
            <img src={require('./assets/sponsors/quantum_universal_education.png')} alt='imagen sponsor' />
            <img src={require('./assets/RyM.png')} alt='imagen sponsor' />
            <img src={require('./assets/IPN-logo.png')} alt='imagen sponsor' />
            <img src={require('./assets/cic-logo.png')} alt='imagen sponsor' />
            <img src={require('./assets/sponsors/UF-logo-tagline.png')} alt='imagen sponsor' />
            <img src={require('./assets/sponsors/Xanadu Horizontal Logo — Black.png')} alt='imagen sponsor' />
          </div>
        </div>
        <div id='organizadores' className={styles.containerSecondary} style={{ width: '85%' }}>
          <h2>Alumnos organizadores del Hackathon</h2>
          <div style={{ display:'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/cic-logo.png')} alt='imagen sponsor' />
              <p><strong>CIC-IPN</strong></p>
              <p>Alberto Maldonado Romo</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/cic-logo.png')} alt='imagen sponsor' />
              <p><strong>CIC-IPN</strong></p>
              <p>José Angel Martínez Navarro</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/cic-logo.png')} alt='imagen sponsor' />
              <p><strong>CIC-IPN</strong></p>
              <p>David Peréz Martínez</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/sponsors/oxford.png')} alt='imagen sponsor' />
              <p><strong>Universidad de Oxford</strong></p>
              <p>Lia Yeh</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/cic-logo.png')} alt='imagen sponsor' />
              <p><strong>Keio University</strong></p>
              <p>Samanvay Sharma</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/cic-logo.png')} alt='imagen sponsor' />
              <p><strong>Universidad de Barcelona</strong></p>
              <p>Richard Kienhoefer</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/cic-logo.png')} alt='imagen sponsor' />
              <p><strong>Universidad del Valle</strong></p>
              <p>Kevin Jofroit Joven Noriega</p>
            </div>
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
        <div style={{ marginTop: 10, display:'flex', flexDirection:'column' }}>
          <div>
            <p><strong>Dirección</strong></p>
            <p>Av. Juan de Dios Bátiz, esq. Miguel Othón de Mendizábal,</p>
            <p>Col.Nueva Industrial Vallejo, Alcaldía Gustavo A. Madero,<br></br> C.P. 07738, CDMX</p>
          </div>
          <div className={styles.aviso}>
            <p><strong><a href='https://www.cic.ipn.mx/documentos/descargas/SGC/avisopriv.pdf'>Aviso de privacidad</a></strong></p>
          </div>
        </div>
      </footer>
    </div>
  )
}