import React from 'react';
import './Home.css';
import VideoSection from './Partes/VideoSection/VideoSection';
import Pilares from './Partes/Pilares/Pilares';
import Descripcion from './Partes/Descripcion/Descripcion';

import { useTranslation } from 'react-i18next';
import '../../i18n.js';

function Home() {
  return (
    <div id='home'>
      <VideoSection/>
      <Descripcion/>
      <Pilares/>
    </div>
  );
}

export default Home;