import React from "react";

import Layout from "../../component/UI/Layout/Layout";
import { redirect } from "../../utils/redirect";
import {
    UpdateVehiculePayload,
    vehiculeService,
} from "../../services/vehiculeService";
import { useParams } from "react-router-dom";
import UpdateVehiculeForm from "../../component/Form/UI/VehiculeForm/UpdateVehiculeForm";

export interface UpdateVehiculeProps {
    className?: string;
}

const UpdateVehicule: React.FC<UpdateVehiculeProps> = ({ className = "" }) => {
    const { id } = useParams();

   
    return (
        <Layout>
            <div>
                <div>Modifier véhicule</div>
                {id && (
                    <div>
                        <UpdateVehiculeForm
    
                            id={id}
                        />
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default UpdateVehicule;
