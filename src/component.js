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
      
        <RadioButtonGroup  valueSelected={this.props.name.toString()} style={{ display: 'block',padding:'10px'}} name={this.props.name.toString()} onChange={this.change.bind(this)}>                 
          <RadioButton  value="a" label={`A: ${a}`} style={{ margin:'10px auto'}} />                  
          <RadioButton  value="b" label={`B: ${b}`} style={{ margin:'10px auto'}}/>
          <RadioButton  value="c" label={`C: ${c}`} style={{ margin:'10px auto'}}/>
          <RadioButton  value="d" label={`D: ${d}`} style={{ margin:'10px auto'}}/>                  
        </RadioButtonGroup>  
      
    ) 
  }
}


