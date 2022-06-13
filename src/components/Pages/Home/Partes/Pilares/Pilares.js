import React from 'react';
import './Pilares.css';
import { useTranslation } from 'react-i18next';
import '../../../../i18n.js';
import autogestionada from './autogestionada.jpg';
import valores from './valores.jpg';
import grupos from './grupos.jpg';

function Pilares() {
  const { t, i18n } = useTranslation();
  return (
    <div  id='pilares' className='h-screen flex-row'>
      <h1 class="pilarh1"><b>{t('Pilares')}</b></h1>
      <h4 class="textopilares">{t('el')} <b>{t('metodo')}</b> {t('texto_home2')}</h4>
     
      <div class="grid grid-cols-5 content-center gap-32">
        <div class=""></div>
        <div id='pilar1' class="pilar" >
          <div class="relative group w-96 h-96 overflow-hidden bg-black m-auto mt-36">
            <img class="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src={valores} />
            <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
            <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
              <div class="absolute w-full flex place-content-center">
                <p class="font-serif font-bold text-2xl text-center shadow-2xl text-white mt-5">{t('t_pilar_1')}</p>
              </div>
              <div class="absolute w-full flex place-content-center mt-20">
              <br></br>
                <p class="font-sans text-center w-4/5 text-white mt-5">{t('texto_pilar_1')}</p>
              </div> 
            </div>
          </div>  
        </div>
        
        <div id='pilar1' class="pilar" >
          <div class="relative group w-96 h-96 overflow-hidden bg-black m-auto mt-36">
            <img class="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src={grupos} />
            <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
            <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
              <div class="absolute w-full flex place-content-center">
                <p class="font-serif font-bold text-2xl text-center shadow-2xl text-white mt-5">{t('t_pilar_2')}</p>
              </div>
              <div class="absolute w-full flex place-content-center mt-20">
              <br></br>
                <p class="font-sans text-center w-4/5 text-white mt-10">{t('texto_pilar_2')}</p>
              </div> 
            </div>
          </div>  
        </div>

        <div id='pilar1' class="pilar" >
          <div class="relative group w-96 h-96 overflow-hidden bg-black m-auto mt-36">
            <img class="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src={autogestionada} />
            <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
            <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
              <div class="absolute w-full flex place-content-center">
                <p class="font-serif font-bold text-2xl text-center shadow-2xl text-white mt-5">{t('t_pilar_3')}</p>
              </div>
              <div class="absolute w-full flex place-content-center mt-20">
              <br></br>
                <p class="font-sans text-center w-4/5 text-white mt-10">{t('texto_pilar_3')}</p>
              </div> 
            </div>
          </div>  
        </div>

        
      </div>
    </div>
  );
}

export default Pilares;