import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
 
export default function Checkout_page() {
    const location = useLocation();
    const navigate = useNavigate();
    const eventData = location.state?.eventData;
    
    const [email, setEmail] = useState('');
 
    const handleEmailChange = async(e) => {
        setEmail(e.target.value);
   
};
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        // Handle submission, for example, sending email and completing the purchase
     
  try {
    // Assuming 'userData.email' contains the user's email
    const response = await axios.post('http://localhost:4000/buy_ticket', {
      email: email,eventData:eventData
    });
    navigate('/thankyou'); // Pass data as part of state

    console.log('Email sent:', response.data);

  } catch (error) {
    console.error('Error sending email:', error);
  }
        // Display product details and email information
        console.log(`Product Name: ${eventData.event_name}`);
        console.log(`Product Price: ${eventData.event_price}`);
        console.log(`Customer Email: ${email}`);
         };
         return (
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <div className="card">
                    <div className="card-header bg-primary text-white">
                      <h2 className="mb-0">Checkout</h2>
                    </div>
                    <div className="card-body">
                      <div className="mb-3">
                        <p className="fw-bold mb-2">Product Name:</p>
                        <p>{eventData.event_name}</p>
                      </div>
                      <div className="mb-4">
                        <p className="fw-bold mb-2">Product Price:</p>
                        <p>{eventData.event_price}</p>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label htmlFor="inputEmail" className="form-label">
                            Email Address:
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                          />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                          Confirm Purchase
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }