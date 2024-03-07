import { ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BackWrapper = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #3f4c5f;
  gap: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const BackToLogin = () => {
  const navigate = useNavigate();
  return (
    <BackWrapper
      onClick={() => {
        navigate("/login");
      }}
    >
      <span>
        <ArrowLeftOutlined color="#3F4C5F" size={20} />
      </span>
      <span>Back to log in</span>
    </BackWrapper>
  );
};

export default BackToLogin;
