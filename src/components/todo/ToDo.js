import React from "react";
import styled, { keyframes } from "styled-components";

const TODO = "toDo";

class ToDo extends React.Component {
  state = {
    text: null,
    id: null,
  };

  saveToDo = (text) => {
    localStorage.setItem(TODO, text);
  };

  onChange = (e) => {
    this.setState({ text: e.target.value, id: Date.now() });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const toDo = document.querySelector(ToDoList);
    this.saveToDo(toDo.value);
    e.target.reset();
  };

  askForToDo = () => {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <ToDoList
            onChange={this.onChange}
            placeholder="할 일 적기"
          ></ToDoList>
        </form>
      </>
    );
  };

  delToDo = () => {
    this.setState({ text: null, id: null });
    localStorage.removeItem(TODO);
    return;
  };

  paintToDo = () => {
    const ToDo = localStorage.getItem(TODO);
    return (
      <ul>
        <ToDoLi>
          {ToDo}
          <Button onClick={this.delToDo}>지우기</Button>
        </ToDoLi>
      </ul>
    );
  };

  render() {
    const ToDos = localStorage.getItem(TODO);
    const { text } = this.state;
    console.log(this.state);
    return ToDos === null ? this.askForToDo() : this.paintToDo();
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

const btnOpacity = keyframes`
  0%{
    opacity: 1;
  }
  50%{
    opacity: .5;
  }
  100%{
    opacity: 0;
  }
`;

const Button = styled.button`
  color: black;
  font-size: 1rem;
  margin-left: 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px 20px;
  border-radius: 30px;
  background: white;
  font-family: "Jua", sans-serif;
  &:hover {
    background: #228be6;
    color: white;
  }
`;

const ToDoLi = styled.li`
  display: flex;
`;

export default ToDo;
