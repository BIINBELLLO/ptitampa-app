import React, { useState } from "react";
import AuthLayout from "../../Layout/AuthLayout/AuthLayout";
import styled from "styled-components";
import { Form } from "antd";
import TextInput from "../../components/Input/TextInput";
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

const CustomForm = styled(Form)``;

const SmallText = styled.span`
  color: #475467;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const ForgotPassword = () => {
  const [showForgotForm] = useState(true);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <AuthLayout>
      {showForgotForm ? (
        <Wrapper>
          <IconTitleWrapper>
            <Icon src={"/assets/key.svg"} alt="Forgot Password" />
            <ForgotPasswordText>Forgot password?</ForgotPasswordText>
            <DescText>No worries, we’ll send you reset instructions.</DescText>
          </IconTitleWrapper>

          <CustomForm
            style={{ width: "100%" }}
            form={form}
            name="forgot-password-form"
            onFinish={onFinish}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  type: "email",
                  message: "The input is not a valid email!",
                },
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <TextInput
                placeholder={"Email Address"}
                name={"email"}
                value={form.getFieldValue("email")}
                onChange={async (e) => {
                  try {
                    await form.validateFields({ validateOnly: true });
                    form.setFieldValue("email", e.target.value);
                  } catch (error) {
                    console.log(error);
                  }
                }}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }}>
              <CustomButton text={"Reset password"} />
            </Form.Item>
          </CustomForm>

          <BackToLogin />
        </Wrapper>
      ) : (
        <Wrapper>
          <IconTitleWrapper>
            <Icon src={"/assets/mail.svg"} alt="Mail" />
            <ForgotPasswordText>Check your email</ForgotPasswordText>
            <DescText>
              We sent a password reset link to <br />
              <b>name@example-email.com</b>
            </DescText>
          </IconTitleWrapper>

          <CustomButton text={"Open email app"} />

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

export default ForgotPassword;
