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
            <SelectField
                array={optionsType}
                {...register("type")}
                label="Type :"
            />

            <TextField
                label="Marque :"
                className="border border-blue-primary"
                {...register("marque", { required: true })}
            />

            <TextField
                label="Modèle :"
                className="border border-blue-primary"
                {...register("modele", { required: true })}
            />

            <TextField
                label="Immatriculation :"
                className="border border-blue-primary"
                {...register("immatriculation", { required: true })}
            />

            <SelectField
                array={optionEtat}
                {...register("etat")}
                label="Etat :"
            />

            <div>
                <label>Loué:</label>
                <input
                    type="checkbox"
                    {...register("louer")}
                    defaultChecked={false}
                />
            </div>
            <button type="submit" className="px-4 py-2 border">
                Ajouter le véhicule voiture
            </button>
        </form>
    );
};

export default NewVehiculeForm;
