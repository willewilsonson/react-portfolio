import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './ContactForm.css';
import emailjs from 'emailjs-com';

const ContactForm = ({height}) => {
    const box5 = useRef();

    gsap.registerPlugin(ScrollTrigger);
    
    useEffect(() => {
        gsap.to(box5.current, {
            opacity: 1,
                scrollTrigger: {
                    trigger: box5.current,
                    start: '-100px',
                    end: '100% 50%',
                    scrub: 1,
                }
        })
    });

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, e.target, process.env.REACT_APP_USER)
          .then((result) => {
              console.log(result.text);
              alert('Message sent!')
          }, (error) => {
              console.log(error.text);
              alert('Oops... something went wrong, try again!')
          });
        e.target.reset();
      }


    return (
        <section className="contact" id='contact-section' style={{height: height}} ref={box5}>
            <h1 className="contact__title">Contact</h1>
            <form className="contact__contact-form" onSubmit={sendEmail}>
                <input type="text" name="name" placeholder='Name'/>
                <input type="email" name="email" placeholder='Email'/>
                <textarea name="message" placeholder='Message...'/>
                <input type="submit" value="Send" id="submit" />
            </form>
        </section>
    )
};

export default ContactForm;