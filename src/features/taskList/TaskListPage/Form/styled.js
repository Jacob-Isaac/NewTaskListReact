import styled from "styled-components";

export const SubmitButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  border: none;
  padding: 10px;
  margin-left: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    align-self: stretch;
    margin-left: 0px;
    &:hover {
      background-color: ${({ theme }) => theme.color.tealBrighter};
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    &:hover {
      transition: all 0.2s ease 0s;
      transform: scale(1.1);
      background-color: ${({ theme }) => theme.color.teal};
    }
    &:active {
      transition: all 0.1s ease 0s;
      background-color: ${({ theme }) => theme.color.persianGreen};
    }
  }
`;

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-left: 15px;
  margin-right: 15px;
  gap: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Input = styled.input`
  padding: 10px;
`;
