import React from 'react';
import Favicon from 'react-favicon';
import Home from './Home';
import Video1 from './Video1';
import Video2 from './Video2';
import Contact from './Contact'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {page: <Home vid1={this.getVideo1} vid2={this.getVideo2}/>}
  }

  getHome = () => {
    this.setState({
      page: <Home vid1={this.getVideo1} vid2={this.getVideo2}/>
    })
  }

  getVideo1 = () => {
    this.setState({
      page: <Video1 />
    })
  }

  getVideo2 = () => {
    this.setState({
      page: <Video2 />
    })
  }

  getContact = () => {
    this.setState({
      page: <Contact />
    })
  }

  render() {

    return (
      <div class ="container-fluid">
        <Favicon url="./logo.png"></Favicon>
        <nav class="navbar border-bottom">
        <button class="btn btn-lg" onClick={() => this.getHome()}><h3 class="text-white">Home</h3></button>
        <button class="btn btn-lg"onClick={() => this.getContact()}><h3 class="text-white justify-content-end">Contact</h3></button>
        </nav><br/>
        {this.state.page}
      </div>

    )
  }
}

export default App;
