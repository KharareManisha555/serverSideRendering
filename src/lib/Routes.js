import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ServerRouter from 'server-router';
import { Redirect } from 'react-router';
import '../App.css';

import AppComp     from '../Component/AppComp.js';
import AppComps     from '../Component/AppComps.js';

const WebLayout = () => (
  <div className="skin-blue fixed sidebar-mini">    
    <Route path="/"           exact strict component={ AppComp } /> 
    <Route path="/appcomps"           exact strict component={ AppComps } /> 
  </div>
);


function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" component={WebLayout} />
        {/* <Redirect to="/" /> */}
      </Switch>
    </div>
  );
}

export default Routes;