import styled, { css } from "styled-components";

export const Button = styled.button`
  margin-right: 11px;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.color.black};
  -webkit-tap-highlight-color: transparent;
  &:hover {
    color: ${({ theme }) => theme.color.niceGray};
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 14px;
    margin: 15px;
  }
`;
export const Span = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ disabled }) =>
    disabled === true &&
    css`
      color: ${({ theme }) => theme.color.niceGray};
      &:hover {
        cursor: context-menu;
      }
    `}
`;
