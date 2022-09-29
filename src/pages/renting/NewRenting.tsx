import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import useFetch from "../../api/hooks/useFetch";
import NewRentingForm from "../../component/Form/RentingForm/NewRentingForm";
import Layout from "../../component/UI/Layout/Layout";
import {
    CreateRentingPayload,
    rentingService,
} from "../../services/rentingService";
import { redirect } from "../../utils/redirect";

const NewRenting: React.FC<unknown> = () => {
    const { data: vehicles } = useFetch("/vehicles");
    const { data: customers } = useFetch("/customers");

    const onSubmitNewReporting = async (
        formValues: CreateRentingPayload
    ): Promise<void> => {
        await rentingService.createNewRenting(formValues);
        redirect("/rentings");
    };
    return (
        <Layout>
            <div>
                <div>
                    <NavLink
                        to="/rentings"
                        className="flex items-center space-x-1"
                    >
                        <HiOutlineArrowNarrowLeft className="mt-1" />
                        <p>retour</p>
                    </NavLink>
                </div>
                <div>Louer un véhicule</div>
                <div>
                    <NewRentingForm
                        onSubmit={onSubmitNewReporting}
                        vehicles={vehicles}
                        customers={customers}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default NewRenting;
