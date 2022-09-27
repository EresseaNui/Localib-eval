import React from "react";

import clsx from "clsx";
import useFetch from "../../api/hooks/useFetch";
import Layout from "../../component/UI/Layout/Layout";

const VehiculeListPage: React.FC<unknown> = () => {
    const { data: vehicules } = useFetch("/vehicules");

    console.log(vehicules);

    return (
        <Layout>
            <p>TODO VEHICULE LIST PAGE</p>
        </Layout>
    );
};

export default VehiculeListPage;
