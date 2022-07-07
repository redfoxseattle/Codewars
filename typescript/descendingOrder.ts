/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

export function descendingOrder(n: number): number {
	let numStr: any = n.toString();

	return n = Number(
			   numStr
				   .split('')
				   .sort((a: any, b: any) => b - a)
				   .join(''));
}

descendingOrder(123456789);