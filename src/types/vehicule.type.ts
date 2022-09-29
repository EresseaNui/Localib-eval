import { VehiculeEtat, VehiculeType } from "../utils/enum/vehiculeEnum";

export default interface IVehicule {
    id: string;
    model: string;
    brand: string;
    renting_price: number;
    vehicle_state: VehiculeEtat;
    type: VehiculeType;
    registration_number: string;
}
