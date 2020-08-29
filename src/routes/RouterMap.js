import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Message from '../views/Last/Message';
class RouterMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div className="mainRouter-wraper">
          <Switch>
            <Route  path='/last/message' component={Message}/>
          </Switch>
        </div>
    )
  }
}

export default RouterMap;