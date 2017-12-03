import React, { Component } from 'react';



import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Radio from './component';
import TextField from 'material-ui/TextField';
import tableData from './data';
import axios from 'axios';


// tableData.map((choice, i) => {                
//   return (                    
//     <Radio data={choice}  key={i} named={i} handler={this.handler}/>                    
//   )
// })



class Question extends Component {
  constructor(){
    super();
    this.state = {"q":0,"qObj":tableData[0],"result":"","userName":"",
      "a":[],
      "b":[],
      "c":[],
      "d":[]
    };
    this.handler = this.handler.bind(this);
    this.isLock = false;
  }
  changeName(e){
    let k = {...this.state};
    k.userName = e.target.value;
    this.setState(k);
  }
  handler(selected){
    if(this.isLock) return;
    this.isLock = true;

    let p = {...this.state};
    let {q} = this.state;
    p[selected].push(q+1);

    p[q] = selected;    
    q += 1;
    p.q = q;
    if(q == tableData.length){
      
      console.log('done'); 
      // const arr = [0,0,0,0];
      // const state = this.state;
      // for(let i=0;i<tableData.length;i++){
      //   if(state[i]=='a'){
      //     arr[0] += 1;
      //   }
      //   if(state[i]=='b'){
      //     arr[1] += 1;
      //   }
      //   if(state[i]=='c'){
      //     arr[2] += 1;
      //   }
      //   if(state[i]=='d'){
      //     arr[3] += 1;
      //   }
      //   if(i == tableData.length-1){
      //     if(selected=='a'){
      //       arr[0] += 1;
      //     }
      //     if(selected=='b'){
      //       arr[1] += 1;
      //     }
      //     if(selected=='c'){
      //       arr[2] += 1;
      //     }
      //     if(selected=='d'){
      //       arr[3] += 1;
      //     }
      //   }
      // }


      let resultAnimals = [
        {name:"孔雀",cnt:this.state.a.length,type:"A"},
        {name:"老虎",cnt:this.state.b.length,type:"B"},
        {name:"貓頭鷹",cnt:this.state.c.length,type:"C"},
        {name:"無尾熊",cnt:this.state.d.length,type:"D"},
      ];
      resultAnimals = resultAnimals.sort(function(a, b) {
        return parseFloat(b.cnt) - parseFloat(a.cnt);
      });
      
      const majorAnimal = resultAnimals[0];
      p.result = majorAnimal.name;

      const rs = resultAnimals.map((animal)=>{
        return `${animal.type}(${animal.name})有 ${animal.cnt} 個`
      }).join(', ');
      
      console.log(rs);
      // `A有 ${arr[0]} 個, B有 ${arr[1]} 個, C有 ${arr[2]} 個, D有 ${arr[3]} 個`
      p.fullResult = rs;
      
      axios.post('http://192.168.2.102:9999/api/users',{
        userName:p.userName,
        a:p.a,
        b:p.b,
        c:p.c,
        d:p.d,
        result:p.result,
        fullResult:p.fullResult
      }).then((data)=>{
        console.log(data);
      }).catch((err)=>{
        console.err(err);
      })
    }else{      
      p.qObj = tableData[q];      
    }
    setTimeout(()=>{
      this.isLock = false;
      this.setState(p);
    },500)
    
    
  }
  render() {
    
    return (
      <div>
        
                  
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
            this.state.userName.length > 1 ? <div className="content" style={{width:'50%',margin:'10px auto'}}>
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
              this.state.q === tableData.length ?  <div><p>{`恭喜您已填完40題測驗，測驗結果顯示出您是`}</p><strong style={{color:'red'}}>{this.state.result}</strong><br/><p>{ `${this.state.fullResult}`}</p></div> :           
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

export default Question;
