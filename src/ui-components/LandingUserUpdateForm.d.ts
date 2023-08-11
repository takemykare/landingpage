/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LandingUser } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LandingUserUpdateFormInputValues = {
    name?: string;
    email?: string;
    Mob?: string;
    Service?: string;
    StartDate?: string;
    EndDate?: string;
    StreetAddress?: string;
    City?: string;
    pincode?: string;
    DateTime?: string;
};
export declare type LandingUserUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    Mob?: ValidationFunction<string>;
    Service?: ValidationFunction<string>;
    StartDate?: ValidationFunction<string>;
    EndDate?: ValidationFunction<string>;
    StreetAddress?: ValidationFunction<string>;
    City?: ValidationFunction<string>;
    pincode?: ValidationFunction<string>;
    DateTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LandingUserUpdateFormOverridesProps = {
    LandingUserUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    Mob?: PrimitiveOverrideProps<TextFieldProps>;
    Service?: PrimitiveOverrideProps<TextFieldProps>;
    StartDate?: PrimitiveOverrideProps<TextFieldProps>;
    EndDate?: PrimitiveOverrideProps<TextFieldProps>;
    StreetAddress?: PrimitiveOverrideProps<TextFieldProps>;
    City?: PrimitiveOverrideProps<TextFieldProps>;
    pincode?: PrimitiveOverrideProps<TextFieldProps>;
    DateTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LandingUserUpdateFormProps = React.PropsWithChildren<{
    overrides?: LandingUserUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    landingUser?: LandingUser;
    onSubmit?: (fields: LandingUserUpdateFormInputValues) => LandingUserUpdateFormInputValues;
    onSuccess?: (fields: LandingUserUpdateFormInputValues) => void;
    onError?: (fields: LandingUserUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LandingUserUpdateFormInputValues) => LandingUserUpdateFormInputValues;
    onValidate?: LandingUserUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LandingUserUpdateForm(props: LandingUserUpdateFormProps): React.ReactElement;
