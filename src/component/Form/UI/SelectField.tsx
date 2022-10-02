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
            <div className={clsx("w-full", containerClassName)}>
                {label && (
                    <Label
                        label={label}
                        name={registerProps.name}
                        labelClassName={clsx("font-semibold", labelClassName)}
                    />
                )}
                <select
                    id={registerProps.name}
                    className={clsx(
                        "w-full border border-gray-900 px-4 py-2 rounded-full",
                        {},
                        className
                    )}
                    {...registerProps}
                    ref={ref}
                >
                    {array.map((option, key) => (
                        <option
                            key={key}
                            value={option.value}
                            className="bg-blue-100"
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
);

export default SelectField;
