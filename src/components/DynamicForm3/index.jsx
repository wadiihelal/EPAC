import React from "react";
import { Formik, Form } from "formik";
import SubmitButton from "./SubmitButton";
import { initialValuesInit } from "./initialValuesInit";
import { validationSchemaInit } from "./validationSchemaInit";
import InputSwitcher from "./inputSwitcher";
import { Application } from "react-rainbow-components";
import { defaultProps } from "./defaultProps";

const Index = ({ inputs, onSubmit, submitButtonLabel }) => {
  const initialValues = initialValuesInit(inputs);

  const validationSchema = validationSchemaInit(inputs);
  const theme = {
    rainbow: {
      palette: {
        brand: "#006400",
      },
    },
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props) => {

        return (
          <Application theme={theme}>
            <Form>
              {inputs.map((input) => {
                return <InputSwitcher input={input} key={input.name} />;
              })}
              <SubmitButton>{submitButtonLabel}</SubmitButton>
            </Form>
          </Application>
        );
      }}
    </Formik>
  );
};

Index.defaultProps = defaultProps;
export default Index;
