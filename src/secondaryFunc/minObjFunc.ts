import { ParticleClass } from "../classes/ParticleClass";

export interface ParticleBest {
	indexBest: number;
	bestValueObjFunc: number;
}

//* Выбор лучшего (минимального) значения
export const minObjFunc = (particles: ParticleClass[], min: number): ParticleBest => {
	let indexBest: number = 0;

	for (let i = 0; i < particles.length; i++) {
		if (particles[i].valueObjFunc < min) {
			min = particles[i].valueObjFunc;
			indexBest = i;
		}
	}

	// console.log("Minimum", i, min);
	return { indexBest, bestValueObjFunc: min };
};
