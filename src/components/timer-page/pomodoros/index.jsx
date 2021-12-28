import React, { Component } from "react";
import emptyTomato from "./empty-tomato.svg";
import fillTomato from "./fill-tomato.svg";
import failedTomato from "./tomato-failed.svg";
import "./style.scss";

class Pomodoros extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { pomodoros } = this.props;

    return (
      <ul className="timer__pomodoro">
        {pomodoros.map((p) => {
          if (p.failed) {
            return (
              <li className="timer__pomodoro-item" key={p.index}>
                <img
                  src={failedTomato}
                  className="timer__failed-tomato timer__pomodoro-img"
                  alt=""
                />
              </li>
            );
          }

          if (p.finished) {
            return (
              <li className="timer__pomodoro-item" key={p.index}>
                <img src={fillTomato} className="timer__fill-tomato timer__pomodoro-img" alt="" />
              </li>
            );
          }

          return (
            <li className="timer__pomodoro-item" key={p.index}>
              <img src={emptyTomato} className="timer__empty-tomato timer__pomodoro-img" alt="" />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Pomodoros;