import './Testimonials.css'
import { useState } from 'react'
import {testimonialsData} from '../../data/testimonialsData'
import leftarrow from '../../assets/leftArrow.png'
import rightarrow from '../../assets/rightArrow.png'  


const Testimonials = () => {

  const [selected] = useState(0)
  //const tl= testimonialsData.length
  return (
    <div className="testimonials">
        <div className="lefttest">
          <span>Testimonials</span>
          <span className='stroketext'>What they say <span className=''>About us</span></span>
          <span>{testimonialsData[selected].review}</span>
          <span style={{color:'var(--orange)'}}>{testimonialsData[selected].name}</span>-{testimonialsData[selected].status}
        </div>
        <div className="righttest">
          <div></div>
          <div></div>
          <img src={testimonialsData[selected].image} alt='sadsadas'/>

          <div className="arrows">
            <img src={leftarrow} alt="" />
            <img src={rightarrow} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Testimonials