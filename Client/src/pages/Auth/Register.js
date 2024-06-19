import React from "react";
import { Form } from "antd";
import styled from "styled-components";
import TextInput from "../../components/Input/TextInput";
import CustomButton from "../../components/Button/CustomButton";
import AuthLayout2 from "../../Layout/AuthLayout/AuthLayout2";
import { useNavigate } from "react-router-dom";
import httpClient from '../../httpclient/httpclient';

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
  align-items: flex-start;
  width: 100%;
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

const Register = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    try {
      const creds = await httpClient.post('/auth/sign-up', {email: values.email, password: values.password, fullname: values.name});
      if (creds.data === "") {
        alert("Something went wrong, please try again later.");
        return;
      }
      navigate('/login');
    } catch (e) {
      throw e;
    }
  };
  return (
    <AuthLayout2>
      <Wrapper>
        <IconTitleWrapper>
          <ForgotPasswordText style={{ textAlign: "left" }}>
            Sign Up
          </ForgotPasswordText>
        </IconTitleWrapper>

        <CustomForm
          style={{ width: "100%" }}
          form={form}
          name="register-form"
          onFinish={onFinish}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <TextInput
              placeholder={"Nathan"}
              name={"name"}
              value={form.getFieldValue("name")}
              onChange={async (e) => {
                try {
                  await form.validateFields({ validateOnly: true });
                  form.setFieldValue("name", e.target.value);
                } catch (error) {
                  console.log(error);
                }
              }}
            />
          </Form.Item>
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
              placeholder={"username@gmail.com"}
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
              placeholder={"••••••••"}
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
            <CustomButton text={"Get started"} />
          </Form.Item>
        </CustomForm>

        <SmallText>
          Already have an account?{" "}
          <span
            style={{ cursor: "pointer", color: "#0074BD", fontWeight: "700" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </span>
        </SmallText>
      </Wrapper>
    </AuthLayout2>
  );
};

export default Register;
