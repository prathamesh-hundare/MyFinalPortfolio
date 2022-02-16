import React from 'react';
import { useRef , useState } from 'react';
import './contact.scss';
import emailjs from 'emailjs-com';

export default function Contact() {

  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()
    emailjs
    .sendForm(
      "service_p60m9ao",
      "template_ekwpxie",
      formRef.current,
      "user_73zn0lMogKeRMKnetRohq"
    )
    .then(
      (result) => {
        console.log(result.text);
        setDone(true)
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return <div className='c' id='contact'>
    <div className="c-bg1"></div>
    <div className="c-wrapper">
      <div className="cleft">
        <h1 className="c-title">Let's Discuss your project</h1>
        <div className="c-info">
          <div className="c-info-item">
            <img src="assets/phn.jpg" alt="" className="c-icon" />
            +91 7798016080
          </div>
           <div className="c-info-item">
              <img src='assets/email.png' alt="" className="c-icon" />
              portfolioreact0009@gmail.com
           </div>
           <div className="c-info-item">
              <img src="assets/address.png" alt="" className="c-icon" />
              Chaitrangan Society, Near lake Town, Bibwewadi, Pune-411046
           </div>
        </div>
      </div>
      <div className="c-right">
       <p className="c-desc">
            <b>What's on your mind?</b> I will respond to serious and creative
            projects. Always available. Get in touch -
        </p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="user_name" />
          <input type="text" placeholder="Subject" name="user_subject" />
          <input type="text" placeholder="Email" name="user_email" />
          <textarea rows="5" placeholder="Message" name="message" />
          <button>Submit</button>
          {done && "Thank You..!"}
        </form>
      </div>
    </div>
  </div>;
}
