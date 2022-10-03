import React, { Key, useState } from "react";

import IRenting from "../../types/renting.type";
import { Disclosure } from "@headlessui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { format } from "date-fns";
import { Button } from "../UI";
import RentingConfirmDeleteModal from "../Modals/RentingConfirmDeleteModal";

export interface RentingTableProps {
    rentings: IRenting[];
}

const RentingTable: React.FC<RentingTableProps> = ({ rentings }) => {
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [renting, setRenting] = useState<IRenting>();

    return (
        <div>
            {rentings.map((renting: IRenting, key: Key) => (
                <Disclosure key={key}>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="grid w-full grid-cols-6 py-2 text-gray-900 border rounded-full border-blue-primary md:grid-cols-12 hover:bg-blue-200">
                                <div className="col-span-5 row-start-1 md:col-span-4">
                                    <p>
                                        Début :&nbsp;
                                        {String(
                                            format(
                                                new Date(renting.start_date),
                                                "dd/MM/yyyy"
                                            )
                                        )}
                                    </p>
                                </div>
                                <div className="col-span-5 row-start-2 md:row-start-1 md:col-span-4">
                                    <p>
                                        Fin :&nbsp;
                                        {String(
                                            format(
                                                new Date(renting.end_date),
                                                "dd/MM/yyyy"
                                            )
                                        )}
                                    </p>
                                </div>
                                <div className="col-span-5 row-start-3 md:col-span-3 md:row-start-1">
                                    <p>Tarif :&nbsp;{renting.pricing} €</p>
                                </div>
                                <div className="col-span-5 row-start-4 md:row-start-2">
                                    <p>
                                        Par :&nbsp;
                                        {renting.customer.firstname}&nbsp;
                                        {renting.customer.lastname}
                                    </p>
                                </div>
                                <div className="col-span-5 row-start-5 md:row-start-2 ">
                                    <p>
                                        Pour :&nbsp;
                                        {renting.vehicle.brand}&nbsp;
                                        {renting.vehicle.model}
                                    </p>
                                </div>
                                <div className="flex items-center justify-end h-full col-span-1 col-start-12 row-span-5 mr-2 md:row-span-2">
                                    {open ? <BsChevronUp /> : <BsChevronDown />}
                                </div>
                            </Disclosure.Button>
                            <Disclosure.Panel className="py-5 mx-5 font-semibold bg-blue-100">
                                <div className="flex flex-col items-center px-5 space-y-2 md:flex-row md:justify-around md:px-0 md:space-y-0">
                                    <NavLink
                                        to={`/renting/${renting.id}`}
                                        className="flex items-center justify-center w-full gap-4 px-4 py-2 text-center text-white border rounded-full bg-blue-primary hover:bg-blue-700 md:w-fit"
                                    >
                                        <AiOutlineEye />
                                        Voir
                                    </NavLink>
                                    <Button
                                        icon="trash"
                                        variant="basic"
                                        color="red"
                                        onClick={() => {
                                            setRenting(renting);
                                            setShowDeleteModal(true);
                                        }}
                                    >
                                        Supprimer
                                    </Button>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
            {showDeleteModal && renting && (
                <RentingConfirmDeleteModal
                    renting={renting}
                    open={showDeleteModal}
                    setOpen={setShowDeleteModal}
                />
            )}
        </div>
    );
};

export default RentingTable;
