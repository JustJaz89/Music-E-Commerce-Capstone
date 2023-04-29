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
        // <div layout="row" layout-align="center center" class="layout-align-center-center layout-row">
        //     <section class="max-layout-width">
        //         <div layout-gt-sm="row" class="layout-gt-sm-row">
        //             <span flex-gt-sm="30" class="flex-gt-sm-30">
        //                 <h3 class="ng-binding">Contact</h3>
        //             </span>
        //             <span flex-gt-sm="5" class="flex-gt-sm-5"></span>
        //             <span>

        //             </span>
        //         </div>
        //     </section>
        // </div>
    )
};

export default ContactForm;