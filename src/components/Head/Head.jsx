import './Head.css'
import logose from '../../assets/logose.png'


const Head = () => {
  return (
    <div className='header'>
        <img src={logose} alt="logo" className="logo"/>
        <ul className='headmenu'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why Us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Head