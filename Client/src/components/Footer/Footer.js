import { Divider, Form, Tag } from "antd";
import React from "react";
import styled from "styled-components";
import CustomButton from "../Button/CustomButton";
import TextInput from "../Input/TextInput";

const Container = styled.div`
  width: 100%;
  background-color: #fcfcfc;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const InnerWrapper = styled.div`
  gap: 10px;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1245px) {
    padding: 2rem 1rem;
  }
`;

const FirstFooterSection = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;

  @media only screen and (max-width: 780px) {
    gap: 20px;
    flex-direction: column;
  }

  @media only screen and (max-width: 570px) {
    gap: 30px;
  }
`;

const LogoInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LogoImg = styled.img`
  width: 25px;
  aspect-ratio: 25 / 41;
`;

const Info = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #475467;
  max-width: 320px;
  width: 100%;

  @media only screen and (max-width: 1245px) {
    max-width: 250px;
  }

  @media only screen and (max-width: 780px) {
    max-width: unset;
  }
`;

const MiddleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
`;

const FooterLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  text-align: left;
`;

const FooterLinkHeader = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #2b354b;
`;

const FooterLinkTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FooterLinkText = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
  color: #3f4c5f;
`;

const LastWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  /* width: 100%; */
  /* max-width: 360px; */
`;

const CustomForm = styled(Form)`
  display: flex;
  gap: 6px;
  align-items: center;

  @media only screen and (max-width: 1245px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CopyrightFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Copyright = styled.p`
  color: #667085;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const TermsWrapper = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const TermText = styled.span``;

const Footer = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <FirstFooterSection>
            <LogoInfo>
              <LogoImg src={"/logo.svg"} alt="Logo" />
              <Info>
                Upload and download any data, anywhere, anytime with 0 effort.
              </Info>
            </LogoInfo>
            <MiddleWrapper>
              <FooterLinkWrapper>
                <FooterLinkHeader>Product</FooterLinkHeader>
                <FooterLinkTextWrapper>
                  {[
                    { text: "Overview", link: "/overview", new: false },
                    { text: "Features", link: "/features", new: false },
                    { text: "Solutions", link: "/solutions", new: true },
                    { text: "Tutorials", link: "/tutorials", new: false },
                    { text: "Pricing", link: "/pricing", new: false },
                    { text: "Releases", link: "/releases", new: false },
                  ]?.map((v, i) => {
                    return (
                      <FooterLinkText key={i}>
                        {v.text}{" "}
                        {v?.new && (
                          <Tag
                            style={{ fontSize: "10px", borderRadius: "16px" }}
                            color="blue"
                          >
                            New
                          </Tag>
                        )}
                      </FooterLinkText>
                    );
                  })}
                </FooterLinkTextWrapper>
              </FooterLinkWrapper>
              <FooterLinkWrapper>
                <FooterLinkHeader>Product</FooterLinkHeader>
                <FooterLinkTextWrapper>
                  {[
                    { text: "Blog", link: "/blog", new: false },
                    { text: "Newsletter", link: "/newsletter", new: false },
                    { text: "Events", link: "/events", new: false },
                    { text: "Help Center", link: "/help-center", new: false },
                    { text: "Tutorials", link: "/tutorials", new: false },
                    { text: "Support", link: "/support", new: false },
                  ]?.map((v, i) => {
                    return (
                      <FooterLinkText key={i}>
                        {v.text}{" "}
                        {v?.new && (
                          <Tag
                            style={{ fontSize: "10px", borderRadius: "16px" }}
                            color="blue"
                          >
                            New
                          </Tag>
                        )}
                      </FooterLinkText>
                    );
                  })}
                </FooterLinkTextWrapper>
              </FooterLinkWrapper>
            </MiddleWrapper>
            <LastWrapper>
              <FooterLinkHeader>Stay up to date</FooterLinkHeader>
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
                    placeholder={"Enter your email"}
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
                  <CustomButton text={"Subscribe"} />
                </Form.Item>
              </CustomForm>
            </LastWrapper>
          </FirstFooterSection>
          <Divider style={{ maxWidth: "100%" }} />
          <CopyrightFooter>
            <Copyright>© 2024 All rights reserved.</Copyright>
            <TermsWrapper>
              <TermText>Terms</TermText>
              <TermText>Privacy</TermText>
              <TermText>Cookies</TermText>
            </TermsWrapper>
          </CopyrightFooter>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};

export default Footer;
