import React from "react";
import { Form } from "antd";
import styled from "styled-components";
import TextInput from "../../components/Input/TextInput";
import CustomButton from "../../components/Button/CustomButton";
import AuthLayout2 from "../../Layout/AuthLayout/AuthLayout2";
import { useNavigate } from "react-router-dom";

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

const ForgotPasswordText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 38px;
  color: #333333d9;
`;

const CustomForm = styled(Form)``;

const SmallText = styled.span`
  color: #475467;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <AuthLayout2>
      <Wrapper>
        <IconTitleWrapper>
          <ForgotPasswordText>Log in to your account</ForgotPasswordText>
        </IconTitleWrapper>

        <CustomForm
          style={{ width: "100%" }}
          form={form}
          name="login-form"
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
          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 8, message: "Password must be at least 8 characters" },
            ]}
          >
            <TextInput
              placeholder={"Password"}
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
          <Form.Item style={{ paddingTop: "1rem" }} wrapperCol={{ span: 24 }}>
            <CustomButton text={"Log in"} />
          </Form.Item>
        </CustomForm>

        <SmallText>
          Don't have the account?{" "}
          <span
            style={{ cursor: "pointer", color: "#0074BD", fontWeight: "700" }}
            onClick={() => {
              navigate("/register");
            }}
          >
            Sign Up
          </span>
        </SmallText>
      </Wrapper>
    </AuthLayout2>
  );
};

export default Login;
