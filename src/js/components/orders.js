init(() => {
	Alpine.data("orders", () => ({
		currentOrderTab: "completed",
		setCurrentOrderTab(current) {
			this.currentOrderTab = current;
		},

		get isCompleted() {
			return this.currentOrderTab === "completed";
		},

		get isPending() {
			return this.currentOrderTab === "pending";
		},
	}));
});
