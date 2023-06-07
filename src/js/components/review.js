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

	Alpine.data("rating", (rating) => ({
		halfStar() {
			return `<svg xmlns="http://www.w3.org/2000/svg" width="20"
								height="19"" fill="#353435" class="bi bi-star-half" viewBox="0 0 16 16">
  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
</svg>`;
		},

		fullStar() {
			return `<svg
								width="20"
								height="19"
								viewBox="0 0 20 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M8.69555 0.80846C9.1439 -0.269486 10.6709 -0.269487 11.1193 0.80846L13.2013 5.81417L18.6054 6.24742C19.7691 6.34071 20.241 7.793 19.3543 8.55251L15.237 12.0795L16.4949 17.3529C16.7658 18.4885 15.5304 19.3861 14.5341 18.7775L9.90741 15.9516L5.28076 18.7775C4.28444 19.3861 3.04905 18.4885 3.31993 17.3529L4.57785 12.0795L0.460502 8.55251C-0.426138 7.79301 0.045735 6.34071 1.20947 6.24742L6.61356 5.81417L8.69555 0.80846Z"
									fill="#353435"
								/>
							</svg>`;
		},

		emptyStar() {
			return `<svg
								width="20"
								height="19"
								viewBox="0 0 21 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.63698 1.34648C9.82913 0.884506 10.4836 0.884506 10.6757 1.34648L12.8017 6.45794C12.8827 6.6527 13.0659 6.78577 13.2761 6.80262L18.7944 7.24502C19.2931 7.285 19.4953 7.90741 19.1153 8.23291L14.911 11.8344C14.7508 11.9716 14.6809 12.1869 14.7298 12.3921L16.0143 17.7769C16.1304 18.2636 15.6009 18.6483 15.1739 18.3875L10.4496 15.5019C10.2695 15.3919 10.0432 15.3919 9.86315 15.5019L5.13876 18.3875C4.71176 18.6483 4.18231 18.2636 4.2984 17.7769L5.58289 12.3921C5.63183 12.1869 5.56187 11.9716 5.40168 11.8344L1.19736 8.23292C0.817369 7.90741 1.0196 7.285 1.51834 7.24502L7.03659 6.80262C7.24685 6.78577 7.43 6.6527 7.51101 6.45794L9.63698 1.34648Z"
									stroke="#353435"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>`;
		},

		ratingContent: "",

		generateStarRating() {
			const maxRating = 5;
			let stars = "";

			const fullStarsCount = Math.floor(rating);
			const hasHalfStar = rating % 1 !== 0;

			for (let i = 1; i <= maxRating; i++) {
				if (i <= fullStarsCount) {
					stars += this.fullStar(); // Add a filled star icon
				} else if (i === fullStarsCount + 1 && hasHalfStar) {
					stars += this.halfStar(); // Add a half-filled star icon
				} else {
					stars += this.emptyStar(); // Add an empty star icon
				}
			}

			this.ratingContent = stars;
		},

		productRating: 0,

		rateProduct(rating) {
			if (rating === this.productRating) {
				this.productRating--;
				return;
			}
			this.productRating = Number(rating);
		},
	}));
});
