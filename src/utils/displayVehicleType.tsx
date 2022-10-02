import { FiTruck } from "react-icons/fi";
import { HiOutlineTruck } from "react-icons/hi";
import { IoCarOutline } from "react-icons/io5";
import { RiMotorbikeFill } from "react-icons/ri";

const displayType = (type: string) => {
    switch (type) {
        case "car":
            return <IoCarOutline className="h-full" />;
        case "truck":
            return <FiTruck className="h-full" />;
        case "utility":
            return <HiOutlineTruck className="h-full" />;
        case "bike":
            return <RiMotorbikeFill className="h-full" />;
        default:
            break;
    }
};

const displayTypeName = (type: string) => {
    switch (type) {
        case "car":
            return "Voiture";
        case "truck":
            return "Camion";
        case "utility":
            return "Utilitaire";
        case "bike":
            return "Moto";
        default:
            break;
    }
};

export { displayType, displayTypeName };
