import { objFunc } from "../objFunc";
import { lawCoulomb } from "../secondaryFunc/lawCoulomb";
import { calculationQ } from "../secondaryFunc/calculationQ";
import { ParticleClass } from "../classes/ParticleClass";
import { vectorAddition, vectorDifference } from "../secondaryFunc/vectors/operations";

//* Расчёт вектора силы действия на частиц
export const CalcF = (
	countDimensions: number,
	particles: ParticleClass[],
	bestValueObjFunc: number,
) => {
	for (let i = 0; i < particles.length; i++) {
		particles[i].q = calculationQ(countDimensions, particles[i], particles, bestValueObjFunc);
		particles[i].F = [0, 0];
	}

	for (let i = 0; i < particles.length; i++) {
		for (let j = 1; j < particles.length; j++) {
			if (i !== j) {
				if (objFunc(particles[j].coordinates[0]) < objFunc(particles[i].coordinates[0])) {
					const F = lawCoulomb(particles[i], particles[j]);
					particles[i].F = vectorAddition(particles[i].F, F);
				} else {
					const F = lawCoulomb(particles[i], particles[j]);
					particles[i].F = vectorDifference(particles[i].F, F);
				}
			}
		}
	}
};
