import React, { Component,lazy, Suspense } from 'react';
import {Route,Switch} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import HorizontalNav from './components/Nav/HorizontalNav/HorizontalNav';
import Footer from './components/Footer/Footer';

import BackToTop from './components/BackToTop/BackToTop';
import './App.css';

const AboutUs = lazy(() => import('./containers/AboutUs/AboutUs'));
const Courses = lazy(() => import('./containers/Courses/Courses'));
const Course = lazy(() => import('./containers/Courses/Course/Course'));
const Blog = lazy(() => import('./containers/Blog/Blog'));
const Student = lazy(() => import('./containers/Student/Student'));
const Document = lazy(() => import('./containers/Document/Document'));
const Contact = lazy(() => import('./containers/Contact/Contact'));
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

  componentDidMount() {
    window.addEventListener('scroll',() => {
      if(window.outerWidth > 768){
        if(window.scrollY > 20){
          document.querySelector('.navbar-light').style.backgroundColor = "#fff";
        }
        else document.querySelector('.navbar-light').style.backgroundColor = "transparent";
      }
    })
  }

  render(){
    return (
      <div className="App">
        <Nav />
        <HorizontalNav />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={AboutUs}/>
            <Route path="/courses" exact component={Courses}/>
            <Route path="/courses/:course" exact component={Course}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/student" component={Student}/>
            <Route path="/document" component={Document}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </Suspense>
        <Footer />
        <BackToTop clicked={() => this.backToTopHandler(600)}/>
      </div>
    );
  }
}

export default App;
