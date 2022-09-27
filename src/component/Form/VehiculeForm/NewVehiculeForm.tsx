import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import { NewVehiculePayload } from "../../../services/vehiculeService";
import { SelectField, TextField } from "../UI";

interface NewVehiculeFormProps {
    onSubmit: (value: NewVehiculePayload) => void;
}

const NewVehiculeForm: React.FC<NewVehiculeFormProps> = ({
    onSubmit = () => {},
}) => {
    const { handleSubmit, register } = useForm<NewVehiculePayload>();
    const ref = useRef(null);

    const optionsType = [
        { value: "voiture", label: "Voiture" },
        { value: "camion", label: "Camion" },
        { value: "moto", label: "Moto" },
        { value: "utilitaire", label: "Utilitaire" },
    ];

    const optionEtat = [
        { value: "A", label: "A" },
        { value: "B", label: "B" },
        { value: "C", label: "C" },
        { value: "D", label: "D" },
    ];
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <SelectField
                    array={optionsType}
                    {...register("type")}
                    label="Type :"
                />
            </div>
            <div>
                <TextField
                    label="Marque :"
                    className="border border-blue-primary"
                    {...register("marque", { required: true })}
                    ref={ref}
                />
            </div>
            <div>
                <TextField
                    label="Modèle :"
                    className="border border-blue-primary"
                    {...register("modele", { required: true })}
                    ref={ref}
                />
            </div>
            <div>
                <TextField
                    label="Immatriculation :"
                    className="border border-blue-primary"
                    {...register("immatriculation", { required: true })}
                    ref={ref}
                />
            </div>
            <div>
                <SelectField
                    array={optionEtat}
                    {...register("etat")}
                    label="Etat :"
                />
            </div>
            <div>
                <label>Loué:</label>
                <input
                    type="checkbox"
                    {...register("louer")}
                    defaultChecked={false}
                />
            </div>
            <button type="submit" className="px-4 py-2 border">
                Ajouter la voiture
            </button>
        </form>
    );
};

export default NewVehiculeForm;
