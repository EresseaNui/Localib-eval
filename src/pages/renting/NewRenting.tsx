import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import NewRentingForm from "../../component/Form/RentingForm/NewRentingForm";
import Layout from "../../component/UI/Layout/Layout";
import { CreateRentingPayload } from "../../services/rentingService";

const NewRenting: React.FC<unknown> = () => {
    const onSubmitNewReporting = async (
        formValues: CreateRentingPayload
    ): Promise<void> => {
        console.log(formValues);
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
                    <NewRentingForm onSubmit={onSubmitNewReporting} />
                </div>
            </div>
        </Layout>
    );
};

export default NewRenting;
