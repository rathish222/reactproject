import React from 'react';
import { Link } from "react-router-dom";
import logo from './img6.png';
import './home.css';
function Index1 () {
  return (
    <>
    <header>
      <nav className="ac">
        <ul>
          <li>
            <a href="#">Gmail |</a>
          </li>
          <li>
            <a href="#">Corevalues |</a>
          </li>
          <li>
            <a href="#">Iqax |</a>
          </li>
          <li>
            <a href="#">IIC |</a>
          </li>
          <li>
            <a href="#">Google class Attendance </a>
          </li>
        </ul>
      </nav>
    </header>
    <div className="Container">
      <meta charSet="UTF-8" />
      <title>College Website</title>
      <link rel="stylesheet" href="style.css" />
      <header>
        <h1>  RATHZ MEDICAL COLLEGE</h1>
        <nav>
           <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/admission">Admissions</Link>
    </li>
    <li>
      <Link to="/academics">Academics</Link>
    </li>
    <li>
      <Link to="/contact">Contact Us</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
  </ul>
</nav>
      </header>
      <main>
        <section>
          <h2>Welcome to Our College</h2>
          <p>High Quality World Class Exposure At RMC</p>
        </section>
        <section>
          <h2>About Our College</h2>
          <p>Since 1969 our college has been started</p>
        </section>
        <section>
          <h2>Admissions</h2>
          <p>
            RMC Medical College, Greater Noida Admission 2023: Placement, Entrance
            Exam, Review.
          </p>
        </section>
        <section>
          <h2>Academics</h2>
          <p>
            The college is vested with state of the art infrastructure and
            provides top-notch facilities to the budding pharmacists.
          </p>
        </section>
      </main>
      <h2 className="H2">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180"
          height={30}
          width={25}
        />
      </h2>
      <h2 className="H3">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180"
          height={30}
          width={25}
        />
      </h2>
      <h2 className="H4">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180"
          height={30}
          width={25}
        />
      </h2>
      <h2 className="H6">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/351/222/original/cell-phone-vector-icon.jpg"
          height={25}
          width={25}
        />
      </h2>
      <h2 className="H7">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/351/222/original/cell-phone-vector-icon.jpg"
          height={25}
          width={25}
        />
      </h2>
      <h2 className="H8">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/351/222/original/cell-phone-vector-icon.jpg"
          height={25}
          width={25}
        />
      </h2>
      <h2 className="H9">
        <img
          src="https://i.pinimg.com/originals/84/6a/03/846a03c6760f83f3a0e92609bca9cebf.jpg"
          height={25}
          width={25}
        />
      </h2>
      <h2 className="H12">
      <h1><img src={logo} alt='img6.png' height={389} width={290} alt="jump" /></h1>
      </h2>
      <footer>
        <p>Contact Us</p>
        <p></p>
        <p> RATHZ MEDICAL COLLEGE</p>
        <p>  Kovaipudur, Tamilnadu - 612902</p>
        <p> Board Number : +91-11-26588500 / 26588700</p>
        <p>  Fax : +91-11-26588663 / 26588641</p>
        <p> RMC Exam Section Helpline numbers ( Click Here)</p>
        <p> Important E-mail Addresses at RMC</p>
        <p> RMC Interactive Map </p>
        
      </footer>
    </div>
  </>
   


  )
}

export default Index1;