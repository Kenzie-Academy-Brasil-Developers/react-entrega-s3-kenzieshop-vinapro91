import styled from "styled-components";

export const LittleBall = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--red);
  color: var(--white);
  text-align: center;
  align-items: center;
  transform: translateY(-15px);
  animation-name: shake;
  animation-duration: 1s;

  @keyframes shake {
    25% {
      transform: translateX(2px);
    }

    50% {
      transform: translateX(-2px);
    }

    75% {
      transform: translateX(-2px);
    }

    100% {
      transform: translateX(2px);
    }
  }
`;

export const Content = styled.div`
  color: white;
`;
