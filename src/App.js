import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Radio from './component';
import TextField from 'material-ui/TextField';
import tableData from './data';


// tableData.map((choice, i) => {                
//   return (                    
//     <Radio data={choice}  key={i} named={i} handler={this.handler}/>                    
//   )
// })



class App extends Component {
  constructor(){
    super();
    this.state = {"q":0,"qObj":tableData[0],"result":"","userName":""};
    this.handler = this.handler.bind(this);
  }
  changeName(e){
    let k = {...this.state};
    k.userName = e.target.value;
    this.setState(k);
  }
  handler(selected){
    let p = {...this.state};
    let {q} = this.state;
    p[q] = selected;    
    q += 1;
    p.q = q;
    if(q == tableData.length){
      
      console.log('done'); 
      const arr = [0,0,0,0];
      const state = this.state;
      for(let i=0;i<tableData.length;i++){
        if(state[i]=='a'){
          arr[0] += 1;
        }
        if(state[i]=='b'){
          arr[1] += 1;
        }
        if(state[i]=='c'){
          arr[2] += 1;
        }
        if(state[i]=='d'){
          arr[3] += 1;
        }
        if(i == tableData.length-1){
          if(selected=='a'){
            arr[0] += 1;
          }
          if(selected=='b'){
            arr[1] += 1;
          }
          if(selected=='c'){
            arr[2] += 1;
          }
          if(selected=='d'){
            arr[3] += 1;
          }
        }
      }


      let resultAnimals = [
        {name:"孔雀",cnt:arr[0],type:"A"},
        {name:"老虎",cnt:arr[1],type:"B"},
        {name:"貓頭鷹",cnt:arr[2],type:"C"},
        {name:"無尾熊",cnt:arr[3],type:"D"},
      ];
      resultAnimals = resultAnimals.sort(function(a, b) {
        return parseFloat(b.cnt) - parseFloat(a.cnt);
      });
      
      const rs = resultAnimals.map((animal)=>{
        return `${animal.type}(${animal.name})有 ${animal.cnt} 個`
      }).join(',');
      
      console.log(rs);
      // `A有 ${arr[0]} 個, B有 ${arr[1]} 個, C有 ${arr[2]} 個, D有 ${arr[3]} 個`
      p.result = rs;
    }else{      
      p.qObj = tableData[q];      
    }
    setTimeout(()=>{
      this.setState(p);
    },500)
    
    
  }
  render() {
    
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to 性向測驗</h1>
          </header>      
        </div>
        <div className="textField" style={{width:'200px',margin:'20px auto'}}>
          <MuiThemeProvider> 
            <TextField 
              floatingLabelFixed={false}
              floatingLabelText="請輸入姓名"
              onChange={this.changeName.bind(this)}
            />
          </MuiThemeProvider> 
        </div>

        {
          this.state.userName.length > 1 ? <div className="content">
          <strong style={{
            width: '100px',
            margin: '20px auto',
            color:'red',
            display:'block',
            fontSize:'20px'
        }}>
            {
              this.state.q != tableData.length ?
              `第 ${this.state.q+1} 題` :
              ''          
            }
          </strong>
          {
            this.state.q === tableData.length ?  <p>{`恭喜您已填完40題測驗，測驗結果顯示出您是 ${this.state.result}`}</p> :           
              <MuiThemeProvider>                
                <Radio data={this.state.qObj} name={this.state.q} handler={this.handler} />                                                                                                 
              </MuiThemeProvider>
          }                                                                          
          
        </div> : <div />
        }
        
        
      </div>
    );
  }
}

export default App;