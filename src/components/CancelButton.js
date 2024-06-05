import styled from "styled-components";

export default styled.button`
  margin-top: 5px;
  width: 100%;
  max-width: 200px;
  height: 52px;
  border: none;
  background-color: #fa2f2f;
  font-size: 16px;
  color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    background-color: #fff;
    color: #c22f2f;
  }

  &:active {
    background-color: red;
    color: #fff;
  }
`;
