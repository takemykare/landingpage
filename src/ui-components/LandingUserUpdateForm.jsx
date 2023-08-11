/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { LandingUser } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function LandingUserUpdateForm(props) {
  const {
    id: idProp,
    landingUser: landingUserModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    email: "",
    Mob: "",
    Service: "",
    StartDate: "",
    EndDate: "",
    StreetAddress: "",
    City: "",
    pincode: "",
    DateTime: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [Mob, setMob] = React.useState(initialValues.Mob);
  const [Service, setService] = React.useState(initialValues.Service);
  const [StartDate, setStartDate] = React.useState(initialValues.StartDate);
  const [EndDate, setEndDate] = React.useState(initialValues.EndDate);
  const [StreetAddress, setStreetAddress] = React.useState(
    initialValues.StreetAddress
  );
  const [City, setCity] = React.useState(initialValues.City);
  const [pincode, setPincode] = React.useState(initialValues.pincode);
  const [DateTime, setDateTime] = React.useState(initialValues.DateTime);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = landingUserRecord
      ? { ...initialValues, ...landingUserRecord }
      : initialValues;
    setName(cleanValues.name);
    setEmail(cleanValues.email);
    setMob(cleanValues.Mob);
    setService(cleanValues.Service);
    setStartDate(cleanValues.StartDate);
    setEndDate(cleanValues.EndDate);
    setStreetAddress(cleanValues.StreetAddress);
    setCity(cleanValues.City);
    setPincode(cleanValues.pincode);
    setDateTime(cleanValues.DateTime);
    setErrors({});
  };
  const [landingUserRecord, setLandingUserRecord] =
    React.useState(landingUserModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(LandingUser, idProp)
        : landingUserModelProp;
      setLandingUserRecord(record);
    };
    queryData();
  }, [idProp, landingUserModelProp]);
  React.useEffect(resetStateValues, [landingUserRecord]);
  const validations = {
    name: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    Mob: [{ type: "Required" }],
    Service: [{ type: "Required" }],
    StartDate: [{ type: "Required" }],
    EndDate: [{ type: "Required" }],
    StreetAddress: [],
    City: [],
    pincode: [{ type: "Required" }],
    DateTime: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          email,
          Mob,
          Service,
          StartDate,
          EndDate,
          StreetAddress,
          City,
          pincode,
          DateTime,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            LandingUser.copyOf(landingUserRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "LandingUserUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              email,
              Mob,
              Service,
              StartDate,
              EndDate,
              StreetAddress,
              City,
              pincode,
              DateTime,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email: value,
              Mob,
              Service,
              StartDate,
              EndDate,
              StreetAddress,
              City,
              pincode,
              DateTime,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Mob"
        isRequired={true}
        isReadOnly={false}
        value={Mob}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              Mob: value,
              Service,
              StartDate,
              EndDate,
              StreetAddress,
              City,
              pincode,
              DateTime,
            };
            const result = onChange(modelFields);
            value = result?.Mob ?? value;
          }
          if (errors.Mob?.hasError) {
            runValidationTasks("Mob", value);
          }
          setMob(value);
        }}
        onBlur={() => runValidationTasks("Mob", Mob)}
        errorMessage={errors.Mob?.errorMessage}
        hasError={errors.Mob?.hasError}
        {...getOverrideProps(overrides, "Mob")}
      ></TextField>
      <TextField
        label="Service"
        isRequired={true}
        isReadOnly={false}
        value={Service}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              Mob,
              Service: value,
              StartDate,
              EndDate,
              StreetAddress,
              City,
              pincode,
              DateTime,
            };
            const result = onChange(modelFields);
            value = result?.Service ?? value;
          }
          if (errors.Service?.hasError) {
            runValidationTasks("Service", value);
          }
          setService(value);
        }}
        onBlur={() => runValidationTasks("Service", Service)}
        errorMessage={errors.Service?.errorMessage}
        hasError={errors.Service?.hasError}
        {...getOverrideProps(overrides, "Service")}
      ></TextField>
      <TextField
        label="Start date"
        isRequired={true}
        isReadOnly={false}
        value={StartDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              Mob,
              Service,
              StartDate: value,
              EndDate,
              StreetAddress,
              City,
              pincode,
              DateTime,
            };
            const result = onChange(modelFields);
            value = result?.StartDate ?? value;
          }
          if (errors.StartDate?.hasError) {
            runValidationTasks("StartDate", value);
          }
          setStartDate(value);
        }}
        onBlur={() => runValidationTasks("StartDate", StartDate)}
        errorMessage={errors.StartDate?.errorMessage}
        hasError={errors.StartDate?.hasError}
        {...getOverrideProps(overrides, "StartDate")}
      ></TextField>
      <TextField
        label="End date"
        isRequired={true}
        isReadOnly={false}
        value={EndDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              Mob,
              Service,
              StartDate,
              EndDate: value,
              StreetAddress,
              City,
              pincode,
              DateTime,
            };
            const result = onChange(modelFields);
            value = result?.EndDate ?? value;
          }
          if (errors.EndDate?.hasError) {
            runValidationTasks("EndDate", value);
          }
          setEndDate(value);
        }}
        onBlur={() => runValidationTasks("EndDate", EndDate)}
        errorMessage={errors.EndDate?.errorMessage}
        hasError={errors.EndDate?.hasError}
        {...getOverrideProps(overrides, "EndDate")}
      ></TextField>
      <TextField
        label="Street address"
        isRequired={false}
        isReadOnly={false}
        value={StreetAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              Mob,
              Service,
              StartDate,
              EndDate,
              StreetAddress: value,
              City,
              pincode,
              DateTime,
            };
            const result = onChange(modelFields);
            value = result?.StreetAddress ?? value;
          }
          if (errors.StreetAddress?.hasError) {
            runValidationTasks("StreetAddress", value);
          }
          setStreetAddress(value);
        }}
        onBlur={() => runValidationTasks("StreetAddress", StreetAddress)}
        errorMessage={errors.StreetAddress?.errorMessage}
        hasError={errors.StreetAddress?.hasError}
        {...getOverrideProps(overrides, "StreetAddress")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={City}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              Mob,
              Service,
              StartDate,
              EndDate,
              StreetAddress,
              City: value,
              pincode,
              DateTime,
            };
            const result = onChange(modelFields);
            value = result?.City ?? value;
          }
          if (errors.City?.hasError) {
            runValidationTasks("City", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("City", City)}
        errorMessage={errors.City?.errorMessage}
        hasError={errors.City?.hasError}
        {...getOverrideProps(overrides, "City")}
      ></TextField>
      <TextField
        label="Pincode"
        isRequired={true}
        isReadOnly={false}
        value={pincode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              Mob,
              Service,
              StartDate,
              EndDate,
              StreetAddress,
              City,
              pincode: value,
              DateTime,
            };
            const result = onChange(modelFields);
            value = result?.pincode ?? value;
          }
          if (errors.pincode?.hasError) {
            runValidationTasks("pincode", value);
          }
          setPincode(value);
        }}
        onBlur={() => runValidationTasks("pincode", pincode)}
        errorMessage={errors.pincode?.errorMessage}
        hasError={errors.pincode?.hasError}
        {...getOverrideProps(overrides, "pincode")}
      ></TextField>
      <TextField
        label="Date time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={DateTime && convertToLocal(new Date(DateTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              email,
              Mob,
              Service,
              StartDate,
              EndDate,
              StreetAddress,
              City,
              pincode,
              DateTime: value,
            };
            const result = onChange(modelFields);
            value = result?.DateTime ?? value;
          }
          if (errors.DateTime?.hasError) {
            runValidationTasks("DateTime", value);
          }
          setDateTime(value);
        }}
        onBlur={() => runValidationTasks("DateTime", DateTime)}
        errorMessage={errors.DateTime?.errorMessage}
        hasError={errors.DateTime?.hasError}
        {...getOverrideProps(overrides, "DateTime")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || landingUserModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || landingUserModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
