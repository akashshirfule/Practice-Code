import React from "react";
import Header from "./Header";
import Myimg from './akash.jpg'
// import Myimg from './person.png'
function Home() {
  return (
    <>
    <Header></Header>
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src={Myimg} alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Akash Shirfule</h6>
            <h3>UI Developer</h3>
            <p>
              I am Akash Shirfule Ui Developer working at yash techonologies since last 8 months.
            
            </p>
            {/* <a className="btn" href="#projects">
              About Me
            </a> */}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;
