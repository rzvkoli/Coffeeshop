import React, {useState} from 'react';
import Card from '../Card';
import Appetizers from '../data/Appetizers';
import './Appetizer.css'; 

export default function Appetizer() {

    const [data , setData] = useState(Appetizers)

  return (
    <div className='appetizer'>
        {
            data.map((index) => {
                return <Card {...index} />
            })
        }
    </div>
  );
}
