import React from "react";
import { CreateRentingPayload } from "../../../services/rentingService";
import { UseFormRegister } from "react-hook-form";
import { SelectField } from "../UI";
import IVehicule from "../../../types/vehicule.type";
import ICustomer from "../../../types/customer.type";
import { Button } from "../../UI";

export interface RentingInformationProps {
    customers: ICustomer[];
    vehicles: IVehicule[];
    price?: number;
    register: UseFormRegister<CreateRentingPayload>;
    nbDate: number;
}

const RentingInformation: React.FC<RentingInformationProps> = ({
    customers,
    vehicles,
    price,
    register,
}) => {
    const optionsVehicle = vehicles.map((vehicle: IVehicule) => ({
        value: vehicle.id,
        label: `${vehicle.model} ${vehicle.brand}`,
    }));

    const optionsCustomer = customers.map((customer: ICustomer) => ({
        value: customer.id,
        label: `${customer.lastname} ${customer.firstname}`,
    }));

    return (
        <div>
            <div>
                <SelectField
                    array={optionsCustomer}
                    {...register("customer_id")}
                    label="Client :"
                    defaultValue={"Selectionner un client"}
                />

                <SelectField
                    array={optionsVehicle}
                    {...register("vehicle_id")}
                    label="Vehicule :"
                    defaultValue={"Selectionner un véhicule"}
                />
            </div>

            {price && price > 0 ? <p>Prix : {price} €</p> : ""}

            <Button type="submit" variant="outlined" color="white">
                Louer le Véhicule
            </Button>
        </div>
    );
};

export default RentingInformation;
