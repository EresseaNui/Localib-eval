import {
    eachDayOfInterval,
    formatDistance,
    intervalToDuration,
} from "date-fns";
import React, { Key, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
    CreateRentingPayload,
    rentingService,
} from "../../../services/rentingService";
import { vehiculeService } from "../../../services/vehiculeService";
import { getDaysBetweenDates } from "../../../utils/convertDateToPeriod";
import { api } from "../../../utils/dryConfig";
import { SelectField } from "../UI";
import useFetch from "../../../api/hooks/useFetch";
import IVehicule from "../../../types/vehicule.type";
export interface NewRentingFormProps {
    onSubmit: (value: CreateRentingPayload) => void;
}

const NewRentingForm: React.FC<NewRentingFormProps> = ({
    onSubmit = () => {},
}) => {
    const { data: vehicles } = useFetch("/vehicles");

    const optionsVehicle = vehicles.map((vehicle: IVehicule) => ({
        value: vehicle.id,
        label: `${vehicle.model} ${vehicle.brand}`,
    }));

    const { handleSubmit, register, watch, setValue } =
        useForm<CreateRentingPayload>();
    const ref = useRef(null);
    const [pricing, setPricing] = useState<number>(80);

    const watchStartDate = watch("start_date");
    const watchEndDate = watch("end_date");
    const watchVehicle = watch("vehicle_id");

    const isSelectedVehicle = (vehicle: IVehicule) => {
        return vehicle.id === watchVehicle;
    };

    useEffect(() => {
        const selectedVehicle = vehicles.find(isSelectedVehicle);
        console.log(selectedVehicle);

        if (watchStartDate && watchEndDate) {
            const interval = getDaysBetweenDates(
                new Date(watchStartDate),
                new Date(watchEndDate)
            );
            setPricing(interval * 80);
            setValue("pricing", pricing);
        }
    }, [watchStartDate, watchEndDate, setPricing, pricing, watchVehicle]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Date de Début:</label>
                <input
                    type="date"
                    {...register("start_date", { required: true })}
                />
            </div>
            <div>
                <label>Date de Fin:</label>
                <input
                    type="date"
                    {...register("end_date", { required: true })}
                />
            </div>
            <SelectField
                array={optionsVehicle}
                {...register("vehicle_id")}
                label="Vehicule :"
                defaultValue={optionsVehicle[0]}
            />
            {watchStartDate && watchEndDate && (
                <div>
                    <p>Prix : {pricing} €</p>
                </div>
            )}
            <button type="submit" className="px-4 py-2 border">
                Louer le véhicule
            </button>
        </form>
    );
};

export default NewRentingForm;
