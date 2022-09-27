import React from "react";

import clsx from "clsx";

export interface UpdateVehiculeProps {
    className?: string;
}

const UpdateVehicule: React.FC<UpdateVehiculeProps> = ({ className = "" }) => {
    return (
        <div className={clsx("", className)}>
            <p>UpdateVehicule</p>
        </div>
    );
};

export default UpdateVehicule;
