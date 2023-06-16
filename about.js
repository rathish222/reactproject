import React from 'react';
import "./about.css";
import { Link } from 'react-router-dom';
function About  () {
    return (
        <div className='ab'>
          <ul>
            
      <Link to="/">Home</Link>
      
    </ul>
    <div className="college-info">
      <p>
        <strong>Name:</strong>RMC Medical College
      </p>
      <p>
        <strong>Location:</strong> ARIYALUR, INDIA
      </p>
      <p>
        <strong>Established:</strong> 1969
      </p>
      <p>
        <strong>Affiliation:</strong> RMC University
      </p>
      <p>
        <strong>Accreditation:</strong> Accredited by Medical Board
      </p>
      <img src="https://wallpaperaccess.com/full/2804821.jpg" />
    </div>
  
    </div>
    )
}
export default About;