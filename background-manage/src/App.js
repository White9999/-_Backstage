import React, { Component } from 'react';
import "@/resource/style/navleft/navleft.scss"
import '@/resource/style/containerright/index.css'
import 'antd/dist/antd.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
