import React from "react";
import styled from "styled-components";
import Greetings from "../greetings/greetings";
import ToDo from "../todo/ToDo";

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
          <TimeColTime>
            {hour < 10 ? `0${hour}` : `${hour}`} :{" "}
            {min < 10 ? `0${min}` : `${min}`}
          </TimeColTime>
          <TimeColGreetings>
            <Greetings />
          </TimeColGreetings>
        </TimeCol>
      </TimeConatiner>
    );
  }
}

const TimeConatiner = styled.div`
  position: absolute;
  top: 28%;
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

const TimeColGreetings = styled.span`
  font-size: 2rem;
`;

const TimeColTime = styled.span`
  font-size: 3rem;
  margin-bottom: 20px;
`;

export default Time;
