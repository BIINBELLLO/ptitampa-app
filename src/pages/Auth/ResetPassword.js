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

const ResetPassword = () => {
  const [showForgotForm] = useState(false);
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
            <ForgotPasswordText>Set new password</ForgotPasswordText>
            <DescText>
              Your new password must be different to previously used passwords.
            </DescText>
          </IconTitleWrapper>

          <CustomForm
            style={{ width: "100%" }}
            form={form}
            name="reset-password-form"
            onFinish={onFinish}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
                { min: 8, message: "Password must be at least 8 characters" },
              ]}
            >
              <TextInput
                placeholder={"Enter new password"}
                name={"password"}
                value={form.getFieldValue("password")}
                onChange={async (e) => {
                  try {
                    await form.validateFields({ validateOnly: true });
                    form.setFieldValue("password", e.target.value);
                  } catch (error) {
                    console.log(error);
                  }
                }}
              />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <TextInput
                placeholder={"Confirm password"}
                name={"confirmPassword"}
                value={form.getFieldValue("confirmPassword")}
                onChange={async (e) => {
                  try {
                    await form.validateFields({ validateOnly: true });
                    form.setFieldValue("confirmPassword", e.target.value);
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
            <Icon src={"/assets/tick.svg"} alt="Mail" />
            <ForgotPasswordText>Password reset</ForgotPasswordText>
            <DescText>
              Your password has been successfully reset. Click below to log in
              magically.
            </DescText>
          </IconTitleWrapper>

          <CustomButton text={"Continue"} />

          <BackToLogin />
        </Wrapper>
      )}
    </AuthLayout>
  );
};

export default ResetPassword;
