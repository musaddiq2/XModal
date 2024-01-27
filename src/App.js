import React, { useState } from "react";

import "./App.css";
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    dob: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      alert("Invalid email. Please check your email address.");
    } else if (formData.phone.length !== 10 || isNaN(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else if (new Date(formData.dob) > new Date()) {
      alert("Invalid date of birth. Please enter a valid date.");
    } else {
      // Handle successful form submission here
      alert("Form submitted successfully:", formData);
      setIsOpen(false);
      setFormData({
        email: "",
        username: "",
        dob: "",
        phone: "",
      });
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = (e) => {
    if (e.target.classList.contains("open")) {
      setIsOpen(false);
    }
  };
  return (
    <div className="App">
      <div className={isOpen ? "open" : "modal"} onClick={closeModal}>
        <h1> User Details Modal</h1>
        <button onClick={openModal} className="submit-button">
          Open Form
        </button>

        {isOpen && (
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <h2> Fill Details</h2>

              <label htmlFor="username">Username:</label>
              <br />
              <br />
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
              <br />
              <br />

              <label htmlFor="email">Email:</label>
              <br />
              <br />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <br />
              <br />
              <label htmlFor="phone">Phone Number:</label>
              <br />
              <br />

              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <br />
              <br />

              <label htmlFor="dob">Date of Birth:</label>
              <br />
              <br />
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
              <br />
              <br />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
