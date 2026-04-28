import React from 'react'
import { Styles } from './stylesProcess';
import Card from '../../common/card/Card' 
import { HowCard } from '../../get-api/api-cards/data';

const Process = () => {
  return (
<Styles>
    <div className='container1' id='process'>
        <div className='address'  >
            <h3>Powerful Features for complete control</h3>
            <p> Everything you need to mange your expenses
                efficiently and make informed financial decisions
            </p>
        </div>
        <div className='process-cards'>
            {HowCard.map((card)=>{
            const{title,id,bgColor,color,description,img,backgroundCard}=card;
            return<Card backgroundCard={backgroundCard} key={id} title={title} bgColor={bgColor} color={color}
            description={description} img={img}/>


            })}
        </div>
    </div>
</Styles>
)
}

export default Process