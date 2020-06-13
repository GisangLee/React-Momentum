import React from "react";
import styled from "styled-components";
import ToDo from "../todo/ToDo";

const CURRENT_USER = "currentuser";

class Greetings extends React.Component {
  state = {
    username: null,
    isNamed: true,
    isGreeted: false,
  };

  saveUser = (user) => {
    localStorage.setItem(CURRENT_USER, user);
  };

  onChange = (e) => {
    this.setState({ username: e.target.value });
  };

  onSubmit = (e) => {
    const { isGreeted } = this.state;
    e.preventDefault();
    const user = document.querySelector(NameInput);
    this.saveUser(user.value);
    this.setState({ isGreeted: true });
    e.target.reset();
    this.setState({ isNamed: false });
  };

  askName = () => {
    return (
      <form onSubmit={this.onSubmit}>
        <NameInput
          onChange={this.onChange}
          type="text"
          placeholder="이름이 무엇인가요?"
        ></NameInput>
      </form>
    );
  };

  paintName = () => {
    const username = localStorage.getItem(CURRENT_USER);
    return (
      <>
        <NamePaint>Welcome {username}</NamePaint>
        <ToDo />
      </>
    );
  };

  render() {
    const user = localStorage.getItem(CURRENT_USER);
    console.log(this.state);
    return user === null ? this.askName() : this.paintName();
  }
}

const NameInput = styled.input`
  padding: 1rem;
  margin-top: 1rem;
  border: none;
  outline: none;
  border-radius: 30px;
`;

const NamePaint = styled.h3`
  font-size: 50px;
  text-align: center;
`;

export default Greetings;
