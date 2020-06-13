import React from "react";
import styled from "styled-components";

class Time extends React.Component {
  state = {
    time: null,
  };

  render() {
    return (
      <TimeConatiner>
        <TimeCol>
          <TimeCol__time> Hi</TimeCol__time>
          <TimeCol__greetings>Welcome 기상</TimeCol__greetings>
        </TimeCol>
      </TimeConatiner>
    );
  }
}

const TimeConatiner = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  margin-left: -6rem;
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
  font-size: 2rem;
`;

export default Time;
