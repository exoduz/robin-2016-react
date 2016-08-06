$(document).ready(() => {
	const $toggleResume = $(".click-me");

	$toggleResume.on("click", function(e) {
		const clickedButton = $(this);
		var buttonText = clickedButton.text();

		clickedButton.next("div.resume-description").slideToggle("slow", function(e) { //toggle
			//toggle complete
			buttonText.toLowerCase() === "more" ? clickedButton.text("less") : clickedButton.text("more");
		});
	})
});