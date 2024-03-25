import { ParticleBest, minObjFunc } from "../secondaryFunc/minObjFunc";
import { ParticleClass } from "../classes/ParticleClass";
import { objFunc } from "../objFunc";

export interface InitialValue {
	particles: ParticleClass[];
	particleBest: ParticleBest;
}

//* Метод инициализации популяции
export const Initialize = (
	bounds: number[][],
	countParticles: number,
	countDimensions: number,
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

		const funcValue = objFunc(coordinates[0]);
		particles.push(new ParticleClass(coordinates, funcValue));
	}

	console.log("Инициализация завершена");
	const { indexBest, bestValueObjFunc } = minObjFunc(particles, particles[0].valueObjFunc);
	return { particles, particleBest: { bestValueObjFunc, indexBest } };
};
