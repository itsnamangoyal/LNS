import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
    return (
        <form className="contact-form">
            <label >Full Name</label><br />
            <input type="text" id="name" required name="name" /><br />
            <label >Phone Number</label><br />
            <input type="tel" required id="phone" name="phone" pattern="[[0-9]{10}"/><br />
            <label >Requirements</label><br />
            <textarea type="text" id="requirements" name="requirements" /><br />
            <div id="submit-button">
                <button type="submit">SEND</button>
            </div>
        </form>
    )
}


export default ContactForm