export interface Player {
    name: string;
    isDm: boolean
}

export interface Room {
    userCount: number;
    dm: string 
    players: Player[];
  }
  