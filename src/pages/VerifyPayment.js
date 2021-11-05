import React from "react";


const VerifyPayment = () => {

    fetch("https://sheets.googleapis.com/v4/spreadsheets/11A5yiDMBFjT8sWMBSTp0g1kaygAuDvxcY4cBQI1BblA/values/Sheet1?alt=json&key=AIzaSyAOhitHkJEz_XL4-eDBxaM_ndUaQjEE_8c")
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonResponse) {
        console.log(jsonResponse)
    });

  return (
    <div>
     
    </div>
  );
};

export default VerifyPayment;
