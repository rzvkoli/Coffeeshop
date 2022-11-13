import React, {useState} from 'react';
import Card from '../Card';
import Mocktails from '../data/Mocktails';
import './Mocktail.css';

export default function Mocktail() {

    const [ data , setData ] = useState(Mocktails)
  return (
    <div className='mocktail'>
        {
            data.map((index) => {
                return <Card {...index} />
            })
        }
    </div>
  )
}
