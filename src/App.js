import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import HorizontalNav from './components/Nav/HorizontalNav/HorizontalNav';
import Footer from './components/Footer/Footer';
import AboutUs from './containers/AboutUs/AboutUs';
import Course from './containers/Course/Course';
import Blog from './containers/Blog/Blog';
import Student from './containers/Student/Student';
import Document from './containers/Document/Document';
import Contact from './containers/Contact/Contact';
import BackToTop from './components/BackToTop/BackToTop';
import './App.css';

class App extends Component {

  backToTopHandler = (scrollDuration) => {
    // const scrollStep = -window.scrollY / (scrollDuration / 15),
    //     scrollInterval = setInterval(function(){
    //     if ( window.scrollY !== 0 ) {
    //         window.scrollBy( 0, scrollStep );
    //     }
    //     else clearInterval(scrollInterval); 
    // },15);
    let cosParameter = window.scrollY / 2,
        scrollCount = 0,
        oldTimestamp = performance.now();
    function step (newTimestamp) {
        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
        if (scrollCount >= Math.PI) window.scrollTo(0, 0);
        if (window.scrollY === 0) return;
        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  render(){
    return (
      <div className="App">
        <Nav />
        <HorizontalNav />
        <Switch>
          <Route path="/" exact component={AboutUs}/>
          <Route path="/course" component={Course}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/student" component={Student}/>
          <Route path="/document" component={Document}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer />
        <BackToTop clicked={() => this.backToTopHandler(600)}/>
      </div>
    );
  }
}

export default App;
