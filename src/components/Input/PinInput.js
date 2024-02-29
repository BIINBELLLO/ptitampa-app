import React from "react";
import PinInput from "react-pin-input";

const CustomPinInput = (props) => {
  return (
    <>
      <PinInput
        length={props.length}
        initialValue={props.initialValue}
        disabled={props.disabled}
        secret={props.secret}
        // onChange={(value, index) => {}}
        onChange={props.onChange}
        type={props.type || "numeric"}
        inputMode="numeric"
        min={0}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
        inputStyle={{
          border: "2px solid #0074BD",
          padding: "8px",
          color: "#0074BD",
          fontSize: "30px",
          fontWeight: "500",
          backgroundColor: "transparent",
          borderRadius: "8px",
          margin: "4px",
          width: "60px",
          height: "60px",
        }}
        inputFocusStyle={{ border: "2px solid #0074BD" }}
        onComplete={(value, index) => {
          props.onComplete(value, index);
        }}
        autoSelect={props.autoSelect}
        // regexCriteria={props.regexCriteria || /^[ A-Za-z0-9_@./#&+-]*$/}
        regexCriteria={props.regexCriteria || /^[0-9]*$/}
      />
    </>
  );
};

export default CustomPinInput;
