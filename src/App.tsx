import React from 'react';

import './App.css';
import Me from "./assets/me.jpg";
import Instagram from "./assets/instagram.svg";
import Whatsapp from "./assets/whatsapp.svg";
import Linkedin from "./assets/linkedin.svg";
import Github from "./assets/github.svg";
import ArrowUp from "./assets/arrow-up.svg";

function App() {

  (function() {
    const btn = document.getElementById('to-top-page');
    if (!btn) return;
    document.addEventListener('scroll', function(e) {
        if (window.scrollY > 500) {
            btn.style.display = "block"
        }else {
            btn.style.display = "none"
        };
    });
  })();

  function handleScroll() {
    window.scrollTo({
      top: 0
    })
  };

  return (
    <div className="portfolio">
      <header>
        <div className="navigation">
          <div className="navigation-content">
            <a href="#who-am-i">Who am I?</a>
          </div>
          <div className="navigation-content">
            <a href="#knowledges">Knowledges</a>
          </div>
          <div className="navigation-content">
            <a href="#projects">Projects</a>
          </div>
          <div className="navigation-content">
            <a href="#contacts">Contacts</a>
          </div>
        </div>
      </header>
      <main>
        <section className="section" id="apresentation">
          <h1 className="title">Alisson Silva | Backend Developer</h1>
          <div className="apresentation-content"></div>
        </section>

        <hr/>

        <section className="section" id="who-am-i">
          <h2 className="sub-title">Who am I?</h2>
          <div className="who-am-i-content">
            <p className="me-text">
              Hi, I am Alisson, I am 21 years old and I was born in a city in the interior of Bahia 
              called Santo Antônio de Jesus. I started in the technology area in 2019 when I joined 
              in Systems Analysis and Development Course at IFBA (Federal Institute of Science and Technology 
              of Bahia) - Campus Santo Antônio. From him, i was indentifying myself in the web development 
              area. i was learning over time the meaning of "Learn to Learn", I am always looking for new content
              from my interest, as well as new methods of learning.
            </p>
            <img src={Me} alt="Alisson" />
          </div>
        </section>
        
        <hr/>

        <section className="section" id="knowledges">
          <h2 className="sub-title">Knowledges</h2>
          <div className="knowledge-list">
            <ul className="list">
              <li className="techs">Javascript</li>
              <li className="techs">Typescript</li>
              <li className="techs">HTML</li>
              <li className="techs">CSS</li>
              <li className="techs">NoSQL</li>
              <li className="techs">SQL</li>
              <li className="techs">ExpressJS</li>
              <li className="techs">ReactJS</li>
              <li className="techs">Linux OS</li>
            </ul>
          </div>

        </section>

        <hr/>

        <section className="section" id="projects">
          <h2 className="sub-title">Projects</h2>
          <div className="projects-content">

          </div>
        </section>

        <hr/>

        <section className="section" id="contacts">
          <h1 className="subtitle">Contacts</h1>
          <div className="contact-content">
            <a href="https://www.instagram.com/4liss0n.s1lv4/" target="_blank" rel="noopener noreferrer" className="social-links">
                <img src={Instagram} alt="Instagram" className="icons" />
            </a>
            <a href="https://www.linkedin.com/in/alisson-santos-7264bb240/" target="_blank" rel="noopener noreferrer" className="social-links">
                <img src={Linkedin} alt="LinkedIn" className="icons" />
            </a>
            <a href="https://github.com/Alisson-Py" target="_blank" rel="noopener noreferrer" className="social-links">
                <img src={Github} alt="Github" className="icons" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5575982768373" target="_blank" rel="noopener noreferrer" className="social-links">
                <img src={Whatsapp} alt="Whatsapp" className="icons" />
            </a>
        </div>
        </section>
      </main>

      <hr/>

      <footer>
        <p className="copywriter">&copy; 2022 Alisson Silva | Backend Developer</p>
      </footer>
      <button id="to-top-page" onClick={handleScroll}>
        <img src={ArrowUp} alt="on top page" />
      </button>
    </div>
  );
}

export default App;