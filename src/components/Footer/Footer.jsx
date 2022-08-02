import './Footer.css'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import insta from '../../assets/instagram.png'
import logose from '../../assets/logose.png'

const Footer = () => {
  return (
    <div className="footercontainer">
        <hr/>
        <div className="footer">
            <div className="social">
                <img src={github} alt="" />
                <img src={insta} alt="" />
                <img src={linkedin} alt="" />
            </div>
            <div className="logofooter">
                <img src={logose} alt="" />
            </div>
            
        </div>
        
    </div>
  )
}

export default Footer