import React, { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [message, setMessage] = useState(" ");
    // const [success, setSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // fetch('/submit-contact-form', {
        //     method: 'POST',
        //     body: JSON.stringify({name, email, message}),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });
    };

    return (
        // <div className="container">
        //     <h1>Contact Page</h1>
        //     <ContactForm
        //         name={name}
        //         setName={setName}
        //         handleSubmit={handleSubmit}
        //     />
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
            <label>
                Message:
                <input value={message} onChange={(event) => setMessage(event.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
        // </div>
    );
}

export default ContactForm;