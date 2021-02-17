import React, { useState } from 'react';
import { validateEmail } from '../../../utils/helpers';
import '../Contact/contactStyle.css';
import Footer from '../../Footer/index';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      //isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      }
      else {
        setErrorMessage('');
      }
    }
    else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      }
      else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <section>
      <h1 id="contactHeader">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" id="contactText">Name:</label>
          <input id="textArea" type="text" defaultValue={name} onBlur={handleChange} name="name" placeholder="Your Name.." />
        </div>
        <div>
          <label htmlFor="email" id="contactText">Email <br />address:</label>
          <input id="textArea" type="email" defaultValue={email} onBlur={handleChange} name="email" placeholder="Your Email.."/>
        </div>
        <div>
          <label htmlFor="message" id="contactText">Message:</label>
          <textarea id="textArea" name="message" defaultValue={message} onBlur={handleChange} rows="5" placeholder="Send me a message.."/>
        </div>
        {errorMessage && (
          <div>
            <p id="contactText" className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
      <Footer></Footer>
    </section>
  );
}

export default ContactForm;