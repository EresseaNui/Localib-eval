import { AxiosResponse } from "axios";
import { api } from "../utils/dryConfig";
import { VehiculeEtat, VehiculeType } from "../utils/enum/vehiculeEnum";

export interface NewVehiculePayload {
    type: VehiculeType;
    marque: string;
    modele: string;
    immatriculation: string;
    etat: VehiculeEtat;
    louer: boolean;
}

export interface UpdateVehiculePayload {
    immatriculation: string;
    etat: VehiculeEtat;
    louer: boolean;
}

class VehiculeService {
    createNewVehicule = (
        payload: NewVehiculePayload
    ): Promise<void | AxiosResponse<any, any>> => {
        return api
            .post(`/vehicules`, payload)
            .catch((err) => console.error(err));
    };

    updateVehicule = (
        id: string,
        payload: UpdateVehiculePayload
    ): Promise<void | AxiosResponse<any, any>> => {
        return api
            .patch(`/vehicules/${id}`, payload)
            .catch((err) => console.error(err));
    };

    delete = (id: string): Promise<void | AxiosResponse<any, any>> => {
        return api
            .delete(`/vehicules/${id}`)
            .catch((err) => console.error(err));
    };
}

export const vehiculeService = Object.freeze(new VehiculeService());
