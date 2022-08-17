import styled, {css} from "styled-components";


export const Wrapper = styled.div`
z-index:3;
-webkit-tap-highlight-color: transparent;
overflow-y: scroll;
    -webkit-overflow-scrolling:touch;
    position: fixed;
    top: -200%;
    height: 100%;
    width: 100%;
    background-color: rgb(211, 211, 211);
    transition: all 0.4s ease-in-out;
`;

export const WrapperUl = styled.ul`
    position: absolute;
    top: 65%;
    left: 48%;
    height: 100%;
    transform: translate(-54%, -50%);
    list-style: none;
    text-align: center;
`;

export const MenuButton = styled.label`
    -webkit-tap-highlight-color: transparent;
    position: absolute;
    z-index:4;
    right: 20px;
    /*left: 20px; */
    top: 12px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:before {
        transform: translateY(-8px);
        content: "";
	position: absolute;
	top: calc(50% - 1px);
	left: 30%;
	width: 40%;
	border-bottom: 2px solid #000;
	transition: transform .6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  &:after {
    transform: translateY(8px);
    content: "";
	position: absolute;
	top: calc(50% - 1px);
	left: 30%;
	width: 40%;
	border-bottom: 2px solid #000;
	transition: transform .6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

`;

export const LabelSpan = styled.span`
content: "";
	position: absolute;
	top: calc(50% - 1px);
	left: 30%;
	width: 40%;
	border-bottom: 2px solid #000;
	transition: transform .5s cubic-bezier(0.215, 0.61, 0.355, 1);
  ${({checked}) =>
    checked === true &&
    css`
    transform: scaleX(0);
    `}
  
`;

export const Input = styled.input`
 display: none;
&:checked ~ ${Wrapper} {
    top: 0;
  } 

&:checked + ${MenuButton}{
    &:before {
        transform: rotate(45deg);
  border-color: rgb(0, 0, 0);
  }
  &:after {
    transform: rotate(-45deg);
  border-color: rgb(0, 0, 0);
  }
}
`;

export const Cog = styled.img`
z-index:1;
    margin-bottom: 50px;
    /* margin-left: 50px; */
    margin-top: 50px;
      width: 70px;
      height: 70px;
      animation: transform 1.9s;
      @keyframes transform {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(359deg);
        }
        100% {
          transform: rotate(370deg);
        }
      }
`;

export const Content = styled.div`
 text-align: left;
  width: 100%;
  height: 80px;
  color: #202020;
  margin-bottom: 30px;
  background-color: rgb(255 255 255 / 80%);
`;

export const ContentTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding-top: 20px;
  padding-left: 20px;
`;

export const Close = styled.label`
	z-index:2;
	width: 100%;
	height: 100%;
	pointer-events: none;
	transition: background .6s;
`;

export const MarginBottom = styled.div`
margin-bottom: 100px;
`;

export const NavBar = styled.div`
-webkit-tap-highlight-color: transparent;
position: fixed;
top: 0;

height: 10%;
width: 100%;
`;

