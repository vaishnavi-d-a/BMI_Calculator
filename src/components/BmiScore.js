import React from 'react'

function BmiScore({bmiNo,bmiName,changeWeight}) {

  console.log(changeWeight);
  // console.log(props);
  // const {bmiNo,bmiName} = props;

  let color;

  // Set color based on the bmiName
  if (bmiName === "Underweight") {
    color = "yellow";
  } else if (bmiName === "Normal") {
    color = "green";
  } else if (
    bmiName === "Over Weight" ||
    bmiName === "Obesity Class I" ||
    bmiName === "Obesity Class II" ||
    bmiName === "Obesity Class III"
  ) {
    color = "red";
  } 
  return (
    <div className='text-center shadow rounded p-4'>
  <div>Your BMI Score</div>
  <div className='row justify-content-md-center'>
    <div className='p-3 my-2 alert fs-1 alert-primary col-sm-4'>{bmiNo}</div>
  </div>
  <div 
        className='fs-3 fw-bold'
        style={{ color: color }} // Apply the determined color
      >
        {bmiName}
      </div>
  {changeWeight.type === "positive" && (
    <div className='fs-4'>"You need to lose <span className='fw-bold'>{changeWeight.wight} kg"</span> </div>
  )}
   {changeWeight.type === "negative" && (
    <div className='fs-4'>"You need to gain <span className='fw-bold'>{changeWeight.wight} kg"</span> </div>
  )}
   {changeWeight.type === "normal" && (
    <div className='fs-4'>"Your weight is Normal, Good for you" </div>
  )}
</div>
  );
}

export default BmiScore