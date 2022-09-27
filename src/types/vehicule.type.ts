import { VehiculeEtat, VehiculeType } from "../utils/enum/vehiculeEnum";

export default interface IVehicule {
    id: string;
    modele: string;
    marque: string;
    louer: boolean;
    etat: VehiculeEtat;
    type: VehiculeType;
    immatriculation: string;
}
