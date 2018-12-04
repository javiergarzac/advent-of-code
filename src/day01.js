import { frequencies } from './inputDay01';

const frequencyInput = frequencies.split('\n').map(x => Number(x));

// Part 1
const getFrequencyNumber = (frequencyInput) => {
  return frequencyInput.reduce((accumulated, current) => accumulated + current)
};

console.log(getFrequencyNumber(frequencyInput));

// Part 2
const checkRepeatedFrequency = (frequencyInput) => {
	const frequencyList = new Set();
	let calculatedFrequency = 0;
	let repeatedValue = null;

	while (repeatedValue === null) {
		for(let i = 0; i < frequencyInput.length; i += 1) {
			calculatedFrequency += frequencyInput[i];
			if (frequencyList.has(calculatedFrequency)){
				repeatedValue = calculatedFrequency
				return repeatedValue;
			}
			frequencyList.add(calculatedFrequency);
		};
	}

	return repeatedValue;
};

console.log(checkRepeatedFrequency(frequencyInput));
