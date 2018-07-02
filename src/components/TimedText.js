import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class TimedText extends Component {
  constructor(props) {
    super(props);
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

  tick() {
    this.setState({
      count: this.state.count === 3 ? 1 : this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        {this.state.count === 1 ? <FadeText text="Welcome" /> : null}
        {this.state.count === 2 ? <FadeText text="My name is" /> : null}
        {this.state.count === 3 ? <FadeText text="James Culpepper" /> : null}
        {/* <div> the count is on: {this.state.count} </div> */}
      </div>
    );
  }
}

ReactDOM.render(<TimedText />, document.getElementById('root'));
export default TimedText;

export function FadeText(props) {
  return <h2 className="elementToFadeInAndOut"> {props.text}</h2>;
}
