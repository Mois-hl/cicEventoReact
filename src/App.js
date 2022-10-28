import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './views/home/Home'
import Form from './views/form/Form'

function PageNotFound(){
  return(
    <>
      <h3 style={{ display: 'flex', justifyContent: 'center', 
        alignItems: 'center', height: '94vh', fontWeight: '400', fontSize: '1.3rem' }}>
          <strong style={{ marginRight: 15, fontSize: '1.8rem' }}>404 </strong>  Esta página no pudo ser encontrada.</h3>
    </>
  )
}

export default function App(){
const requestMapping = '/qcoloquio';
  return(
    <Router>
        <Routes>
          <Route path={requestMapping+"/"} element={<Home />} />
          <Route path={requestMapping+"/registro"} element={<Form />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </Router>
  )
}