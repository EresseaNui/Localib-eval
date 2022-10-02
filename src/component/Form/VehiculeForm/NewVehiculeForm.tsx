import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import { NewVehiculePayload } from "../../../services/vehiculeService";
import { Button } from "../../UI";
import { Label, SelectField, TextField } from "../UI";

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
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center w-2/3 p-10 space-y-4 border-2 rounded-lg shadow-md border-blue-primary"
        >
            <SelectField
                array={optionsType}
                {...register("type")}
                label="Type :"
                error={errors.type}
            />

            <TextField
                label="Marque :"
                className="border border-blue-primary"
                {...register("brand", { required: true })}
                error={errors.brand}
                placeholder="Marque"
            />

            <TextField
                label="Modèle :"
                className="border border-blue-primary"
                {...register("model", { required: true })}
                error={errors.model}
                placeholder="Modèle"
            />

            <TextField
                label="Immatriculation :"
                className="border border-blue-primary"
                {...register("registration_number", { required: true })}
                error={errors.registration_number}
                placeholder="Immatriculation"
            />

            <SelectField
                array={optionEtat}
                {...register("vehicle_state")}
                label="Etat :"
                error={errors.vehicle_state}
            />

            <div className="w-full">
                <Label
                    name="renting_price"
                    label="Prix de location en €/jour"
                    className="font-semibold"
                />
                <input
                    type="number"
                    {...register("renting_price")}
                    className="w-full px-4 py-2 border border-black rounded-full"
                    placeholder="Prix de location"
                />
            </div>
            <Button type="submit" variant="outlined" color="white">
                Ajouter le véhicule voiture
            </Button>
        </form>
    );
};

export default NewVehiculeForm;
