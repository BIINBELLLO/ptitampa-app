import { Button } from "antd";
import React from "react";
import styled from "styled-components";

const CustomButtonCmp = styled(Button)`
  background-color: #0074bd;
  padding: 10px 18px;
  border-radius: 4px;
  height: fit-content;

  &:hover,
  &:active {
    background-color: #0074bd !important;
  }
`;

const CustomButton = ({ text, onSubmit }) => {
  return (
    <CustomButtonCmp
      onClick={onSubmit}
      type="primary"
      htmlType="submit"
      style={{ width: "100%" }}
    >
      {text || "Submit"}
    </CustomButtonCmp>
  );
};

export default CustomButton;
