import {
    eachDayOfInterval,
    formatDistance,
    intervalToDuration,
} from "date-fns";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { CreateRentingPayload } from "../../../services/rentingService";

export interface NewRentingFormProps {
    onSubmit: (value: CreateRentingPayload) => void;
}

const NewRentingForm: React.FC<NewRentingFormProps> = ({
    onSubmit = () => {},
}) => {
    const { handleSubmit, register, watch } = useForm<CreateRentingPayload>();
    const ref = useRef(null);
    const [pricing, setPricing] = useState<number>(80);

    const watchStartDate = watch("start_date");
    const watchEndDate = watch("end_date");

    console.log("d", watchStartDate);
    console.log("e", watchEndDate);

    const convertMsToDays = (ms: number) => {
        const msInOneSecond = 1000;
        const secondsInOneMinute = 60;
        const minutesInOneHour = 60;
        const hoursInOneDay = 24;

        const minutesInOneDay = hoursInOneDay * minutesInOneHour;
        const secondsInOneDay = secondsInOneMinute * minutesInOneDay;
        const msInOneDay = msInOneSecond * secondsInOneDay;

        return Math.ceil(ms / msInOneDay);
    };

    const getDaysBetweenDates = (dateOne: Date, dateTwo: Date) => {
        let differenceInMs = dateTwo.getTime() - dateOne.getTime();

        if (differenceInMs < 0) {
            differenceInMs = dateOne.getTime() - dateTwo.getTime();
        }

        return convertMsToDays(differenceInMs);
    };

    useEffect(() => {
        if (watchStartDate && watchEndDate) {
            const interval = getDaysBetweenDates(
                new Date(watchStartDate),
                new Date(watchEndDate)
            );
            // setPricing(interval * 80);
        }
    }, [watchStartDate, watchEndDate]);

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
            {watchStartDate && watchEndDate && (
                <div>
                    {/* <input
                        type="number"
                        disabled
                        {...(register("pricing"), { value: pricing })}
                    /> */}
                </div>
            )}
            <button type="submit" className="px-4 py-2 border">
                Louer le véhicule
            </button>
        </form>
    );
};

export default NewRentingForm;
