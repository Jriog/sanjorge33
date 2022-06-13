import React from 'react';
import './Descripcion.css';
import foto_grupo from './grupo.jpg'
import { useTranslation } from 'react-i18next';
import '../../../../i18n.js';

function Descripcion() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id='aboutUs' class="h-64 grid grid-cols-5 gap-4">
        <div></div>   
        <div className='col-span-3'>
          <a className='titulo'>
          {t('whos')}
          </a>
          <br></br>
          <br></br>
          <p className='description'>
            {t('el')} <b>Grupo Scout San Jorge 33</b>, {t('miembro')} de <a className='enlace'href="http://www.scout.es/" target="_blank" rel="noopener">ASDE – Scouts de Galicia</a> {t('portanto')}<a className='enlace'href="https://www.scout.es/" target="_blank" rel="noopener">{t('ASDE')}</a>, {t('es_una')} <b>asociación {t('sin')} ánimo de lucro</b> infantil {t('y')} {t('juvenil')}, {t('whos_text')} <a  className='enlace'href="https://es.wikipedia.org/wiki/Robert_Baden-Powell" target="_blank" rel="noopener">Baden Powell</a> {t('y')} un sistema de educación progresiva.
          </p>
        </div>
        <div></div>
      </div>
      <div class="grid grid-cols-5 gap-4"><div></div><div className='col-span-3'><img src={foto_grupo} alt='' className='foto_desription'/></div></div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Descripcion;