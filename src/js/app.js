$(document).ready(() => {
	const $toggleResume = $(".toggle-resume"),
		$resumeDescription = $('.resume-description');

	$resumeDescription.hide(); //hide resume description on first load

	$toggleResume.on("click", function(e) {
		const $clickedButton = $(this);
		$clickedButton.next($resumeDescription).slideToggle("slow", function(e) { //toggle
			//toggle complete
			if ($(this).is(':hidden')) { //description closed
				$clickedButton.text("more");
			} else {
				$clickedButton.text("less");
			}
		});
	})

	//progress bars
	var $progressBar = $('.progress-bar');
	$progressBar.css('width', 0);

	//animate progress bar when it comes into view
	var waypoints = $progressBar.waypoint(function(direction) {
		$(this).each(function(indx) {
			var el = $(this.element);
			el.css("width", el.attr("aria-valuenow") + "%");
		});
	}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	});
});