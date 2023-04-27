import React, { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [message, setMessage] = useState(" ");

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (
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
    );
}

export default ContactForm;