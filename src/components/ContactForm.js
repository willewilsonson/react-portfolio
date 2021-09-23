import './ContactForm.css';
import emailjs from 'emailjs-com';

const ContactForm = ({height}) => {

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
        <section className="contact" style={{height: 500 + 'px'}}>
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