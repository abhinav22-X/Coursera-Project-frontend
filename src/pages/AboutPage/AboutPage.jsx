import React from "react";
import "./AboutPage.css";
import { CiTwitter, CiYoutube } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="about-page">


      {/* About Section */}
      <section className="about-section">
        <h1>ABOUT US</h1>
        <p className="description">
          Welcome to Our Company! We are a team of passionate individuals dedicated to providing
          excellent services/products to our customers. Our mission is to
          <strong> provide the best experience </strong> for people traveling to different destinations around the world.
          Our values include integrity, innovation, customer satisfaction, and teamwork. We believe in
          <strong> putting our customers first </strong> and <strong> working together </strong> to achieve our goals.
          Feel free to explore our website to learn more about what we offer!
        </p>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="John Doe" />
            <h3>John Doe</h3>
            <p>CEO</p>
            <button>CEO</button>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Celina Thomas" />
            <h3>Celina Thomas</h3>
            <p>Team Lead</p>
            <button>Team Lead</button>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Mike Tysen" />
            <h3>Mike Tysen</h3>
            <p>Delivery Head</p>
            <button>Delivery Head</button>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <div className="social-links">
      <a href="#"><CiTwitter /></a>
      <a href="#"><SlSocialFacebook /></a>
      <a href="#"><FaInstagram /></a>
      <a href="#"><CiYoutube /></a>
      </div>
    </div>
  );
};

export default AboutPage;
