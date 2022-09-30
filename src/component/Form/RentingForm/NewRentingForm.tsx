import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
    CreateRentingPayload,
    rentingService,
} from "../../../services/rentingService";
import IVehicule from "../../../types/vehicule.type";
import ICustomer from "../../../types/customer.type";
import RentingPeriod from "./RentingPeriod";
import RentingInformation from "./RentingInformation";
import { vehiculeService } from "../../../services/vehiculeService";
import { redirect } from "../../../utils/redirect";

export interface NewRentingFormProps {
    vehicles: IVehicule[];
    customers: ICustomer[];
}

const NewRentingForm: React.FC<NewRentingFormProps> = ({
    vehicles,
    customers,
}) => {
    const { handleSubmit, register, watch } = useForm<CreateRentingPayload>();
    const ref = useRef(null);

    const [pricing, setPricing] = useState<number>(0);

    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [showRentingInformations, setShowRentingInformations] =
        useState<boolean>(false);

    const [nbDate, setNbDate] = useState<number>(0);

    const [aviableVehicle, setAviableVehicle] = useState<IVehicule[]>([]);

    useEffect(() => {
        aviabilityVehicle({ start_date: startDate, end_date: endDate });
    }, [startDate, endDate]);

    const aviabilityVehicle = async (payload: {
        start_date: string;
        end_date: string;
    }): Promise<void> => {
        if (startDate && endDate) {
            vehiculeService
                .getAviableVehicle(payload)
                .then((data) => setAviableVehicle(data));
        }
    };

    const watchVehicle = watch("vehicle_id");

    const isSelectedVehicle = (vehicle: IVehicule) => {
        return vehicle.id === watchVehicle;
    };

    useEffect(() => {
        const selectVehicle: IVehicule | undefined =
            vehicles.find(isSelectedVehicle);
        if (selectVehicle) {
            setPricing(selectVehicle.renting_price * nbDate);
        }
    }, [watchVehicle]);

    const onSubmitNewReporting = async (
        formValues: CreateRentingPayload
    ): Promise<void> => {
        console.log(formValues);
        const payload = {
            pricing: pricing,
            start_date: formValues.start_date,
            end_date: formValues.end_date,
            vehicle_id: formValues.vehicle_id,
            customer_id: formValues.customer_id,
        };

        await rentingService.createNewRenting(payload);
        redirect("/rentings");
    };

    return (
        <form onSubmit={handleSubmit(onSubmitNewReporting)}>
            <RentingPeriod
                register={register}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                show={showRentingInformations}
                setShow={setShowRentingInformations}
                setNbDate={setNbDate}
            />
            {showRentingInformations && (
                <RentingInformation
                    register={register}
                    customers={customers}
                    vehicles={aviableVehicle}
                    price={pricing}
                    nbDate={nbDate}
                />
            )}
        </form>
    );
};

export default NewRentingForm;
