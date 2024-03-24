import { minObjFunc } from "./minObjFunc.js";
import { ParticleClass } from "./ParticleClass.js";

export interface InitialValue {
	particles: ParticleClass[];
	bestValueObjFunc: number;
}

//* Метод инициализации популяции
export const Initialize = (
	bounds: number[][],
	countParticles: number,
	countDimensions: number,
	objectiveFunction: (coordinates: number[]) => number,
): InitialValue => {
	const particles: ParticleClass[] = [];

	// Выборка точек пространства
	for (let i = 0; i < countParticles; i++) {
		const coordinates: number[] = [];

		for (let k = 0; k < countDimensions; k++) {
			const step: number = Math.random();
			const coordinate = bounds[k][0] + step * (bounds[k][1] - bounds[k][0]);
			coordinates.push(coordinate);
		}

		const funcValue = objectiveFunction(coordinates);
		particles.push(new ParticleClass(coordinates, funcValue));
	}

  console.log("Инициализация завершена");
	const bestValueObjFunc = minObjFunc(particles, particles[0].valueObjFunc);
	return { particles, bestValueObjFunc };
};
