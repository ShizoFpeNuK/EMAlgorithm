import { ParticleClass } from "../classes/ParticleClass";
import { vectorMultiNum, vectorDifference, vectorNorm } from "./vectors/operations";

//* Закон Кулона
export const lawCoulomb = (particle1: ParticleClass, particle2: ParticleClass): number[] => {
	const numerator = particle1.q * particle2.q;
	const vectorDiff = vectorDifference(particle1.coordinates, particle2.coordinates);

	const denominator = vectorNorm(vectorDiff);
	const fraction = numerator / denominator;

	const F = vectorMultiNum(vectorDiff, fraction);

	// console.log("Кулон", F);
	return F;
};
