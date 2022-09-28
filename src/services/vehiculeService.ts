import { AxiosResponse } from "axios";
import { api } from "../utils/dryConfig";
import { VehiculeEtat, VehiculeType } from "../utils/enum/vehiculeEnum";

export interface NewVehiculePayload {
    type: VehiculeType;
    brand: string;
    model: string;
    registration_number: string;
    vehicle_state: VehiculeEtat;
    disponibility: boolean;
}

export interface UpdateVehiculePayload {
    registration_number?: string;
    vehicle_state?: VehiculeEtat;
    disponibility?: boolean;
}

class VehiculeService {
    createNewVehicule = (
        payload: NewVehiculePayload
    ): Promise<void | AxiosResponse<any, any>> => {
        return api
            .post(`/vehicles`, payload)
            .catch((err) => console.error(err));
    };

    updateVehicule = (
        id: string,
        payload: UpdateVehiculePayload
    ): Promise<void | AxiosResponse<any, any>> => {
        return api
            .patch(`/vehicles/${id}`, payload)
            .catch((err) => console.error(err));
    };

    delete = (id: string): Promise<void | AxiosResponse<any, any>> => {
        return api.delete(`/vehicles/${id}`).catch((err) => console.error(err));
    };
}

export const vehiculeService = Object.freeze(new VehiculeService());
