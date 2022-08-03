import styled from "styled-components";
import { StandardBox } from "../../styled";

export const Wrapper = styled.div`
 display:flex;
justify-content: flex-start;
border-bottom: 1px solid rgb(100, 100, 100);
margin-bottom: 15px;
margin-top: 15px;
`;

export const Title = styled.p`
 margin-left: 15px; 
`;
export const Space = styled.div`
flex-grow: 1;
`;
export const H1 = styled.h1`
min-width: 250px;
display:flex;
width: 80%;
margin: auto;
align-self: flex-start;
`;

export const Box = styled.div`
  ${StandardBox}
`;