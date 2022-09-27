import React from "react";
import {
    UpdateVehiculePayload,
    vehiculeService,
} from "../../../services/vehiculeService";
import useFetch from "../../../api/hooks/useFetch";
import { useForm } from "react-hook-form";
import { redirect } from "../../../utils/redirect";
import { Label, TextField } from "../UI";

export interface UpdateVehiculeFormProps {
    id: string;
}

const UpdateVehiculeForm: React.FC<UpdateVehiculeFormProps> = ({ id }) => {
    const { data: vehicule, reFetch } = useFetch(`/vehicules/${id}`);
    const { handleSubmit, register } = useForm<UpdateVehiculePayload>();

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
            immatriculation: formValues.immatriculation,
            etat: formValues.etat,
            louer: formValues.louer,
        };
        await vehiculeService.updateVehicule(id as string, payload);
        reFetch();
        redirect("/vehicules");
    };

    return (
        <div>
            <div>
                <p>
                    Detail de {vehicule.marque}&nbsp;
                    {vehicule.modele}
                </p>
            </div>
            <div>
                <p>{vehicule.type}</p>
                <p>{vehicule.marque}</p>
                <p>{vehicule.modele}</p>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmitUpdateVehicule)}>
                    <div>
                        <TextField
                            label="Immatriculation :"
                            className="border border-blue-primary"
                            {...register("immatriculation")}
                            defaultValue={vehicule.immatriculation}
                        />
                    </div>
                    <div>
                        <Label label="Etat :" name="etat" />
                        <select
                            {...register("etat", { required: true })}
                            defaultValue={vehicule.etat}
                        >
                            {optionEtat.map((option, key) => (
                                <option key={key} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <Label label="Loué :" name="louer" />
                        <input
                            type="checkbox"
                            {...register("louer")}
                            defaultChecked={vehicule.louer}
                        />
                    </div>
                    <button type="submit" className="px-4 py-2 border">
                        Ajouter la voiture
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateVehiculeForm;
