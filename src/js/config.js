const init = function (func) {
	document.addEventListener("alpine:init", func);
};

init(() => {
	Alpine.magic("select", () => {
		return (className, el = null) => {
			if (el !== null) {
				return el.querySelector(className);
			}
			return document.querySelector(className);
		};
	});

	Alpine.magic("selectAll", () => {
		return (className, el = null) => {
			if (el !== null) {
				return el.querySelectorAll(className);
			}
			return document.querySelectorAll(className);
		};
	});
});
