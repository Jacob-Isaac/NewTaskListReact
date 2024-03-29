import styled from "styled-components";

export const Text = styled.div`
  font-size: 12px;
  margin: 0 10px 0 10px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 10px;
  }
`;
