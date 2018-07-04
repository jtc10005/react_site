import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Home } from './containers/home';
import Index from './containers/index';
class App extends Component {
  render() {
    return (
      <div className={'container'}>
        <BrowserRouter basename="">
          <div className={'content'}>
            <div className="TopBar">
              <Link to="/">Start</Link>
              <Link to="/Index">Index</Link>
            </div>
            <Switch>
              {/* `component` will render when `path` matches the user's location */}
              {/* `exact` makes it so it only renders if `path` matches exactly. */}
              {/* Otherwise, `HomePage` would render on "mysite.com/About" as well as "mysite.com/". */}
              <Route exact path="/" component={Home} />
              <Route path="/Index" component={Index} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
