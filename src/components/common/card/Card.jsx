import React from 'react'
import { Styles } from './styles'

const Card = ({title,bgColor,color,description,img,backgroundCard}) => {
return (
    <Styles>
        <div className='card'style={{backgroundColor:backgroundCard}} >
            <span className='icon' style={{color:color,backgroundColor:bgColor}}>{img}</span>
            <h3>{title}</h3>
            <span className='line'></span>
            <p>{description}</p>
        </div>
    </Styles>
)
}

export default Card