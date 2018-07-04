import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './containers/home';
import Index from './containers/index';
class App extends Component {
  render() {
    return (
      <div className={'container'}>
        <div className={'content'}>
          <BrowserRouter basename="">
            <Switch>
              {/* `component` will render when `path` matches the user's location */}
              {/* `exact` makes it so it only renders if `path` matches exactly. */}
              {/* Otherwise, `HomePage` would render on "mysite.com/About" as well as "mysite.com/". */}
              <Route exact path="/" component={Home} />
              <Route path="/Index" component={Index} />
            </Switch>
          </BrowserRouter>
          {/* <TimedText /> */}
        </div>
      </div>
    );
  }
}

export default App;
