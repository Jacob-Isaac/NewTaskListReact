import styled from "styled-components";

export const SubmitButton = styled.button`
  cursor: pointer;
  background-color: teal;
  color: rgb(233, 233, 233);
  border: none;
  padding: 10px;
  margin-left: 12px;

  @media (max-width: 800px) {
    align-self: stretch;
    margin-left: 0px;
    &:hover {
      background-color: hsl(190, 100%, 28%);
    }
  }
  @media (min-width: 800px) {
    &:hover {
      transition: all 0.2s ease 0s;
      transform: scale(1.1);
      background-color: rgb(0, 140, 140);
    }
    &:active {
      transition: all 0.1s ease 0s;
      background-color: rgb(0, 160, 160);
    }
  }
`;

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-left: 15px;
  margin-right: 15px;
  gap: 20px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Input = styled.input`
  padding: 10px;
`;
