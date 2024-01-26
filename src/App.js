import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [errors, setErrors] = useState({});

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!username) {
      alert('Username is required.');
      return;
    }
  
    if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }
  
    if (phone.length !== 10) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }
  
    const today = new Date();
    const inputDate = new Date(dob);
    if (inputDate > today) {
      alert('Invalid date of birth. Please enter a valid date.');
      return;
    }

    setErrors(newErrors);

    // If there are no errors, close the modal
    if (Object.keys(newErrors).length === 0) {
      handleCloseModal();
    }
  };

  return (
    <div className="application">
      <button onClick={handleOpenModal} className="open-form-button">Open Form</button>

      {isOpen && (
         <div id="modal" className={`modal ${isOpen ? 'open' : ''}`}>
          <div className="modal-header">
            <h2>Fill Details</h2>
            <button onClick={handleCloseModal} className="close-modal-button">&times;</button>
          </div>
          <div className="modal-content">
            <form id="user-form" onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && <p>{errors.username}</p>}

              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p>{errors.email}</p>}

              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Enter your phone number"
                pattern="[0-9]{10}"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <p>{errors.phone}</p>}

              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                required
                min="1900-01-01"
                max="2003-12-31"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              {errors.dob && <p>{errors.dob}</p>}

              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
