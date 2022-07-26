import React, { useEffect, useState } from "react";
import { Field, useFormikContext, FieldArray } from "formik";
import { FileSelector, ButtonIcon } from "react-rainbow-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import { Container, StyledLabel, LabelWrapper, ButtonsWrapper } from "./styles";

const Index = ({ input }) => {
  const { name, label, hidden, multiple } = input;
  const { setFieldValue, values } = useFormikContext();

  const [file, setFile] = useState("");
  const [itemIndex, setItemIndex] = useState(0);

  const handleChange = (value, index) => {
    setItemIndex(index);
    setFile(value[0]);
  };
  useEffect(() => {
    let files = values[name] || [];

    if (files.length === 0) {
      if (file) {
        setFieldValue(name, [file]);
      } else {
        setFieldValue(name, [""]);
      }
    } else if (files.length >= itemIndex + 1) {
      if (file) {
        files[itemIndex] = file;
        setFieldValue(name, files);
      } else {
        files[itemIndex] = "";
        setFieldValue(name, files);
      }
    }
  }, [file]);

  return (
    <div>
      <>
        {!hidden && (
          <Container>
            <LabelWrapper>
              <StyledLabel htmlFor="name">{label}</StyledLabel>
              <div style={{ color: "red" }}>*</div>
            </LabelWrapper>

            <div style={{ marginTop: "-30px" }}>
              {!multiple && (
                <Field name={name}>
                  {({ field, meta }) => {
                    return (
                      <FileSelector
                        {...field}
                        error={meta.touched && meta.error}
                        className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                        placeholder="Drag & Drop or Click to Browse"
                        onChange={(e) => {
                          handleChange(e, 0);
                        }}
                      />
                    );
                  }}
                </Field>
              )}

              {multiple && (
                <FieldArray name={name}>
                  {({ push, insert, remove }) => {
                    return (
                      <div>
                        {values[name] &&
                          values[name].length > 0 &&
                          values[name].map((friend, index) => (
                            <div key={index}>
                              <Field name={`${name}.${index}`}>
                                {({ field, meta }) => {
                                  return (
                                    <div>
                                      <FileSelector
                                        {...field}
                                        error={meta.touched && meta.error}
                                        className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                                        placeholder="Drag & Drop or Click to Browse"
                                        onChange={(e) => {
                                          handleChange(e, index);
                                        }}
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
            </div>
          </Container>
        )}
      </>
    </div>
  );
};

export default Index;
