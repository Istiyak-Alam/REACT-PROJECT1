import './App.css';

import React, { Component } from 'react'
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';
import Footernews from './Components/Footernews';
import Displayhere from './Components/Displayhere';
import Icons from './Components/Icons';

export default class App extends Component {
  render() {
    return (
      <div>
        <Icons></Icons>
        <Navbar></Navbar>
        <Displayhere></Displayhere>
        <Footernews></Footernews>
      </div>
    )
  }
}
