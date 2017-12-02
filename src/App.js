import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Radio from './component';
import TextField from 'material-ui/TextField';
import tableData from './data';
import axios from 'axios';
import { Tabs,Tab } from 'material-ui/Tabs';
import { Link } from 'react-router-dom';
// tableData.map((choice, i) => {                
//   return (                    
//     <Radio data={choice}  key={i} named={i} handler={this.handler}/>                    
//   )
// })



class App extends Component {
  
  render() {
    
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">六藝-數 性向測驗</h1>
          </header>            
        </div>
        <MuiThemeProvider>
        <Tabs >
          <Tab value={0} label="性向測驗" containerElement={<Link to="/"/>} />
          <Tab value={1} label="測驗結果" containerElement={<Link to="/list"/>}/>        
        </Tabs>
        </MuiThemeProvider>
        {this.props.children}
      </div>
    );
  }
}

export default App;
