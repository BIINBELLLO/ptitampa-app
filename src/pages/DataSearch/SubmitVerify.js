import React, { useState } from "react";
import DataSearchLayout from "../../Layout/DataSearchLayout/DataSearchLayout";
import styled from "styled-components";
import CustomButton from "../../components/Button/CustomButton";
import { Progress, Upload, message } from "antd";
import { formatBytes, trimFilename } from "../../utils";
import { CheckCircleFilled } from "@ant-design/icons";

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

const UploadContainer = styled.div`
  max-width: 512px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & .ant-upload-wrapper {
    position: relative;
  }

  & .ant-upload-drag {
    border: 1px solid #eaecf0;
    background-color: #fff;
  }

  & .ant-upload-text {
    color: #475467;
    font-weight: 400;
    font-size: 14px;
  }

  @media only screen and (max-width: 500px) {
    & .custom-img {
      display: none;
    }
  }
`;

const UploadedItemWrapper = styled.div`
  border: ${(props) => props.color && `1px solid ${props.color}`};
  border-radius: 12px;
  margin: 15px 0 0 0;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: flex-start;
  background-color: #fff;
  padding: 1rem;
`;

const UploadedImg = styled.img``;

const UploadedInnerWrapper = styled.div`
  width: 100%;
`;

const UploadedTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const FileDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const FileName = styled.h2`
  color: #344054;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

const FileSize = styled.p`
  color: #475467;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const UploadedBelow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Percentage = styled.p`
  color: #344054;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const SubmitVerify = () => {
  const [fileList, setFileList] = useState([]);
  const { Dragger } = Upload;
  const props = {
    name: "file",
    multiple: true,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const updatedFileList = info.fileList;
      setFileList(updatedFileList);
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };

  const customItemRender = (originNode, file, _fileList, actions) => {
    console.log(file);
    return (
      <>
        <UploadedItemWrapper
          color={
            file.status === "done"
              ? "#0074BD"
              : file.status === "error"
              ? "red"
              : "#eaecf0"
          }
        >
          <UploadedImg src={"./assets/upload-icon.svg"} alt="Uploaded" />
          <UploadedInnerWrapper>
            <UploadedTop>
              <FileDetailWrapper>
                <FileName>{trimFilename(file.name)}</FileName>
                <FileSize>{formatBytes(file.size)}</FileSize>
              </FileDetailWrapper>
              {file.status === "done" ? (
                <CheckCircleFilled style={{ color: "#0074BD" }} size={16} />
              ) : file.status === "uploading" || file.status === "error" ? (
                <img
                  src={"./assets/bin.svg"}
                  alt="Bin"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    actions.remove(file);
                  }}
                />
              ) : (
                ""
              )}
            </UploadedTop>
            <UploadedBelow>
              <Progress
                percent={file.percent}
                showInfo={false}
                strokeColor={"#0074BD"}
              />
              <Percentage>100%</Percentage>
            </UploadedBelow>
          </UploadedInnerWrapper>
        </UploadedItemWrapper>
      </>
    );
  };

  return (
    <>
      <DataSearchLayout>
        <FirstWrapper>
          <PageTitle>Submit and Verify</PageTitle>
          <PageDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            egestas commodo mi ac auctor. Suspendisse eleifend, eros sit amet
            scelerisque interdum, libero justo maximus neque, quis congue lectus
            justo sit amet ex.
          </PageDescription>

          <UploadContainer>
            <Dragger
              {...props}
              accept="application/pdf"
              itemRender={customItemRender}
              fileList={fileList}
            >
              <p className="ant-upload-drag-icon">
                <img src="/assets/upload.svg" alt="Upload" />
              </p>
              <p className="ant-upload-text">
                <span
                  style={{
                    color: "#0074bd",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  Click to upload
                </span>{" "}
                or drag and drop PDF
              </p>
              <img
                className="custom-img"
                style={{ position: "absolute", right: "-8px", bottom: "-41px" }}
                src="/assets/file.svg"
                alt="File"
              />
            </Dragger>
          </UploadContainer>

          <div style={{ width: "150px", display: "none" }}>
            <CustomButton text="Submit Data" />
          </div>
        </FirstWrapper>
      </DataSearchLayout>
    </>
  );
};

export default SubmitVerify;
