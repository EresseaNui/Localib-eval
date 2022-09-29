import { AxiosResponse } from "axios";
import { api } from "../utils/dryConfig";

export interface CreateRentingPayload {
    start_date: Date;
    end_date: Date;
    pricing: number;
    vehicle_id: string;
    customer_id: string;
}

class RentingService {
    delete = (id: string): Promise<void | AxiosResponse<any, any>> => {
        return api.delete(`/rentings/${id}`).catch((err) => console.error(err));
    };
}

export const rentingService = Object.freeze(new RentingService());
