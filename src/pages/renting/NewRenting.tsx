import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { MdOutlineCarRental } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useFetch from "../../api/hooks/useFetch";
import NewRentingForm from "../../component/Form/RentingForm/NewRentingForm";
import { TitleWithReturn } from "../../component/UI";
import Layout from "../../component/UI/Layout/Layout";
import {
    CreateRentingPayload,
    rentingService,
} from "../../services/rentingService";
import { redirect } from "../../utils/redirect";

const NewRenting: React.FC<unknown> = () => {
    const { data: vehicles } = useFetch("/vehicles");
    const { data: customers } = useFetch("/customers");

   
    return (
        <Layout>
            <div>
                <TitleWithReturn
                    title="Louer un véhicule"
                    path="/rentings"
                    icon={<MdOutlineCarRental />}
                />
                <div>
                    <NewRentingForm
                        vehicles={vehicles}
                        customers={customers}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default NewRenting;
