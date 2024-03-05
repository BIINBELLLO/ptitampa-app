import React from "react";
import DataSearchLayout from "../../Layout/DataSearchLayout/DataSearchLayout";
import styled from "styled-components";
import CustomButton from "../../components/Button/CustomButton";

const FirstWrapper = styled.div`
  max-width: 663px;
  width: 100%;
  margin: 0 auto;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
`;

const PageTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: 38px;
  color: #333333d9;

  @media only screen and (max-width: 905px) {
    font-size: 35px;
  }
`;

const PageDescription = styled.p`
  color: #475467;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;

  @media only screen and (max-width: 905px) {
    font-size: 14px;
  }
`;

const SubmitVerify = () => {
  return (
    <>
      <DataSearchLayout>
        <FirstWrapper>
          <PageTitle>Submit and Verify</PageTitle>
          <PageDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            egestas commodo mi ac auctor. Suspendisse eleifend, eros sit amet
            scelerisque interdum, libero justo maximus neque, quis congue lectus
            justo sit amet ex.
          </PageDescription>

          <div style={{ width: "150px", display: "none" }}>
            <CustomButton text="Submit Data" />
          </div>
        </FirstWrapper>
      </DataSearchLayout>
    </>
  );
};

export default SubmitVerify;
