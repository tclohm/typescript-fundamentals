export type Dict<T> = {
	[k: string]: T | undefined;
};

// Array.prototype.map, but for Dict
export function mapDict<T, S>(
	dict: Dict<T>, 
	fn: (arg: T) => S): Dict<S> {
	const out: Dict<S> = {};

	Object.keys(dict).forEach((dKey, index) => {
		const item = dict[dKey];
		if (typeof item !== 'undefined') {
			out[dKey] = fn(item, index)
		}
	});
	return out;
}

mapDict({
	a: 'a',
	b: 'b'
}, (str) => ({ val: str }))

// Array.prototype.reduce, but for Dict
export function reduceDict<T, R>(
	dict: Dict<T>,
	reducer: (acc: R, item: T, idx: string) => R,
	initialValue: R
	): R {
	let currentSum: R = initialValue;
	Object.keys(dict).forEach(key => {
		const value = d[key];
		if (typeof value !== 'undefined') {
			currentSum = reducer(currentSum, value, key)
		}
	})
	return currentSum;
}