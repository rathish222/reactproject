import React from 'react';
import "./admission.css";
import { Link } from 'react-router-dom';
function Admission  ()  {
    return (
<body>
<img src="https://i.ytimg.com/vi/SLeQAcGivgw/maxresdefault.jpg" width={1535} height={741.5}></img>
<div className="container">
<ul>
            
      <Link to="/">Home</Link>
      
    </ul>
  <div className='h2'>
  <h2>Admission Details</h2>
  </div>
  <hr />
  <div className="admission-info">
    <p>
      <strong>Application ID:</strong>
      <input className="text" />
    </p>
    <p>
      <strong>Name:</strong> <input className="text" />
    </p>
    <p>
      <strong>Program:</strong> <input className="text" />
    </p>
    <p>
      <strong>Admission Date:</strong>
      <input type="datetime-local" />
    </p>
    <p>
      <strong>Status:</strong> Confirmed
    </p>
    <input type="submit" /> <input type="reset" />
  </div>
</div>
</body>
    )
}
export default Admission;
