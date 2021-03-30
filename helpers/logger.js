function checkIfLogsEnabled() {
	if (process.browser) {
		const search = global?.window?.location?.search;
		const enabled = search && new URLSearchParams(search).get('debug') === 'true';

		global.isLogsEnabled = enabled || false;
		return global.isLogsEnabled;
	}

	return false;
}

function logger(...args) {
	if (typeof global.isLogsEnabled === 'undefined') {
		checkIfLogsEnabled();
	}

	if (global.isLogsEnabled) {
		console.log('%c Custom Log:', 'background: green; color: white;', ...args);
	}
}

export default logger;