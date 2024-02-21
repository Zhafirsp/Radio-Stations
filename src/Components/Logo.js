import React from "react";
import { Container } from 'react-bootstrap';
import logo_img from '../Assets/Img/Logo.png';
import "../Assets/Css/logo_definition.css"

const Logo = () => {
  
  return (
    <section className="section-logo">
      <Container>
        <div className="logo_definition mt-5" data-aos="fade-up">
          <div className="d-flex ">
            <img 
            src={logo_img} 
            className="img-fluid img-logo" 
            loading="lazy" 
            />
            <h1 className="mx-3 mt-4">Delivering music we do... in style</h1>
          </div>
        </div>
        <div class="logo_nav">
            <ul class="nav justify-content-center fw-bold fs-4">
              <li><a href="#" class="nav-link px-5">ABOUT</a></li>
              <li><a href="#" class="nav-link px-5 ">PRIVACY POLICY/TERMS</a></li>
              <li><a href="#" class="nav-link">CONTACT</a></li>
            </ul>
        </div>
      </Container>
    </section>
  );
};

export default Logo;