import styles from './App.module.css'
import Navbar from './components/navbar/navbar'
import React from 'react'
import Gallery from './components/gallery/Gallery'

export default function App() {
  return (
    <div>
      <Navbar />
      <header id='header' className={styles.header} >
        {/* <div className={styles.title} >
          <h1>3er COLOQUIO DE CÓMPUTO CUÁNTICO DEL CIC</h1>
          <p>Organziado por el laboratorio de Robótica y Mecátronica</p>
        </div> */}
      </header>
      <div className={styles.mainContainer} style={{ marginTop: 40 }}>
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
            <p>Este evento nació en el Centro de Investigación en Computación del Instituto Politécnico Nacional (CIC-IPN), su primera versión fue en el año 2014, y se realizaba cada tres años, por cuestiones de la pandemia se aplazó este coloquio. En el 2022 regresa en su tercera versión, considerando el gran impacto que se tiene en la computación cuántica tanto en la academia como en la industria, y las aplicaciones que se pueden dar. Un gran progreso de esto es el trabajo "for experiments with entangled photons, establishing the violation of Bell inequalities and pioneering quantum information science"  que les dio a sus autores el premio novel de Física del 2022.  Siendo este evento fomentar en México y en Latinoamérica un apoyo en el interés de esta área de la computación.</p>
          </div>
          <img className={styles.images} src={require('./assets/q_algorithms.png')} alt='logo evento' />
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
              <img src={require('./assets/sponsors/UF-logo-tagline.png')} alt='imagen sponsor' />
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
              <li>Catalina Albornoz Anzola</li>
              <li>M en C. Elizabeth López Lozada</li>
              <li>M en C. David Peréz Martínez</li>
              <li>M en C. José Angel Martínez Navarro</li>
              <li>M en C. Mario Alfredo Ibarra Carrillo</li>
              <li>Ing. Diana Patricia Barragán Vázquez</li>
              <li>Moisés Hernández López</li>
            </ul>
          </div>
        </div>
        <div id='registro' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>Registro para el Coloquio</h2>
          <div className={styles.container}>
            <div>
              <p>PROXIMAMENTE en el CIC #IPN se llevará a cabo el 3° Coloquio de Cómputo Cuántico, los días 28, 29 y 30 de noviembre de manera <strong>gratuita</strong>, podrás conocer a expertos de la industria y la academia hablando sobre su trabajo, aplicaciones y experiencias en esta área que en recientes años ha tenido un gran interés e impacto, se tratarán temas como: mitigar el error en una computadora cuántica, aprendizaje automático cuántico para la salud, entre otros. Muy pronto tendremos más detalles.</p>
            </div>
            <div style={{width:'100%', height:'100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10}}>
              <img src={require('./assets/icon_2.png')} alt='imagen sponsor' height='100px' />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ marginBottom: 0 }}>Para registrarse de click en el <strong>bóton</strong></p>
                <p>Dudas o sugerencias: <strong>qc_events@cic.ipn.mx</strong></p>
                <a href='https://airtable.com/shr3xrT9QI2KLx5dB' className={styles.boton} target="_blank" rel="noopener noreferrer" style={{ alignSelf: 'center' }}>Registro</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imagencic}></div>
        <div id='hack' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>Hackathon</h2>
          <div className={styles.container}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p>Qiskit Fall-Fest Mexico se realizará este mismo evento del 17 de octubre al 21 de octubre de manera <strong>gratuita y virtual</strong> la semana de talleres y del 24 al 28 de octubre el hackathon, invitamos en esta ocasión más expertos latinoamericanos como empresas que darán pláticas y retos no solo usando qiskit sino los software de Xanadu y OpenQAOA Expertos hispanohablantes que darán pláticas y retos no solo usando qiskit sino los software de Xanadu y OpenQAOA 🚀 🏆 ✨ Conoce sobre como aplicar la computación cuántica en áreas química, optiización , Machine Learning, internet cuántico, entre otros. 💻 Foros para conocer a los expertos y sus opiniones como experiencias. 🎊 Comienza a conocer más de la computación cuántica y logra conectar con otros y decidir tu camino en esta área 😺 Habrá retos de Xanadu, de Entropica Labs, Quantum Universal Education, pláticas de qBraid, Multiverse Computing, Unitary Fund, mucho más</p>
              <p style={{ marginBottom: 0 }}>Para registrarse de click en el <strong>bóton</strong></p>
              <p>Dudas o sugerencias: <strong>fall.fest.mx@gmail.com</strong></p>
              <a href='https://airtable.com/shrUZ218gQFxLE1ML' className={styles.boton} target="_blank" rel="noopener noreferrer">Registro</a >
            </div>
            <div>
                <img src={require('./assets/hackathon.png')} alt='imagen sponsor' width='340px' height='auto' />
            </div>
          </div>
        </div>
        <div className={styles.containerSecondary} >
          <h2>Galería</h2>
          <Gallery />
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
            <img src={require('./assets/sponsors/covalent.png')} alt='imagen sponsor' style={{ height:'2.6rem', alignSelf: 'end' }} />
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
              <img src={require('./assets/sponsors/keio.png')} alt='imagen sponsor' />
              <p><strong>Keio University</strong></p>
              <p>Samanvay Sharma</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/sponsors/barcelona.png')} alt='imagen sponsor' />
              <p><strong>Universidad de Barcelona</strong></p>
              <p>Richard Kienhoefer</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/sponsors/valle.png')} alt='imagen sponsor' />
              <p><strong>Universidad del Valle</strong></p>
              <p>Kevin Jofroit Joven Noriega</p>
            </div>
            <div className={styles.cardsAlumnos}>
              <img src={require('./assets/sponsors/unam.png')} alt='imagen sponsor' />
              <p><strong>Universidad Nacional Autónoma de México</strong></p>
              <p>Claudia Zendejas Morales</p>
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
            <p><strong><a href='https://www.cic.ipn.mx/documentos/descargas/SGC/avisopriv.pdf' target="_blank" rel="noopener noreferrer">Aviso de privacidad</a></strong></p>
          </div>
        </div>
      </footer>
    </div>
  )
}