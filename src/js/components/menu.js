init(() => {
	Alpine.data("menu", () => ({
		open: false,
		isSearching: false,
		get isOpen() {
			return this.open;
		},
		toggle() {
			this.open = !this.open;
		},
		showSearch() {
			this.isSearching = true;
		},
		hideSearch() {
			this.isSearching = false;
		},
		checkSearch() {
			this.open
				? ((this.isSearching = false),
				  (document.body.style.overflow = "hidden"))
				: ((this.isSearching = true), (document.body.style.overflow = "auto"));
		},
	}));
});
