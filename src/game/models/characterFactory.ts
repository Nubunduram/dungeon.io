import { createBMS, createBaseStats, } from '../utils/character.utils';
import { Character } from './character';
import { getAllEquipmentBonusStats, createBaseEquipment, getActualStats } from '../utils/equipment.utils';
import { BASE_LVL, BASE_XP } from '../types/constants';

export function createCharacter(name: string) {
    let level = BASE_LVL;
    let xp = BASE_XP;
    let BMS = createBMS();
    let baseStats = createBaseStats();
    let equipment = createBaseEquipment();
    let equipmentStats = getAllEquipmentBonusStats(equipment);
    let actualStats = getActualStats(baseStats, equipmentStats);
    return new Character(name, xp, level, BMS, baseStats, equipmentStats, actualStats, equipment);
}
