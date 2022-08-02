import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTic from '../../assets/whiteTick.png'

function Plans() {
  return (
    <div className="plancontainer">
        <div className="programsheader" style={{gap:'2rem'}}>
            <span className='stroketext'>Ready to start</span>
            <span>Your Journey</span>
            <span className='stroketext'>Now Withus</span>
        </div>


        <div className="plans">
            {plansData.map((plan,i)=>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span >{plan.name}</span>
                    <span>INR{plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature,i)=>(
                            <div className="feature">
                                <img src={whiteTic} alt="dsd"/>
                                <span key={i}>{feature}</span>
                            </div>   
                        ))}


                    </div>
                <div>
                    <span>See more benefits -></span>
                </div>
                <button className='btn' >Join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans