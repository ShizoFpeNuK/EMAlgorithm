import { ParticleClass } from "../classes/ParticleClass";
import { objFunc } from "../objFunc";

export const calculationQ = (
	countDimensions: number,
	particle: ParticleClass,
	particles: ParticleClass[],
	bestValueObjFunc: number,
): number => {
	const numerator = objFunc(particle.coordinates[0]) - bestValueObjFunc;

	let denominator = 0;
	for (let k = 0; k < particles.length; k++) {
		denominator += objFunc(particles[k].coordinates[0]) - bestValueObjFunc;
	}

	return Math.exp((-countDimensions * numerator) / denominator);
};
