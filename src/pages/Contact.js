import React from 'react';
import '../styles/Contact.css';

function Contact() {
    return (
        <section id='contact'>
            <div className="contact__container">
                <h2>Contact Me</h2>
                <p>Connect with me on LinkedIn:</p>
                <div className="contact__options">
                    <a href="https://www.linkedin.com/in/abubakar-mukadam-386641215/" target="_blank" rel="noreferrer"
                       className="btn">Connect on LinkedIn</a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
