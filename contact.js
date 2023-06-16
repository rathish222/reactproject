import React from 'react';
import "./contact.css";
import { Link } from 'react-router-dom';
function Contact ()  {
    return (
      <body> <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Emmanuel_College_Front_Court,_Cambridge,_UK_-_Diliff.jpg" width={1535} height={740}  />
<>
  <div className="container">
  <ul>
            
            <Link to="/">Home</Link>
            
          </ul>
 
      <h2>Contact Details</h2>
    
    <hr />
    <div className="contact-info">
      <p>
        <i className="fa fa-user" />
        <b>Name:</b> RATHISH R
      </p>
      <p>
        <i className="fa fa-envelope" />
        <b>Email:</b>rockrathish11@gmail.com
      </p>
      <p>
        <i className="fa fa-phone" />
        <b>Ph no:</b>9566771556
      </p>
      <p>
        <i className="fa fa-map-marker" />
        <b>Address:</b> 2B1 Main ROAD, ARIYALUR, TAMILNADU,INDIA
      </p>
      
    </div>
  </div>
</>
</body>
    )
}
export default Contact;
