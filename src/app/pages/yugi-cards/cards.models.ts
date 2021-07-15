export interface Card {
    id?: string;
    name?: string;
    atk?: string;
    def?: string;
    type?: CardType;
}

export enum CardType {
    Monster = 'MONSTER',
    Magic = 'MAGIC',
    Trap = 'TRAP'
}