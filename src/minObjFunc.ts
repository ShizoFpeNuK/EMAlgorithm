import { ParticleClass } from "./ParticleClass.js";

//* Выбор лучшего (минимального) значения
export const minObjFunc = (particles: ParticleClass[], min: number): number => {
	for (let i = 0; i < particles.length; i++) {
		if (particles[i].valueObjFunc < min) {
			min = particles[i].valueObjFunc;
		}
	}

	console.log("Minimum", min);
	return min;
};
