import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Home() {

    const [event_data,setevent_events]= useState();

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
        // alert(e.event_date)
    }
    
      return (
        <>
        
<header class="text-center bg-light p-5">
    <h1 class="display-3">Welcome to Event Manager</h1>
    <p class="lead">Your go-to platform for organizing and managing events effortlessly.</p>
    
   </header>


     <div className="container mt-4">
      <h1> Upcoming Events...</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {event_data ? (
          event_data.slice(0, 3).map((event) => (
            <div key={event._id} onClick={() => clickhandle(event)} className="col">
              <div className="card h-100">
                <img
                  src={`http://localhost:4000/${event.event_image}`}
                  className="card-img-top img-fluid"
                  alt={event.event_name}
                  style={{ objectFit: 'cover', height: '100%' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{event.event_name}</h5>

                  <p className="card-text">Price: ${event.event_price}</p>
                  <p className="card-text">Date : {event.event_date}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>Loading data...</h1>
        )}
      </div>
    </div>
        </>
      )
    }
    
