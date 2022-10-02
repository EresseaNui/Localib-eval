import React from "react";
import { AiOutlineCar } from "react-icons/ai";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import NewVehiculeForm from "../../component/Form/VehiculeForm/NewVehiculeForm";
import { TitleWithReturn } from "../../component/UI";
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
            <div className="space-y-10">
                <TitleWithReturn
                    title="Ajouter un nouveau Véhicule"
                    path="/vehicules"
                    icon={<AiOutlineCar />}
                />
                <div className="flex justify-center">
                    <NewVehiculeForm onSubmit={onSubmitNewVehicule} />
                </div>
            </div>
        </Layout>
    );
};

export default NewVehiculePage;
