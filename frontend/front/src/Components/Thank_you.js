import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Thank_you() {

    let navigate=useNavigate()

    let homeBtn=()=>{
        navigate('/'); // Pass data as part of state
    
    }
    return (
        <div className="thank-you-container text-center">
          <h2>Thank You for Your event ticket Booking!</h2>
           <button  variant="success" onClick={homeBtn} >
            Continue
          </button >
        </div>
      );
    };
     