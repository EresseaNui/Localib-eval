import React from "react";
import { useForm } from "react-hook-form";

import { NewVehiculePayload } from "../../../services/vehiculeService";

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
                <label>Marque : </label>
                <input
                    type="text"
                    {...register("marque", { required: true })}
                    className="border border-black"
                />
                {errors.marque && (
                    <span className="text-red-600">*Champ obligatoire</span>
                )}
            </div>
            <div>
                <label>Modèle : </label>
                <input
                    type="text"
                    {...register("modele", { required: true })}
                    className="border border-black"
                />
                {errors.modele && (
                    <span className="text-red-600">*Champ obligatoire</span>
                )}
            </div>
            <div>
                <label>immatriculation : </label>
                <input
                    type="text"
                    {...register("immatriculation", {
                        required: true,
                    })}
                    className="border border-black"
                />
                {errors.immatriculation && (
                    <span className="text-red-600">*Champ obligatoire</span>
                )}
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
