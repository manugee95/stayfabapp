init(() => {
	Alpine.data("review", () => ({
		open: false,
	}));

	Alpine.data("popup", () => ({
		open: true,
	}));
});
