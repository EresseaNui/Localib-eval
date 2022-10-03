import React, { useRef } from "react";
import {
    UpdateVehiculePayload,
    vehiculeService,
} from "../../../services/vehiculeService";
import { useForm } from "react-hook-form";
import { redirect } from "../../../utils/redirect";
import { Label, SelectField, TextField } from "../UI";
import { Button, Card } from "../../UI";
import IVehicule from "../../../types/vehicule.type";

export interface UpdateVehiculeFormProps {
    vehicle: IVehicule;
    reFetch: () => Promise<void>;
}

const UpdateVehiculeForm: React.FC<UpdateVehiculeFormProps> = ({
    vehicle,
    reFetch,
}) => {
    const { handleSubmit, register } = useForm<UpdateVehiculePayload>({});
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
            ...vehicle,
            registration_number:
                formValues.registration_number || vehicle.registration_number,
            vehicle_state: formValues.vehicle_state || vehicle.vehicle_state,
            renting_price: formValues.renting_price || vehicle.renting_price,
        };
        await vehiculeService.updateVehicule(vehicle.id as string, payload);
        reFetch();
        redirect("/vehicules");
    };

    return (
        <div className="space-y-10">
            <Card title={`Détails de ${vehicle.brand} ${vehicle.model}`}>
                <div>
                    <p>
                        <span className="font-semibold">Marque :&nbsp;</span>
                        {vehicle.brand}
                    </p>
                    <p>
                        <span className="font-semibold">Modèle :&nbsp;</span>
                        {vehicle.model}
                    </p>
                    <p>
                        <span className="font-semibold">
                            Immatriculation :&nbsp;
                        </span>
                        {vehicle.registration_number}
                    </p>
                    <p>
                        <span className="font-semibold">
                            Etat du véhicule :&nbsp;
                        </span>
                        {vehicle.vehicle_state}
                    </p>
                    <p>
                        <span className="font-semibold">
                            Prix en €/jour :&nbsp;
                        </span>
                        {vehicle.renting_price} €
                    </p>
                </div>
            </Card>
            <div className="flex justify-center">
                <form
                    onSubmit={handleSubmit(onSubmitUpdateVehicule)}
                    className="flex flex-col items-center w-2/3 p-10 space-y-4 border-2 rounded-lg shadow-md border-blue-primary"
                >
                    <TextField
                        label="Immatriculation :"
                        className="border border-blue-primary"
                        {...register("registration_number")}
                        defaultValue={vehicle.registration_number}
                        placeholder={vehicle.registration_number}
                    />

                    <SelectField
                        array={optionEtat}
                        {...register("vehicle_state")}
                        label="Etat :"
                        defaultValue={vehicle.vehicle_state}
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
                            defaultValue={vehicle.renting_price}
                            placeholder={String(vehicle.renting_price)}
                        />
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
