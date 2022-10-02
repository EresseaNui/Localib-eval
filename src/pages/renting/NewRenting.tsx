import React from "react";
import { MdOutlineCarRental } from "react-icons/md";
import useFetch from "../../api/hooks/useFetch";
import NewRentingForm from "../../component/Form/RentingForm/NewRentingForm";
import { TitleWithReturn } from "../../component/UI";
import Layout from "../../component/UI/Layout/Layout";

const NewRenting: React.FC<unknown> = () => {
    const { data: vehicles } = useFetch("/vehicles");
    const { data: customers } = useFetch("/customers");

    return (
        <Layout>
            <div className="space-y-10">
                <TitleWithReturn
                    title="Louer un véhicule"
                    path="/rentings"
                    icon={<MdOutlineCarRental />}
                />
                <div className="flex justify-center">
                    <NewRentingForm vehicles={vehicles} customers={customers} />
                </div>
            </div>
        </Layout>
    );
};

export default NewRenting;
