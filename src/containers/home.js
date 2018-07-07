import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Clock } from '../components/Clock';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      count: 1
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 7000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick(event) {
    this.setState({
      count: this.state.count + 1
    });
    if (this.state.count === 6) {
      this.props.history.push('/Landing');
      // this.context.router.push('/Index');
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.state.count === 1 ? <FadeText text="Welcome" /> : null}
          {this.state.count === 2 ? <FadeText text="My name is" /> : null}
          {this.state.count === 3 ? <FadeText text="James Culpepper" /> : null}
          {this.state.count === 4 ? (
            <FadeText text="and you have made it to my" />
          ) : null}
          {this.state.count === 5 ? <FadeText text="reactjs site" /> : null}
          {/* <div> the count is on: {this.state.count} </div> */}
        </div>
        <Clock />
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));

export function FadeText(props) {
  return <h2 className="elementToFadeInAndOut"> {props.text}</h2>;
}
