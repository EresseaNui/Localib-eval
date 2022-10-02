import React from "react";

import {
    CustomerPayload,
    customerService,
} from "../../../services/customerService";
import { useForm } from "react-hook-form";
import { redirect } from "../../../utils/redirect";
import { formattedDate } from "../../../utils/formatDate";
import { Label, TextField } from "../UI";
import ICustomer from "../../../types/customer.type";
import { Button, Card } from "../../UI";

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
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<CustomerPayload>();

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
        <div className="space-y-10">
            <Card
                title={`Détails de ${customer.firstname} ${customer.lastname}`}
            >
                <p>
                    <span className="font-semibold">
                        Date de Naissance :&nbsp;
                    </span>
                    {formattedDate(new Date(customer.birthdate), "/")}
                </p>
                <p>
                    <span className="font-semibold">Email :&nbsp;</span>
                    {customer.mail}
                </p>
                <p>
                    <span className="font-semibold">Telephone :&nbsp;</span>
                    {customer.phone}
                </p>
            </Card>

            <div className="flex justify-center">
                <form
                    onSubmit={handleSubmit(onSubmitUpdateCustomer)}
                    className="flex flex-col items-center w-2/3 p-10 space-y-4 border-2 rounded-lg shadow-md border-blue-primary"
                >
                    <TextField
                        label="Nom :"
                        className="border border-blue-primary"
                        {...register("lastname")}
                        defaultValue={customer.lastname}
                        error={errors.lastname}
                    />
                    <TextField
                        label="Prenom :"
                        className="border border-blue-primary"
                        {...register("firstname")}
                        defaultValue={customer.firstname}
                        error={errors.firstname}
                    />
                    <TextField
                        label="Email :"
                        className="border border-blue-primary"
                        {...register("mail")}
                        defaultValue={customer.mail}
                        error={errors.mail}
                    />
                    <TextField
                        label="Telephone :"
                        className="border border-blue-primary"
                        {...register("phone")}
                        defaultValue={customer.phone}
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
                            {...register("birthdate")}
                            className="w-full px-4 py-2 border border-gray-900 rounded-full"
                        />
                    </div>
                    <Button type="submit" variant="outlined" color="white">
                        Modifier le Client
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCustomerForm;
