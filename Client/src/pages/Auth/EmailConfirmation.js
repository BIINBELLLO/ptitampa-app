import React from "react";
import AuthLayout from "../../Layout/AuthLayout/AuthLayout";
import styled from "styled-components";
import CustomButton from "../../components/Button/CustomButton";
import BackToLogin from "../../components/BackToLogin/BackToLogin";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const IconTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

const Icon = styled.img`
  width: 56px;
  aspect-ratio: 1/1;
`;

const ForgotPasswordText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 38px;
  color: #333333d9;
`;

const DescText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #3f4c5f;
`;

const EmailConfirmation = () => {
  return (
    <AuthLayout>
      <Wrapper>
        <IconTitleWrapper>
          <Icon src={"/assets/mail.svg"} alt="Mail" />
          <ForgotPasswordText>Check your email</ForgotPasswordText>
          <DescText>
            We sent a verification link to <br />
            <b>name@example-email.com</b>
          </DescText>
        </IconTitleWrapper>

        <CustomButton text={"Enter code manually"} />

        <BackToLogin />
      </Wrapper>
    </AuthLayout>
  );
};

export default EmailConfirmation;
