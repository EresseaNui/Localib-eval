import React from "react";
import Layout from "../../component/UI/Layout/Layout";
import CreateNewVehicule from "../../component/Form/UI/VehiculeForm/CreateNewVehicule";
import {
    RegisterPayload,
    vehiculeService,
} from "../../services/vehiculeService";
import { redirect } from "../../utils/redirect";

const NewVehiculePage: React.FC<unknown> = () => {
    const onSubmitNewVehicule = async (
        formValues: RegisterPayload
    ): Promise<void> => {
        await vehiculeService.createNewVehicule(formValues);
        redirect("/vehicules");
    };
    return (
        <Layout>
            <div>
                <div>Ajouter un nouveau véhicule</div>
                <div>
                    <CreateNewVehicule onSubmit={onSubmitNewVehicule} />
                </div>
            </div>
        </Layout>
    );
};

export default NewVehiculePage;
