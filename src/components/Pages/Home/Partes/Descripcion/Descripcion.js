import React from 'react';
import './Descripcion.css';
import foto from './grupo.jpg'

import { useTranslation } from 'react-i18next';
import '../../../../i18n.js';

function Descripcion() {
  const { t, i18n } = useTranslation();
  return (
    <div className='h-screen'>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div id='aboutUs' class="grid grid-cols-5 gap-4">
      <div></div>   
      <div className='col-span-3'>
        <a className='titulo_home'>
        Grupo Scout San Jorge 33
        </a>
        <br></br>
        <br></br>
        <p className='description'>
        {t('el')} grupo, <b>fundado {t('año')} 1965</b>, {t('es_una')} <b>{t('lucro')}</b> {t('texto_home')}
        </p>
      </div>
      <div></div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div class="grid grid-cols-5 gap-4"><div></div><div className='col-span-3'><img src={foto} alt='' className='img_home'/></div></div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </div>
  );
}

export default Descripcion;