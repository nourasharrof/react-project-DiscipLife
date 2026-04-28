import React from 'react'
import {Styles} from './stylesButton'
const Button = ({text,onClick}) => {
  return (
    <Styles>
       
            <button className='btn'onClick={onClick}>{text}</button>
        
    </Styles>

  )
}

export default Button