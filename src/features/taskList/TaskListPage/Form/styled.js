import styled from "styled-components";

export const SubmitButton = styled.button`
  cursor: pointer;
  background-color: teal;
  color: white;
  border: none;
  padding: 10px;
  margin-left: 12px;
  transition: background 0.25s, transform 0.25s;
  @media (max-width: 680px) {
    align-self: stretch;
    margin-left: 0px;
}
&:active {
  cursor: pointer;
  background-color: hsl(180, 100%, 28%);
  transform: scale(0.9);
}
&:hover {
  background-color: hsl(180, 100%, 28%);
}
`;

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-left: 15px;
  margin-right: 15px;
  gap: 20px;
  @media (max-width: 680px) {
  
    display:flex;
    flex-direction: column;
  
}
`;
export const Input = styled.input`
  /* border-color: rgb(100 100 100 / 70%); */
  padding: 10px;
`;