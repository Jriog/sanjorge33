import React from 'react';
import './que_hacen.css';
import img2 from './img_2.jpg';
import { useTranslation } from 'react-i18next';
import '../../../../i18n.js';

function Que_hacen() {
  const { t, i18n } = useTranslation();
  return (
    <div id='Q_H' className='h-auto'>
      <br></br>
      <br></br>
      <br></br>
      <div className='mainQHd grid grid-cols-8'>
        <div></div>
        <div className='col-span-3'>
          <h1 id='titulo_movS'>{t('tittle_do')}</h1>
          <br></br>
          <p>
            <b>{t('txt_hacen_1_1')}</b> {t('txt_hacen_1_2')}
          </p>
          <br></br>
          <br></br>
          <p>
            <b>{t('txt_hacen_2_1')}</b> {t('txt_hacen_2_2')}
          </p>
          <br></br>
          <br></br>
          <p>
            <b>{t('txt_hacen_3_1')}</b> {t('txt_hacen_3_2')}
          </p>
          <br></br>
          <br></br>
        </div>
        <div></div>
        <div className='grid grid-rows-5 col-span-2'>
          <div></div>
          <div className='row-span-3'><img class="QH" src={img2}></img></div>
          <div></div>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default Que_hacen;