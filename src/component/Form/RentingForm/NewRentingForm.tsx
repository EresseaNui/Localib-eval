import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { CreateRentingPayload } from "../../../services/rentingService";
import { getDaysBetweenDates } from "../../../utils/convertDateToPeriod";
import { SelectField } from "../UI";
import IVehicule from "../../../types/vehicule.type";
import ICustomer from "../../../types/customer.type";
export interface NewRentingFormProps {
    vehicles: IVehicule[];
    customers: ICustomer[];
    onSubmit: (value: CreateRentingPayload) => void;
}

const NewRentingForm: React.FC<NewRentingFormProps> = ({
    vehicles,
    customers,
    onSubmit = () => {},
}) => {
    const optionsVehicle = vehicles.map((vehicle: IVehicule) => ({
        value: vehicle.id,
        label: `${vehicle.model} ${vehicle.brand}`,
    }));

    const optionsCustomer = customers.map((customer: ICustomer) => ({
        value: customer.id,
        label: `${customer.lastname} ${customer.firstname}`,
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
        const selectedVehicle: IVehicule | undefined =
            vehicles.find(isSelectedVehicle);

        if (watchStartDate && watchEndDate && selectedVehicle) {
            const interval = getDaysBetweenDates(
                new Date(watchStartDate),
                new Date(watchEndDate)
            );
            setPricing(interval * selectedVehicle.renting_price);
            setValue("pricing", pricing);
        }
    }, [watchStartDate, watchEndDate, setPricing, pricing, watchVehicle]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <SelectField
                array={optionsCustomer}
                {...register("customer_id")}
                label="Client :"
                defaultValue={optionsCustomer[0]}
            />
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
