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
        { value: "car", label: "Voiture" },
        { value: "truck", label: "Camion" },
        { value: "bike", label: "Moto" },
        { value: "utility", label: "Utilitaire" },
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
                {...register("brand", { required: true })}
            />

            <TextField
                label="Modèle :"
                className="border border-blue-primary"
                {...register("model", { required: true })}
            />

            <TextField
                label="Immatriculation :"
                className="border border-blue-primary"
                {...register("registration_number", { required: true })}
            />

            <SelectField
                array={optionEtat}
                {...register("vehicle_state")}
                label="Etat :"
            />

            <div>
                <label>Loué:</label>
                <input type="number" {...register("renting_price")} />
            </div>
            <button type="submit" className="px-4 py-2 border">
                Ajouter le véhicule voiture
            </button>
        </form>
    );
};

export default NewVehiculeForm;
