import React from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
  const params = useParams()
  console.log(params)
  const handleFormSubmit = (formData) => {
    const formDataInput = Object.fromEntries(formData.entries());
    console.log(formDataInput);
    
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
          />

          <input
            type="email"
            className="form-control"
            required
            autoComplete="off"
            placeholder="Enter your email"
            name="email"
          />

          <textarea
            className="form-control"
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter your message"
            name="message"
          />
          <button type="sumbit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
