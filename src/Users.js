import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import UserTr from './userComponent';
export default class Users extends Component{
  constructor(){
    super();
    this.state = {data:[]};
  }
  componentDidMount(){
    const url = 'http://c1495616.com:9999/api/all';
    axios.get(url).then((res)=>{
      // console.log(res.data);
      this.setState({data:res.data});
    });
  }
  render(){
    console.log('dd',this.state.data)
    return (
      <div>
        <MuiThemeProvider>
          <Table fixedHeader={true}>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>
                  姓名
                </TableHeaderColumn>
                <TableHeaderColumn>
                  結果
                </TableHeaderColumn>
                <TableHeaderColumn>
                  A(孔雀)
                </TableHeaderColumn>
                <TableHeaderColumn>
                  B(老虎)
                </TableHeaderColumn>
                <TableHeaderColumn>
                  C(貓頭鷹)
                </TableHeaderColumn>
                <TableHeaderColumn>
                  D(無尾熊)
                </TableHeaderColumn>
              </TableRow>  
            </TableHeader>
            <TableBody>
              {
                this.state.data.map((each,index) => {
                  return (
                    <UserTr key={index} each={each} />                    
                  )
                })
              }
            </TableBody>
          </Table>
        </MuiThemeProvider>
      </div>
    )
  }
 

}