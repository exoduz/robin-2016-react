jQuery(document).ready(function($) {

	const $toggleResume = $(".toggle-resume"),
		$resumeDescription = $('.resume-description');
		
	//only hide when media query option is bigger than 767px
	if (!Modernizr.mq('(max-width: 767px)')) {
		$resumeDescription.hide(); //hide resume description on first load
	}

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
	});

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

	//dot navigation
	var contentSections = $('.sections'),
		navigationItems = $('#vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to sections from dot navigation
	navigationItems.on('click', function(e){
    e.preventDefault();
    smoothScroll($(this.hash));
  });
  //smooth scroll to second section from hero
  $('.scroll-down').on('click', function(e){
    e.preventDefault();
    smoothScroll($(this.hash));
  });
  /*
  //open-close navigation on touch devices
  $('.touch .cd-nav-trigger').on('click', function(){
  	$('.touch #cd-vertical-nav').toggleClass('open');

  });
  //close navigation on touch devices when selectin an elemnt from the list
  $('.touch #cd-vertical-nav a').on('click', function(){
  	$('.touch #cd-vertical-nav').removeClass('open');
  });
	*/
	function updateNavigation() {
		contentSections.each(function(){
			var $this = $(this);
			var activeSection = $('#vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;

			if ( ( $this.offset().top - $(window).height() / 2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}
	
	function smoothScroll(target) {
    $('body,html').animate(
    	{'scrollTop':target.offset().top},
    	600
    );
	}

});