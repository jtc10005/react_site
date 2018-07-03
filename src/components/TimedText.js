import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Clock } from './Clock';
import { withRouter } from 'react-router-dom';

export default class TimedText extends Component {

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
    if (this.state.count === 4) {
      this.props.history.push('/Index');
      // this.context.router.push('/Index');
    }
  }

  render() {
    return (
      <div>
        {this.state.count === 1 ? <FadeText text="Welcome" /> : null}
        {this.state.count === 2 ? <FadeText text="My name is" /> : null}
        {this.state.count === 3 ? <FadeText text="James Culpepper" /> : null}
        {/* <div> the count is on: {this.state.count} </div> */}
        <Clock />
      </div>
    );
  }
}

ReactDOM.render(<TimedText />, document.getElementById('root'));

export function FadeText(props) {
  return <h2 className="elementToFadeInAndOut"> {props.text}</h2>;
}
