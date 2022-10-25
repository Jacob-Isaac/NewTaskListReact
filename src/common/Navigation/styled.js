import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 200px;
  width: 100%;
  margin-bottom: 50px;
  background-color: ${({ theme }) => theme.color.transparentWhite};
  box-shadow: 0.5px 0px 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  -webkit-tap-highlight-color: transparent;
  @media (min-width: ${({ theme }) => theme.breakpoint.notebook}px) {
    width: 14%;
  }
  font-size: 15px;
  background-color: transparent;
  border: none;
  margin-left: 22px;
  margin-right: 22px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bolder;
  transition: all 0.01s ease-in-out;
  &:visited {
    color: ${({ theme }) => theme.color.black};
  }
  &:hover {
    color: ${({ theme }) => theme.color.gray};
    cursor: pointer;
  }
  &:active {
    color: ${({ theme }) => theme.color.gray};
    transform: scale(0.8);
    background-color: none;
  }
  ${({ disabled }) =>
    disabled === true &&
    css`
      color: ${({ theme }) => theme.color.niceGray};
      &:hover {
        color: ${({ theme }) => theme.color.niceGray};
        cursor: auto;
      }
      &:active {
        color: ${({ theme }) => theme.color.niceGray};
        transform: none;
      }
    `}
  ${({ Mobile }) =>
    Mobile &&
    css`
      font-size: 23px;
      font-weight: normal;
    `};
`;
export const Span = styled.span`
  color: ${({ theme }) => theme.color.black};
  &:hover {
    color: ${({ theme }) => theme.color.gray};
  }
  ${({ Red }) =>
    Red &&
    css`
      color: ${({ theme }) => theme.color.red};
      &:hover {
        color: ${({ theme }) => theme.color.niceRed};
      }
    `};
`;

export const StyledNavLink = styled(NavLink)`
  @media (min-width: ${({ theme }) => theme.breakpoint.pc}px) {
    width: 14%;
  }
  font-size: 15px;
  background-color: transparent;
  border: none;
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  margin-left: 22px;
  margin-right: 22px;
  margin-top: 22px;
  margin-bottom: 20px;
  font-weight: bolder;
  transition: all 0.01s ease-in-out;
  -webkit-tap-highlight-color: transparent;
  &:visited {
    color: ${({ theme }) => theme.color.black};
    background-color: none;
  }
  &:hover {
    color: ${({ theme }) => theme.color.gray};
    cursor: pointer;
  }
  &:active {
    color: ${({ theme }) => theme.color.gray};
    transform: scale(0.8);
    background-color: none;
    color: ${({ theme }) => theme.color.black};
  }
  ${({ disabled }) =>
    disabled === true &&
    css`
      &:hover {
        color: ${({ theme }) => theme.color.gray};
        cursor: auto;
      }
      &:active {
        color: ${({ theme }) => theme.color.gray};
        transform: none;
      }
    `}
  background-color:none;
`;

export const Img = styled.img`
  width: 70px;
  height: 70px;
  -webkit-tap-highlight-color: transparent;
  ${({ click }) =>
    click === true &&
    css`
      transition-duration: 0.5s;
      transition-property: transform;
      transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
      -webkit-tap-highlight-color: transparent;
    `}
  ${({ klik }) =>
    klik === true &&
    css`
      transition-duration: 0.5s;
      transition-property: transform;
      transform: rotate(-180deg);
      -webkit-transform: rotate(-180deg);
      -webkit-tap-highlight-color: transparent;
    `}
`;
