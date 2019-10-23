import React from 'react'
import LightboxComp from './LightboxComp';
import avatar from "../../../../../images/avatar.jpg";

const Lightbox = () => (
    <div>
      <LightboxComp images={ [
        {
          src: avatar,
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Pyroclastic_flows_at_Mayon_Volcano.jpg',
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Okataina.jpg',
        }
      ] }/>
    </div>
  );
  
  export default Lightbox;