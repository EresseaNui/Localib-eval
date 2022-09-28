import React from "react";

import Layout from "../../component/UI/Layout/Layout";
import { redirect } from "../../utils/redirect";
import {
    UpdateVehiculePayload,
    vehiculeService,
} from "../../services/vehiculeService";
import { NavLink, useParams } from "react-router-dom";
import UpdateVehiculeForm from "../../component/Form/VehiculeForm/UpdateVehiculeForm";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const UpdateVehicule: React.FC<unknown> = () => {
    const { id } = useParams();

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
                <div>Modifier véhicule</div>
                {id && (
                    <div>
                        <UpdateVehiculeForm id={id} />
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default UpdateVehicule;
