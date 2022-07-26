export const initialValuesInit = (inputs) => {
  if (inputs.length > 0) {
    const initialValues = {};
    inputs.forEach((e) => {
      initialValues[e.name] = e.defaultValue;
    });

    return initialValues;
  } else {
    return {};
  }
};
