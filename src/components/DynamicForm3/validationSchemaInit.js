import * as Yup from "yup";
//import { useRouter } from "next/router";

const requiredMessage = {
  fr: "Ce champ est obligatoire!",
  en: "This field is required!",
  ar: " ! هذا الحقل مطلوب",
};

const errorMessage = {
  fr: "error",
  en: "error",
  ar: " خطأ !",
};

export const validationSchemaInit = (inputs) => {
  const locale = "fr";
  const validationObject = {};
  if (inputs.length > 0) {
    inputs.forEach((e) => {
      switch (e.type) {
        case "text":
          if (e.required) {
            validationObject[e.name] = Yup.string()
              .required(requiredMessage[locale])
              .matches(
                /^[^0-9<>()[\]\\.,;:@"*~!@#$%^&*()_+]+$/,
                errorMessage[locale]
              );
          } else {
            validationObject[e.name] = Yup.string().matches(
              /^[^0-9<>()[\]\\.,;:@"*~!@#$%^&*()_+]+$/,
              errorMessage[locale]
            );
          }
          break;

        case "phoneNumber":
          if (e.required) {
            validationObject[e.name] = Yup.string()
              .required(requiredMessage[locale])
              .matches(/^[0-9 ]+$/, errorMessage[locale])
              .min(8)
              .max(8);
          } else {
            validationObject[e.name] = Yup.string()
              .matches(/^[0-9 ]+$/, errorMessage[locale])
              .min(8)
              .max(8);
          }
          break;
        case "CinNumber":
          if (e.required) {
            validationObject[e.name] = Yup.string()
              .required(requiredMessage[locale])
              .matches(/^[0-9 ]+$/, errorMessage[locale])
              .min(8)
              .max(8);
          } else {
            validationObject[e.name] = Yup.string()
              .matches(/^[0-9 ]+$/, errorMessage[locale])
              .min(8)
              .max(8);
          }
          break;
        case "address":
          if (e.required) {
            validationObject[e.name] = Yup.string().required(
              requiredMessage[locale]
            );
          } else {
            validationObject[e.name] = Yup.string();
          }
          break;
        case "birthDate":
          if (e.required) {
            validationObject[e.name] = Yup.date().required(
              requiredMessage[locale]
            );
          } else {
            validationObject[e.name] = Yup.date();
          }
          break;
        case "file":
          if (e.required) {
            validationObject[e.name] = Yup.array()
              .of(
                Yup.mixed()
                  .required(requiredMessage[locale])

                  .test(
                    "fileType",
                    "Unsupported File Format",
                    function (value) {
                      if (value) {
                        const SUPPORTED_FORMATS = [
                          "image/jpg",
                          "image/jpeg",
                          "image/png",
                          "application/pdf",
                        ];
                        return SUPPORTED_FORMATS.includes(value.type);
                      }
                    }
                  )
                  .test("fileSize", "File Size is too large", (value) => {
                    if (value) {
                      const sizeInBytes = 5242880; //5MB
                      return value.size <= sizeInBytes;
                    }
                  })
              )
              .required(requiredMessage[locale]);
          } else {
            validationObject[e.name] = Yup.array().of(
              Yup.mixed()
                .test("fileType", "Unsupported File Format", function (value) {
                  if (value) {
                    const SUPPORTED_FORMATS = [
                      "image/jpg",
                      "image/jpeg",
                      "image/png",
                      "application/pdf",
                    ];
                    return SUPPORTED_FORMATS.includes(value.type);
                  }
                })
                .test("fileSize", "File Size is too large", (value) => {
                  if (value) {
                    const sizeInBytes = 5242880; //5MB
                    return value.size <= sizeInBytes;
                  }
                })
            );
          }
          break;
      }
    });

    return Yup.object(validationObject);
  } else {
    return Yup.object();
  }
};
