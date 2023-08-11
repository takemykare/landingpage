/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LandingUserCreateFormInputValues = {
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
export declare type LandingUserCreateFormValidationValues = {
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
export declare type LandingUserCreateFormOverridesProps = {
    LandingUserCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type LandingUserCreateFormProps = React.PropsWithChildren<{
    overrides?: LandingUserCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LandingUserCreateFormInputValues) => LandingUserCreateFormInputValues;
    onSuccess?: (fields: LandingUserCreateFormInputValues) => void;
    onError?: (fields: LandingUserCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LandingUserCreateFormInputValues) => LandingUserCreateFormInputValues;
    onValidate?: LandingUserCreateFormValidationValues;
} & React.CSSProperties>;
export default function LandingUserCreateForm(props: LandingUserCreateFormProps): React.ReactElement;
