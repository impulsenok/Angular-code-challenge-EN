export type VehicleTypes = 'auto' | 'motor' | 'scooter';

export interface Vehicles {
    auto: Array<autoSubTypes>;
    motor: Array<motoSubTypes>;
    scooter: [];
};

export type autoSubTypes =
    'Hatchback' |
    'Sedan' |
    'Station' |
    'Cabriolet' |
    'Coupé' |
    'Multi Purpose Vehicle (MVP)' |
    'Terreinauto';

export type motoSubTypes = 
    'All-road' |
    'Naked' |
    'Enduro' |
    'Race' |
    'Toermotor' |
    'Chopper' |
    'Zijspan';