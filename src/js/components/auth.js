init(() => {
	Alpine.data("auth", () => ({
		open: false,
		currentTab: "signin",
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
