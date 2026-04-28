import React from 'react'
import { Styles } from './styles';
import CardOpi from './cards-opinion/CardOpi';
import { OpinionCard } from '../../get-api/api-cards/data';

const Opinion = () => {
  return (
 <Styles>
    <div className='opinion' id='opinion'>
        <div className='address'>
            <h3>Loved by Thousands</h3>
            <p>join thousands of statesfied users who have taken control of their finances.
            </p>
        </div>
        <div className='OpinionCard'>
            {OpinionCard.map((card)=>{
                const{id,description,star_img,person_img,person_names,job}=card;
                return<CardOpi key={id} description={description}  star_img={star_img} person_img={person_img} person_names={person_names} job={job}/>


        })}
        </div>
    </div>
  </Styles>
  )
}

export default Opinion