export function getCurrentFormattedDate(date = new Date()) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
	const day = String(date.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
}

export function getCurrentMonthRange() {
	const now = new Date();
	const start = new Date(now.getFullYear(), now.getMonth(), 1); // first day
	const end = new Date(now.getFullYear(), now.getMonth() + 1, 0); // last day

	return { start, end };
}
