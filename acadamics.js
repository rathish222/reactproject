import React from 'react';
import "./acadamics.css";
import { Link } from 'react-router-dom';
function Acadamics () {
    return (
      
        
<body>
<img src="https://i.ytimg.com/vi/SLeQAcGivgw/maxresdefault.jpg" width={1535.5} height={741} />
<label></label>
  <div className="container">
  <ul>
            
      <Link to="/">Home</Link>
      
    </ul>
    <p className='h1'>Academic Details</p>
    <hr/>
    <table>
      <tbody>
        <tr>
          <th>Course</th>
          <th>University</th>
          <th>Year</th>
        </tr>
        <tr>
          <td>Post Graduate Diploma in Orthopaedics</td>
          <td>RMC University</td>
          <td>2018 - 2023</td>
        </tr>
        <tr>
          <td>Diploma in Physiotherapy [DPT]</td>
          <td>RMC University</td>
          <td>2023 - Present</td>
        </tr>
        <tr>
          <td>Post Graduate Diploma in Obstetrics &amp; Gynaecology</td>
          <td>RMC University</td>
          <td>2023 - Present</td>
        </tr>
        <tr>
          <td>Diploma in X-Ray Technology</td>
          <td>RMC University</td>
          <td>2023 - Present</td>
        </tr>
        <tr>
          <td>Post Graduate Diploma in Child Health</td>
          <td>RMC University</td>
          <td>2023 - Present</td>
        </tr>
      </tbody>
    </table>

  </div>
 </body>
    )
}
export default Acadamics;
