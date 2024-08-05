import { Shield } from "@/Infos/types/interfaces";

const TEST_SHIELD_1: Shield = {
    type: "shield",
    name: "Test Shield",
    bonusHp: 1,
    bonusArmor: 1,
    bonusAttackDmg: 1,
    bonusAttackSpd: 1
}
const TEST_SHIELD_2: Shield = {
    type: "shield",
    name: "Test Shield 2",
    bonusHp: 2,
    bonusArmor: 2,
    bonusAttackDmg: 2,
    bonusAttackSpd: 2
}
const TEST_SHIELD_3: Shield = {
    type: "shield",
    name: "Test Shield 3",
    bonusHp: 3,
    bonusArmor: 3,
    bonusAttackDmg: 3,
    bonusAttackSpd: 3
}

export const shields: Shield[] = [TEST_SHIELD_1, TEST_SHIELD_2, TEST_SHIELD_3]

