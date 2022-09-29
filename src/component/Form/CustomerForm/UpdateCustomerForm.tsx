import React from "react";

import clsx from "clsx";
import useFetch from "../../../api/hooks/useFetch";
import {
    CustomerPayload,
    customerService,
} from "../../../services/customerService";
import { useForm } from "react-hook-form";
import { redirect } from "../../../utils/redirect";
import { formattedDate } from "../../../utils/formatDate";
import { TextField } from "../UI";
import ICustomer from "../../../types/customer.type";

export interface UpdateCustomerFormProps {
    id: string;
    customer: ICustomer;
    reFetch: () => void;
}

const UpdateCustomerForm: React.FC<UpdateCustomerFormProps> = ({
    id,
    customer,
    reFetch,
}) => {
    const { handleSubmit, register } = useForm<CustomerPayload>();

    const onSubmitUpdateCustomer = async (
        formValues: CustomerPayload
    ): Promise<void> => {
        const payload = {
            lastname: formValues.lastname,
            firstname: formValues.firstname,
            mail: formValues.mail,
            phone: formValues.phone,
            birthdate: formValues.birthdate,
        };
        await customerService.updateCustomer(id as string, payload);
        reFetch();
        redirect("/customers");
    };
    return (
        <div>
            <div>
                <p>
                    Detail de {customer.lastname}&nbsp;
                    {customer.firstname}
                </p>
            </div>
            <div>
                <p>{customer.mail}</p>
                <p>{customer.phone}</p>
                <p>{formattedDate(new Date(customer.birthdate), "/")}</p>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmitUpdateCustomer)}>
                    <TextField
                        label="Nom :"
                        className="border border-blue-primary"
                        {...register("lastname")}
                        defaultValue={customer.lastname}
                    />
                    <TextField
                        label="Prenom :"
                        className="border border-blue-primary"
                        {...register("firstname")}
                        defaultValue={customer.firstname}
                    />
                    <TextField
                        label="Email :"
                        className="border border-blue-primary"
                        {...register("mail")}
                        defaultValue={customer.mail}
                    />
                    <TextField
                        label="Telephone :"
                        className="border border-blue-primary"
                        {...register("phone")}
                        defaultValue={customer.phone}
                    />

                    <div>
                        <label>Date de naissance:</label>
                        <input type="date" {...register("birthdate")} />
                    </div>
                    <button type="submit" className="px-4 py-2 border">
                        modifier client
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCustomerForm;
