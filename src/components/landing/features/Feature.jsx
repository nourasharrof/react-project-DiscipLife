import React from 'react'
import Card from '../../common/card/Card'
import { Styles } from './styles'
import { cardData } from '../../get-api/api-cards/data'

const Feature = () => {
  return (
    <Styles>
    <div className='feature' id='features'>
      <div className='address'>
        <h3>Why Expense Management Matters</h3>
        <p>Most people lose thousands annually due to poor expense tracking.
                            Here's what happens without it.
        </p>
      </div>
        <div className='featureCard'>
          {cardData.map((card)=>{
            const{title,id,bgColor,color,description,img,backgroundCard}=card;
            return<Card key={id} title={title} bgColor={bgColor} color={color}
            description={description} img={img} backgroundCard={backgroundCard}/>


          })}
        </div>
    </div>
  </Styles>
  )
}

export default Feature