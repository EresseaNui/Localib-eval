import React from "react";

import clsx from "clsx";
import useFetch from "../../api/hooks/useFetch";
import { NavLink, useParams } from "react-router-dom";
import Layout from "../../component/UI/Layout/Layout";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const VehiculeDetails: React.FC<unknown> = () => {
    const { id } = useParams();

    const { data: vehicule } = useFetch(`/vehicles/${id}`);

    return (
        <Layout>
            <div>
                <div>
                    <NavLink
                        to="/vehicules"
                        className="flex items-center space-x-1"
                    >
                        <HiOutlineArrowNarrowLeft className="mt-1" />
                        <p>retour</p>
                    </NavLink>
                </div>
                <div>
                    <p>
                        Detail de {vehicule.brand}&nbsp;
                        {vehicule.model}
                    </p>
                </div>
                <div>
                    <p>{vehicule.type}</p>
                    <p>{vehicule.brand}</p>
                    <p>{vehicule.model}</p>
                    <p>{vehicule.registration_number}</p>
                    <p>{vehicule.renting_price} €</p>
                    <p>{vehicule.vehicle_state}</p>
                </div>
            </div>
        </Layout>
    );
};

export default VehiculeDetails;
