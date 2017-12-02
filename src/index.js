import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Question from './question';
import Users from './Users';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
//injectTapEventPlugin();


const Root = () => {
  return (
    <HashRouter>
      <div>      
        <App>
          <Route path="/" exact component={Question}/>
          <Route path="/list" component={Users}/>
        </App>             
      </div>
    </HashRouter>
  )
} 

ReactDOM.render(Root(), document.getElementById('root'));
registerServiceWorker();
