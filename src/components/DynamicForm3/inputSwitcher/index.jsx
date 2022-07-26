import React from "react";
import {
  TextInput,
  DatePicker,
  Select,
  CheckboxGroup,
  RadioGroup,
  TextArea,
  LocationInput,
  FileSelector,
  MultipleTextInput,
} from "../inputs";

const Index = ({ input }) => {
  switch (input.type) {
    case "multipleText":
      return <MultipleTextInput input={input} />;

    case "text":
      return <TextInput input={input} />;
    case "phoneNumber":
      return <TextInput input={input} />;
    case "cinNumber":
      return <TextInput input={input} />;
    case "address":
      return <TextInput input={input} />;
    case "birthDate":
      return <DatePicker input={input} />;
    case "select":
      return <Select input={input} />;
    case "checkboxGroup":
      return <CheckboxGroup input={input} />;
    case "radioGroup":
      return <RadioGroup input={input} />;
    case "textArea":
      return <TextArea input={input} />;
    // case "location":
    //   return <LocationInput input={input} />;
    case "file":
      return <FileSelector input={input} />;
    default:
      return <div />;
  }
};

export default Index;
