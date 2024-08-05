import { Chest } from "@/Infos/types/interfaces";

const TEST_CHEST_1: Chest = {
    type: "chest",
    name: "Test Chest",
    bonusHp: 1,
    bonusArmor: 1,
    bonusAttackDmg: 1,
    bonusAttackSpd: 1
}
const TEST_CHEST_2: Chest = {
    type: "chest",
    name: "Test Chest 2",
    bonusHp: 2,
    bonusArmor: 2,
    bonusAttackDmg: 2,
    bonusAttackSpd: 2
}
const TEST_CHEST_3: Chest = {
    type: "chest",
    name: "Test Chest 3",
    bonusHp: 3,
    bonusArmor: 3,
    bonusAttackDmg: 3,
    bonusAttackSpd: 3
}

export const chests: Chest[] = [TEST_CHEST_1, TEST_CHEST_2, TEST_CHEST_3]

