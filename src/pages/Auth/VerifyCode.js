import React, { useState } from "react";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import styled from "styled-components";
import { notification } from "antd";
import CustomButton from "../../components/Button/CustomButton";
import BackToLogin from "../../components/BackToLogin/BackToLogin";
import CustomPinInput from "../../components/Input/PinInput";

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

const SmallText = styled.span`
  color: #475467;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const PinWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const VerifyCode = () => {
  const [showForgotForm] = useState(true);
  const [pinDetails, setPinDetails] = useState("");

  const handlePinComplete = (value) => {
    setPinDetails(value);
  };

  const handleSubmit = async () => {
    if (!pinDetails) {
      return notification.error({
        message: "Provide your pin",
        placement: "topRight",
      });
    }
    if (pinDetails.length !== 4) {
      return notification.error({
        message: "Pin digit not complete",
        placement: "topRight",
      });
    }

    console.log(pinDetails);
  };

  return (
    <AuthLayout>
      {showForgotForm ? (
        <Wrapper>
          <IconTitleWrapper>
            <Icon src={"/assets/mail.svg"} alt="Verify" />
            <ForgotPasswordText>Check your email</ForgotPasswordText>
            <DescText>
              {" "}
              We sent a verification link to <br />
              <b>name@example-email.com</b>
            </DescText>
          </IconTitleWrapper>

          <PinWrapper>
            <CustomPinInput
              length={4}
              autoSelect={true}
              secret={false}
              initialValue=""
              onChange={handlePinComplete}
              onComplete={handlePinComplete}
              //   disabled={disableBtn === false ? true : false}
            />

            <CustomButton onSubmit={handleSubmit} text={"Verify email"} />
          </PinWrapper>

          <SmallText>
            Didn’t receive the email?{" "}
            <span
              style={{ cursor: "pointer", color: "#0074BD", fontWeight: "700" }}
            >
              Click to resend
            </span>
          </SmallText>

          <BackToLogin />
        </Wrapper>
      ) : (
        <Wrapper>
          <IconTitleWrapper>
            <Icon src={"/assets/tick.svg"} alt="Mail" />
            <ForgotPasswordText>Email verified</ForgotPasswordText>
            <DescText>
              Your password has been successfully reset. Click below to log in
              magically.
            </DescText>
          </IconTitleWrapper>

          <CustomButton text={"Continue"} />

          <SmallText>
            Didn’t receive the email?{" "}
            <span
              style={{ cursor: "pointer", color: "#0074BD", fontWeight: "700" }}
            >
              Click to resend
            </span>
          </SmallText>

          <BackToLogin />
        </Wrapper>
      )}
    </AuthLayout>
  );
};

export default VerifyCode;
