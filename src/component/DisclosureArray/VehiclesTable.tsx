import React, { Key } from "react";

import clsx from "clsx";
import IVehicule from "../../types/vehicule.type";
import { vehiculeService } from "../../services/vehiculeService";
import { Disclosure } from "@headlessui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { BiPencil } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";

export interface VehiclesTableProps {
    vehicles: IVehicule[];
    reFetch: () => Promise<void>;
}

const VehiclesTable: React.FC<VehiclesTableProps> = ({ vehicles, reFetch }) => {
    const onClickDelete = async (id: string): Promise<void> => {
        await vehiculeService.delete(id);
        reFetch();
    };
    return (
        <div>
            <div className="grid w-full grid-cols-6 py-2 font-semibold text-center text-gray-900 rounded-full md:grid-cols-12">
                <div className="col-span-2">
                    <p>Type</p>
                </div>
                <div className="col-span-3">
                    <p>Marque</p>
                </div>
                <div className="col-span-3">
                    <p>Modèle</p>
                </div>
                <div className="col-span-2">
                    <p>Immtriculation</p>
                </div>
                <div className="col-span-1">
                    <p>Prix €/jour</p>
                </div>
            </div>
            {vehicles.map((vehicle: IVehicule, key: Key) => (
                <Disclosure key={key}>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="grid w-full grid-cols-6 py-2 text-gray-900 border rounded-full border-blue-primary md:grid-cols-12 hover:bg-blue-200">
                                <div className="col-span-2">
                                    <p>{vehicle.type}</p>
                                </div>
                                <div className="col-span-3">
                                    <p>{vehicle.brand}</p>
                                </div>
                                <div className="col-span-3">
                                    <p>{vehicle.model}</p>
                                </div>
                                <div className="col-span-2">
                                    <p>{vehicle.registration_number}</p>
                                </div>
                                <div className="col-span-1">
                                    <p>{vehicle.renting_price}</p>
                                </div>
                                <div className="flex items-center justify-end h-full col-span-1 mr-2">
                                    {open ? <BsChevronUp /> : <BsChevronDown />}
                                </div>
                            </Disclosure.Button>
                            <Disclosure.Panel className="py-5 mx-5 font-semibold bg-blue-100">
                                <div className="flex flex-col items-center px-5 space-y-2 md:flex-row md:justify-around md:px-0 md:space-y-0">
                                    <NavLink
                                        to={`/customer/${vehicle.id}/update`}
                                        className="flex items-center justify-center w-full gap-4 px-4 py-2 text-center text-white border rounded-full bg-blue-primary hover:bg-blue-700 md:w-fit"
                                    >
                                        <BiPencil />
                                        modifier
                                    </NavLink>
                                    <NavLink
                                        to={`/customer/${vehicle.id}`}
                                        className="flex items-center justify-center w-full gap-4 px-4 py-2 text-center text-white border rounded-full bg-blue-primary hover:bg-blue-700 md:w-fit"
                                    >
                                        <AiOutlineEye />
                                        Voir
                                    </NavLink>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            onClickDelete(vehicle.id)
                                        }
                                        className="flex items-center justify-center w-full gap-4 px-4 py-2 text-center text-white bg-red-500 border rounded-full hover:bg-red-600 md:w-fit"
                                    >
                                        <HiOutlineTrash />
                                        Supprimer
                                    </button>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    );
};

export default VehiclesTable;
