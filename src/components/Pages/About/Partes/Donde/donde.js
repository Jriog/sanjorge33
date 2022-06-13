import React from 'react';
import './donde.css';
import { useTranslation } from 'react-i18next';
import '../../../../i18n.js';

function Donde() {
  const { t, i18n } = useTranslation();
  return (
    <div id='donde'>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div id='aboutUs' class=" grid grid-cols-5 gap-4">
        <div></div>
        <div className='col-span-3'>
            <a className='titulo'>
            {t("where")}
            </a>
            <br></br>
            <br></br>
            <a> {t("where2")}</a>
            <br></br>
            <br></br>
        </div>
        <div></div>
    </div>
    <div class="grid grid-cols-5 gap-4"><div></div><div className='col-span-3 google-map-code'>
        
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d862.5819845601297!2d-8.40191706372531!3d43.34839161839792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e7c9f51006b91%3A0xf2cd88470443b15b!2sC.%20Cam.%20de%20la%20Iglesia%2C%2033%2C%2015009%20La%20Coru%C3%B1a!5e0!3m2!1ses!2ses!4v1654450741890!5m2!1ses!2ses" width="1200" height="600" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

    </div></div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
</div>
  );
}

export default Donde;