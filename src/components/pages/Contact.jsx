import {useState} from 'react';

// Contact (header)
// Name (input)
// Email(input)
// Message (input)
// Submit (button)

// Span used to provide feedback such as: 'message is required', 'email is invalid', 'name is required'


/*
  Gonna look something like this:

  <div>
    <form className="contact-form" onSubmit={}

*/


export default function Contact(props) {
  
  // Our three state variables: 'name', 'email', and 'message'
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("hey you submitted! ", name);
  }

  return (
    <div>
      <form className='contact-form' onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          name="name"
          className="contact-name-input"
          onChange={(e) => setName(e.target.value)}
        ></input>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={email}
          name="email"
          className="contact-email-input"
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <label htmlFor="message">Message:</label>
        <input
          type="text"
          value={message}
          name="message"
          className="contact-message-input"
          onChange={(e) => setMessage(e.target.value)}
        ></input>

        <input type="submit" value="Submit"></input>
  
      </form>
    </div>
  )



}


/*
export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>
        hellooooo
      </p>
    </div>
  );
}
*/