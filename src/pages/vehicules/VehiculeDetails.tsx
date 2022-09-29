import React from "react";

import useFetch from "../../api/hooks/useFetch";
import { NavLink, useParams } from "react-router-dom";
import Layout from "../../component/UI/Layout/Layout";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { TitleWithReturn } from "../../component/UI";
import { AiOutlineCar } from "react-icons/ai";

const VehiculeDetails: React.FC<unknown> = () => {
    const { id } = useParams();

    const { data: vehicule } = useFetch(`/vehicles/${id}`);

    return (
        <Layout>
            <div>
                <TitleWithReturn
                    title="Detail du Véhicule"
                    path="/vehicules"
                    icon={<AiOutlineCar />}
                />
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
