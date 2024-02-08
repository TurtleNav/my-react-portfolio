/* Get rid of these persistent eslint linting errors */

/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import {useState} from 'react';

export default function Contact() {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // mock email
    console.log(
      `This is a mock email submitted by: ${name}\nwith email: ${email}\nand body: ${message}`
    );

    // clear state
    setName('');
    setEmail('');
    setMessage('')
    
  }

  return (
    <div style={{paddingLeft: "20px"}}>
      <form
        /*
          Commenting out mailto link due to spam risks. Ideally, a server side
          script will handle contacting me but that feature is TBD

        action={`mailto:{EMAIL HERE}?subject=Portfolio%20Contact%20Form&body=${message}`}
        method="post"
        encType="text/plain"
        */
        className='contact-form'
        onSubmit={handleSubmit}
        >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          name="name"
          className="contact-name-input"
          onChange={(e) => {
            setName(e.target.value);
          }}
          onBlur={((e) => {
            const el = document.querySelector('.feedback-span');

            if (name.replace(/[a-zA-Z]/g, "").length > 0) {
              el.textContent = "A valid name is required";
            } else {
              el.textContent = "";
            }
          })}
        ></input>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={email}
          name="email"
          className="contact-email-input"
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => {
            const el = document.querySelector('.feedback-span');
            // "simple" email regex
            if (!email.match(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/g)) {
              el.textContent = "A valid email is required";
              console.log("email is invalid")
            } else {
              el.textContent = "";
            }
          }}
        ></input>

        <label htmlFor="message">Message:</label>
        <input
          type="text"
          value={message}
          name="message"
          className="contact-message-input"
          onChange={(e) => setMessage(e.target.value)}
          onBlur={(e) => {
            const el = document.querySelector('.feedback-span');

            if (message.length === 0) {
              el.textContent = "A message is required";
            } else {
              el.textContent = "";
            }
          }}
        ></input>

        <input className="submit-btn" type="submit" value="Submit" style={{fontSize: "16pt"}} ></input>
      </form>

      {/* Feedback */}
      <span className='feedback-span'></span>
    </div>
  )
}
