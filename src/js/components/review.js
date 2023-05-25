init(() => {
	Alpine.data("review", () => ({
		open: false,
		viewAll: true,
		canViewAll: false,

		init() {
			const rowLength = this.itemsRowCount();

			const reviews = document.querySelectorAll(".reviews");

			if (reviews.length > rowLength) {
				this.canViewAll = true;
				this.toggleReviews();
			}
		},

		itemsRowCount() {
			const reviewsContainer = document.getElementById("reviewsContainer");
			const computedStyle = window.getComputedStyle(reviewsContainer);
			const grid = computedStyle.getPropertyValue("grid-template-columns");

			return grid.split(" ").length;
		},

		toggleReviews() {
			this.viewAll = !this.viewAll;
			const rowLength = this.itemsRowCount();
			const reviews = document.querySelectorAll(".reviews");

			reviews.forEach((review, index) => {
				if (!this.viewAll && index + 1 > rowLength) {
					review.style.display = "none";
				} else {
					review.style.display = "flex";
				}
			});
		},
	}));

	Alpine.data("popup", () => ({
		open: true,
	}));
});
