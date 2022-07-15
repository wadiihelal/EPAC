import React from "react";
import { Field, ErrorMessage } from "formik";
import { Container, StyledLabel, Msg } from "./styles";
import { Textarea } from "react-rainbow-components";

const Index = ({ input }) => {
  const { name, label, placeHolder, hidden, readOnly } = input;

  return (
    <Field name={name}>
      {({ field, meta }) => {
        return (
          <>
            {!hidden && (
              <Container>
                <StyledLabel htmlFor="name">{label}</StyledLabel>

                <Textarea
                  error={meta.touched && meta.error}
                  id="example-textarea-1"
                  rows={4}
                  placeholder={placeHolder}
                  readOnly={readOnly}
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
