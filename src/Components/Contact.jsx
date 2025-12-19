import React, { useState, useEffect } from 'react';
 
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
 
  useEffect(() => {
    if (submitted) {
      console.log("Form Submitted:", {
        name,
        email,
        phonenumber,
        subject,
        message,
      });
 
      alert("Message sent successfully!");
 
      // Clear form
      setName("");
      setEmail("");
      setPhonenumber("");
      setSubject("");
      setMessage("");
      setSubmitted(false);
    }
  }, [submitted]);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
 
  return (
<div className="contact">
<h2>Let's Connect</h2>
 
      <form onSubmit={handleSubmit}>
<input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
 
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
 
        <input
          type="tel"
          placeholder="Phone Number"
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
          required
        />
 
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
 
        <textarea
          placeholder="Type Your Message Here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
 
        <button type="submit">Send</button>
</form>
</div>
  );
}
 
export default Contact;