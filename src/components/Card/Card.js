import { MoreOutlined } from "@ant-design/icons";
import { Divider, Dropdown } from "antd";
import React from "react";
import styled from "styled-components";
import CustomButton from "../Button/CustomButton";

const Container = styled.div`
  width: 100%;
  border: 1px solid #c5e3ff;
  border-radius: 6px;
  box-shadow: 0px 4px 20px 0px #0000001a;
  background-color: #fff;
`;

const Wrapper = styled.div`
  padding: 8px;
`;

const UpperSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const LeftWrapper = styled.div`
  display: flex;
  gap: 1px;
`;

const PdfImage = styled.img``;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

const FileName = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #333333;
`;

const FileSize = styled.h2`
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  color: #c6c6c6;
`;

const Card = ({ fileName, fileSize }) => {
  return (
    <Container>
      <Wrapper>
        <UpperSection>
          <LeftWrapper>
            <PdfImage src={"/pdf.svg"} alt="File" />
            <ContentWrapper>
              <FileName>{fileName}</FileName>
              <FileSize>{fileSize}</FileSize>
            </ContentWrapper>
          </LeftWrapper>

          <Dropdown
            placement="bottomRight"
            arrow={false}
            menu={{
              items: [
                {
                  label: "Item 1",
                  key: "0",
                },
              ],
            }}
          >
            <MoreOutlined style={{ cursor: "pointer" }} color="#D9D9D9" />
          </Dropdown>
        </UpperSection>
        <Divider style={{ margin: "15px 0" }} />
        <CustomButton
          style={{ marginBottom: "1rem", width: "fit-content" }}
          text={"Request Data"}
        />
      </Wrapper>
    </Container>
  );
};

export default Card;
