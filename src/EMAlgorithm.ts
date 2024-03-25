import { Move } from "./mainFunc/Move";
import { CalcF } from "./mainFunc/CalcF";
import { Initialize } from "./mainFunc/Initialize";
import { minObjFunc } from "./secondaryFunc/minObjFunc";
import { LocalSearch } from "./mainFunc/LocalSearch";
import { ParticleClass } from "./classes/ParticleClass";

const countParticles = 50; // Кол-во частиц
const countDimensions = 2; // Размерность пространства
const bounds = [
	// Границы пространства
	[-143, 100],
	[30, 155],
];
const MAX_ITER = 25 * countDimensions; // Макс кол-во итераций
const MAX_LS_ITER = 1000; // Макс кол-во локальных итераций
const sigma = 0.6; // Множитель для поиска окрестности

//* Электромагнитный алгоритм
const EMAlgorithm = (): ParticleClass => {
	let { particles, particleBest } = Initialize(bounds, countParticles, countDimensions);

	for (let i = 0; i < MAX_ITER; i++) {
		particleBest = LocalSearch(
			MAX_LS_ITER,
			sigma,
			bounds,
			countParticles,
			countDimensions,
			particles,
			particleBest.bestValueObjFunc,
		);

		CalcF(countDimensions, particles, particleBest.bestValueObjFunc);
		Move(countParticles, countDimensions, bounds, particleBest.indexBest, particles);
	}

	const { indexBest: index } = minObjFunc(particles, particleBest.bestValueObjFunc);

	return particles[index];
};

const particleBest = EMAlgorithm();

console.log("Лучшее значение функции минимизации:", particleBest.valueObjFunc);
console.log("Частица, достигшая этого:", particleBest.coordinates);
