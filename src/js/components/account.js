init(() => {
	Alpine.data("account", () => ({
		currentTab: "my-profile",
		open: false,
		setCurrentTab(current) {
			this.currentTab = current;
		},

		get isOrders() {
			return this.currentTab === "orders";
		},

		get isAddresses() {
			return this.currentTab === "addresses";
		},

		get isProfile() {
			return this.currentTab === "my-profile";
		},

		toggle() {
			this.open = !this.open;
		},
		hideDrop() {
			this.open = false;
		},
	}));

	Alpine.data("upgrade", () => ({
		open: false,

		toggle() {
			this.open = !this.open;
		},
		hideDrop() {
			this.open = false;
		},
	}));
});
