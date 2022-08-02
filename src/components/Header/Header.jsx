import React from 'react'
import Head from '../Head/Head'
import heroimage from '../../assets/hero_image.png'
import heroimage_back from '../../assets/hero_image_back.png'
import calori from '../../assets/calori.gif'
//import calories from '../../assets/calories.png'
import './Header.css'
import giffy from '../../assets/giphy.gif'

const Header = () => {
  return (
    <div className='header'>
        <div className="leftside">
            <Head/>
            <div className="thebestclub">
              <div>

              </div>
              <span>The best fitness club ever seen</span>
            </div>
            <div className="headertext">
              <div>
                <span className='stroketext'>Shape  </span>
                <span>Your  </span>
              </div>
              <div>
                <span>Ideal body</span>

              </div>
              <div><span className="spans">Here we will help you in achieveing your dream body</span></div>
            </div>
          {/*figures*/ }
           <div className="figures">
              <div>
                 <span>199+</span>
                 <span> Expert trainers</span>  
              </div>
              
              <div>
                  <span>1000+</span>
                  <span>joined crew</span>
              </div>
              
              <div>
                  <span>50+</span>
                  <span>Fitness programs</span>
              </div>

           </div>

          <div className="headerbtn">
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn More</button>
          </div> 
        </div>




        <div className="rightside">
            <button className="btns">Join Now</button>


            <div className="heartrate">
              <img src={giffy} alt="heart"/>
              <span className='hr'>Heart Rate</span>
              <span className='hrn'>100 bpm</span>
            </div>

            <img src={heroimage} alt="heroimage" className='heroimage'/>
            <img src={heroimage_back} alt="heroimage_back" className='heroimageback'/>

            <div className="calories">
              <img src={calori} alt="calories" className='calori'/>
              <div>
              <span className='spanburnt'>Calories burnt</span><span className='calnum'>220 KCal</span>

              </div>
            </div>

        </div>


    </div>
  )
}

export default Header