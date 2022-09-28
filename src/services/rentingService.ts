import { AxiosResponse } from "axios";
import { api } from "../utils/dryConfig";

class RentingService {
    delete = (id: string): Promise<void | AxiosResponse<any, any>> => {
        return api.delete(`/rentings/${id}`).catch((err) => console.error(err));
    };
}

export const rentingService = Object.freeze(new RentingService());
