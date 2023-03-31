import React from 'react'
//import image from './Images/Travel.jfif';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Aboutus from '../Aboutus/Aboutus1';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from "../Card/Card";
import "../Card/card.css";

function Job(props) {
  return (
    <Card title={props.title} description={props.description} />
  );
}

function Jobs() {
  const jobData = [];

  // Use a loop to create job data and push to jobData array
  for (let i = 1; i <= 6; i++) {
    jobData.push({
      title: `Job ${i}`,
      description: `This is Job ${i} description.`
    });
  }

  return (
   <>
   <Navbar bg="dark">
  <Container>
    <Navbar.Brand class="nav1">
    <Link to = '/Home' class="nav1">Home</Link> {"   "}
    <Link to = "/Aboutus" class="nav1">About</Link>{"   "}
    <Link to = "/Jobs" class="nav1">Jobs</Link>{"   "}
    <Link to = "/Contact" class="nav1">Contact</Link>{"   "}
    <Link to = "/" class="nav1">Logout</Link>{"   "}
    </Navbar.Brand>
  </Container>
</Navbar>
<Routes>
<Route path = "/Home" element = {<Home/>}></Route>
<Route path = "/Aboutus" element = {<Aboutus/>}></Route>
<Route path = "/Contact" element = {<Contact/>}></Route>
<Route path = "/Jobs" element = {<Jobs/>}></Route>
</Routes>
  <div>
      <h1>This is the Jobs page</h1>
      <h2>The jobs can be listed in the card components in a proper style</h2>
      <div className="cards-container">
        {jobData.map((job, index) => (
          <Job key={index} title={job.title} description={job.description} />
        ))}
      </div>
    </div>
  <div class="navbar1">
<section id="section">
      <br></br>
      Contact Us:
      <br></br>
      Monday-Friday 9:00 AM to 5:00 PM EST
      <br></br>
      Saturday-Sunday 11:00 AM to 9:00 PM EST
      <br></br>
      Email Id:customerservice@sparkcoffeeshop.net
  </section>
  <ul>
      <li>About Us</li>
  </ul>

  <ul>
      <li>Rewards</li>
  </ul>

  <ul>
      <li>Table Booking</li>
  </ul> 
  <br></br>
  <section id="section">
    &copy; Copyright@scsAll rights reserved.
  </section>
</div>
  </>
  );
}

export default Jobs