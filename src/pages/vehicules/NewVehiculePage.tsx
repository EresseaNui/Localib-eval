import React from "react";
import Layout from "../../component/UI/Layout/Layout";
import {
    NewVehiculePayload,
    vehiculeService,
} from "../../services/vehiculeService";
import { redirect } from "../../utils/redirect";
import NewVehiculeForm from "../../component/Form/UI/VehiculeForm/NewVehiculeForm";

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
                <div>Ajouter un nouveau véhicule</div>
                <div>
                    <NewVehiculeForm onSubmit={onSubmitNewVehicule} />
                </div>
            </div>
        </Layout>
    );
};

export default NewVehiculePage;
