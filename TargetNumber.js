function solution(numbers, target) {
	let o = 0
	const c = (cur, arr, answer) => {
		if (arr.length > 0) {
			c(cur + arr[0], arr.slice(1), answer)
			c(cur - arr[0], arr.slice(1), answer)
		} else if (cur === answer) o += 1
	}
	c(0, numbers, target)

	return o
}
