import styled from "styled-components";
import { StandardBox } from "../../styled";

export const BorderLine = styled.div`
/* display:flex;
flex-direction: row; */
/* width: 80%; */
/* margin-left: 15px; */
/* padding-top: 15px; */
border-bottom: 1px solid rgb(100, 100, 100);
/* padding-bottom: 15px;
margin-bottom: 15px; */
`;
export const Wrapper = styled.div`
display:flex;
flex-direction: column;
width: 80%;
margin: auto;
margin-bottom: 0px;
`;
export const Title = styled.div`
 margin-left: 15px; 
align-self: flex-start;
`;
export const H1 = styled.h1`
align-self: flex-start;
`;

export const Box = styled.div`
  ${StandardBox}
`;
export const Wrappers = styled.div`
display:flex;
flex-direction: row;
align-content: flex-end;
/* justify-content: space-around; */
/* width: 80%; */
`;