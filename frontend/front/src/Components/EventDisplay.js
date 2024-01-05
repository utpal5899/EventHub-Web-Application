import React, { useEffect, useState } from 'react'
import axios from 'axios';
import About from './About';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
 
export default function EventDisplay() {

const [event_data,setevent_events]= useState([]);
const [model,set_model]= useState(false);
const navigate = useNavigate();
let [single_event_data,set_single_eventdata]= useState({}) 


 

 
useEffect(()=>{
    
    axios.get("http://localhost:4000/received_events").then((res)=>{
        let {data}=res
       
        setevent_events(data)

    }).catch(e=>{console.log(e)})   
},[]) 

 
const compareDates = (a, b) => {
    const dateA = new Date(a.event_date);
    const dateB = new Date(b.event_date);
  
    return dateA - dateB;
  };
  
  // Sort the events array based on dates
 if(event_data)
 {

     event_data.sort(compareDates);
    //  console.log(event_data);
 }
 

const clickhandle=(e)=>{
   console.log(e)
  set_single_eventdata(e)
 
   
  set_model(true)
  let data= e;
  console.log(data+"defweifuhewiuyheduewifhwi")


  

}
 
let checkoutPage= (eventData) => {
  // Redirect the user to the checkout page and pass eventData
  navigate('/checkout', { state: { eventData } }); // Pass data as part of state
};
 

return (
  <>
    {model && (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={`http://localhost:4000/${single_event_data.event_image}`}
              alt="Event"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{single_event_data.event_name}</h2>
                <p className="card-text">Price: {single_event_data.event_price}</p>
                <p className="card-text">Date: {single_event_data.event_date}</p>
                <p className="card-text">Time: {single_event_data.event_time}</p>
                <p className="card-text">Description: {single_event_data.event_description}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-primary btn-lg col-md-12" onClick={() => checkoutPage(single_event_data)}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {!model && (
     <div className="container mt-5">
     <h1>Events</h1>
     <div className="d-flex flex-wrap gap-1">
       {event_data ? (
         event_data.map((event) => (
           <div key={event._id} onClick={() => clickhandle(event)} className="card p-3" style={{ border: '1px solid #ccc', cursor: 'pointer', minWidth: '250px', maxWidth: '250px' }}>
             <img src={`http://localhost:4000/${event.event_image}`} alt={event.event_name} className="card-img-top" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
             <div className="card-body">
               <h5 className="card-title">{event.event_name}</h5>
               <p className="card-text">Price: ${event.event_price}</p>
             </div>
           </div>
         ))
       ) 
    : <h1>Loading data...</h1>}
        </div>
      </div>
    )}
  </>
);
}
