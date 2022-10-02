import clsx from "clsx";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Field } from "../../../types/field";
import Label from "./Label";

interface TextFieldProps extends Field, UseFormRegisterReturn {
    className?: string;
    type?: HTMLInputElement["type"];
    disabled?: HTMLInputElement["disabled"];
    defaultValue?: any;
    containerClassName?: string;
    onKeyDown?: (e: any) => any;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
    (
        {
            className = "",
            type = "text",
            label = "",
            error,
            placeholder,
            labelClassName,
            containerClassName = "",
            onKeyDown,
            ...registerProps
        },
        ref
    ) => {
        return (
            <div className={clsx(containerClassName)}>
                {label && (
                    <Label
                        label={label}
                        name={registerProps.name}
                        labelClassName={labelClassName}
                    />
                )}
                <input
                    id={registerProps.name}
                    type={type}
                    className={clsx(
                        "border border-gray-900 rounded-full px-4 py-2",
                        { "ml-2": label },
                        className
                    )}
                    placeholder={placeholder}
                    onKeyDown={onKeyDown}
                    {...registerProps}
                    ref={ref}
                />
                {error && (
                    <div className="flex mt-1 text-xs text-red-500">
                        {error.type === "required" && (
                            <span className="mt-0.5">Ce champ est requis.</span>
                        )}
                        {error.type === "pattern" && (
                            <span className="mt-0.5">{error.message}</span>
                        )}
                        {error.type === "manual" && (
                            <span className="mt-0.5">{error.message}</span>
                        )}
                        {error.type === "maxLength" && (
                            <span className="mt-0.5">{error.message}</span>
                        )}
                    </div>
                )}
            </div>
        );
    }
);

export default TextField;
