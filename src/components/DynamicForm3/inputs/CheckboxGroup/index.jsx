import React, { useState, useEffect } from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import { Container, StyledLabel, Msg, StyledCheckboxGroup } from "./styles";

const Index = ({ input }) => {
  const { name, label, options, readOnly, hidden } = input;
  const { setFieldValue } = useFormikContext();
  const [val, setVal] = useState([]);

  const onChange = (e) => {
    setVal(e);
  };
  useEffect(() => {
    setFieldValue(name, val);
  }, [val]);

  return (
    <Field name={name}>
      {({ field }) => {
        return (
          <>
            {!hidden && (
              <Container>
                <StyledLabel htmlFor="name">{label}</StyledLabel>
                <StyledCheckboxGroup
                  id="checkbox-group-1"
                  options={options}
                  value={val}
                  onChange={onChange}
                />
                <ErrorMessage name={name}>
                  {(msg) => <Msg>{msg}</Msg>}
                </ErrorMessage>
              </Container>
            )}
          </>
        );
      }}
    </Field>
  );
};
Index.defaultProps = {
  options: [{ value: "option1" }, { value: "option2" }, { value: "option3" }],
};
export default Index;
