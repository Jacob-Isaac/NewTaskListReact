import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  z-index: 3;
  -webkit-tap-highlight-color: transparent;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: fixed;
  top: -100%;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.color.dirtWhite};
  transition: all 0.4s ease-in-out;
`;

export const WrapperUl = styled.ul`
  position: absolute;
  top: 65%;
  height: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    left: 50%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    left: 49%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmaller}px) {
    left: 48%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmalest}px) {
    left: 47%;
  }
  transform: translate(-54%, -50%);
  list-style: none;
  text-align: center;
`;

export const MenuButton = styled.label`
  -webkit-tap-highlight-color: transparent;
  position: absolute;
  z-index: 4;
  right: 20px;
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
    border-bottom: 2px solid ${({ theme }) => theme.color.black};
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  &:after {
    transform: translateY(8px);
    content: "";
    position: absolute;
    top: calc(50% - 1px);
    left: 30%;
    width: 40%;
    border-bottom: 2px solid ${({ theme }) => theme.color.black};
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

export const LabelSpan = styled.span`
  content: "";
  position: absolute;
  top: calc(50% - 1px);
  left: 30%;
  width: 40%;
  border-bottom: 2px solid ${({ theme }) => theme.color.black};
  transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  ${({ checked }) =>
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

  &:checked + ${MenuButton} {
    &:before {
      transform: rotate(45deg);
      border-color: ${({ theme }) => theme.color.black};
    }
    &:after {
      transform: rotate(-45deg);
      border-color: ${({ theme }) => theme.color.black};
    }
  }
`;

export const Cog = styled.img`
  position: fixed;
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    left: 45%;
    top: 50%;
    bottom: 50%;
    right: 55%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    left: 42%;
    top: 50%;
    bottom: 50%;
    right: 50%;
  }

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
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.color.transparentWhite};
  box-shadow: 0.5px 0px 8px;
`;

export const ContentTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding-top: 20px;
  padding-left: 20px;
`;

export const Close = styled.label`
  z-index: 2;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transition: background 0.6s;
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
  min-width: 265px;
`;
