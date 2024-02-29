import { Input } from "antd";
import React from "react";
import styled from "styled-components";

const CustomInput = styled(Input)`
  &.ant-input.ant-input-lg {
    padding: 10px 14px 10px 14px;
    border-radius: 4px;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px 0px #1018280d;
    color: #747474;
    font-weight: 400;
    font-size: 14px;
  }

  &.ant-input-status-error {
    border-color: #ffa39e !important;
  }
`;

const TextInput = ({ placeholder, size, name, value, onChange }) => {
  return (
    <CustomInput
      placeholder={placeholder}
      size={size || "large"}
      name={name}
      value={value}
      onChange={(e) => {
        onChange(e);
      }}
    />
  );
};

export default TextInput;
