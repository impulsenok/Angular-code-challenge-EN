export interface MockData {
    id: number;
    name: string;
    age: number;
    cars: Array<Car>;
}

export interface Car {
    model: string;
    year: number;
}