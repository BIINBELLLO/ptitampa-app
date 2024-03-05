import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Dropdown, Form } from "antd";
import React from "react";
import styled from "styled-components";
import TextInput from "../Input/TextInput";
import CustomButton from "../Button/CustomButton";

const Container = styled.div`
  z-index: 100;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #fff;
  height: 80px;
  border-bottom: 1px solid #f2f4f7;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1245px) {
    padding: 0 1rem;
  }
`;

const FirstSection = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 25px;
  aspect-ratio: 25 / 41;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const NavItem = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #475467;
  cursor: pointer;
`;

const SecondSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const CustomForm = styled(Form)`
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MobileMenuIcon = styled.div`
  display: none;

  @media only screen and (max-width: 800px) {
    display: unset;
  }
`;

const Header = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <FirstSection>
            <LogoImg src={"/logo.svg"} alt="Logo" />
            <NavContainer>
              <NavItem>Home</NavItem>
              <>
                <Dropdown
                  menu={{
                    items: [
                      {
                        label: (
                          <>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="/"
                            >
                              Resources 1
                            </a>
                          </>
                        ),
                        key: "0",
                      },
                    ],
                  }}
                >
                  <NavItem>
                    <>
                      Resources <DownOutlined />
                    </>
                  </NavItem>
                </Dropdown>
              </>
              <NavItem>Data Search</NavItem>
            </NavContainer>
          </FirstSection>
          <SecondSection>
            <CustomForm
              form={form}
              name="search-form"
              onFinish={onFinish}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Form.Item
                name="search"
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
              >
                <TextInput
                  placeholder={"Search"}
                  name={"search"}
                  value={form.getFieldValue("search")}
                  onChange={async (e) => {
                    try {
                      await form.validateFields({ validateOnly: true });
                      form.setFieldValue("search", e.target.value);
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                />
              </Form.Item>
            </CustomForm>

            <ButtonWrapper>
              <CustomButton
                style={{ backgroundColor: "transparent", color: "#475467" }}
                text="Log in"
              />
              <CustomButton text="Sign up" />
            </ButtonWrapper>
          </SecondSection>
          <MobileMenuIcon>
            <Dropdown
              arrow={false}
              menu={{
                items: [
                  {
                    label: <NavItem>Home</NavItem>,
                    key: "0",
                  },
                  {
                    label: <NavItem>Resources</NavItem>,
                    key: "1",
                    children: [
                      {
                        key: "2-1",
                        label: "Resources 1",
                      },
                    ],
                  },
                  {
                    label: <NavItem>Data Search</NavItem>,
                    key: "2",
                  },
                ],
              }}
            >
              <MenuOutlined color="#475467" />
            </Dropdown>
          </MobileMenuIcon>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};

export default Header;
