import { Shoes } from "@/Infos/types/interfaces";

const TEST_SHOES_1: Shoes = {
    type: "shoes",
    name: "Test Shoes",
    bonusHp: 1,
    bonusArmor: 1,
    bonusAttackDmg: 1,
    bonusAttackSpd: 1
}
const TEST_SHOES_2: Shoes = {
    type: "shoes",
    name: "Test Shoes 2",
    bonusHp: 2,
    bonusArmor: 2,
    bonusAttackDmg: 2,
    bonusAttackSpd: 2
}
const TEST_SHOES_3: Shoes = {
    type: "shoes",
    name: "Test Shoes 3",
    bonusHp: 3,
    bonusArmor: 3,
    bonusAttackDmg: 3,
    bonusAttackSpd: 3
}

export const shoes: Shoes[] = [TEST_SHOES_1, TEST_SHOES_2, TEST_SHOES_3]

