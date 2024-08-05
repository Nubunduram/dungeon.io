import { Pants } from "@/Infos/types/interfaces";

const TEST_PANTS_1: Pants = {
    type: "pants",
    name: "Test Pants",
    bonusHp: 1,
    bonusArmor: 1,
    bonusAttackDmg: 1,
    bonusAttackSpd: 1
}
const TEST_PANTS_2: Pants = {
    type: "pants",
    name: "Test Pants 2",
    bonusHp: 2,
    bonusArmor: 2,
    bonusAttackDmg: 2,
    bonusAttackSpd: 2
}
const TEST_PANTS_3: Pants = {
    type: "pants",
    name: "Test Pants 3",
    bonusHp: 3,
    bonusArmor: 3,
    bonusAttackDmg: 3,
    bonusAttackSpd: 3
}

export const pants: Pants[] = [TEST_PANTS_1, TEST_PANTS_2, TEST_PANTS_3]

