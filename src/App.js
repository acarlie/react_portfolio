import React, { Component } from 'react';

// packages
import Trianglify from 'trianglify';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import ScrollAnimation from 'react-animate-on-scroll';

//components
import TypeWriter from './components/TypeWriter';
import SocialLinks from './components/SocialLinks';
import IconContainer from './components/IconContainer';
import PortfolioItem from './components/PortfolioItem';

//assets
import Profile from './assets/images/profile_square.png';
import items from './assets/js/portfolioItems';

//css
import "animate.css/animate.min.css";

const animatedComponents = makeAnimated();
const menuStyles = {
  menu: (provided, state) => ({
    ...provided,
    padding: 10
    // borderRadius: 0
    // overflow: 'hidden'
  })
}
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loaded: false,
      loader: ''
    }
    this.filters = ["React", "Node", "Express", "MERN", "MongoDB", "MySQL", "UI/UX", "Mobile-First", "Vanilla JS", "AJAX", "ES6", "Sass", "Bootstrap", "Materialize", "jQuery"]
    this.filterOptions = this.filters.map(x => {
      return { value: x, label: x }
    })
  }

  componentDidMount () {
    this.setBg();
    window.addEventListener("resize", this.setBg.bind(this));
    setTimeout(() => {
      this.setState({
        loader: 'done',
        portfolio: [...items]
      })
    }, 3000)
    setTimeout(() => {
      this.setState({
        loaded: true
      })
    }, 4000)
    // this.getFilters(items);
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

  filterHandler = (input) => {
    const filterArr = input || false;
    let filtered = [];
    if (filterArr && filterArr.length > 0) {
      const filters = filterArr.map(x => x.value);
      const filteredTitles = [];
      for (let y of filters) {
        for (let x of items) {
          if (x.tags.indexOf(y) > -1 && filteredTitles.indexOf(x.title) < 0){
              filteredTitles.push(x.title);
              filtered.push(x);
          }
        }
      }

    } else {
      filtered = [...items];
    }
    this.setState({
      portfolio: [...filtered]
    })
  }

  render () {
    return (
      <div className="App">

        {/* Loader */}
        {
          !this.state.loaded &&
          <div id="loader" className={"container-dark " + this.state.loader}>
            <div id="loader-inner">
              <h5>Loading</h5>
              <div id="loader-expand"></div>
            </div>
          </div>
        }
  
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
  
                    <a href={process.env.PUBLIC_URL + 'assets/pdfs/AmeliaCarlie_Resume.pdf'} target="_blank" rel="noopener noreferrer" className="btn-dark">Download My Resume</a>
  
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
                    <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut' offset={0} duration={.5}>
                      <div id="profile-wrapper" className="profile-wrapper">
                        <img src={Profile} alt="" className="img-responsive img-profile" />
                        <IconContainer icon='user'>
                          Amelia Carlie
                        </IconContainer>
                        <IconContainer icon='at'>
                          ameliacarlie@gmail.com
                        </IconContainer>
                        <IconContainer icon='map-marker-alt'>
                          Chapel Hill, NC
                        </IconContainer>
                      </div>
                    </ScrollAnimation>
                  </div>
  
                  <div className="col col-4">
                    <IconContainer icon='info' info fade>
                      <p>
                        I am a full-stack developer passionate about UI/UX. My love of coding started early on, styling Neopets guild layouts in the early 2000s. Since then, D.R.Y. has become a personal mantra.
                      </p>
                      <p>
                        With 5 years experience in the graphic design field, I am now applying my knowledge of color theory and composition to my daily development projects.
                      </p>
                    </IconContainer>
                    <IconContainer icon='code' info fade>
                        <ul className="primary-list">
                          <li><span className="heading">Languages:</span> HTML5, CSS3, JavaScript(ES5 & ES6)</li>
                          <li><span className="heading">Frameworks:</span> React</li>
                          <li><span className="heading">Libraries:</span> jQuery, Materialize, Bootstrap</li>
                          <li><span className="heading">Pre-Processors:</span> SASS</li>
                          <li><span className="heading">Back-End:</span> Express, MySQL, MongoDB, Mongoose, Firebase</li>
                          <li><span className="heading">Other Technologies:</span> Node.js</li>
                        </ul>
                    </IconContainer>
                    <IconContainer icon='pencil-ruler' info fade>
                      <ul className="primary-list">
                        <li><span className="heading">Tools:</span> PhotoShop, Illustrator, InDesign, Adobe XD</li>
                        <li><span className="heading">Design:</span> Color Theory, Illustration, Typography, Branding, Composition</li>
                      </ul>
                    </IconContainer>
                    <IconContainer icon='pizza-slice' info fade>
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
                  <div className='col col-6'>
                    <Select 
                      options={this.filterOptions} 
                      isMulti
                      name="filter"
                      className="basic-multi-select"
                      classNamePrefix="select"
                      placeholder='Filter by tags...'
                      components={animatedComponents}
                      onChange={this.filterHandler}
                      styles={menuStyles}
                      theme={theme => ({
                        ...theme,
                        borderRadius: 8,
                        colors: {
                          ...theme.colors,
                          primary: '#FF4F69',
                          primary75: '#FF6F84',
                          primary50: '#FF8F9F',
                          primary25: '#FFAFBA'
                        }
                      })}
                    />
                  </div>
                </div>
                <div className="row">
                  <div id="portfolio" className="col col-6 grid">
                    { this.state.loader &&
                      this.state.portfolio.map((item, i) => {
                        return(
                          <PortfolioItem
                            key={i}
                            title={item.title}
                            img={item.img}
                            url={item.url}
                            repo={item.repo}
                            desc={item.desc}
                          />
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
          
            <div className="text-center text-sm footer-bottom">
              <p> - Created with React <i className="fab fa-react"></i> - </p>
              <p>© Amelia Carlie 2019</p>
            </div>
  
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
