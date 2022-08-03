import styled from "styled-components";
import { StandardBox } from "../../styled";

export const Wrapper = styled.div`
 display:flex;
justify-content: flex-start;
border-bottom: 1px solid rgb(100, 100, 100);
margin-bottom: 15px;
margin-top: 15px;
@media (max-width: 800px) {
    /* justify-content: flex-end; */
    /* align-items: center; */
  flex-direction: column;
}
`;

export const Title = styled.p`
 margin-left: 15px; 
 font-size: large;
font-weight: bold;
@media (max-width: 800px) {
  font-size: 14px;
  margin-left: 0px; 
}
`;
export const Space = styled.div`

@media (min-width: 800px) {
    flex-grow: 1;
}
`;
export const H1 = styled.h1`
color: rgb(255 255 255 / 80%);
min-width: 250px;
width: 90%;
margin: auto;
@media (min-width: 800px) {
    display:flex;
    align-self: flex-start;
    width: 50%;
}
`;

export const Box = styled.div`
  ${StandardBox}
`;