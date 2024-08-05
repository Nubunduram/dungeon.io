import { BodyMindSoulStats, BaseStats, EquipmentStats, Equipment, ActualStats } from '../types/interfaces';
import { getAllEquipmentBonusStats, getActualStats } from '../utils/equipment.utils';

export class Character {
    name: string;
    xp: number;
    level: number;
    bodyMindSoulStats: BodyMindSoulStats;
    baseStats: BaseStats;
    equipmentStats: EquipmentStats;
    actualStats: ActualStats;
    equipment: Equipment;

    constructor(
        name: string,
        xp: number,
        level: number,
        bodyMindSoulStats: BodyMindSoulStats,
        baseStats: BaseStats,
        equipmentStats: EquipmentStats,
        actualStats: ActualStats,
        equipment: Equipment,
    ) {
        this.name = name;
        this.xp = xp;
        this.level = level;
        this.bodyMindSoulStats = bodyMindSoulStats;
        this.baseStats = baseStats;
        this.equipmentStats = equipmentStats;
        this.actualStats = actualStats;
        this.equipment = equipment;
    }

    updateBodyMindSoulStats(newStats: Partial<BodyMindSoulStats>) {
        this.bodyMindSoulStats = { ...this.bodyMindSoulStats, ...newStats };
        this.updateActualStats();
    }

    updateBaseStats(newStats: Partial<BaseStats>) {
        this.baseStats = { ...this.baseStats, ...newStats };
        this.updateActualStats();
    }

    updateEquipment(newEquipment: Partial<Equipment>) {
        this.equipment = { ...this.equipment, ...newEquipment };
        this.equipmentStats = getAllEquipmentBonusStats(this.equipment);
        this.actualStats = getActualStats(this.baseStats, this.equipmentStats);
        this.updateActualStats();
    }

    updateActualStats() {
        this.actualStats = getActualStats(this.baseStats, this.equipmentStats);
    }

    test() {
        console.log(`
            name: ${this.name},
            xp: ${this.xp},
            bodyMindSoulStats: ${this.bodyMindSoulStats},
            body: ${this.bodyMindSoulStats.body},
            mind: ${this.bodyMindSoulStats.mind},
            soul: ${this.bodyMindSoulStats.soul},
            
            baseStats: ${this.baseStats},
            baseArmor: ${this.baseStats.baseArmor},
            baseAttackDmg: ${this.baseStats.baseAttackDmg},
            baseAttackSpd: ${this.baseStats.baseAttackSpd},
            baseHp: ${this.baseStats.baseHp},
            
            equipmentStats: ${this.equipmentStats},
            bonusArmor: ${this.equipmentStats.bonusArmor},
            bonusAttackDmg: ${this.equipmentStats.bonusAttackDmg},
            bonusAttackSpd: ${this.equipmentStats.bonusAttackSpd},
            bonusHp: ${this.equipmentStats.bonusHp},

            actualStats: ${this.actualStats},
            actualArmor: ${this.actualStats.actualArmor},
            actualAttackDmg: ${this.actualStats.actualAttackDmg},
            actualAttackSpd: ${this.actualStats.actualAttackSpd},
            actualHp: ${this.actualStats.actualHp},

            equipment: ${this.equipment},
            equipmentHelmet: ${this.equipment.helmet},
            equipmentChest: ${this.equipment.chest},
            equipmentPants: ${this.equipment.pants},
            equipmentShoes: ${this.equipment.shoes},
            equipmentWeapon: ${this.equipment.weapon},
            equipmentShield: ${this.equipment.shield}
            `);
    }

}
