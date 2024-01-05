import axios from "axios";
import React, { useState } from "react";

export default function Addproduct() {
  let [userdata, setuserdata] = useState({
    event_name: "",
    event_description: "",
    event_price: "",
    event_image: null,
    event_date:"",
    event_time:""
  });

  const [errors, setErrors] = useState(null); // State to manage errors
  const [sucess, setsucess] = useState(null); // State to manage errors
 const handleFileChange=(e)=>{
    setuserdata({ ...userdata, event_image: e.target.files[0] });
 
  }

  let Savadata = async (e) => {
    e.preventDefault();
    console.log("def");
    console.log(userdata);

    const formData = new FormData();
    formData.append("event_name", userdata.event_name);
    formData.append("event_description", userdata.event_description);
    formData.append("event_price", userdata.event_price);
    formData.append("event_image", userdata.event_image);
    formData.append("event_date", userdata.event_date)
    formData.append("event_time", userdata.event_time);


console.log([...formData])
try {
  const response = await axios.post("http://localhost:4000/add_product", formData);
  console.log(response);
  setsucess("Event added sucessfully")
setErrors(null)

  console.log("Data sent successfully!");
} catch (error) {
  console.log(error)
  if (error.response) {
    setErrors(error.response.data.message);
    setsucess(null)
     console.log(errors+"ejkfnaekfljneakflnaflaendkjd")
    // The request was made and the server responded with a status code
    console.error("Server responded with error status:", error.response);
    console.error("Error data:", error.response.data.message);
  } else if (error.request) {
    // The request was made but no response was received
    console.error("No response received:", error.request);
  } else {
    // Other errors
    console.error("Error:", error.message);
  }
}

  };

  let changehanler = (e) => {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  };



  return (
    <div className="container mt-5 " style={{ padding: '10px', width:"60%"  , backgroundColor: '#f5f5f5' }} >
      <h2 className="mb-4">ADD NEW EVENT</h2>
      {<div>{sucess}</div>}
      <form onSubmit={Savadata} method="post">
        <div className="mb-3">
          <label htmlFor="eventName" className="form-label">
            Event Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="eventName"
            onChange={changehanler}
            value={userdata.event_name}
            name="event_name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="eventDescription" className="form-label">
            Description about your Event:
          </label>
          <textarea
            className="form-control"
            id="eventDescription"
            name="event_description"
            onChange={changehanler}
            value={userdata.event_description}
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="eventPrice" className="form-label">
            Event fees:
          </label>
          <input
            type="text"
            className="form-control"
            id="eventPrice"
            onChange={changehanler}
            value={userdata.event_price}
            name="event_price"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="eventDate" className="form-label">
            Event date:
          </label>
          <input
            type="date"
            className="form-control"
            id="eventDate"
            onChange={changehanler}
            value={userdata.event_date}
            name="event_date"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="imageUpload" className="form-label">
            Upload Image:
          </label>
          <input
            type="file"
            className="form-control"
            id="imageUpload"
            accept="image/jpeg"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="eventTime" className="form-label">
            Event time:
          </label>
          <input
            type="text"
            className="form-control"
            id="eventTime"
            onChange={changehanler}
            value={userdata.event_time}
            name="event_time"
            required
          />
        </div>
        {<div>
          {errors}
        </div>}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

    </div>
  );
};