import React from 'react';
import './leyenda.css';
import foto_SJyD from './SJyD.jpg'

import { useTranslation } from 'react-i18next';
import '../../../../i18n.js';

function Leyenda() {
    const { t, i18n } = useTranslation();
    return (
        <div id='leyenda'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div id='aboutUs' class=" grid grid-cols-5 gap-4">
                <div></div>
                <div className='col-span-3'>
                    <a className='titulo'>
                        {t('patron_t')}
                    </a>
                    <br></br>
                    <br></br>
                    <p className='leyenda_p'>
                        {t('patrontext1')}
                        <br></br>
                        <br></br>
                        {t('patrontext2')}
                        <br></br>
                        {t('patrontext4')}
                        <br></br> <br></br>
                        {t('patrontext5')}
                        <br></br> <br></br>
                        {t('patrontext6')} “<a href='https://es.wikipedia.org/wiki/Escultismo_para_muchachos'>Escultismo para muchachos</a>”{t('patrontext7')}
                    </p>

                    <br></br>
                    <br></br>
                </div>
                <div></div>
            </div>
            <div class="grid grid-cols-5 gap-4"><div></div><div className='col-span-3'><img src={foto_SJyD} alt='' className='foto_desription' /></div></div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default Leyenda;