import React from "react";
import "./Sections.css";
import castores from "./colonia.jpg";
import lobatos from "./manada.jpg";
import scouts from "./scouts.jpg";
import escultas from "./esculta.jpg";
import rovers from "./clan.jpg";
import scouters from "./scouters.jpg";

import { useTranslation } from 'react-i18next';
import '../../i18n.js';

function Sections() {
  const { t, i18n } = useTranslation();
  return (
    <div id="sections">
      
      <br></br>
      <br></br>
      <br></br>
      <div id="main_sections">
        <div className="grid grid-cols-5">
          <div></div>
          <div className="col-span-2">
            <a id="tittle_part">SECCIONES</a>
            <br></br>
            <br></br>
            <p>
              <b>{t('locales')}</b> {t('text_sections_1')}
            </p>
            <p>
              <b>{t('reuniones')}</b> {t('text_sections_2')}
            </p>
          </div>
          <div>
            <img src=""></img>
          </div>
        </div>
        <br></br>
        <div className="grid grid-cols-5  gap-5">
          <div></div>
          <div className="grid grid-cols-3 col-span-3 seccion">
            <div id="colonia">
              <br></br>
              <br></br>
              <br></br>
              <div className="foto_sections">
                <div>
                  <img class="imgs_sections" src={castores}></img>
                </div>
              </div>
              <div id="t_colonia">
                <button className="tittle_section">Colonia</button>
              </div>
              <br></br>
              <div>
                <b className="subtitle">
                 {t('text_sections_Colonia_1')}
                </b>
              </div>
            </div>
            <div className="col-span-2 texto_sections">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <p>{t('text_sections_Colonia_1')}<strong>{t('text_sections_Colonia_2')}</strong> {t('text_sections_Colonia_3')}</p>
              <p><strong>{t('text_sections_Colonia_4')}</strong> {t('text_sections_Colonia_5')}</p>
              <p><strong>{t('text_sections_Colonia_6')}</strong> {t('text_sections_Colonia_7')}</p>
              <p>{t('text_sections_Colonia_8')}</p>
              <p>{t('text_sections_Colonia_9')}</p>

            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="grid grid-cols-5  gap-5">
          <div></div>
          <div className="grid grid-cols-3 col-span-3 seccion">
            <div id="manada">
              <br></br>
              <br></br>
              <div className="foto_sections">
                <div>
                  <img class="imgs_sections" src={lobatos}></img>
                </div>
              </div>
              <div id="t_manada">
                <button className="tittle_section">Manada</button>
              </div>
              <br></br>
              <div>
                <b className="subtitle">
                {t('text_sections_Manada_1')}
                </b>
              </div>
            </div>

            <div className="col-span-2 texto_sections">
              <br></br>
              <br></br>
              <br></br>
              <p><strong>{t('text_sections_Manada_2')}</strong> {t('text_sections_Manada_3')}</p>
              <p><strong>{t('text_sections_Manada_4')}</strong>{t('text_sections_Manada_5')}</p>
              <p><strong>{t('text_sections_Manada_6')}</strong> {t('text_sections_Manada_7')}</p>
              <p>{t('text_sections_Manada_8')}</p>
              <br></br>
              <p>{t('text_sections_Manada_9')}</p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="grid grid-cols-5  gap-5">
          <div></div>
          <div className="grid grid-cols-3 col-span-3 seccion">
            <div id="Scouts">
              <br></br>
              <br></br>
              <br></br>
              <div className="foto_sections">
                <div>
                  <img class="imgs_sections" src={scouts}></img>
                </div>
              </div>
              <div>
                <button className="tittle_section">Scouts</button>
              </div>
              <br></br>
              <div>
                <b className="subtitle">{t('text_sections_Scouts_1')}</b>
              </div>
            </div>
            <div className="col-span-2 texto_sections">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <p>{t('text_sections_Scouts_2')}</p>
              <p><strong>{t('text_sections_Scouts_3')}</strong>{t('text_sections_Scouts_5')}</p>
              <p>{t('text_sections_Scouts_5')}</p>
              <p><strong>{t('text_sections_Scouts_6')}</strong>{t('text_sections_Scouts_7')}</p>
              <p>{t('text_sections_Scouts_8')}</p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="grid grid-cols-5  gap-5">
          <div></div>
          <div className="grid grid-cols-3 col-span-3 seccion">
            <div id="Esculta">
              <br></br>
              <br></br>
              <br></br>
              <div className="foto_sections">
                <div>
                  <img class="imgs_sections" src={escultas}></img>
                </div>
              </div>
              <div>
                <button className="tittle_section">Esculta</button>
              </div>
              <br></br>
              <div>
                <b className="subtitle">{t('text_sections_Esculta_1')}</b>
              </div>
            </div>
            <div className="col-span-2 texto_sections">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <p>{t('text_sections_Esculta_2')}</p>
              <br></br>
              <p><strong>{t('text_sections_Esculta_3')}</strong> {t('text_sections_Esculta_4')}</p>
              <p>{t('text_sections_Esculta_5')}</p>
              <br></br>
              <p>{t('text_sections_Esculta_6')}</p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="grid grid-cols-5  gap-5">
          <div></div>
          <div className="grid grid-cols-3 col-span-3 seccion">
            <div id="clan">
              <br></br>
              <br></br>
              <br></br>
              <div className="foto_sections">
                <div>
                  <img class="imgs_sections" src={rovers}></img>
                </div>
              </div>
              <div>
                <button className="tittle_section">Clan</button>
              </div>
              <br></br>
              <div>
                <b className="subtitle">{t('text_sections_Clan_1')}</b>
              </div>
            </div>
            <div className="col-span-2 texto_sections">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <p>{t('text_sections_Clan_1')}</p>
              <p><strong>{t('text_sections_Clan_2')}</strong> {t('text_sections_Clan_3')}</p>
              <p> {t('text_sections_Clan_4')}<strong> {t('text_sections_Clan_5')}</strong></p>
              <p>{t('text_sections_Clan_6')}</p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="grid grid-cols-5  gap-5">
          <div></div>
          <div className="grid grid-cols-3 col-span-3 seccion">
            <div id="Scouters">
              <br></br>
              <br></br>
              <br></br>
              <div className="foto_sections">
                <div>
                  <img class="imgs_sections" src={scouters}></img>
                </div>
              </div>
              <div>
                <button className="tittle_section">Scouters</button>
              </div>
              <br></br>
              <div>
                <b className="subtitle">{t('text_sections_Scouters_1')}</b>
              </div>
            </div>
            <div className="col-span-2 texto_sections">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <p>{t('text_sections_Scouters_2')}<strong> {t('text_sections_Scouters_3')}</strong> {t('text_sections_Scouters_4')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sections;
