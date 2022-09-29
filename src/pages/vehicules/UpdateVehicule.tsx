import React from "react";

import Layout from "../../component/UI/Layout/Layout";

import { NavLink, useParams } from "react-router-dom";
import UpdateVehiculeForm from "../../component/Form/VehiculeForm/UpdateVehiculeForm";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { TitleWithReturn } from "../../component/UI";
import { AiOutlineCar } from "react-icons/ai";

const UpdateVehicule: React.FC<unknown> = () => {
    const { id } = useParams();

    return (
        <Layout>
            <div>
                <TitleWithReturn
                    title="Modifier le Véhicule"
                    path="/vehicules"
                    icon={<AiOutlineCar />}
                />
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
