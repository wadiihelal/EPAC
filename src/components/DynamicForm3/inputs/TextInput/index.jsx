import React, { useState } from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import {
  Container,
  StyledInput,
  StyledLabel,
  Msg,
  LabelWrapper,
} from "./styles";
import { Input } from "react-rainbow-components";
const Index = ({ input }) => {
  const { name, label, placeHolder, hidden, readOnly } = input;

  return (
    <Field name={name}>
      {({ field, meta }) => {
        return (
          <>
            {!hidden && (
              <Container>
                <LabelWrapper>
                  <StyledLabel htmlFor="name">{label}</StyledLabel>
                  {/* <div style={{ color: "red" }}>*</div> */}
                </LabelWrapper>

                {/* <StyledInput
                  {...field}
                  type="text"
                  placeholder={placeHolder}
                  defaultValue={val}
                  readOnly={readOnly}
                /> */}
                <Input
                  error={meta.touched && meta.error}
                  {...field}
                  // id="input-component-1"
                  // label="Input Label"
                  placeholder={placeHolder}
                  // style={containerStyles}
                  //className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                />
                {/* <ErrorMessage name={name}>
                  {(msg) => <Msg>{msg}</Msg>}
                </ErrorMessage> */}
              </Container>
            )}
          </>
        );
      }}
    </Field>
  );
};

export default Index;
