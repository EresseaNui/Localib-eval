import React from "react";
import { useForm } from "react-hook-form";

import { NewVehiculePayload } from "../../../services/vehiculeService";
import { TextField } from "../UI";

interface NewVehiculeFormProps {
    onSubmit: (value: NewVehiculePayload) => void;
}

const NewVehiculeForm: React.FC<NewVehiculeFormProps> = ({
    onSubmit = () => {},
}) => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<NewVehiculePayload>();

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
                <label>Type:</label>
                <select
                    {...register("type", { required: true })}
                    defaultValue={optionsType[0].value}
                >
                    {optionsType.map((option, key) => (
                        <option key={key} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {errors.type && (
                    <span className="text-red-600">*Champ obligatoire</span>
                )}
            </div>
            <div>
                <TextField
                    label="Marque :"
                    className="border border-blue-primary"
                    {...register("marque", { required: true })}
                />
            </div>
            <div>
                <TextField
                    label="Modèle :"
                    className="border border-blue-primary"
                    {...register("modele", { required: true })}
                />
            </div>
            <div>
                <TextField
                    label="Immatriculation :"
                    className="border border-blue-primary"
                    {...register("immatriculation", { required: true })}
                />
            </div>
            <div>
                <label>Etat:</label>
                <select
                    {...register("etat", { required: true })}
                    defaultValue={optionEtat[0].value}
                >
                    {optionEtat.map((option, key) => (
                        <option key={key} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {errors.etat && (
                    <span className="text-red-600">*Champ obligatoire</span>
                )}
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
