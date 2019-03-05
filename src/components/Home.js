import React from 'react'
import "./Home.css"
import { Link } from "react-router-dom"

const Home=() => {

    return (
      <>
      <div id="main-container" className="container">
        <section className="main-section">
        <img src= { require("../assets/Image.jpg")} className="myimg" alt="Me"/>
        <h1>Caleb Colon</h1>
        <h2>Full Stack Developer</h2>
      
        <p>
          My name is Caleb Colon. I am a full stack developer with a passion for technology, sports, and my family.        
        </p>
        <p>
          Formerly in sales, I have decided to change my career and pursue a role in web development. 
        </p>
        <p>
          Please feel free to browse and my site, and reachout with any questions!
        </p>


        <button>
         
          <Link className="nav-link" to="/portfolio">View My Work</Link>
        </button>

        </section>

      </div>
  </>
    )

}

export default Home;