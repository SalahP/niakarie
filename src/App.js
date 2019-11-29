import React from 'react';
import Favicon from 'react-favicon';

class App extends React.Component {
  render() {
    return (
      <div class ="container-fluid">
        <Favicon url="./logo.png"></Favicon>
        <h1 class="text-center text-white">test</h1>
      </div>

    )
  }
}

export default App;
