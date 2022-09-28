import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import NewVehiculeForm from "../../component/Form/VehiculeForm/NewVehiculeForm";
import Layout from "../../component/UI/Layout/Layout";
import {
    NewVehiculePayload,
    vehiculeService,
} from "../../services/vehiculeService";
import { redirect } from "../../utils/redirect";

const NewVehiculePage: React.FC<unknown> = () => {
    const onSubmitNewVehicule = async (
        formValues: NewVehiculePayload
    ): Promise<void> => {
        await vehiculeService.createNewVehicule(formValues);
        redirect("/vehicules");
    };
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
                <div>Ajouter un nouveau véhicule</div>
                <div>
                    <NewVehiculeForm onSubmit={onSubmitNewVehicule} />
                </div>
            </div>
        </Layout>
    );
};

export default NewVehiculePage;
