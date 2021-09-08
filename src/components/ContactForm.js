import './ContactForm.css';
import emailjs from 'emailjs-com';

const ContactForm = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, e.target, process.env.REACT_APP_USER)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        // e.target.reset();
      }


    return (
        <section className="contact">
            <form className="contact__contact-form" onSubmit={sendEmail}>
                <label className="concact-form__label">Name</label>
                <input type="text" name="name" />
                <label className="concact-form__label">Email</label>
                <input type="email" name="email" />
                <label className="concact-form__label">Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </section>
    )
};

export default ContactForm;