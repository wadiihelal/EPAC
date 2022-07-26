import React, { useState, useEffect } from "react";
import { Field, ErrorMessage, useFormikContext, FieldArray } from "formik";
import {
  Container,
  StyledInput,
  StyledLabel,
  Msg,
  LabelWrapper,
  ButtonsWrapper,
} from "./styles";
import { Input } from "react-rainbow-components";
import { FileSelector, ButtonIcon } from "react-rainbow-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
const Index = ({ input, submitOnChange }) => {
  const { name, label, placeHolder, hidden, readOnly, multiple } = input;
  const { submitForm, setFieldValue, values } = useFormikContext();
  const [val, setVal] = useState("");
  const [itemIndex, setItemIndex] = useState(0);
  // const onChange = (e) => {


  //   //  setVal(e.currentTarget.value);
  // };

  const handleChange = (e, index) => {


    //setItemIndex(index);
    // setVal(e.currentTarget.value);
    // setFile(value[0]);
  };
  // useEffect(() => {

  //   //  setFieldValue(name, val);
  // }, [val]);

  useEffect(() => {

    // if (values[name] && submitOnChange) {
    //   submitForm();
    // }
  }, [values]);
  return (
    <Field name={name}>
      {({ field, meta }) => {
        return (
          <>
            {!hidden && (
              <Container>
                <LabelWrapper>
                  <StyledLabel htmlFor="name">{label}</StyledLabel>
                  <div style={{ color: "red" }}>*</div>
                </LabelWrapper>
                {!multiple && <></>}
                {multiple && (
                  <FieldArray name={name}>
                    {({ push, insert, remove }) => {
                      return (
                        <div>
                          {values[name] &&
                            values[name].length > 0 &&
                            values[name].map((friend, index) => (
                              <div key={index} style={{ display: "flex" }}>
                                <div>ar:</div>
                                <Field name={`${name}.${index}.ar`}>
                                  {({ field, meta }) => {
                                    return (
                                      <div style={{ display: "flex" }}>
                                        <Input
                                          error={meta.touched && meta.error}
                                          {...field}
                                          placeholder={placeHolder}
                                        />
                                      </div>
                                    );
                                  }}
                                </Field>
                                <div>fr :</div>
                                <Field name={`${name}.${index}.fr`}>
                                  {({ field, meta }) => {
                                    return (
                                      <div style={{ display: "flex" }}>
                                        <Input
                                          error={meta.touched && meta.error}
                                          {...field}
                                          placeholder={placeHolder}
                                        />
                                      </div>
                                    );
                                  }}
                                </Field>
                              </div>
                            ))}

                          <ButtonsWrapper>
                            <ButtonIcon
                              variant="outline-brand"
                              onClick={() => {
                                insert(values[name].length, "");
                              }}
                              icon={<FontAwesomeIcon icon={faPlus} />}
                            />{" "}
                            {values[name].length > 1 && (
                              <ButtonIcon
                                onClick={() => {
                                  remove(values[name].length - 1);
                                }}
                                variant="outline-brand"
                                icon={<FontAwesomeIcon icon={faMinus} />}
                              />
                            )}
                          </ButtonsWrapper>
                        </div>
                      );
                    }}
                  </FieldArray>
                )}
              </Container>
            )}
          </>
        );
      }}
    </Field>
  );
};

export default Index;
