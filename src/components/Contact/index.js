import Header from '../Header';
import './index.css';

const Contact = () => (
    <>
    <Header/>
    <div className="main-contact-container">
    <div className="contact-container">
       
    <div className="contact-content-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-para">
        We're here to assist you. Whether you have questions about a specific
        property, want to schedule a viewing, or need advice on the real estate
        market, our team is ready to help. Reach out to us using the contact
        information below or fill out the form, and we'll get back to you
        promptly.
      </p>
      <div className="contact-info">
        <h1 className="add-title">
          Address:<span className="add-para"> 123 Main Street, Hyderabad, 501218
        </span>
        </h1>
        <h1  className="add-title">
          Phone:<span className="add-para"> (+91) 9999999999</span>
        </h1>
        <h1  className="add-title">
          Email:<span className="add-para"> info@realestatecompany.com</span>
        </h1>
      </div>
    </div>
    </div>
    </div>
    </>
  )


export default Contact;
