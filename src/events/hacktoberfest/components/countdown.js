import React, { Component } from 'react';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leading(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());

    if(time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    } else {
      const seconds = Math.floor((time/1000)%60);
      const minutes = Math.floor((time/1000/60)%60);
      const hours = Math.floor((time/(1000*60*60))%24);
      const days = Math.floor(time/(1000*60*60*24));

      this.setState({ days, hours, minutes, seconds });
    }

  }

  render() {
    return(
      <section id="counter">
        <div className="d-flex align-items-center text-lg-left text-center justify-content-center h-100">
          <div className="countdown">
            {this.leading(this.state.days)} <span className="color">Days</span> {this.leading(this.state.hours)} <span className="color">Hours</span> {this.leading(this.state.minutes)} <span className="color">Minutes</span> {this.leading(this.state.seconds)} <span className="color">Seconds</span>
          </div>
        </div>
      </section>
    );
  }
}
export default Countdown;