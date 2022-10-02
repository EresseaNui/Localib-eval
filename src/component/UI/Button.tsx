import clsx from "clsx";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi";

const COLORS = {
    red: {
        basic: "text-white bg-red-500 hover:bg-red-600 border-red-500",
        outlined: "text-red-500 bg-white hover:bg-red-100 border-red-500",
        link: "text-red-500 hover:undeline hover:text-red-600",
    },
    blue: {
        basic: "text-white bg-blue-primary hover:bg-blue-700 border-blue-primary",
        outlined:
            "text-blue-primary bg-white hover:bg-blue-100 border-blue-primary",
        link: "text-blue-primary hover:undeline hover:text-blue-700",
    },
    green: {
        basic: "text-white bg-green-500 hover:bg-green-600 border-green-500",
        outlined: "text-green-500 bg-white hover:bg-green-100 border-green-500",
        link: "text-green-500 hover:undeline hover:text-green-700",
    },
    white: {
        basic: "text-black bg-white hover:bg-gray-100 border-gray-800",
        outlined: "text-black bg-white hover:bg-gray-100 border-black",
        link: "text-white",
    },
    disabled: {
        basic: "text-white bg-gray-300",
        outlined: "text-gray-300 bg-white border-gray-300",
        link: "text-gray-300 hover:underline",
    },
} as const;

const ICONS = {
    trash: HiOutlineTrash,
    see: AiOutlineEye,
    pencil: BiPencil,
} as const;

type ButtonVariant = "basic" | "outlined" | "link";
export type ButtonColor = keyof typeof COLORS;
export type ButtonIcon = keyof typeof ICONS;
type ButtonIconPosition = "left" | "right" | "top" | "bottom";
export type ButtonSize = "2xl" | "lg" | "normal" | "md" | "sm" | "xs" | "xxs";
type ButtonShadow = "none" | "sm" | "md" | "lg";

export interface ButtonProps {
    children: React.ReactNode;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    icon?: ButtonIcon;
    iconPosition?: ButtonIconPosition;
    iconClassName?: string;
    variant?: ButtonVariant;
    color?: ButtonColor;
    className?: string;
    padding?: string;
    rounded?: string;
    onClick?: (e: React.MouseEvent) => void;
    onMouseOver?: (e: React.MouseEvent | React.FocusEvent) => void;
    onMouseOut?: (e: React.MouseEvent | React.FocusEvent) => void;
    size?: ButtonSize;
    shadow?: ButtonShadow;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    type = "button",
    className = "",
    variant = "basic",
    color = "blue",
    icon,
    iconPosition = "left",
    iconClassName = "",
    size = "normal",
    padding = "px-4 py-2",
    rounded = "",
    shadow = "",
    disabled = false,
    onClick = () => {},
    onMouseOver = () => {},
    onMouseOut = () => {},
}) => {
    const Icon = icon ? ICONS[icon] : null;
    const isNotLink = (["basic", "outlined"] as ButtonVariant[]).includes(
        variant
    );
    return (
        <button
            type={type}
            onClick={onClick}
            onFocus={onMouseOver}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onBlur={onMouseOut}
            className={clsx(
                "flex border items-center focus:outline-none focus:ring-transparent transition-all relative overflow-hidden",
                {
                    "cursor-pointer": variant === "link",
                    "flex-row-reverse space-x-reverse":
                        iconPosition === "right",
                    "flex-col space-y-1.5": iconPosition === "top",
                    "flex-col-reverse space-y-1.5": iconPosition === "bottom",
                    "space-x-1": !!icon,
                    "leading-4 text-xxs": size === "xxs",
                    "leading-4 text-xs": size === "xs",
                    "leading-5 text-sm": size === "sm",
                    "leading-5 text-md": size === "md",
                    "leading-6 text-base": size === "normal",
                    "leading-7 text-lg": size === "lg",
                    "leading-8 text-2xl": size === "2xl",
                    [padding]: variant !== "link",
                    "cursor-not-allowed": disabled,
                    "rounded-3xl": rounded === "3xl",
                    "rounded-md": rounded === "md",
                    "rounded-none": rounded === "none" || variant === "link",
                    "rounded-full":
                        variant === "basic" || variant === "outlined",
                },
                COLORS[disabled ? "disabled" : color][variant],
                rounded,
                className
            )}
            disabled={disabled}
        >
            {Icon && (
                <Icon
                    className={clsx(
                        {
                            "h-10 w-10": size === "2xl",
                            "h-8 w-8": size === "lg",
                            "h-6 w-6": size === "normal",
                            "h-5 w-5 mt-0.5 ": size === "md",
                            "h-4 w-4 mt-0.5 ": size === "sm",
                            "h-4 w-4 mt-0.5": size === "xs",
                            "h-2 w-2 mt-0.5": size === "xxs",
                        },
                        iconClassName,
                        "flex-shrink-0"
                    )}
                />
            )}
            {children && <span>{children}</span>}
        </button>
    );
};

export default Button;
