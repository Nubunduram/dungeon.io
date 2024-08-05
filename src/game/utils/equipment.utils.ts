import { Equipment, EquipmentStats, BaseStats, ActualStats } from '../types/interfaces';
import { EquipmentItem } from '../types/types';

export function getEquipmentBonusStats<T extends keyof EquipmentItem>(equipment: Equipment, key: T): number {
    let bonus = 0;
    for (let equipKey in equipment) {
        if (equipment.hasOwnProperty(equipKey)) {
            let equippedItem = equipment[equipKey as keyof Equipment];
            if (equippedItem && (key in equippedItem) && typeof equippedItem[key] === 'number') {
                bonus += equippedItem[key];
            }
        }
    }
    return bonus;
}

export function getAllEquipmentBonusStats(equipment: Equipment): EquipmentStats {
    return {
        bonusHp: getEquipmentBonusStats(equipment, 'bonusHp'),
        bonusArmor: getEquipmentBonusStats(equipment, 'bonusArmor'),
        bonusAttackDmg: getEquipmentBonusStats(equipment, 'bonusAttackDmg'),
        bonusAttackSpd: getEquipmentBonusStats(equipment, 'bonusAttackSpd')
    };
}

export function createBaseEquipment(): Equipment {
    let equipment = {
        helmet: null,
        chest: null,
        pants: null,
        shoes: null,
        weapon: null,
        shield: null
    }
    return equipment
}

export function getActualStats(baseStats: BaseStats, equipmentStats: EquipmentStats): ActualStats {
    return {
        actualArmor: baseStats.baseArmor + equipmentStats.bonusArmor,
        actualAttackDmg: baseStats.baseAttackDmg + equipmentStats.bonusAttackDmg,
        actualAttackSpd: baseStats.baseAttackSpd + equipmentStats.bonusAttackSpd,
        actualHp: baseStats.baseHp + equipmentStats.bonusHp,
    };
}
