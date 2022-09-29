import React from "react";

import clsx from "clsx";
import { AiFillCar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export interface TitleWithReturnProps {
    title: string;
    path?: string;
    icon?: React.ReactNode;
}

const TitleWithReturn: React.FC<TitleWithReturnProps> = ({
    title,
    path = "/",
    icon,
}) => {
    return (
        <div>
            <div className="w-fit">
                <NavLink to={path} className="flex items-center space-x-1">
                    <HiOutlineArrowNarrowLeft className="mt-1" />
                    <p className="font-semibold">retour</p>
                </NavLink>
            </div>
            <div className="flex items-center gap-2 text-3xl text-blue-primary">
                <p className="font-semibold ">{title}</p>

                {icon && <div>{icon}</div>}
            </div>
        </div>
    );
};

export default TitleWithReturn;
