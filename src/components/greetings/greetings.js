import React from "react";
import styled from "styled-components";

class Greetings extends React.Component {
  state = {
    name: null,
    isNamed: true,
  };

  onChange = (e) => {
    this.setState({ name: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    this.setState({ isNamed: false });
  };

  render() {
    const { isNamed } = this.state;
    console.log(this.state);
    return isNamed ? (
      <>
        <form onSubmit={this.onSubmit}>
          <NameInput
            onChange={this.onChange}
            type="text"
            placeholder="이름이 무엇인가요?"
          ></NameInput>
        </form>
      </>
    ) : (
      <NamePaint>{this.state.name}</NamePaint>
    );
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
`;

export default Greetings;
