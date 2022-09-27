import React from "react";

import clsx from "clsx";
import useFetch from "../../api/hooks/useFetch";

const VehiculeListPage: React.FC<unknown> = () => {
    const { data: vehicules } = useFetch("/vehicules");

    console.log(vehicules);

    return (
        <div className={clsx("")}>
            <p>TODO VEHICULE LIST PAGE</p>
        </div>
    );
};

export default VehiculeListPage;
