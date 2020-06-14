import React from "react";
import styled from "styled-components";
import "./todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

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
  };

  paintToDo = () => {
    const ToDo = localStorage.getItem(TODO);
    return (
      <ul>
        <ToDoLi>
          {ToDo}
          <FontAwesomeIcon
            className="icon"
            onClick={this.delToDo}
            icon={faTrashAlt}
            color="#FFA07A"
          ></FontAwesomeIcon>
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

const ToDoLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ToDo;
