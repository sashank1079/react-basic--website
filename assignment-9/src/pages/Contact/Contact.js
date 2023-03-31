
import Card from "../Card/Card";
import "../Card/card.css";
import React from 'react'
import image from '../Contact/image.jpeg';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Aboutus from '../Aboutus/Aboutus1';
import Jobs from '../Jobs/Jobs';
import Home from '../Home/Home'
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Login from '../Login/Login';

function Contact() {
  const data = [
    { title: "John Doe", description: "Manager of the company"},
    { title: "E-mail", description: "Tjohndoe@exomaple.com"},
    { title: "Phone number", description: "000-000-0000"},
    { title: "", description: "Other contacts can be populated in similar fashion"}
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

<div>
        <h1>This is the Contact page</h1>
        <h2>Contact details in card components.</h2>
        <div className="cards-container">
          {data.map((item, index) => (
            <Card key={index} title={item.title} description={item.description}/>
          ))}
        </div>
        </div>

<div class="navbar1">
  <ul>
      <li>About Us</li>
  </ul>

  <ul>
      <li>Rewards</li>
  </ul>

  <ul>
      <li>Table Reservation</li>
  </ul> 
  <br></br>
  <section id="section">
    &copy; Copyright@scs.All rights reserved.
  </section>
</div>
</>


 
  );
}

export default Contact;