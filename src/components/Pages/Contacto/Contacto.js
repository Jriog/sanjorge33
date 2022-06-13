import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n.js';
import './Contacto.css';
import emailjs from '@emailjs/browser';


function Contacto() {

  const { t, i18n } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('pfc_service_ID', 'pfc_template_ID', form.current, 'qux2kxx54o5yZGGDB')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <div className='contacto'>
      <div className='backnav'></div>
      <div className='grid grid-cols-2 gap-2'>
        <div className='map flex-row'>
          <div className='contactinfo'>
            <h1>{t('Contact_tittle2')}</h1>
            <br></br>
            <p>{t('Contact_site')}</p>
            <br></br>
            <p>{t('where2')}</p>
          </div>
          <iframe className='mapframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d862.5819845601297!2d-8.40191706372531!3d43.34839161839792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e7c9f51006b91%3A0xf2cd88470443b15b!2sC.%20Cam.%20de%20la%20Iglesia%2C%2033%2C%2015009%20La%20Coru%C3%B1a!5e0!3m2!1ses!2ses!4v1654450741890!5m2!1ses!2ses" width="600" height="600" frameborder="1" allowfullscreen="true" aria-hidden="false" tabindex="0"></iframe>
          <div></div>
        </div>
        <div className='mailform'>
          <h1>{t('Contact_tittle')}</h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="first-name">{t('ContactName')}</label>
                <input type="text" id="first-name" name="name" className="form-input px-3 py-2 rounded-md" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="last-name">{t('Contact_lname')}</label>
                <input type="text" id="last-name" name="last-name" className="form-input px-3 py-2 rounded-md" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">{t('Contact_mail')}</label>
                <input type="email" id="email" name="email" className="form-input px-3 py-2 rounded-md" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone">
                {t('Contact_phone')}
                </label>
                <input type="tel" id="phone" name="phone" className="form-input px-3 py-2 rounded-md" />
              </div>
              <div className="flex flex-col col-span-2">
                <label htmlFor="subject">{t('Contact_subject')}</label>
                <input type="text" id="subject" name="Subject" className="form-input px-3 py-2 rounded-md" required />
              </div>
              <div className="flex flex-col col-span-2">
                <label htmlFor="subject">
                  <div className="flex align-items">
                  {t('Contact_message')}
                    <span className="ml-auto opacity-75">{t('Contact_characters')}</span>
                  </div>
                </label>
                <textarea maxLength="500" rows="4" type="text" id="message" name="message" className="form-input px-3 py-2 rounded-md" required />
              </div>
            </div>
            <div className="flex justify-end py-4">
              <button type="submit" class="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500">
              {t('Contact_submit')}
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Contacto;