import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
`;

const LeftSection = styled.div`
  background-color: #c8e8ff;
  flex: 1 1 50%;
  clip-path: polygon(0 0, 63% 0, 100% 100%, 0% 100%);
  display: flex;
  align-items: flex-end;

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const IllustrationImage = styled.img`
  position: absolute;
  aspect-ratio: 1/1;
  max-width: 500px;
  width: 100%;
  padding: 1rem;
  z-index: 100;
  bottom: 50%;
  margin-bottom: -250px;

  @media only screen and (max-width: 900px) {
    max-width: 350px;
    margin-bottom: -175px;
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const FooterArea = styled.div`
  padding: 1rem;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  color: #0074bd;
`;

const FooterSpan = styled.span`
  cursor: pointer;
`;

const RightSection = styled.div`
  background-color: #fff;
  flex: 1 1 50%;
  overflow: hidden auto;
  padding: 1rem 2rem;

  @media only screen and (max-width: 767px) {
    flex: 1 1 100%;
    padding: 1rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LogoImage = styled.img``;

const FormArea = styled.div`
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const AuthLayout2 = ({ children }) => {
  return (
    <>
      <Container>
        <LeftSection>
          <FooterArea>
            <FooterSpan>My Yodlee Terms and Conditions | </FooterSpan>
            <FooterSpan>Privacy Policy | </FooterSpan>
            <FooterSpan>Security Policy</FooterSpan>
          </FooterArea>
        </LeftSection>
        <IllustrationImage src={"./illustration.svg"} alt="Illustration" />
        <RightSection>
          <LogoWrapper>
            <LogoImage src={"/logo.svg"} alt="Logo" />
          </LogoWrapper>
          <FormArea>{children}</FormArea>
        </RightSection>
      </Container>
    </>
  );
};

export default AuthLayout2;
