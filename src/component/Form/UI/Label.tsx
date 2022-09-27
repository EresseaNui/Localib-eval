import React from "react";

import clsx from "clsx";

interface LabelProps {
    name: string;
    label: string;
    subLabel?: string;
    className?: string;
    labelClassName?: string;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    ({ name, label, className = "", labelClassName = "" }, ref) => (
        <label
            htmlFor={name}
            className={clsx("", className, labelClassName)}
            ref={ref}
        >
            {label}
        </label>
    )
);

export default Label;
