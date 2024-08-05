import { Weapon } from "@/Infos/types/interfaces";

const TEST_WEAPON_1: Weapon = {
    type: "weapon",
    name: "Test Weapon",
    bonusHp: 1,
    bonusArmor: 1,
    bonusAttackDmg: 1,
    bonusAttackSpd: 1
}
const TEST_WEAPON_2: Weapon = {
    type: "weapon",
    name: "Test Weapon 2",
    bonusHp: 2,
    bonusArmor: 2,
    bonusAttackDmg: 2,
    bonusAttackSpd: 2
}
const TEST_WEAPON_3: Weapon = {
    type: "weapon",
    name: "Test Weapon 3",
    bonusHp: 3,
    bonusArmor: 3,
    bonusAttackDmg: 3,
    bonusAttackSpd: 3
}

export const weapons: Weapon[] = [TEST_WEAPON_1, TEST_WEAPON_2, TEST_WEAPON_3]

