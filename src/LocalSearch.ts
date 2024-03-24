import { minObjFunc } from "./minObjFunc.js";
import { ParticleClass } from "./ParticleClass.js";
import { objectiveFunction } from "./objFunc.js";

//* Функция локального поиска
export const LocalSearch = (
	MAX_LS_ITER: number,
	sigma: number,
	bounds: number[][],
	countParticles: number,
	countDimensions: number,
	particles: ParticleClass[],
	bestValueObjFunc: number,
): number => {
	const lengthSteps: number[] = [];

	bounds.forEach((bound) => {
		lengthSteps.push(bound[1] - bound[0]);
	});

	const maxLengthStep = sigma * Math.max(...lengthSteps);

	for (let i = 0; i < countParticles; i++) {
		for (let k = 0; k < countDimensions; k++) {
			const step1 = Math.random();

			for (let iter = 0; iter < MAX_LS_ITER; iter++) {
				const coordinatesBuff = [...particles[i].coordinates];
				const step2 = Math.random();

				if (step1 > 0.5) {
					coordinatesBuff[k] = coordinatesBuff[k] + step2 * maxLengthStep;
				} else {
					coordinatesBuff[k] = coordinatesBuff[k] - step2 * maxLengthStep;
				}

				const valueObjFuncBuff = objectiveFunction(coordinatesBuff);

				if (valueObjFuncBuff < particles[i].valueObjFunc) {
					particles[i].coordinates = coordinatesBuff;
					particles[i].valueObjFunc = valueObjFuncBuff;
					console.log("Итерация остановки и целевое значение", iter, valueObjFuncBuff);
					break;
				}
			}
		}
	}

	console.log("Search Local завершён");
	return minObjFunc(particles, bestValueObjFunc);
};
