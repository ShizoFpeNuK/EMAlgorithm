export class ParticleClass {
	coordinates: number[]; // Координаты
	charge!: number; // Заряд
	valueObjFunc: number; // Значение целевой функции
	distance!: number[]; // Евклидовы расстояния до других частиц
	F!: number[]; // Вектор силы F направления движения частицы

	constructor(coordinates: number[], valueObjFunc: number) {
		this.coordinates = coordinates;
		this.valueObjFunc = valueObjFunc;
		// this.charge = charge;
		// this.distance = distance;
		// this.F = F;
	}
}
