import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './views/home/Home'
import Form from './views/form/Form'

export default function App(){
const requestMapping = '/qcoloquio';
  return(
    <Router>
        <Routes>
          <Route path={requestMapping+"/"} element={<Home />} />
          <Route path={requestMapping+"/registro"} element={<Form />} />
        </Routes>
    </Router>
  )
}