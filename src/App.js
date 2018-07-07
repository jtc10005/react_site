import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Home } from './containers/home';
import Landing from './containers/landing';
class App extends Component {
  render() {
    return (
      <div className={'container'}>
        <BrowserRouter basename="">
          <div className={'content'}>
            <div className="TopBar">
              <Link to="/">Start</Link>
              <Link to="/Landing">Index</Link>
            </div>
            <Switch>
              {/* `component` will render when `path` matches the user's location */}
              {/* `exact` makes it so it only renders if `path` matches exactly. */}
              {/* Otherwise, `HomePage` would render on "mysite.com/About" as well as "mysite.com/". */}
              <Route exact path="/" component={Home} />
              <Route path="/Landing" component={Landing} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
