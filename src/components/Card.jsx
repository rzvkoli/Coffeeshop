import React from 'react';
import './Card.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

export default function Card({ photo , name , price }) {
  return (
    <div id='card' class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img  class="activator" src={photo} alt='' />
        </div>
        <div class="card-content">
            <span id='card-content-title' class="card-title activator grey-text text-darken-4">{name}</span>
            <p className='card-price'>{price}</p>
        </div>
    </div>
  );
}
