// Imports
import React, {useState} from 'react';
import './Contact.css'

// Contact page
const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const encode = (data) => {
        Object.keys(data)
            .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/', {
            method: 'Post',
            headers: { 'content-type': 'aoolication/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', name, email, message }),
        })

        .then(() => {
            alert("Message sent")
        })

        .catch((err) => {
            alert("Error")
        })
    };

    return(
        <section className = 'contact'>
            <div className = 'contact-me'>
                <form
                    netlify = 'true'
                    name = 'contact'
                    onSubmit = {handleSubmit}
                >

                <h2 className = 'contactme-header'> Contact Me </h2>

                {/* Form name input */}
                <div className = 'name-input'>
                    <label htmlFor = 'name' className = 'name'>
                        Name
                    </label>
                    <input
                        type = 'text'
                        id = 'name'
                        name = 'name'
                        onChange = {(e) => setName(e.target.value)}
                    />
                </div>

                {/* Form email input */}
                <div className = 'email-input'>
                    <label htmlFor = 'email' className = 'email'>
                        Email
                    </label>
                    <input
                        type = 'text'
                        id = 'email'
                        name = 'email'
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Form message input */}
                <div className = 'message-input'>
                    <label htmlFor = 'message' className = 'message'>
                        Message
                    </label>
                    <textarea
                        type = 'text'
                        id = 'message'
                        name = 'message'
                        rows = '12'
                        onChange = {(e) => setMessage(e.target.value)}
                    />
                </div>

                {/* Submit button */}
                <button
                    type = 'submit'
                    className = 'submit-button'
                >
                    Submit
                </button>

                </form>
            </div>
        </section>
    );
}

// Export
export default Contact;