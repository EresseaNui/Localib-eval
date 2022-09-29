import { AxiosResponse } from "axios";
import { api } from "../utils/dryConfig";
import { VehiculeEtat, VehiculeType } from "../utils/enum/vehiculeEnum";

export interface NewVehiculePayload {
    type: VehiculeType;
    brand: string;
    model: string;
    registration_number: string;
    vehicle_state: VehiculeEtat;
    renting_price: number;
}

export interface UpdateVehiculePayload {
    registration_number?: string;
    vehicle_state?: VehiculeEtat;
    renting_price?: number;
}

class VehiculeService {
   /* Une fonction qui crée un nouveau véhicule dans la base de données. */
    createNewVehicule = (
        payload: NewVehiculePayload
    ): Promise<void | AxiosResponse<any, any>> => {
        return api
            .post(`/vehicles`, payload)
            .catch((err) => console.error(err));
    };

    /* Une fonction qui met à jour un véhicule dans la base de données. */
    updateVehicule = (
        id: string,
        payload: UpdateVehiculePayload
    ): Promise<void | AxiosResponse<any, any>> => {
        return api
            .patch(`/vehicles/${id}`, payload)
            .catch((err) => console.error(err));
    };

    /* Une fonction qui supprime un véhicule de la base de données. */
    delete = (id: string): Promise<void | AxiosResponse<any, any>> => {
        return api.delete(`/vehicles/${id}`).catch((err) => console.error(err));
    };
}

export const vehiculeService = Object.freeze(new VehiculeService());
