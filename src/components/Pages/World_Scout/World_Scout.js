import React from 'react';
import './World_Scout.css';
import Que_hacen from './Partes/que_hacen/que_hacen';
import Quienes_son from './Partes/quienes_son/quienes_son';
import Donde_estan from './Partes/donde_estan/donde_estan';
import { useTranslation } from 'react-i18next';
import '../../i18n';
 
function World_Scout() {
  return (
    <div id='W_S'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <Quienes_son/>
        <br></br>
        <Donde_estan/>
        <br></br>
        <Que_hacen/>
    </div>
  );
}

export default World_Scout;