import React, { useState, useEffect } from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import { Container, StyledLabel, Msg, StyledRadioGroup } from "./styles";

const Index = ({ input }) => {
  const { name, label, options, readOnly, hidden } = input;
  const { setFieldValue } = useFormikContext();
  const [val, setVal] = useState("");
  const [value, setValue] = useState(options[0].value);

  const onChange = (e) => {
    setVal(e);
  };
  useEffect(() => {
    if (val.target) {
      setFieldValue(name, val.target.value || "");
      setValue(val.target.value);
    }
  }, [val]);

  return (
    <Field name={name}>
      {({ field }) => {
        return (
          <>
            {!hidden && (
              <Container>
                <StyledLabel htmlFor="name">{label}</StyledLabel>
                <StyledRadioGroup
                  id="checkbox-group-1"
                  options={options}
                  value={value}
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
