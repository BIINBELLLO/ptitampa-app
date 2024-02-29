import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 6rem;
  min-height: calc(100vh - 6rem);
  height: 100%;
`;

const InnerContainer = styled.div`
  max-width: 360px;
  width: 100%;
  text-align: center;

  @media only screen and (max-width: 400px) {
    padding: 0 1rem;
  }
`;

const AuthLayout = ({ children }) => {
  return (
    <Container>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  );
};

export default AuthLayout;
