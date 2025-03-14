import React, { useState } from "react";
import "./index.scss";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("Makeup");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "+994558152223";
    const whatsappMessage = `Name: ${name}%0APhone Number: ${phoneNumber}%0ADate: ${date}%0AService: ${service}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact_section" data-aos="fade-up">
      <div className="contact_section_container">
        <div className="left_side">
          <h2>BOOK ONLINE FOR</h2>
          <span>10% DISCOUNT</span>
        </div>
        <div className="right_side">
          <h2>GET A QUOTE</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="number"
                placeholder="Phone number"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <select
                className="form-select"
                aria-label="Default select example"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
              >
                <option value="Daily Makeup">Daily Makeup</option>
                <option value="Bridal Makeup">Bridal Makeup</option>
                <option value="Event Makeup">Event Makeup</option>
                <option value="Creative Makeup">Creative Makeup</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" className="book_btn">
              Book
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
