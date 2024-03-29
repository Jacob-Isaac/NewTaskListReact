import styled from "styled-components";

export const Error = styled.p`
  color: ${({ theme }) => theme.color.red};
`;
export const Cog = styled.img`
  z-index: 1;
  margin-bottom: 50px;
  margin-top: 50px;
  width: 70px;
  height: 70px;
  animation: transform 1.9s;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin-top: 40%;
  }
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
