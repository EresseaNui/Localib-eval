import React, { useRef } from "react";

import { CustomerPayload } from "../../../services/customerService";
import { useForm } from "react-hook-form";
import { Label, TextField } from "../UI";
import { Button } from "../../UI";

export interface NewCustomerFormProps {
    onSubmit: (value: CustomerPayload) => void;
}

const NewCustomerForm: React.FC<NewCustomerFormProps> = ({
    onSubmit = () => {},
}) => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<CustomerPayload>();
    const ref = useRef(null);
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center w-2/3 p-10 space-y-4 border-2 rounded-lg shadow-md border-blue-primary"
        >
            <TextField
                label="Nom :"
                {...register("lastname", { required: true })}
                placeholder="Nom"
                error={errors.lastname}
            />
            <TextField
                label="Prenom :"
                {...register("firstname", { required: true })}
                placeholder="Prenom"
                error={errors.firstname}
            />
            <TextField
                label="Email :"
                {...register("mail", { required: true })}
                placeholder="Email"
                error={errors.mail}
            />
            <TextField
                label="Telephone :"
                {...register("phone", { required: true })}
                placeholder="Telephone"
                error={errors.phone}
            />

            <div className="w-full">
                <Label
                    name="birthdate"
                    label="Date de naissance : "
                    className="font-semibold"
                />
                <input
                    type="date"
                    {...register("birthdate", { required: true })}
                    className="w-full px-4 py-2 border border-gray-900 rounded-full"
                />
            </div>

            <Button
                type="submit"
                variant="outlined"
                color="white"
                className="justify-center w-1/2"
            >
                Ajouter le Client
            </Button>
        </form>
    );
};

export default NewCustomerForm;
