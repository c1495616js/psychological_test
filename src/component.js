import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


export default class Radio extends Component {  

  change(e, selected){
    e.preventDefault();
    this.props.handler(selected);
  }

  render(){
    const {a,b,c,d} = this.props.data;
    // const i = this.props.named;
    return(
      
        <RadioButtonGroup  valueSelected={this.props.name.toString()} style={{ display: 'flex',padding:'10px'}} name={this.props.name.toString()} onChange={this.change.bind(this)}>                 
          <RadioButton  value="a" label={`A: ${a}`} />                  
          <RadioButton  value="b" label={`B: ${b}`}/>
          <RadioButton  value="c" label={`C: ${c}`}/>
          <RadioButton  value="d" label={`D: ${d}`}/>                  
        </RadioButtonGroup>  
      
    ) 
  }
}


