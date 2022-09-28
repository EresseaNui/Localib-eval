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

export interface UpdateCustomerFormProps {
    id: string;
}

const UpdateCustomerForm: React.FC<UpdateCustomerFormProps> = ({ id }) => {
    const { data: customer, reFetch } = useFetch(`/clients/${id}`);
    const { handleSubmit, register } = useForm<CustomerPayload>();

    const onSubmitUpdateCustomer = async (
        formValues: CustomerPayload
    ): Promise<void> => {
        const payload = {
            nom: formValues.nom,
            prenom: formValues.prenom,
            email: formValues.email,
            telephone: formValues.telephone,
            date_naissance: formValues.date_naissance,
        };
        await customerService.updateCustomer(id as string, payload);
        reFetch();
        redirect("/customers");
    };
    return (
        <div>
            <div>
                <p>
                    Detail de {customer.nom}&nbsp;
                    {customer.prenom}
                </p>
            </div>
            <div>
                <p>{customer.email}</p>
                <p>{customer.telephone}</p>
                <p>{formattedDate(new Date(customer.date_naissance), "/")}</p>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmitUpdateCustomer)}>
                    <TextField
                        label="Nom :"
                        className="border border-blue-primary"
                        {...register("nom")}
                        defaultValue={customer.nom}
                    />
                    <TextField
                        label="Prenom :"
                        className="border border-blue-primary"
                        {...register("prenom")}
                        defaultValue={customer.prenom}
                    />
                    <TextField
                        label="Email :"
                        className="border border-blue-primary"
                        {...register("email")}
                        defaultValue={customer.email}
                    />
                    <TextField
                        label="Telephone :"
                        className="border border-blue-primary"
                        {...register("telephone")}
                        defaultValue={customer.telephone}
                    />

                    <div>
                        <label>Date de naissance:</label>
                        <input
                            type="date"
                            {...register("date_naissance")}
                        />
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
