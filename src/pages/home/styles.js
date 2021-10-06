import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  background-color: var(--white);
  color: var(--black);
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 370px) {
    flex-direction: column;
  }

  img {
    max-width: 95px;
  }
  h1 {
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;

export const Card = styled.div`
  width: 200px;
  height: 396px;
  border: 3px solid var(--Eminence);
  margin: 15px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h1 {
    justify-self: center;
    text-align: center;
  }
  p {
    text-align: center;
  }
`;
