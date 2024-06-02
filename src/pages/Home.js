import React from 'react';
import './Home.css';
import hostsImage from '../assets/threeofus.png'; // Ensure this path is correct

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Inside the Lines Podcast</h1>
          <p>Welcome to the “Inside the lines” podcast where your hosts, Matthew Brathwaite, Saphal Joshi, and Christian Dunbar, will dive into the stories and experiences of collegiate and professional athletes.</p>
          <p>In each episode, we will aim to provide an inside look into the lives of some of the best athletes in the world, both on and off the playing field. From the challenges they faced during the early stages of their careers to the triumphs that shaped who we know them as today, our guests will have the floor to talk about their journey and show more of who they are behind the jersey.</p>
          <p>We believe in the power of storytelling and hope that our podcast both inspires our viewers to overcome their own challenges, and humanizes our remarkable guests who dedicate their lives to their sport.</p>
          <a href="/episodes" className="cta-button">Listen Now</a>
        </div>
      </section>
      <section className="hosts">
        <h2>Meet Your Hosts</h2>
        <div className="hosts-list">
          <img src={hostsImage} alt="Hosts: Matthew, Saphal, and Christian" className="hosts-image"/>
        </div>
      </section>
      <section className="social-media">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="https://www.youtube.com/@InsideTheLinesI-95" target="_blank" rel="noopener noreferrer">
            <img src="/youtube-icon.png" alt="YouTube" />
          </a>
          <a href="https://www.instagram.com/insidethelinesinc/?hl=en" target="_blank" rel="noopener noreferrer">
            <img src="/instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src="/tiktok-icon.png" alt="TikTok" />
          </a>
        </div>
      </section>
      <footer>
        © 2024 InsideTheLines. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
