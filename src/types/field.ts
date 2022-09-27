import { FieldError } from "react-hook-form";

interface Field {
    label?: string;
    /**
     * Tailwind classes to change the color of the label.
     * @example "text-indigo-600"
     */
    labelClassName?: string;
    placeholder?: string;
    name: string;
    error?: FieldError;
    type?: string;
}

export type { Field };
