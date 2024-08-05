import { Helmet } from "@/Infos/types/interfaces";

const TEST_HELMET_1: Helmet = {
    type: "helmet",
    name: "Test Helmet",
    bonusHp: 1,
    bonusArmor: 1,
    bonusAttackDmg: 1,
    bonusAttackSpd: 1
}
const TEST_HELMET_2: Helmet = {
    type: "helmet",
    name: "Test Helmet 2",
    bonusHp: 2,
    bonusArmor: 2,
    bonusAttackDmg: 2,
    bonusAttackSpd: 2
}
const TEST_HELMET_3: Helmet = {
    type: "helmet",
    name: "Test Helmet 3",
    bonusHp: 3,
    bonusArmor: 3,
    bonusAttackDmg: 3,
    bonusAttackSpd: 3
}

export const helmets: Helmet[] = [TEST_HELMET_1, TEST_HELMET_2, TEST_HELMET_3]

