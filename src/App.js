import React,{ Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import Terminal from './terminal';

class App extends Component{
  render(){
    return (
      <div className = "App">
        <Terminal />
      </div>
    );
  }
}

export default App;
