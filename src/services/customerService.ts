import { AxiosResponse } from "axios";
import { api } from "../utils/dryConfig";

export interface CustomerPayload {
    lastname: string;
    firstname: string;
    mail: string;
    phone: string;
    birthdate: Date;
}

class CustomerService {
    /* Une fonction qui crée un nouveau client. */
    createNewCustomer = (
        payload: CustomerPayload
    ): Promise<void | AxiosResponse<any, any>> => {
        return api
            .post(`/customers`, payload)
            .catch((err) => console.error(err));
    };

    /* Une fonction qui met à jour un client par identifiant. */
    updateCustomer = (
        id: string,
        payload: CustomerPayload
    ): Promise<void | AxiosResponse<any, any>> => {
        return api
            .patch(`customers/${id}`, payload)
            .catch((err) => console.error(err));
    };

    /* Une fonction qui supprime un client par identifiant. */
    delete = (id: string): Promise<void | AxiosResponse<any, any>> => {
        return api
            .delete(`/customers/${id}`)
            .catch((err) => console.error(err));
    };
}
export const customerService = Object.freeze(new CustomerService());
