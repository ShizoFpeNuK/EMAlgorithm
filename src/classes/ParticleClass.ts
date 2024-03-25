export class ParticleClass {
	q = 0; // Заряд
	F = [0, 0]; // Результирующий вектор силы F частицы
	coordinates: number[]; // Координаты
	valueObjFunc: number; // Значение целевой функции

	constructor(coordinates: number[], valueObjFunc: number) {
		this.coordinates = coordinates;
		this.valueObjFunc = valueObjFunc;
	}
}
