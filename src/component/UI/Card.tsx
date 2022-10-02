import React from "react";

import clsx from "clsx";

const COLORS = {
    blue: "border-blue-primary",
} as const;

export type CardColor = keyof typeof COLORS;

export interface CardProps {
    title?: string;
    cardColor?: CardColor;
    titleClassName?: string;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
    title = "",
    cardColor = "blue",
    titleClassName = "text-blue-primary",
    children,
}) => {
    return (
        <div
            className={clsx(
                "p-5 border-2 rounded-lg shadow-md ",
                COLORS[cardColor]
            )}
        >
            {title && (
                <div
                    className={clsx(
                        "px-3 text-lg font-semibold bg-white -mt-9 w-fit",
                        titleClassName
                    )}
                >
                    <p>{title}</p>
                </div>
            )}
            <div>{children}</div>
        </div>
    );
};

export default Card;
