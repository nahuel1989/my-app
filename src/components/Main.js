import React, { Component } from 'react';
import '../css/style4.css';
import Content from './Content.js';
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

class Main extends Component {
    handleClick() {
        this.setState(function(prevState) {
            return {isToggleOn: !prevState.isToggleOn};
        });
    }

  render() {
    return (
        <div className="wrapper">
          <Sidebar/>
            <div id="content">
                <Topbar/>
                <Content/>
            </div>
        </div>
    );
  }
}

export default Main;
