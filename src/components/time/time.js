import React from "react";
import styled from "styled-components";
import Greetings from "../greetings/greetings";

class Time extends React.Component {
  state = {
    hour: null,
    min: null,
  };

  saveTime = (hour, min) => {
    this.setState({ hour, min });
  };

  getTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    this.saveTime(hour, min);
  };

  componentDidMount() {
    this.getTime();
  }

  render() {
    const { hour } = this.state;
    const { min } = this.state;
    return (
      <TimeConatiner>
        <TimeCol>
          <TimeCol__time>
            {hour < 10 ? `0${hour}` : `${hour}`} :{" "}
            {min < 10 ? `0${min}` : `${min}`}
          </TimeCol__time>
          <TimeCol__greetings>
            <Greetings />
          </TimeCol__greetings>
        </TimeCol>
      </TimeConatiner>
    );
  }
}

const TimeConatiner = styled.div`
  position: absolute;
  top: 38%;
  left: 48%;
  margin-left: -5rem;
`;

const TimeCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Jua", sans-serif;
`;

const TimeCol__greetings = styled.span`
  font-size: 2rem;
`;

const TimeCol__time = styled.span`
  font-size: 3rem;
  margin-bottom: 20px;
`;

export default Time;
