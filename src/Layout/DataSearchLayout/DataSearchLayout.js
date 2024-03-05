import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styled from "styled-components";

const MainAreaContainer = styled.div`
  width: 100%;
  min-height: 400px;
  height: 100%;
  background: url("/main-bg.svg") 0% 0% / 100%, no-repeat #fff;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const InnerWrapper = styled.div`
  @media only screen and (max-width: 1245px) {
    padding: 0 1rem;
  }
`;

const DataSearchLayout = ({ children }) => {
  return (
    <>
      <Header />
      <MainAreaContainer>
        <Wrapper>
          <InnerWrapper>{children}</InnerWrapper>
        </Wrapper>
      </MainAreaContainer>
      <Footer />
    </>
  );
};

export default DataSearchLayout;
