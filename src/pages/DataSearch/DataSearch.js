import React, { useState } from "react";
import DataSearchLayout from "../../Layout/DataSearchLayout/DataSearchLayout";
import styled from "styled-components";
import { Form, Pagination } from "antd";
import TextInput from "../../components/Input/TextInput";
import CustomButton from "../../components/Button/CustomButton";
import Card from "../../components/Card/Card";

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

const CustomForm = styled(Form)`
  padding-top: 1rem;
  max-width: 250px;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  padding: 2rem 0;

  @media only screen and (max-width: 1245px) {
    padding: 2rem 1rem;
  }

  @media only screen and (max-width: 905px) {
    flex-wrap: wrap;
    gap: 15px;
  }

  @media only screen and (max-width: 640px) {
    gap: 20px;
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  flex: 0 0 33%;

  @media only screen and (max-width: 905px) {
    width: 100%;
    flex: 0 0 49%;
  }

  @media only screen and (max-width: 640px) {
    width: 100%;
    flex: 0 0 100%;
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;

  @media only screen and (max-width: 1245px) {
    padding: 2rem 1rem;
  }

  & .ant-pagination-item {
    font-size: 14px;
    font-weight: 500;
    color: #475467;
  }

  & .ant-pagination-item-active {
    background-color: #0074bd;
    color: #fff;
    border-radius: 8px;
    border: none;
  }

  & .ant-pagination-item-active a {
    color: #fff;
  }
`;

const DataSearch = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return (
    <>
      <DataSearchLayout>
        <FirstWrapper>
          <PageTitle>Data Search</PageTitle>
          <PageDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            egestas commodo mi ac auctor. Suspendisse eleifend, eros sit amet
            scelerisque interdum, libero justo maximus neque, quis congue lectus
            justo sit amet ex.
          </PageDescription>
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
              hasFeedback
            >
              <TextInput
                placeholder={"Example data request"}
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

          <div style={{ width: "150px", display: "none" }}>
            <CustomButton text="Submit Data" />
          </div>
        </FirstWrapper>

        <CardContainer>
          {[
            { fileName: "Example File Name", fileSize: "1.25MB" },
            { fileName: "Example File Name", fileSize: "1.25MB" },
            { fileName: "Example File Name", fileSize: "1.25MB" },
          ].map((v, i) => {
            return (
              <CardWrapper key={i}>
                <Card fileName={v.fileName} fileSize={v.fileSize} />
              </CardWrapper>
            );
          })}
        </CardContainer>

        <PaginationWrapper>
          <Pagination
            showSizeChanger={false}
            current={current}
            onChange={onChange}
            total={500}
          />
        </PaginationWrapper>
      </DataSearchLayout>
    </>
  );
};

export default DataSearch;
