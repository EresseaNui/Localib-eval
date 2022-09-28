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
    createNewCustomer = (
        payload: CustomerPayload
    ): Promise<void | AxiosResponse<any, any>> => {
        return api
            .post(`/customers`, payload)
            .catch((err) => console.error(err));
    };

    updateCustomer = (
        id: string,
        payload: CustomerPayload
    ): Promise<void | AxiosResponse<any, any>> => {
        return api
            .patch(`customers/${id}`, payload)
            .catch((err) => console.error(err));
    };

    delete = (id: string): Promise<void | AxiosResponse<any, any>> => {
        return api
            .delete(`/customers/${id}`)
            .catch((err) => console.error(err));
    };
}
export const customerService = Object.freeze(new CustomerService());
