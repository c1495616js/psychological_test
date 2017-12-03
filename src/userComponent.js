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
          <TableRowColumn style={{align:'center'}}>{each.userName}</TableRowColumn>                  
          <TableRowColumn style={{align:'center'}}>{each.result}</TableRowColumn>
          <TableRowColumn style={{align:'center'}}>{each.a.length}</TableRowColumn>
          <TableRowColumn style={{align:'center'}}>{each.b.length}</TableRowColumn>
          <TableRowColumn style={{align:'center'}}>{each.c.length}</TableRowColumn>
          <TableRowColumn style={{align:'center'}}>{each.d.length}</TableRowColumn>
        </TableRow>  
      
    ) 
  }
}


