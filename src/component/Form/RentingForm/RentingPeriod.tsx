import React from "react";

import { UseFormRegister } from "react-hook-form";
import { CreateRentingPayload } from "../../../services/rentingService";
import { getDaysBetweenDates } from "../../../utils/convertDateToPeriod";
import { Button } from "../../UI";

export interface RentingPeriodProps {
    register: UseFormRegister<CreateRentingPayload>;
    startDate: string;
    setStartDate: React.Dispatch<React.SetStateAction<string>>;
    endDate: string;
    setEndDate: React.Dispatch<React.SetStateAction<string>>;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    setNbDate: React.Dispatch<React.SetStateAction<number>>;
}

const RentingPeriod: React.FC<RentingPeriodProps> = ({
    register,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    show,
    setShow,
    setNbDate,
}) => {
    const setInterval = (startDate: string, endDate: string): void => {
        const interval = getDaysBetweenDates(
            new Date(startDate),
            new Date(endDate)
        );
        setNbDate(interval);
    };
    return (
        <div>
            <div>
                <label>Date de Début:</label>
                <input
                    type="date"
                    {...register("start_date", { required: true })}
                    onChange={(e) => {
                        setStartDate(e.target.value);
                    }}
                />
            </div>
            <div>
                <label>Date de Fin:</label>
                <input
                    type="date"
                    {...register("end_date", { required: true })}
                    onChange={(e) => {
                        setEndDate(e.target.value);
                    }}
                />
            </div>

            {!show && (
                <Button
                    variant="outlined"
                    color="white"
                    onClick={() => {
                        setInterval(startDate, endDate);
                        setShow(true);
                    }}
                    disabled={!startDate && !endDate}
                >
                    Valider les dates de la Location
                </Button>
            )}
        </div>
    );
};

export default RentingPeriod;
