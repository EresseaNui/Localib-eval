import clsx from "clsx";
import React, { useRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Field } from "../../../types/field";
import Label from "./Label";

interface SelectFieldProps extends Field, UseFormRegisterReturn {
    className?: string;
    disabled?: HTMLInputElement["disabled"];
    defaultValue?: any;
    containerClassName?: string;
    array: any[];
}

const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
    (
        {
            className = "",
            label = "",
            error,
            labelClassName,
            containerClassName = "",
            array = [],
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
                <select
                    id={registerProps.name}
                    className={clsx("", {}, className)}
                    {...registerProps}
                    ref={ref}
                >
                    {array.map((option, key) => (
                        <option key={key} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
);

export default SelectField;