import React from 'react';
import "./login.css";
import { Link } from "react-router-dom";
function Login () {
    return (
      <body> 
      <div class="lg">
    <div class="login-container col">
      <ul>
      <Link to="/">Home</Link>
    </ul>
       
        <form>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" name="username"/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password"/>
          </div>
          <input type="submit" value="Login"/>
        </form>
      </div>
      </div>
      
      </body>
)
}
export default Login;


