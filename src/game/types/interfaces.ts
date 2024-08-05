export interface BodyMindSoulStats {
    body: number;
    mind: number;
    soul: number;
}
export interface BaseStats {
    baseArmor: number;
    baseAttackDmg: number;
    baseAttackSpd: number;
    baseHp: number;
}
export interface EquipmentStats {
    bonusArmor: number;
    bonusAttackDmg: number;
    bonusAttackSpd: number;
    bonusHp: number;
}
export interface Helmet {
    type: "helmet";
    name: string;
    bonusHp?: number;
    bonusArmor?: number;
    bonusAttackDmg?: number;
    bonusAttackSpd?: number;
}
export interface Chest {
    type: "chest";
    name: string;
    bonusHp?: number;
    bonusArmor?: number;
    bonusAttackDmg?: number;
    bonusAttackSpd?: number;
}
export interface Pants {
    type: "pants";
    name: string;
    bonusHp?: number;
    bonusArmor?: number;
    bonusAttackDmg?: number;
    bonusAttackSpd?: number;
}
export interface Shoes {
    type: "shoes";
    name: string;
    bonusHp?: number;
    bonusArmor?: number;
    bonusAttackDmg?: number;
    bonusAttackSpd?: number;
}
export interface Weapon {
    type: "weapon";
    name: string;
    bonusHp?: number;
    bonusArmor?: number;
    bonusAttackDmg?: number;
    bonusAttackSpd?: number;
}
export interface Shield {
    type: "shield";
    name: string;
    bonusHp?: number;
    bonusArmor?: number;
    bonusAttackDmg?: number;
    bonusAttackSpd?: number;
}
export interface Equipment {
    helmet: Helmet | null;
    chest: Chest | null;
    pants: Pants | null;
    shoes: Shoes | null;
    weapon: Weapon | null;
    shield: Shield | null;
}
export interface ActualStats {
    actualArmor: number;
    actualAttackDmg: number;
    actualAttackSpd: number;
    actualHp: number;
}
