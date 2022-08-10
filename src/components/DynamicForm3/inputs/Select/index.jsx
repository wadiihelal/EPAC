import React, { useState, useEffect } from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import { Container, StyledLabel, Msg, StyledSelect } from "./styles";
import { Select } from "react-rainbow-components";
const Index = ({ name, label, options, readOnly, hidden }) => {

  const { setFieldValue } = useFormikContext();
  const [val, setVal] = useState(options[0].value);

  const onChange = (e) => {
    setVal(e.currentTarget.value);
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
                <Select
                  options={options}
                  id="example-select-1"
                  onChange={onChange}
                  // style={containerStyles}
                  //     className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
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
