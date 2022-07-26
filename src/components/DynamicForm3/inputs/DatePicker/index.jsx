import React, { useState } from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import {
  Container,
  StyledInput,
  StyledLabel,
  Msg,
  StyledDatePicker,
} from "./styles";

const Index = ({ input }) => {
  const { name, label, hidden, readOnly } = input;
  const { setFieldValue } = useFormikContext();

  return (
    <Field name={name}>
      {({ field }) => {
        return (
          <>
            {!hidden && (
              <Container>
                <StyledLabel htmlFor="name">{label}</StyledLabel>

                <StyledDatePicker
                  readOnly={readOnly}
                  {...field}
                  formatStyle="medium"
                  locale="ar-TN"
                  onChange={(val) => {
                    setFieldValue(field.name, val.toISOString());
                  }}
                  //  maxDate={new Date()}
                />

                <ErrorMessage name={name}>
                  {(msg) => <Msg>{msg}</Msg>}
                </ErrorMessage>
              </Container>
            )}{" "}
          </>
        );
      }}
    </Field>
  );
};

export default Index;
