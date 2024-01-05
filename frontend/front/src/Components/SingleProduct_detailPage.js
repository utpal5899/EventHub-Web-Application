// SingleProduct_detailPage.js (Receiver Component)
import React from 'react';
import { useLocation } from 'react-router-dom';

const SingleProduct_detailPage = () => {
  const location = useLocation();
  const receivedData = location.state?.data || { message: 'No message received' };

  return (
    <div>
      <h1>Page 2</h1>
      <p>Message received: {receivedData.message}</p>
    </div>
  );
};

export default SingleProduct_detailPage;
