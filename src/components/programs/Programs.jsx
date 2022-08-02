import './programs.css'
import {programsData} from '../../data/programsData'
import rightarr from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className='programs' id='programs'>
      <div className="programsheader">
        <span className='stroketext'>Explore our </span>
        <span>Programs</span>
        <span className='stroketext'>to shape you</span>
      </div>

      <div className="programcate">
        {programsData.map((prog)=>(
          <div className="cate">
            {prog.image}
            <span>{prog.heading}</span><span>{prog.details}</span>
            <div className="joinnow">
              <span>Join Now</span>
              <img src={rightarr} alt="joinnow"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Programs