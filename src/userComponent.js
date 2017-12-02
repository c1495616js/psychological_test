import React, { Component } from 'react';

import {  
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class UserTr extends Component {  

  change(e, selected){
    e.preventDefault();
    // this.props.handler(selected);
  }

  render(){
    // const {a,b,c,d} = this.props.data;
    // const i = this.props.named;
    console.log('each',each);
    const {each} = this.props;
    return(
      
        <TableRow  key={this.props.key}>                 
          <TableRowColumn>{each.userName}</TableRowColumn>                  
          <TableRowColumn>{each.result}</TableRowColumn>
          <TableRowColumn>{each.a.length}</TableRowColumn>
          <TableRowColumn>{each.b.length}</TableRowColumn>
          <TableRowColumn>{each.c.length}</TableRowColumn>
          <TableRowColumn>{each.d.length}</TableRowColumn>
        </TableRow>  
      
    ) 
  }
}


