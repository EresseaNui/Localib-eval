import React from "react";

import clsx from "clsx";

interface LabelProps {
    name: string;
    label: string;
    subLabel?: string;
    tooltip?: string | React.ReactNode;
    className?: string;
    labelClassName?: string;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    (
        {
            name,
            label,
            className = "",
            labelClassName = "text-sm font-medium leading-5 text-gray-700",
        },
        ref
    ) => (
        <label
            htmlFor={name}
            className={clsx(
                "flex items-center text-sm font-normal leading-5",
                className,
                labelClassName
            )}
            ref={ref}
        >
            {label}
        </label>
    )
);

export default Label;
