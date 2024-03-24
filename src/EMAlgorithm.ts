import { Initialize } from "./Initialize.js";
import { LocalSearch } from "./LocalSearch.js";
import { objectiveFunction } from "./objFunc.js";

const countParticles = 10; // Кол-во частиц
const countDimensions = 2; // Размерность пространства
const bounds = [
	// Границы пространства
	[-143, 100],
	[30, 155],
];
const MAX_ITER = 25; // Макс кол-во итераций
const MAX_LS_ITER = 15; // Макс кол-во локальных итераций
const sigma = 0.6; // Множитель для поиска окрестности

//* Электромагнитный алгоритм
const EMAlgorithm = () => {
	let { particles, bestValueObjFunc } = Initialize(
		bounds,
		countParticles,
		countDimensions,
		objectiveFunction,
	);
	//TODO: WHILE iter < MAX_ITER:
	for (let i = 0; i < MAX_ITER; i++) {
		//TODO: Local(MAX_LS_ITER, sigma)
		bestValueObjFunc = LocalSearch(
			MAX_LS_ITER,
			sigma,
			bounds,
			countParticles,
			countDimensions,
			particles,
			bestValueObjFunc,
		);
	}
	//TODO: F = CalcF()
	//TODO: Move(F)
	//TODO: iter++
	//TODO: END WHILE
};

EMAlgorithm();
