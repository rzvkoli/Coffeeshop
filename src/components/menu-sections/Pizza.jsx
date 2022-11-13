import React, {useState} from 'react';
import Card from '../Card';
import Pizzas from '../data/Pizzas';
import './Pizza.css';

export default function Pizza() {

    const [ data , setData ] = useState(Pizzas)
  return (
    <div className='pizza'>
        {
            data.map((index) => {
                return <Card {...index} />
            })
        }
    </div>
  )
}
