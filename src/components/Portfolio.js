import React, { Component } from 'react'
import "./Portfolio.css"

export default class Portfolio extends Component {
  render() {
    return (
    
  <div id="main-container" class="container">
  <section class="main-section">
    <h1>My work</h1>

    <div class="work">
      <a href ="https://zoosnatch.herokuapp.com/" target= "_blank"><img src={ require("../assets/technics-q-c-640-480-1.jpg")} alt="Choose Your Own Adventure"/>
      <h3>Choose Your Own Adventure</h3>
      </a>
    </div>
    <div class="work">
      <a href="https://mggude.github.io/tradeMark/" target= "_blank"><img src={ require("../assets/technics-q-c-640-480-2.jpg")} alt="tradeMark"/>

      <h3>tradeMark</h3>
      </a>
    </div>
    <div class="work">
     <a href="https://ccolon105.github.io/Word-Guess-Game/" target= "_blank"><img src={ require("../assets/technics-q-c-640-480-5.jpg")} alt="Western Word Guess Game"/>

      <h3>Western Word Guess Game</h3>
      </a>
    </div>
    <div class="work">
      <a href="https://ccolon-friend-finder.herokuapp.com/" target= "_blank"><img src={ require("../assets/technics-q-c-640-480-7.jpg")} alt="FriendFinder"/>
     
      <h3>FriendFinder (Game of Thrones Edition)</h3>
      </a>
    </div>

  </section>


  </div>
    )
  }
}
