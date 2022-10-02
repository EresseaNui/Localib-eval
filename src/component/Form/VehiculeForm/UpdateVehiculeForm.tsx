import React, { useRef } from "react";
import {
    UpdateVehiculePayload,
    vehiculeService,
} from "../../../services/vehiculeService";
import useFetch from "../../../api/hooks/useFetch";
import { useForm } from "react-hook-form";
import { redirect } from "../../../utils/redirect";
import { SelectField, TextField } from "../UI";
import { Button } from "../../UI";

export interface UpdateVehiculeFormProps {
    id: string;
}

const UpdateVehiculeForm: React.FC<UpdateVehiculeFormProps> = ({ id }) => {
    const { data: vehicule, reFetch } = useFetch(`/vehicles/${id}`);
    const { handleSubmit, register } = useForm<UpdateVehiculePayload>();
    const ref = useRef(null);

    const optionEtat = [
        { value: "A", label: "A" },
        { value: "B", label: "B" },
        { value: "C", label: "C" },
        { value: "D", label: "D" },
    ];

    const onSubmitUpdateVehicule = async (
        formValues: UpdateVehiculePayload
    ): Promise<void> => {
        const payload = {
            ...vehicule,
            registration_number: formValues.registration_number,
            vehicle_state: formValues.vehicle_state,
            renting_price: formValues.renting_price,
        };
        await vehiculeService.updateVehicule(id as string, payload);
        reFetch();
        redirect("/vehicules");
    };

    return (
        <div>
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
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmitUpdateVehicule)}>
                    <div>
                        <TextField
                            label="Immatriculation :"
                            className="border border-blue-primary"
                            {...register("registration_number")}
                            defaultValue={vehicule.registration_number}
                        />
                    </div>
                    <div>
                        <SelectField
                            array={optionEtat}
                            {...register("vehicle_state")}
                            label="Etat :"
                            defaultValue={vehicule.vehicle_state}
                        />
                    </div>
                    <div>
                        <label>Loué:</label>
                        <input type="number" {...register("renting_price")} />
                    </div>

                    <Button type="submit" variant="outlined" color="white">
                        Modifier le véhicule
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default UpdateVehiculeForm;
