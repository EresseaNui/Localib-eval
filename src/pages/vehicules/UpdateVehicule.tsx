import React from "react";

import Layout from "../../component/UI/Layout/Layout";

import { useParams } from "react-router-dom";
import UpdateVehiculeForm from "../../component/Form/VehiculeForm/UpdateVehiculeForm";
import { TitleWithReturn } from "../../component/UI";
import { AiOutlineCar } from "react-icons/ai";
import useFetch from "../../api/hooks/useFetch";
import { displayTypeName } from "../../utils/displayVehicleType";

const UpdateVehicule: React.FC<unknown> = () => {
    const { id } = useParams();
    const { data: vehicule, reFetch } = useFetch(`/vehicles/${id}`);

    return (
        <Layout>
            <div className="space-y-10">
                <TitleWithReturn
                    title={`Modifier ${displayTypeName(vehicule.type)}`}
                    path="/vehicules"
                    icon={<AiOutlineCar />}
                />
                {id && (
                    <UpdateVehiculeForm vehicle={vehicule} reFetch={reFetch} />
                )}
            </div>
        </Layout>
    );
};

export default UpdateVehicule;
