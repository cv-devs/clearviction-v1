import React from "react";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";

type ButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color" | "children" | "fullWidth">;

export interface ButtonProps extends ButtonBaseProps {}

export const Button = ({ ...rest }: ButtonProps) => <MuiButton {...rest} />;

Button.defaultProps = {
    variant: "contained",
    size: "medium",
    color: "primary",
    fullWidth: false,
};