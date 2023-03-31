
import React from 'react'

import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Aboutus from '../Aboutus/Aboutus1';
import Jobs from '../Jobs/Jobs';
import Contact from '../Contact/Contact';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from "../Card/Card";
import "../Card/card.css";

function Home() {
  const data = [
    {
      title: "Welcome to our Website",
      description: "This is the landing page of the website after logging in.",
    },
    {
      title: "What we offer",
      description:
        "We offer a wide range of services to help you grow your business, including web development, SEO, and marketing.",
    },
    {
      title: "Our Team",
      description:
        "Our team consists of experienced professionals who are dedicated to helping you achieve your goals.",
    },
  ];

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
      <div className="home-container">
      <h1 className="home-title">Welcome to our Website</h1>
      <div className="cards-container">
        {data.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
      <div className="cta-container">
        <button className="cta-button">Get started</button>
      </div>
    </div>
      
<div class="navbar1">
<section id="section">
      <br></br>
      Contact Us:
      <br></br>
      Monday-Friday 11:00 AM to 7:00 PM EST
      <br></br>
      Saturday-Sunday 11:00 AM to 9:00 PM EST
      <br></br>
      Email Id:customerservice@sparkcoffeeshop.net
  </section>
  <ul>
      <li>About Us</li>
      <br></br>
  </ul>

  <ul>
      <li>Rewards</li>
  </ul>

  <ul>
      <li>Table Booking</li>
     
  </ul> 
  <br></br>
  <section id="section">
    &copy; Copyright@scs.All rights reserved.
  </section>
</div>
    </>

    
  )
}

export default Home