import React, { useRef } from "react";

import clsx from "clsx";
import { CustomerPayload } from "../../../services/customerService";
import { useForm } from "react-hook-form";
import { TextField } from "../UI";

export interface NewCustomerFormProps {
    onSubmit: (value: CustomerPayload) => void;
}

const NewCustomerForm: React.FC<NewCustomerFormProps> = ({
    onSubmit = () => {},
}) => {
    const { handleSubmit, register } = useForm<CustomerPayload>();
    const ref = useRef(null);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="Nom :"
                className="border border-blue-primary"
                {...register("nom", { required: true })}
            />
            <TextField
                label="Prenom :"
                className="border border-blue-primary"
                {...register("prenom", { required: true })}
            />
            <TextField
                label="Email :"
                className="border border-blue-primary"
                {...register("email", { required: true })}
            />
            <TextField
                label="Telephone :"
                className="border border-blue-primary"
                {...register("telephone", { required: true })}
            />

            <div>
                <label>Date de naissance:</label>
                <input
                    type="date"
                    {...register("date_naissance", { required: true })}
                />
            </div>

            <button type="submit" className="px-4 py-2 border">
                Ajouter le client
            </button>
        </form>
    );
};

export default NewCustomerForm;
