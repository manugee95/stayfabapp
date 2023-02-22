init(() => {
	Alpine.data("address", () => ({
		open: false,
		get isOpen() {
			return this.open;
		},

		showMe() {
			this.open = true;
			document.body.style.overflow = "hidden";
		},

		hideMe() {
			this.open = false;
			document.body.style.overflow = "auto";
		},
	}));
});
