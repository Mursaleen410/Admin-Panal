import React from 'react'
import './Cards.css'
import Card from '../Card/Card'
import { cardsData } from '../../Data/Data'

const Cards = () => {
  return (
    <div className='cards'>
     {cardsData.map((card,id)=>{
        return(
            <div className='parentContainer'> 
             <Card
             title={card.title}
             color={card.color}
             barvalue={card.barValue}
             value={card.value}
             series={card.series} 
             />
            </div>
        )
     })}
    </div>
  )
}

export default Cards
