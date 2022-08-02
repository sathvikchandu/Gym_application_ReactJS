import './Contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
    
        emailjs.sendForm('service_t0kg63v', 'template_1yhzzvl', form.current, 'm6QtTSPUqqw7ekLkG')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };


  return (
    <div className="join">
        <div className="leftjoin">
            <hr/>
            <div>
                <span className='stroketext'>Ready to </span>
                <span>take your body</span>
            </div>
            <div>
                <span>to the </span>
                <span className='stroketext'>next level?</span>
            </div>
        </div>
        <div className="rightjoin">
            <form action='' className='emailcontain' onSubmit={sendEmail} ref={form}>
                <input type="email" name="user_email" placeholder='Enter your email address to receive a call' />
                <button type='submit' className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact