import React, { Component } from 'react';
import Trianglify from 'trianglify';
import TypeWriter from './components/TypeWriter';
import SocialLinks from './components/SocialLinks';
import Profile from './assets/images/profile_square.png';
import IconContainer from './components/IconContainer';
import items from './assets/js/portfolioItems';

class App extends Component {
  componentDidMount () {
    this.setBg();
    window.addEventListener("resize", this.setBg.bind(this));
  }

  setBg = () => {
      let pattern = Trianglify({
          width: window.innerWidth,
          height: window.innerHeight,
          cell_size: 80,
          variance: "0.89",
          x_colors: ["#FFA9DC", "#F3CAFF", "#EB6087", "#E0004D", "#8F1368"]
      });
      pattern.canvas(document.getElementById('canvas-basic'));
  }

  render () {

    return (
      <div className="App">
        {/* Loader */}
        {/* <div id="loader" className="container-dark">
          <div id="loader-inner">
            <h5>Loading</h5>
            <div id="loader-expand"></div>
          </div>
        </div> */}
  
        {/* Content */}
        <div id="fade-wrapper">
          <main>
  
            {/* Background */}
            <section className="container" id="bg">
              <canvas id="canvas-basic"></canvas>
            </section>
  
            {/* Home */}
            <section className="container" id="home">
              <div className="wrapper">
                <div>
                  <div id="type-wrap">
                    <div id="type-wrap-inner" className="box">
                      <TypeWriter period={200} textArray={["Amelia Carlie", "Development", "& Design"]} />
                      <hr className="home" />
                      <nav className="text-center home-nav">
                        <a href="#about">About</a><a href="#work">Work</a><a href="#about">Contact</a>
                      </nav>
                    </div>
  
                    <a href="assets/pdfs/AmeliaCarlie_Resume.pdf" target="_blank" className="btn-dark">Download My Resume</a>
  
                  </div>
  
                  <SocialLinks />
                </div>
              </div>
            </section>
  
            {/* About */}
            <section className="container container-dark margin-bottom" id="about">
  
              <div className="wrapper-nav">
                <span className="fas fa-chevron-up"></span>
                <a href="#home" className="wrapper-link">Home</a>
              </div>
  
              <div className="wrapper">
                <div className="row">
  
                  <div className="col col-2">
                    <div id="profile-wrapper" className="profile-wrapper">
                      <img src={Profile} alt="" className="img-responsive img-profile" />
                      <div className="icon-container">
                        <div className="icon-content">Amelia Carlie</div>
                        <span className="icon"><i className="fas fa-user"></i></span>
                      </div>
                      <div className="icon-container">
                        <div className="icon-content">ameliacarlie@gmail.com</div>
                        <span className="icon"><i className="fas fa-at"></i></span>
                      </div>
                      <div className="icon-container">
                        <div className="icon-content">Chapel Hill, NC</div>
                        <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
                      </div>
                    </div>
                  </div>
  
                  <div className="col col-4">
                    <IconContainer icon='info'>
                      <p>
                        I am a full-stack developer passionate about UI/UX. My love of coding started early on, styling Neopets guild layouts in the early 2000s. Since then, D.R.Y. has become a personal mantra.
                      </p>
                      <p>
                        With 5 years experience in the graphic design field, I am now applying my knowledge of color theory and composition to my daily development projects.
                      </p>
                    </IconContainer>
                    <IconContainer icon='code'>
                        <ul className="primary-list">
                          <li><span className="heading">Languages:</span> HTML5, CSS3, JavaScript(ES5 & ES6)</li>
                          <li><span className="heading">Frameworks:</span> React</li>
                          <li><span className="heading">Libraries:</span> jQuery, Materialize, Bootstrap</li>
                          <li><span className="heading">Pre-Processors:</span> SASS</li>
                          <li><span className="heading">Back-End:</span> Express, MySQL, MongoDB, Mongoose, Firebase</li>
                          <li><span className="heading">Other Technologies:</span> Node.js</li>
                        </ul>
                    </IconContainer>
                    <IconContainer icon='pencil-ruler'>
                      <ul className="primary-list">
                        <li><span className="heading">Tools:</span> PhotoShop, Illustrator, InDesign, Adobe XD</li>
                        <li><span className="heading">Design:</span> Color Theory, Illustration, Typography, Branding, Composition</li>
                      </ul>
                    </IconContainer>
                    <IconContainer icon='pizza-slice'>
                      <ul className="primary-list">
                        <li><span className="heading">Hobbies:</span> Photography, Making Pizza</li>
                      </ul>
                    </IconContainer>
                  </div>
                </div>
              </div>
  
              <div className="wrapper-nav">
                <a href="#work" className="wrapper-link">Work</a>
                <span className="fas fa-chevron-down"></span>
              </div>
  
            </section>
  
            {/* Work */}
            <section className="container container-dark" id="work">
  
              <div className="wrapper-nav">
                <span className="fas fa-chevron-up"></span>
                <a href="#about" className="wrapper-link">About</a>
              </div>
  
              <div className="wrapper">
                <div className="row">
                  <div id="portfolio" className="col col-6 grid">
                    {
                      items.map((item, i) => {
                        return(
                        <div>{item.title}</div>
                        );
                      })
                    }
  
                  </div>
                </div>
              </div>
  
              <div className="wrapper-nav">
                <span className="fas fa-chevron-up"></span>
                <a href="#home" className="wrapper-link">Back to Top</a>
              </div>
  
            </section>
  
          </main>
  
          <footer>
  
            <section id="social" className="footer-top">
              <SocialLinks />
            </section>
  
            <p className="text-center text-sm footer-bottom">© Amelia Carlie 2019</p>
  
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
