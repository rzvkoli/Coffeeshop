import React from 'react';
import './Menu.css';
import Mocktail from './menu-sections/Mocktail';
import Breakfast from './menu-sections/Breakfast';
import Salad from './menu-sections/Salad';
import Pizza from './menu-sections/Pizza';
import Appetizer from './menu-sections/Appetizer';

export default function Menu() {

  const goMocktail = () => {
    const element = document.getElementById('mocktail');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goBreakfast = () => {
    const element = document.getElementById('breakfast');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goSalad = () => {
    const element = document.getElementById('salad');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goPizza = () => {
    const element = document.getElementById('pizza');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goAppetizer = () => {
    const element = document.getElementById('appetizer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='menu'>
      <div className='menu-list'>
        <button
        className="btn-scroll"
        onClick={goMocktail}>
          <p className='txt-btn-scroll'>Mocktail</p>
        </button>
        <button
        className="btn-scroll"
        onClick={goBreakfast}>
          <p className='txt-btn-scroll'>Breakfast</p>
        </button>
        <button
        className="btn-scroll"
        onClick={goSalad}>
          <p className='txt-btn-scroll'>Salad</p>
        </button>
        <button
        className="btn-scroll"
        onClick={goPizza}>
          <p className='txt-btn-scroll'>Pizza</p>
        </button>
        <button
        className="btn-scroll"
        onClick={goAppetizer}>
          <p className='txt-btn-scroll'>Appetizer</p>
        </button>
      </div>
      <div className='menu-sections'>
        <div className='menu-title-container'>
          <p className='menu-title'>
            Our Menu
          </p>
        </div>
        <div className='line'>
            <div className='line-one'></div>
            <div className='line-two'></div>
        </div>
        <div id='mocktail'>
          <h3 className='title-section'>
            Mocktail
          </h3>
          <Mocktail />
        </div>
        <div id='breakfast'>
          <h3 className='title-section'>
            Breakfast
          </h3>
          <Breakfast />
        </div>
        <div id='salad'>
          <h3 className='title-section'>
            Salad
          </h3>
          <Salad />
        </div>
        <div id='pizza'>
          <h3 className='title-section'>
            Pizza
          </h3>
          <Pizza />
        </div>
        <div id='appetizer'>
          <h3 className='title-section'>
            Appetizer
          </h3>
          <Appetizer />
        </div>
      </div>
    </div>
  )
}
