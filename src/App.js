import React, { Component } from 'react';
import './App.css';
import { initializePush } from './firebase'

class App extends Component {
  state = {
    day: "00",
    hour: "00",
    minute: "00",
    second: "00",
    countDownDate: new Date("Apr 24, 2019 00:00:00").getTime(),
    distance: 0
  }
  
  componentDidMount() {
    initializePush()
    this.interval = setInterval(() => {
      // console.log("EIEI");
      let distance = this.state.countDownDate - new Date().getTime();
      let dayt = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hourt = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutet =  Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let secondt = Math.floor((distance % (1000 * 60)) / 1000);
        this.setState ({
          day: dayt < 10 ? "0" + dayt : dayt,
          hour: hourt < 10 ? "0" + hourt : hourt,
          minute: minutet < 10 ? "0" + minutet : minutet,
          second: secondt < 10 ? "0" + secondt : secondt
        });
    }, 1000);
    // console.log(this.state.day, this.state.hour, this.state.minute, this.state.second);
  }

  render() {
    return (
      <div className="App">
        <div className="title">เหลือเวลาอีกกกก...</div>
        <div className="timer">
          <div className="days">
            <div id="days">{this.state.day}</div>
            <div className="label">Days</div>
          </div>
          <div className="seperator">
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="hours">
            <div id="hours">{this.state.hour}</div>
            <div className="label">Hours</div>
          </div>
          <div className="seperator">
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="minutes">
            <div id="minutes">{this.state.minute}</div>
            <div className="label">Minutes</div>
          </div>
          <div className="seperator">
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="seconds">
            <div id="seconds">{this.state.second}</div>
            <div className="label">Seconds</div>
          </div>
        </div>
        {/* <div className="timer-label">
          <div className="label">Days</div>
          <div className="label">Hours</div>
          <div className="label">Minutes</div>
          <div className="label">Seconds</div>
        </div> */}
      </div>
    );
  }
}

export default App;
