import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApo } from './FirstApo';

import './styles.css'


ReactDOM.createRoot( document.getElementById( 'root' ) ). render (
  <React.StrictMode>
    {/* <FirstApo title={"Titulo"} subTitle={"subtitulo"}/> */}
    <CounterApp value={100}/>
  </React.StrictMode>
)