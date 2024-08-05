import { Equipment } from "../../types/interfaces";
import { helmets } from "./helmets";
import { chests } from "./chests";
import { pants } from "./pants";
import { shields } from "./shields";
import { shoes } from "./shoes";
import { weapons } from "./weapons";

export const equipments = { helmets, chests, pants, shields, shoes, weapons }

export const testFullEquipments: Equipment = {
    helmet: equipments.helmets[2],
    chest: equipments.chests[2],
    pants: equipments.pants[2],
    shoes: equipments.shoes[2],
    weapon: equipments.weapons[2],
    shield: equipments.shields[2],
}