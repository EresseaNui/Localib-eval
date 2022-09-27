import { AxiosResponse } from "axios";
import { api } from "../utils/dryConfig";
import { VehiculeEtat, VehiculeType } from "../utils/enum/vehiculeEnum";

export interface RegisterPayload {
    type: VehiculeType;
    marque: string;
    modele: string;
    immatriculation: string;
    etat: VehiculeEtat;
    louer: boolean;
}

class VehiculeService {
    createNewVehicule = (
        payload: RegisterPayload
    ): Promise<void | AxiosResponse<any, any>> => {
        return api
            .post(`/vehicules`, payload)
            .catch((err) => console.error(err));
    };
}

export const vehiculeService = Object.freeze(new VehiculeService());
