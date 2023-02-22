init(() => {
	Alpine.data("product", () => ({
		quantity: 1,

		incrementQuantity() {
			this.quantity++;
		},
		decrementQuantity() {
			if (this.quantity === 1) {
				return;
			}
			this.quantity--;
		},
	}));
});
