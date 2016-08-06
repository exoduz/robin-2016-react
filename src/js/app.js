$(document).ready(() => {
	const $toggleResume = $(".click-me"),
		$resumeDescription = $('.resume-description');

	$resumeDescription.hide(); //hide resume description on first load

	$toggleResume.on("click", function(e) {
		const clickedButton = $(this);
		var buttonText = clickedButton.text();

		clickedButton.next("div.resume-description").slideToggle("slow", function(e) { //toggle
			//toggle complete
			if ($(this).is(':hidden')) { //description closed
				clickedButton.text("more");
			} else {
				clickedButton.text("less");
			}
		});
	})
});