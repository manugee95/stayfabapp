init(() => {
	Alpine.data("countdown", () => ({
		hours: null,
		minutes: null,
		seconds: null,
		setCountdown(countdownDate) {
			let countdown;
			if (countdownDate !== null) {
				countdown = setInterval(() => {
					const now = new Date().getTime();
					const timeRemaining = new Date(countdownDate).getTime() - now;

					const totalHours = Math.floor(timeRemaining / (1000 * 60 * 60));
					this.hours = totalHours;
					this.minutes = Math.floor(
						(timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
					);
					this.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

					if (timeRemaining < 0) {
						clearInterval(countdown);
					}
				}, 1000);
			}
		},
	}));
});
