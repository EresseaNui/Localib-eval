import React from "react";

import clsx from "clsx";
import useFetch from "../../api/hooks/useFetch";
import { NavLink, useParams } from "react-router-dom";
import Layout from "../../component/UI/Layout/Layout";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const VehiculeDetails: React.FC<unknown> = () => {
    const { id } = useParams();

    const { data: vehicule } = useFetch(`/vehicules/${id}`);

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
                        Detail de {vehicule.marque}&nbsp;
                        {vehicule.modele}
                    </p>
                </div>
                <div>
                    <p>{vehicule.type}</p>
                    <p>{vehicule.marque}</p>
                    <p>{vehicule.modele}</p>
                    <p>{vehicule.immatriculation}</p>
                    {vehicule.louer ? (
                        <p>Le véhicule est non disponible</p>
                    ) : (
                        <p>Le véhicule est disponible</p>
                    )}
                    <p>{vehicule.etat}</p>
                </div>
            </div>
        </Layout>
    );
};

export default VehiculeDetails;
