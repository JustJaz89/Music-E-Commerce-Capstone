import React from 'react';

const ContactForm = () => {
    return (
        <div className="container">
            <form className="contact-form">
                <label htmlFor="name" placeholder="Name">
                    NAME
                </label>
                <input type="text" name="name" />
                <label htmlFor="email" placeholder="Email">
                    EMAIL
                </label>
                <input type="email" name="email" />
                <label htmlFor="message" placeholder="Message">
                    MESSAGE
                </label>
                <textarea name="message" rows="5" cols="50"></textarea>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
};

export default ContactForm;