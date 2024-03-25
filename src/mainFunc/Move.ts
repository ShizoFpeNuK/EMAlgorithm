import { vectorDivNum, vectorNorm } from "../secondaryFunc/vectors/operations";
import { ParticleClass } from "../classes/ParticleClass";

//* Перемещение частиц
export const Move = (
	countParticles: number,
	countDimensions: number,
	bounds: number[][],
	indexParticleBest: number,
	particles: ParticleClass[],
) => {
	for (let i = 0; i < countParticles; i++) {
		if (i !== indexParticleBest) {
			const step = Math.random();
			const norm = vectorNorm(particles[i].F);
			particles[i].F = vectorDivNum(particles[i].F, norm);

			for (let k = 0; k < countDimensions; k++) {
				if (particles[i].F[k] > 0) {
					const RNG = bounds[k][1] - particles[i].coordinates[k];
					particles[i].coordinates[k] += step * particles[i].F[k] * RNG;
				} else {
					const RNG = particles[i].coordinates[k] - bounds[k][0];
					particles[i].coordinates[k] += step * particles[i].F[k] * RNG;
				}
			}
		}
	}
};
