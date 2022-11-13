import React, {useState} from 'react';
import Card from '../Card';
import Breakfasts from '../data/Breakfasts';
import './Breakfast.css'

export default function Breakfast() {

    const [data , setData] = useState(Breakfasts)
    
  return (
    <div className='breakfast'>
        {
            data.map((index) => {
                return <Card {...index} />
            })
        }
    </div>
  );
}
