//* Сложение векторов
export const vectorAddition = (vector1: number[], vector2: number[]): number[] => {
	const add: number[] = [];

	for (let i = 0; i < vector1.length; i++) {
		add.push(vector2[i] + vector1[i]);
	}

	return add;
};

//* Разница векторов
export const vectorDifference = (vector1: number[], vector2: number[]): number[] => {
	const diff: number[] = [];

	for (let i = 0; i < vector1.length; i++) {
		diff.push(vector2[i] - vector1[i]);
	}

	return diff;
};

//* Норма
export const vectorNorm = (vector: number[]): number => {
	let norm = 0;

	for (let i = 0; i < vector.length; i++) {
		norm += vector[i] ** 2;
	}

	norm = Math.sqrt(norm);

	return norm;
};

//* Умножение число на вектора
export const vectorMultiNum = (vector: number[], number: number): number[] => {
	const vectorNew: number[] = [];

	for (let i = 0; i < vector.length; i++) {
		vectorNew.push(vector[i] * number);
	}

	return vectorNew;
};

//* Деление вектора на число
export const vectorDivNum = (vector: number[], number: number): number[] => {
	const vectorNew: number[] = [];

	for (let i = 0; i < vector.length; i++) {
		vectorNew.push(vector[i] / number);
	}

	return vectorNew;
};
