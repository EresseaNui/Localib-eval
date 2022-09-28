import { AxiosResponse } from "axios";
import { api } from "../utils/dryConfig";

export interface CustomerPayload {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    date_naissance: Date;
}

class CustomerService {
    createNewCustomer = (
        payload: CustomerPayload
    ): Promise<void | AxiosResponse<any, any>> => {
        return api.post(`/clients`, payload).catch((err) => console.error(err));
    };

    updateCustomer = (
        id: string,
        payload: CustomerPayload
    ): Promise<void | AxiosResponse<any, any>> => {
        return api
            .patch(`clients/${id}`, payload)
            .catch((err) => console.error(err));
    };

    delete = (id: string): Promise<void | AxiosResponse<any, any>> => {
        return api.delete(`/clients/${id}`).catch((err) => console.error(err));
    };
}
export const customerService = Object.freeze(new CustomerService());
