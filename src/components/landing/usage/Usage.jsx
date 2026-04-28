import React from 'react'
import { Styles } from './styleUsage'
import { FaArrowRight } from 'react-icons/fa'

const WorkFlow = () => {
  return (
     <Styles>
        <div className='work_flow' id='usage'>
          <div className='address'>
            <h3>your daily workflow</h3>
            <p>simple,streamlined process that takes just seconds each day.
            </p>
          </div>
          <div className='circles'>
            <div className='circle'> <span className='number'>1</span><div className='text'><h3>add expense</h3><p>log your purchase</p><FaArrowRight className='arrow'/></div></div>
            
            <div className='circle'> <span className='number'>2</span><div className='text'><h3>categorize</h3><p>auto-organized</p><FaArrowRight className='arrow'/></div></div>
           
            <div className='circle'> <span className='number'>3</span><div className='text'><h3>track budget</h3><p>monitor spending</p><FaArrowRight className='arrow'/></div></div>
           
            <div className='circle'> <span className='number'>4</span><div className='text'><h3>analyze</h3><p>review insights</p><FaArrowRight className='arrow'/></div></div>
          
            <div className='circle'> <span className='number'>5</span><div className='text'><h3>alert</h3><p>stay informed</p><FaArrowRight className='arrow'/></div></div>
            




          </div>
          
    </div>
        </Styles>
  )
}

export default WorkFlow