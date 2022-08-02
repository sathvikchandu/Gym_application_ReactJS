import './Reasons.css'
import im1 from '../../assets/image1.png'
import im2 from '../../assets/image2.png'
import im3 from '../../assets/image3.png'
import im4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'


const Reasons = () => {
  return (
    <div className="reasons" id='reasons'>
        <div className="leftsides">
            <img src={im1} alt="images" />
            <img src={im2} alt="images" />
            <img src={im3} alt="images" />
            <img src={im4} alt="images" />
        </div>
        <div className="rightsides">
           <span>Some reasons</span>
           <div>
                <span>Why </span>
                <span className='stroketext'>should </span>
                <span>you </span>
                <span className='stroketext'>choose </span>
                <span>us</span>
            </div> 

            <div className='detailsright'>
              <div>
                <img src={tick} alt=""/>
                <span>Over 199+ expert trainers</span>
              </div>
              
              <div>
                <img src={tick} alt="" />
                <span>Improved training methods with cutting edge equipment</span>
              </div>
              
              <div>
                <img src={tick} alt="" />
                <span>1 week free program for new members for their testing.</span>
              </div>
              
              <div>
                <img src={tick} alt="" />
                <span>Reliable partners</span>
              </div>
            </div>
            <span style={{color:'var(--gray)',fontWeight:"normal"}}>Our partners</span>
           
            <div className="partners">
              <img src={nb} alt="" />
              <img src={adidas} alt="" />
              <img src={nike} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Reasons