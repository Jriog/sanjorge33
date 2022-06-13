import React from 'react';
import './About.css';
import Descripcion from './Partes/Descripcion/Descripcion.js';
import Donde from './Partes/Donde/donde.js';
import Leyenda from './Partes/leyenda/leyenda.js';

import { useTranslation } from 'react-i18next';
import '../../i18n.js';

function About() {
  return (
    <div id='about' class="">
      <Descripcion/>
      <Leyenda/>
      <Donde/>
    </div>
  );
}

export default About;