import React from "react";
import styled from "styled-components";

class ToDo extends React.Component {
  state = {
    text: null,
    id: null,
  };

  render() {
    return (
      <>
        <form>
          <ToDoList placeholder="할 일 적기"></ToDoList>
        </form>
        <ul>HI</ul>
      </>
    );
  }
}

const ToDoList = styled.input`
  padding: 10px 10px;
  font-size: 20px;
  width: 100%;
  border-radius: 30px;
  border: none;
  outline: none;
`;

export default ToDo;
