import React, {useState} from 'react';
import Card from '../Card';
import Salads from '../data/Salads';
import './Salad.css';

export default function Salad() {

    const [data , setData] = useState(Salads)

  return (
    <div className='salad'>
        {
            data.map((index) => {
                return <Card {...index} />
            })
        }
    </div>
  );
}
