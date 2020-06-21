import React from 'react'
import ContactForm from '../../common/ContactForm/ContactForm'
import './ContactUs.css'
const ContactUs = () => {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <p>If you wish to contact us, please send us a message, give us a call or a vist.</p>
            <br />
            <div className="inner-contact-page">
                <ContactForm />
                <div className="reach-us">
                    <div className="office-box" id="maharashtra">
                        <h2 className="office-heading">MAHARASHTRA</h2>
                        <p>No. 24, Ground Floor, Gyaneshwari,
                        Aarey Road Peru Baug, Goregaon East,
                        Goregaon West, Mumbai-400063, Maharashtra, India<br />
                        <a href="Tel: +919820973373">+919820973373 </a>
                        </p>
                        <iframe 
                            className="map"
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex="0"
                            frameBorder="0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.678801315684!2d72.84967861541958!3d19.165532187036575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7ad2e8d5d4b%3A0x5b9d413f6f3e063f!2sLaxmi%20Narayan%20%26%20Sons!5e0!3m2!1sen!2sin!4v1592557891074!5m2!1sen!2sin"
                            title="maharashtra"
                        />
                    </div>
                    <div className="office-box" id="delhi">
                        <h2 className="office-heading">DELHI</h2>
                        <p>5852/53, Basti Harpool Singh 1st Floor,
                            Sadar Bazaar, Sadar Bazaar, New Delhi, Delhi 110006<br />
                            <a href="Tel: +919810067599">+919810067599 </a>
                        </p>
                        <iframe 
                            className="map"
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex="0"
                            frameBorder="0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0339877117376!2d77.21480431556355!3d28.658700982407414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd6f00000001%3A0x7737edfbbda3fe94!2sLaxmi%20Narayan%20%26%20Sons!5e0!3m2!1sen!2sin!4v1592557645792!5m2!1sen!2sin"
                            title="delhi"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactUs
