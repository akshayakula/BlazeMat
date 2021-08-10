'use strict';

(function ($) {
	"use strict";

	/*------------------------------------------------------------------
 	[Table of contents]
 
 	1. my owl function
 	2. insta feed
 	3. gradient pie chart
 	4. text parallax init
 	5. email regular expression pattern
 	6. content center function
 	7. time line height function
 	8. scrool to top function
 	9. go currenct section function
 	10. sticky header function
 	11. custom select function
 	12. custom number function
 	13. set logo function
 	14. equal height function
 	15. on screen function
 	16. skoller init
 	17. prelaoder
 	18. case portfolio grid
 	19. portfolio grid
 	20. portfolio grid load more
 	21. blog grid
 	22. portfolio slider
 	23. preloader close button
 	24. mega navigation menu init
 	25. contact form init
 	26. video popup init
 	27. Side Offset cart menu open
 	28. right click , ctrl+u and ctrl+shift+i disabled
 	29. instafeed init
 	30. modal popup
 	31. img default behavior off and dragable false
 	32. office slider
 	33. review slider
 	34. clinet slider
 	35. subscribe form
 	36. team slider
 	37. single team add hover class
 	38. number counter and skill bar animation
 	39. waypoint int
 	40. skill bar and number counter
 	41. wow function init
 	42. current page add class active on a
 	43. image popup
 	44. post gallery sider
 	45. scroll view init
 	46. parallax service
 	47. select init
 	48. product slider
 	49. custom number
 	50. floating button
 	51. rate fraph
 	52. banner slider
 	53. scroll to bottom
 	54. review slider
 	55. bubble slider
 	56. single page menu
 	57. typed init
 	58. material input
 	59. call to action parallax
 	60. video popup
 	61. vertical slider
 	62. offcanvas menu
 	63. rev slider init (#rev_slider_8_1)
 	64. rev slider init (#rev_slider_15_1)
 	65. shuffle letters
 	66. XpeedStudio Maps
 
 
 	-------------------------------------------------------------------*/

	/*==========================================================
 				1. my owl function
 ======================================================================*/

	$.fn.myOwl = function (options) {

		var settings = $.extend({
			items: 1,
			dots: false,
			loop: true,
			mouseDrag: true,
			touchDrag: true,
			nav: false,
			autoplay: true,
			navText: ['', ''],
			margin: 0,
			stagePadding: 0,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			navRewind: false,
			responsive: {},
			animateOut: '',
			animateIn: '',
			center: '',
			merge: '',
			autoWidth: ''
		}, options);

		return this.owlCarousel({
			items: settings.items,
			loop: settings.loop,
			mouseDrag: settings.mouseDrag,
			touchDrag: settings.touchDrag,
			nav: settings.nav,
			navText: settings.navText,
			dots: settings.dots,
			margin: settings.margin,
			stagePadding: settings.stagePadding,
			autoplay: settings.autoplay,
			autoplayTimeout: settings.autoplayTimeout,
			autoplayHoverPause: settings.autoplayHoverPause,
			animateOut: settings.animateOut,
			animateIn: settings.animateIn,
			responsive: settings.responsive,
			navRewind: settings.navRewind,
			center: settings.center,
			merge: settings.merge,
			autoWidth: settings.autoWidth
		});
	};

	/*==========================================================
 				2. insta feed
 ======================================================================*/
	$.fn.instaFeed = function (options) {
		var settings = $.extend({
			token: '',
			$this: $(this),
			photos: 0
		}, options);

		$.ajax({
			url: 'https://api.instagram.com/v1/users/self/media/recent',
			dataType: 'jsonp',
			type: 'GET',
			data: { access_token: settings.token, count: settings.photos },
			success: function success(data) {
				for (var x in data.data) {
					settings.$this.append('<li><a href="' + data.data[x].link + '" ><img src="' + data.data[x].images.standard_resolution.url + '"></a></li>');
				}
			},
			error: function error(data) {
				console.log(data);
			}
		});
	};

	/*==========================================================
 				3. gradient pie chart
 ======================================================================*/
	$.fn.myGradientChart = function (options) {
		var settings = $.extend({
			barColor: '',
			barColor1: '',
			barColor2: '',
			scaleColor: 'transparent',
			trackColor: '#f7f7f7',
			lineCap: 'square',
			size: 140,
			lineWidth: 8
		}, options);

		return this.easyPieChart({
			barColor: function barColor(percent) {
				var ctx = this.renderer.getCtx();
				var canvas = this.renderer.getCanvas();
				var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
				gradient.addColorStop(0, settings.barColor1);
				gradient.addColorStop(1, settings.barColor2);
				return gradient;
			},
			scaleColor: settings.scaleColor,
			trackColor: settings.trackColor,
			lineCap: settings.lineCap,
			size: settings.size,
			lineWidth: settings.lineWidth
		});
	};

	/*==========================================================
 				4. text parallax init
 ======================================================================*/
	function initparallax() {
		var a = {
			Android: function Android() {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function BlackBerry() {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function iOS() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function Opera() {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function Windows() {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function any() {
				return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
			}
		};
		var trueMobile = a.any();
		if (null == trueMobile) {
			var b = new Scrollax();
			b.reload();
			b.init();
		}
	}

	/*==========================================================
 				5. email regular expression pattern
 ======================================================================*/
	function email_pattern(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}

	/*==========================================================
 				6. content center function
 ======================================================================*/
	var contentToCenter = function contentToCenter() {
		var header = $('.xs-header'),
		    banner = $('.xs-inner-banner .inner-banner');
		banner.css('marginTop', header.outerHeight() / 2);
	};

	/*==========================================================
 				7. time line height function
 ======================================================================*/
	var timeLineHeightCalculate = function timeLineHeightCalculate() {
		var child = $('.timeline').children(),
		    childLength = child.length - 1,
		    childHeight = child.outerHeight(),
		    total = childLength * childHeight;
		$('.timeline').append('<style>.timeline::before{height: ' + total + 'px}</style>');
		child.last().css("paddingBottom", "0");
	};

	/*==========================================================
 				8. scrool to top function
 ======================================================================*/
	$.fn.scrollView = function () {
		return this.each(function () {
			$('html, body').animate({
				scrollTop: $(this).offset().top
			}, 1000);
		});
	};

	/*==========================================================
 				9. go currenct section function
 ======================================================================*/
	$.fn.goCurrentSection = function () {
		return this.on('click', function (e) {
			if (this.hash !== '') {
				e.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 1000, function () {
					window.location.hash = hash;
				});
			}
		});
	};

	/*==========================================================
 				10. sticky header function
 ======================================================================*/
	function stickyHeader() {
		var mainheader = $('.nav-sticky'),
		    height = mainheader.outerHeight(),
		    scroll = $(document).scrollTop();
		$(window).on('load', function () {
			if ($(document).scrollTop() > height) {
				if (mainheader.hasClass('sticky-header')) {
					mainheader.removeClass('sticky-header');
				} else {
					mainheader.addClass('sticky-header');
				}
			}
		});
		$(window).on('scroll', function () {
			var scrolled = $(document).scrollTop(),
			    header = $('.sticky-header');
			if (scrolled > scroll) {
				header.addClass('sticky');
			} else {
				header.removeClass('sticky');
			}
			if (header.attr('data-scroll-to') === 'top') {
				if (scrolled < scroll) {
					header.addClass('sticky');
				} else {
					header.removeClass('sticky');
				}
			}
			if (scrolled === 0) {
				mainheader.removeClass('sticky-header');
				header.removeClass('sticky');
			} else {
				mainheader.addClass('sticky-header');
			}
			scroll = $(document).scrollTop();
		});
	}

	/*==========================================================
 				11. custom select function
 ======================================================================*/
	$.fn.mySelect = function (options) {
		var $this = $(this),
		    numberOfOptions = $(this).children('option');

		$this.addClass('select-hidden');
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var styledSelect = $this.next('.select-styled');
		styledSelect.text($this.children('option').eq(0).text());

		var list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter(styledSelect);

		for (var i = 0; i < numberOfOptions.length; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo(list);
		}

		var listItems = list.children('li');

		styledSelect.on('click', function (e) {
			e.stopPropagation();
			$('.select-styled.active').not(this).each(function () {
				$(this).removeClass('active').next('.select-options').fadeIn();
			});
			$(this).toggleClass('active').next('.select-options').toggle();
			$(this).parent().toggleClass('focus');
		});

		listItems.on('click', function (e) {
			e.stopPropagation();
			styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			list.hide();
			if ($(this).parent().parent().hasClass('focus')) {
				$(this).parent().parent().removeClass('focus');
			}
		});

		$(document).on('click', function () {
			styledSelect.removeClass('active');
			list.hide();
		});
	};

	/*==========================================================
 				12. custom number function
 ======================================================================*/
	$.fn.customNumber = function (options) {
		var settings = $.extend({
			plusIcon: '',
			minusIcon: ''
		}, options);

		this.append('<span class="add">' + settings.plusIcon + '</span>');
		this.append('<span class="sub">' + settings.minusIcon + '</span>');

		return this.each(function () {
			var spinner = $(this),
			    input = spinner.find('input[type="number"]'),
			    add = spinner.find('.add'),
			    sub = spinner.find('.sub');

			input.parent().on('click', '.sub', function (event) {
				event.preventDefault();
				if (input.val() > parseInt(input.attr('min'), 10)) {
					input.val(function (i, oldvalue) {
						return --oldvalue;
					});
				}
			});
			input.parent().on('click', '.add', function (event) {
				event.preventDefault();
				if (input.val() < parseInt(input.attr('max'), 10)) {
					input.val(function (i, oldvalue) {
						return ++oldvalue;
					});
				}
			});
		});
	};

	/*==========================================================
 				13. set logo function
 ======================================================================*/
	function setLogo() {
		$('.xs-logo').each(function () {
			var $this = $(this).children(),
			    clone = $this.clone(),
			    holder = $('.nav-brand');
			if ($(window).width() > 991) {
				if (holder.children().length > 0) {
					holder.children().remove();
				}
			} else {
				if (holder.children().length === 0) {
					holder.append(clone);
				}
			}
		});
	}

	/*==========================================================
 				14. equal height function
 ======================================================================*/
	function equalHeight() {
		var preview = $('.bouble-slider-privew').outerHeight(true),
		    thumb = $('.bouble-slider-thumb .owl-stage-outer'),
		    widths = $('.bouble-slider-thumb .owl-stage-outer').outerWidth(true),
		    stage = $('.bouble-slider-thumb .owl-stage');
		if ($(window).width() > 991) {
			thumb.css('height', preview);
			stage.css('width', widths);
			stage.css('height', preview);
		}
	}

	/*==========================================================
 				15. on screen function
 ======================================================================*/
	$.fn.onScreen = function () {
		var offset = this.offset();
		var win = $(window);
		var viewport = {
			top: $(window).scrollTop(),
			left: $(window).scrollLeft()
		};
		viewport.right = viewport.left + $(window).width();
		viewport.bottom = viewport.top + $(window).height();
		offset.right = offset.left + this.outerWidth();
		offset.bottom = offset.top + this.outerHeight();
		return !(viewport.right < offset.left || viewport.left > offset.right || viewport.bottom < offset.top || viewport.top > offset.bottom);
	};

	/* start on load */
	$(window).on('load', function () {

		/*==========================================================
  				16. skoller init
  ======================================================================*/
		var mySkrollr = skrollr.init({
			forceHeight: false,
			easings: {
				easeOutBack: function easeOutBack(p, s) {
					s = 1.70158;
					p = p - 1;
					return p * p * ((s + 1) * p + s) + 1;
				}
			},
			mobileCheck: function mobileCheck() {
				//hack - forces mobile version to be off
				return false;
			}
		});

		/* title parallax */
		initparallax();

		/* content to center */
		contentToCenter();

		/* sticky header init */
		stickyHeader();

		/* set logo */
		setLogo();

		/* equal height */
		equalHeight();

		/*==========================================================
  			17. prelaoder
  ======================================================================*/
		// $('#preloader').addClass('loaded');


		/*=============================================================
  		 18. case portfolio grid
  =========================================================================*/
		if ($('.cases-grid, .blog-grid').length > 0) {
			var $container = $('.cases-grid , .blog-grid'),
			    colWidth = function colWidth() {
				var w = $container.width(),
				    columnNum = 1,
				    columnWidth = 0;
				if (w > 1200) {
					columnNum = 4;
				} else if (w > 600) {
					columnNum = 3;
				} else if (w > 450) {
					columnNum = 1;
				} else if (w > 385) {
					columnNum = 1;
				}
				columnWidth = Math.floor(w / columnNum);
				$container.find('.grid-item').each(function () {
					var $item = $(this),
					    multiplier_w = $item.attr('class').match(/grid-item-w(\d)/),
					    multiplier_h = $item.attr('class').match(/grid-item-h(\d)/),
					    width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
					    height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
					$item.css({
						width: width
						//height: height
					});
				});
				return columnWidth;
			},
			    isotope = function isotope() {
				$container.isotope({
					resizable: false,
					itemSelector: '.grid-item',
					masonry: {
						columnWidth: colWidth(),
						gutterWidth: 3
					}
				});
			};
			isotope();
			$(window).on('resize', isotope);
			var $optionSets = $('.filter-button-wraper .option-set'),
			    $optionLinks = $optionSets.find('a');
			$optionLinks.on('click', function () {
				var $this = $(this);
				var $optionSet = $this.parents('.option-set');
				$optionSet.find('.selected').removeClass('selected');
				$this.addClass('selected');
				// make option object dynamically, i.e. { filter: '.my-filter-class' }
				var options = {},
				    key = $optionSet.attr('data-option-key'),
				    value = $this.attr('data-option-value');

				// parse 'false' as false boolean
				value = value === 'false' ? false : value;
				options[key] = value;
				if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
					// changes in layout modes need extra logic
					changeLayoutMode($this, options);
				} else {
					// creativewise, apply new options
					$container.isotope(options);
				}
				return false;
			});
		}

		/*==========================================================
  			19. portfolio grid
  ======================================================================*/
		if ($('.portfolio-grid').length > 0) {
			var $portfolioGrid = $('.portfolio-grid'),
			    colWidth = function colWidth() {
				var w = $portfolioGrid.width(),
				    columnNum = 1,
				    columnWidth = 0;
				if (w > 1200) {
					columnNum = 4;
				} else if (w > 900) {
					columnNum = 4;
				} else if (w > 600) {
					columnNum = 2;
				} else if (w > 450) {
					columnNum = 2;
				} else if (w > 385) {
					columnNum = 1;
				}
				columnWidth = Math.floor(w / columnNum);
				$portfolioGrid.find('.portfolio-grid-item').each(function () {
					var $item = $(this),
					    multiplier_w = $item.attr('class').match(/portfolio-grid-item-w(\d)/),
					    multiplier_h = $item.attr('class').match(/portfolio-grid-item-h(\d)/),
					    width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
					    height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
					$item.css({
						width: width
						//height: height
					});
				});
				return columnWidth;
			},
			    isotope = function isotope() {
				$portfolioGrid.isotope({
					resizable: false,
					itemSelector: '.portfolio-grid-item',
					masonry: {
						columnWidth: colWidth(),
						gutterWidth: 3
					}
				});
			};
			isotope();
			$(window).on('resize', isotope);
		}

		/*==========================================================
  			20. portfolio grid load more
  ======================================================================*/
		if ($('.portfolio-grid-loadmore').length > 0) {
			//execute function onload

			var loadMore = function loadMore(toShow) {
				$portfolioGridContainer.find(".hidden").removeClass("hidden");
				var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function (item) {
					return item.element;
				});
				$(hiddenElems).addClass('hidden');
				$portfolioGridContainer.isotope('layout');
				//when no more to load, hide show more button
				if (hiddenElems.length == 0) {
					$("#load-more").fadeOut();
				} else {
					$("#load-more").fadeIn();
				};
			};
			//append load more button


			var $portfolioGridContainer = $('.portfolio-grid-loadmore'),
			    colWidth = function colWidth() {
				var w = $portfolioGridContainer.width(),
				    columnNum = 1,
				    columnWidth = 0;
				if (w > 1200) {
					columnNum = 4;
				} else if (w > 900) {
					columnNum = 4;
				} else if (w > 600) {
					columnNum = 2;
				} else if (w > 450) {
					columnNum = 2;
				} else if (w > 385) {
					columnNum = 1;
				}
				columnWidth = Math.floor(w / columnNum);
				$portfolioGridContainer.find('.portfolio-grid-item').each(function () {
					var $item = $(this),
					    multiplier_w = $item.attr('class').match(/portfolio-grid-item-w(\d)/),
					    multiplier_h = $item.attr('class').match(/portfolio-grid-item-h(\d)/),
					    width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
					    height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
					$item.css({
						width: width
						//height: height
					});
				});
				return columnWidth;
			},
			    isotope = function isotope() {
				$portfolioGridContainer.isotope({
					resizable: false,
					itemSelector: '.portfolio-grid-item',
					masonry: {
						columnWidth: colWidth(),
						gutterWidth: 3
					}
				});
			};
			isotope();
			$(window).on('resize', isotope);

			var initShow = 5; //number of images loaded on init & onclick load more button
			var counter = initShow; //counter for load more button
			var iso = $portfolioGridContainer.data('isotope'); // get Isotope instance

			loadMore(initShow);$portfolioGridContainer.after('<div class="text-center"><a href="#" id="load-more" class="loadmore-btn"><i class="icon icon-plus"></i> Load More</a></div>');
			//when load more button clicked
			$("#load-more").on('click', function (e) {
				e.preventDefault();
				if ($('#filters').data('clicked')) {
					//when filter button clicked, set initial value for counter
					counter = initShow;
					j$('#filters').data('clicked', false);
				} else {
					counter = counter;
				};
				counter = counter + initShow;
				loadMore(counter);
			});
		}

		/*==========================================================
  			21. blog grid
  ======================================================================*/
		if ($('.blog-grid-2').length > 0) {
			var $container = $('.blog-grid-2'),
			    colWidth = function colWidth() {
				var w = $container.width(),
				    columnNum = 1,
				    columnWidth = 0;
				if (w > 1200) {
					columnNum = 2;
				} else if (w > 900) {
					columnNum = 2;
				} else if (w > 600) {
					columnNum = 2;
				} else if (w > 450) {
					columnNum = 1;
				} else if (w > 385) {
					columnNum = 1;
				}
				columnWidth = Math.floor(w / columnNum);
				$container.find('.grid-item').each(function () {
					var $item = $(this),
					    multiplier_w = $item.attr('class').match(/grid-item-w(\d)/),
					    multiplier_h = $item.attr('class').match(/grid-item-h(\d)/),
					    width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
					    height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
					$item.css({
						width: width
						//height: height
					});
				});
				return columnWidth;
			},
			    isotope = function isotope() {
				$container.isotope({
					resizable: false,
					itemSelector: '.grid-item',
					masonry: {
						columnWidth: colWidth(),
						gutterWidth: 3
					}
				});
			};
			isotope();
			$(window).on('resize', isotope);
			var $optionSets = $('.filter-button-wraper .option-set'),
			    $optionLinks = $optionSets.find('a');
			$optionLinks.on('click', function () {
				var $this = $(this);
				var $optionSet = $this.parents('.option-set');
				$optionSet.find('.selected').removeClass('selected');
				$this.addClass('selected');
				// make option object dynamically, i.e. { filter: '.my-filter-class' }
				var options = {},
				    key = $optionSet.attr('data-option-key'),
				    value = $this.attr('data-option-value');
				// parse 'false' as false boolean
				value = value === 'false' ? false : value;
				options[key] = value;
				if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
					// changes in layout modes need extra logic
					changeLayoutMode($this, options);
				} else {
					// creativewise, apply new options
					$container.isotope(options);
				}
				return false;
			});
		}

		/*==========================================================
  			20. portfolio grid load more 2
  ======================================================================*/
		if ($('.portfolio-grid-loadmore-2').length > 0) {
			//execute function onload

			var _loadMore = function _loadMore(toShow) {
				$portfolioGridContainer2.find(".hidden").removeClass("hidden");
				var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function (item) {
					return item.element;
				});
				$(hiddenElems).addClass('hidden');
				$portfolioGridContainer2.isotope('layout');
				//when no more to load, hide show more button
				if (hiddenElems.length == 0) {
					$("#load-more").fadeOut();
				} else {
					$("#load-more").fadeIn();
				};
			};
			//when load more button clicked


			var $portfolioGridContainer2 = $('.portfolio-grid-loadmore-2'),
			    colWidth = function colWidth() {
				var w = $portfolioGridContainer2.width(),
				    columnNum = 1,
				    columnWidth = 0;
				if (w > 1200) {
					columnNum = 3;
				} else if (w > 900) {
					columnNum = 3;
				} else if (w > 600) {
					columnNum = 2;
				} else if (w > 450) {
					columnNum = 2;
				} else if (w > 385) {
					columnNum = 1;
				}
				columnWidth = Math.floor(w / columnNum);
				$portfolioGridContainer2.find('.portfolio-grid-item').each(function () {
					var $item = $(this),
					    multiplier_w = $item.attr('class').match(/portfolio-grid-item-w(\d)/),
					    multiplier_h = $item.attr('class').match(/portfolio-grid-item-h(\d)/),
					    width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
					    height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
					$item.css({
						width: width
						//height: height
					});
				});
				return columnWidth;
			},
			    isotope = function isotope() {
				$portfolioGridContainer2.isotope({
					resizable: false,
					itemSelector: '.portfolio-grid-item',
					masonry: {
						columnWidth: colWidth(),
						gutterWidth: 3
					}
				});
			};
			isotope();
			$(window).on('resize', isotope);

			var initShow = 6; //number of images loaded on init & onclick load more button
			var counter = initShow; //counter for load more button
			var iso = $portfolioGridContainer2.data('isotope'); // get Isotope instance

			_loadMore(initShow);$("#load-more").on('click', function (e) {
				e.preventDefault();
				if ($('#filters').data('clicked')) {
					//when filter button clicked, set initial value for counter
					counter = initShow;
					j$('#filters').data('clicked', false);
				} else {
					counter = counter;
				};
				counter = counter + initShow;
				_loadMore(counter);
			});
		}

		/*=============================================================
  		 22. portfolio slider
  =========================================================================*/
		if ($('.agency-portfolio-slider').length > 0) {
			$('.agency-portfolio-slider').myOwl({
				items: 5,
				nav: false,
				responsive: {
					0: {
						items: 1,
						autoWidth: false
					},
					// breakpoint from 480 up
					480: {
						items: 1,
						autoWidth: false
					},
					// breakpoint from 768 up
					768: {
						items: 2,
						autoWidth: false
					},
					1024: {
						items: 5,
						autoWidth: true
					}
				}
			});
		}
	}); // END load Function

	/* start document ready */
	$(document).ready(function () {

		/* title parallax */
		initparallax();

		/* content to center */
		contentToCenter();

		/* time line height calculate */
		timeLineHeightCalculate();

		/* sticky header init */
		stickyHeader();

		/* set logo */
		setLogo();

		/* equal height */
		equalHeight();

		/*==========================================================
  			23. preloader close button
  ======================================================================*/
		// $('.prelaoder-btn').on('click', function (e) {
		// 	e.preventDefault();
		// 	if (!($('#preloader').hasClass('loaded'))) {
		// 		$('#preloader').addClass('loaded');
		// 	}
		// })

		/*==========================================================
  		24. mega navigation menu init
  ======================================================================*/
		if ($('.xs-menus').length > 0) {
			$('.xs-menus').xs_nav({
				mobileBreakpoint: 992
			});
		}
		if ($('.xs-hidden-menus').length > 0) {
			$('.xs-hidden-menus').xs_nav({
				hidden: true,
				offCanvasSide: "right"
			});
			$(".offsetmenu-btn").on('click', function () {
				$(".xs-hidden-menus").data("xs_nav").toggleOffcanvas();
			});
		}

		/*==========================================================
  			25. contact form init
  ======================================================================*/

		$(document).on('submit', '#xs-contact-form', function (event) {
			event.preventDefault();
			/* Act on the event */

			var xs_contact_name = $('#xs_contact_name'),
			    xs_contact_last_name = $('#xs_contact_last_name'),
			    xs_contact_number = $('#xs_contact_number'),
			    xs_contact_email = $('#xs_contact_email'),
			    xs_contact_subject = $('#xs_contact_subject'),
			    x_contact_massage = $('#x_contact_massage'),
			    xs_contact_submit = $('#xs_contact_submit'),
			    xs_contact_error = false;

			$('.xpeedStudio_success_message').remove();

			if (xs_contact_name.length > 0) {
				if (xs_contact_name.val().trim() === '') {
					xs_contact_name.addClass('invaild');
					xs_contact_error = true;
					xs_contact_name.focus();
					return false;
				} else {
					xs_contact_name.removeClass('invaild');
				}
			}

			if (xs_contact_last_name.length > 0) {
				if (xs_contact_last_name.val().trim() === '') {
					xs_contact_last_name.addClass('invaild');
					xs_contact_error = true;
					xs_contact_last_name.focus();
					return false;
				} else {
					xs_contact_last_name.removeClass('invaild');
				}
			}

			if (xs_contact_number.length > 0) {
				if (xs_contact_number.val().trim() === '') {
					xs_contact_number.addClass('invaild');
					xs_contact_error = true;
					xs_contact_number.focus();
					return false;
				} else {
					xs_contact_number.removeClass('invaild');
				}
			}

			if (xs_contact_email.length > 0) {
				if (xs_contact_email.val().trim() === '') {
					xs_contact_email.addClass('invaild');
					xs_contact_error = true;
					xs_contact_email.focus();
					return false;
				} else if (!email_pattern(xs_contact_email.val().toLowerCase())) {
					xs_contact_email.addClass('invaild');
					xs_contact_error = true;
					xs_contact_email.focus();
					return false;
				} else {
					xs_contact_email.removeClass('invaild');
				}
			}

			if (xs_contact_subject.length > 0) {
				if (xs_contact_subject.val().trim() === '') {
					xs_contact_subject.addClass('invaild');
					xs_contact_error = true;
					xs_contact_subject.focus();
					return false;
				} else {
					xs_contact_subject.removeClass('invaild');
				}
			}

			if (x_contact_massage.length > 0) {
				if (x_contact_massage.val().trim() === '') {
					x_contact_massage.addClass('invaild');
					xs_contact_error = true;
					x_contact_massage.focus();
					return false;
				} else {
					x_contact_massage.removeClass('invaild');
				}
			}

			if (xs_contact_error === false) {
				xs_contact_submit.before().hide().fadeIn();
				$.ajax({
					type: "POST",
					url: "assets/php/contact-form.php",
					data: {
						'xs_contact_name': xs_contact_name.val(),
						'xs_contact_last_name': xs_contact_last_name.val(),
						'xs_contact_number': xs_contact_number.val(),
						'xs_contact_email': xs_contact_email.val(),
						'xs_contact_subject': xs_contact_subject.val(),
						'x_contact_massage': x_contact_massage.val()
					},
					success: function success(result) {
						xs_contact_submit.after('<p class="xpeedStudio_success_message">' + result + '</p>').hide().fadeIn();

						setTimeout(function () {
							$(".xpeedStudio_success_message").fadeOut(1000, function () {
								$(this).remove();
							});
						}, 5000);

						$('#xs-contact-form')[0].reset();
					}
				});
			}
		});

		/*==========================================================
  		26. video popup init
  ======================================================================*/
		if ($('.xs-video-popup').length > 0) {
			$('.xs-video-popup').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});
		}

		/*==========================================================
  	 27. Side Offset cart menu open
  ======================================================================*/
		if ($('.offset-side-bar').length > 0) {
			$('.offset-side-bar').on('click', function (e) {
				e.preventDefault();
				e.stopPropagation();
				$('.cart-group').addClass('isActive');
			});
		}
		if ($('.close-side-widget').length > 0) {
			$('.close-side-widget').on('click', function (e) {
				e.preventDefault();
				$('.cart-group').removeClass('isActive');
			});
		}
		if ($('.navSidebar-button').length > 0) {
			$('.navSidebar-button').on('click', function (e) {
				e.preventDefault();
				e.stopPropagation();
				$('.info-group').addClass('isActive');
			});
		}
		if ($('.close-side-widget').length > 0) {
			$('.close-side-widget').on('click', function (e) {
				e.preventDefault();
				$('.info-group').removeClass('isActive');
			});
		}
		$('body').on('click', function (e) {
			$('.info-group').removeClass('isActive');
			$('.cart-group').removeClass('isActive');
		});
		$('.xs-sidebar-widget').on('click', function (e) {
			e.stopPropagation();
		});

		/*=============================================================
  		 28. right click , ctrl+u and ctrl+shift+i disabled
  =========================================================================*/
		// $('body').on('contextmenu', function (e) {
		// 	// alert('right click disabled');
		// 	e.preventDefault();
		// 	e.stopPropagation();
		// 	return false;
		// });
		// $(document).on('keydown', function(e) {
		// 	if (
		// 			(e.ctrlKey && (e.keyCode == 85)) ||
		// 			(e.ctrlKey && (e.shiftKey && e.keyCode == 73)) ||
		// 			(e.ctrlKey && (e.shiftKey && e.keyCode == 75))
		// 			) {
		// 		return false;
		// 	} else {
		// 		return true;
		// 	}
		// })

		/*=============================================================
  		 29. instafeed init
  =========================================================================*/
		if ($('.insta-feed').length > 0) {
			$('.insta-feed').instaFeed({
				token: '2367672995.1677ed0.dea7a14501d04cd9982c7a0d23c716dd',
				photos: 6
			});
		}
		if ($('.insta-feed2').length > 0) {
			$('.insta-feed2').instaFeed({
				token: '2367672995.1677ed0.dea7a14501d04cd9982c7a0d23c716dd',
				photos: 8
			});
		}

		/*=============================================================
  		 30. modal popup
  =========================================================================*/
		if ($('.xs-modal-popup').length > 0) {
			$('.xs-modal-popup').magnificPopup({
				type: 'inline',
				fixedContentPos: false,
				fixedBgPos: true,
				overflowY: 'auto',
				closeBtnInside: false,
				callbacks: {
					beforeOpen: function beforeOpen() {
						this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
					}
				}
			});
		}

		/*=============================================================
  		 31. img default behavior off and dragable false
  =========================================================================*/
		if ($('img').length > 0) {
			$('img').each(function () {
				$(this).attr('draggable', 'false');
				$(this).on('mousedown', function (event) {
					if (event.preventDefault) {
						event.preventDefault();
					}
				});
			});
		}

		/*=============================================================
  		 32. office slider
  =========================================================================*/
		if ($('.agency-office-slider').length > 0) {
			$('.agency-office-slider').myOwl({
				items: 3,
				autoWidth: true,
				margin: 30,
				nav: true,
				navText: ['<i class="icon icon-arrow-left" />', '<i class="icon icon-arrow-right" />'],
				responsive: {
					0: {
						items: 1,
						autoWidth: false,
						nav: false,
						margin: 0
					},
					// breakpoint from 480 up
					480: {
						items: 1,
						autoWidth: false,
						nav: false,
						margin: 0
					},
					// breakpoint from 768 up
					768: {
						items: 2,
						autoWidth: false,
						nav: false
					},
					1024: {
						items: 3,
						autoWidth: true,
						nav: true
					}
				}
			});
		}

		/*=============================================================
  		 33. review slider
  =========================================================================*/
		if ($('.review-slider').length > 0) {
			$('.review-slider').myOwl({
				nav: true,
				navText: ['<i class="icon icon-left-arrows"></i>', '<i class="icon icon-right-arrow"></i>'],
				dots: true,
				responsive: {
					0: {
						nav: false
					},
					// breakpoint from 480 up
					480: {
						nav: false
					},
					// breakpoint from 768 up
					768: {
						nav: false
					},
					1024: {
						nav: true
					}
				}
			});
		}

		/*=============================================================
  		 34. clinet slider
  =========================================================================*/
		if ($('.client-slider').length > 0) {
			$('.client-slider').myOwl({
				items: 5,
				responsive: {
					0: {
						items: 1
					},
					// breakpoint from 480 up
					480: {
						items: 2
					},
					// breakpoint from 768 up
					768: {
						items: 3
					},
					1024: {
						items: 5
					}
				}
			});
		}

		/*=============================================================
  		 35. subscribe form
  =========================================================================*/
		if ($('.subscribe-form, .my-newsletter').length > 0) {
			$('.subscribe-form, .my-newsletter').ajaxChimp({
				url: 'https://facebook.us8.list-manage.com/subscribe/post?u=85f515a08b87483d03fee7755&amp;id=66389dc38b'
			});
		}

		/*=============================================================
  		 36. team slider
  =========================================================================*/
		if ($('.agency-team-slider').length > 0) {
			$('.agency-team-slider').myOwl({
				items: 4,
				autoplay: false,
				responsive: {
					0: {
						items: 1
					},
					// breakpoint from 480 up
					480: {
						items: 1
					},
					// breakpoint from 768 up
					768: {
						items: 2
					},
					1024: {
						items: 4
					}
				}
			});
		}

		/*=============================================================
  		 37. single team add hover class
  =========================================================================*/
		$('.agency-single-team').hover(function () {
			if (!$(this).parent().hasClass('hover')) {
				$(this).parent().addClass('hover');
			} else {
				$(this).parent().removeClass('hover');
			}
		});

		function piechartAnim() {
			var gradientColor1 = ['#b224ef', '#0369d1', '#ff4eb6'],
			    gradientColor2 = ['#5055fa', '#00ecbc', '#ffcb6d'],
			    chart = $('.chart'),
			    chartContent = $('.chart-content');
			for (var i = 0; i < $('.single-piechart').length; i++) {
				$(chart[i]).myGradientChart({
					barColor1: gradientColor1[i],
					barColor2: gradientColor2[i]
				});
				var attrValue = $(chart[i]).attr('data-percent');
				$(chartContent[i]).append('<span class="gradient-title" style="background: linear-gradient(90deg, ' + gradientColor1[i] + ' 0%, ' + gradientColor2[i] + ' 84%); color: ' + gradientColor1[i] + ';     -webkit-background-clip: text;">' + attrValue + '%</span>');
			}
		}
		piechartAnim();

		/*==========================================================
  		38. number counter and skill bar animation
  =======================================================================*/
		var number_percentage = $(".number-percentage");
		function animateProgressBar() {
			number_percentage.each(function () {
				$(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-animation-duration"), 10));
				var value = $(this).attr("data-value");
				$(this).closest('.single-skill-bar').find('.skill-track').animate({
					width: value + '%'
				}, 3500);
			});
		}

		/*=============================================================
  		 39. waypoint int
  =========================================================================*/
		if ($('.waypoint-tigger').length > 0) {
			var waypoint = new Waypoint({
				element: document.getElementsByClassName('waypoint-tigger'),
				handler: function handler(direction) {
					animateProgressBar();
				},
				offset: '50%'
			});
		}

		/*==========================================================
  		40. skill bar and number counter
  =======================================================================*/
		$.fn.animateNumbers = function (stop, commas, duration, ease) {
			return this.each(function () {
				var $this = $(this);
				var start = parseInt($this.text().replace(/,/g, ""), 10);
				commas = commas === undefined ? true : commas;
				$({
					value: start
				}).animate({
					value: stop
				}, {
					duration: duration == undefined ? 500 : duration,
					easing: ease == undefined ? "swing" : ease,
					step: function step() {
						$this.text(Math.floor(this.value));
						if (commas) {
							$this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
						}
					},
					complete: function complete() {
						if (parseInt($this.text(), 10) !== stop) {
							$this.text(stop);
							if (commas) {
								$this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
							}
						}
					}
				});
			});
		};

		/*=============================================================
  		 41. wow function init
  =========================================================================*/
		$(function () {
			var wow = new WOW({
				boxClass: 'wow',
				animateClass: 'animated',
				offset: 0,
				mobile: false,
				live: true,
				scrollContainer: null
			});
			wow.init();
		});

		/*=============================================================
  		 42. current page add class active on a
  =========================================================================*/
		var url = window.location.pathname,
		    activePage = url.substr(url.lastIndexOf('/') + 1);
		$('.nav-menu li a').each(function (e, i) {
			var currentPage = this.href.substr(this.href.lastIndexOf('/') + 1);
			if (activePage == currentPage) {
				$([i]).addClass("active");
				if ($([i]).parents().closest('.nav-submenu').parent('li')) {
					$([i]).parents().closest('.nav-submenu').parent('li').addClass('active');
				}
				$([i]).parent().addClass('active');
			}
		});

		/*=============================================================
  		 43. image popup
  =========================================================================*/
		if ($('.xs-image-popup').length > 0) {
			$('.xs-image-popup').magnificPopup({
				type: 'image',
				removalDelay: 500, //delay removal by X to allow out-animation
				callbacks: {
					beforeOpen: function beforeOpen() {
						// just a hack that adds mfp-anim class to markup
						this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
						this.st.mainClass = 'mfp-zoom-in';
					}
				},
				closeOnContentClick: true,
				midClick: true,
				gallery: {
					enabled: true
				}
			});
		}

		/*==========================================================
  			44. post gallery sider
  ======================================================================*/
		if ($('.post-gallery-slider').length > 0) {
			$('.post-gallery-slider').myOwl({
				nav: true,
				navText: ['<i class="icon icon-left-arrows" />', '<i class="icon icon-right-arrow" />']
			});
		}

		/*==========================================================
  			45. scroll view init
  ======================================================================*/
		$('.comment-reply-link').on('click', function (event) {
			event.preventDefault();
			$('#comment-form').scrollView();
		});

		/*==========================================================
  			46. parallax service
  ======================================================================*/
		if ($('.parallax-service').length > 0) {
			var swiper = new Swiper('.parallax-service', {
				direction: 'vertical',
				slidesPerView: 1,
				mousewheel: {
					invert: true,
					releaseOnEdges: true,
					forceToAxis: true
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				}
			});
		}

		/*==========================================================
  			47. select init
  ======================================================================*/
		if ($('.xs-select').length > 0) {
			$('.xs-select').mySelect();
		}

		/*==========================================================
  			48. product slider
  ======================================================================*/
		if ($('.product-slider, .about-slider').length > 0) {
			$('.product-slider, .about-slider').myOwl({
				dots: true,
				responsive: {
					0: {
						dots: false
					},
					768: {
						dots: true
					}
				}
			});
		}

		/*==========================================================
  			49. custom number
  ======================================================================*/
		if ($('.custom_number').length > 0) {
			$('.custom_number').customNumber({
				plusIcon: '<i class="icon icon-up-arrow2"></i>',
				minusIcon: '<i class="icon icon-down-arrow2"></i>'
			});
		}

		/*==========================================================
  			50. floating button
  ======================================================================*/
		if ($(".btn-floating").length > 0) {
			var content = $('.floating-icons-list');

			content.addClass('hidden');

			$('.btn-floating').each(function () {
				$(this).on('click', function (e) {
					e.preventDefault();

					$(this).next().toggleClass("open");
					$(this).next().toggleClass("hidden");

					if ($(this).hasClass('active')) {
						$(this).removeClass('active');
					} else {
						$(this).addClass('active');
					}
				});
			});
		}

		/*==========================================================
  			51. rate fraph
  ======================================================================*/
		if ($('.rate-graph').length > 0) {
			$('.rate-graph').each(function () {
				if ($(this).find('.rate-graph-bar').attr('data-percent') <= 100) {
					$(this).find('.rate-graph-bar').css({
						width: $(this).find('.rate-graph-bar').attr('data-percent') + '%'
					});
				} else {
					$(this).find('.rate-graph-bar').css({
						width: 100 + '%'
					});
				}
			});
		}

		/*==========================================================
  			52. banner slider
  ======================================================================*/
		if ($('.banner-slider, .quote-slider').length > 0) {
			$('.banner-slider, .quote-slider').myOwl({
				nav: true,
				navText: ['<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>'],
				responsive: {
					0: {
						nav: false
					},
					// breakpoint from 768 up
					768: {
						nav: true
					}
				}
			});
		}

		/*==========================================================
  			53. scroll to bottom
  ======================================================================*/
		if ($('.scrollto-button').length > 0) {
			$('.scrollto-button').goCurrentSection();
		}

		/*==========================================================
  			54. review slider
  ======================================================================*/
		if ($('.review-slider-preview').length > 0 && $('.review-slider-thumb').length > 0) {
			var syncPosition = function syncPosition(el) {
				//if you set loop to false, you have to restore this next line
				//var current = el.item.index;

				//if you disable loop you have to comment this block
				var count = el.item.count - 1;
				var current = Math.round(el.item.index - el.item.count / 2 - .5);

				if (current < 0) {
					current = count;
				}
				if (current > count) {
					current = 0;
				}

				//end block

				sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
				var onscreen = sync2.find('.owl-item.active').length - 1;
				var start = sync2.find('.owl-item.active').first().index();
				var end = sync2.find('.owl-item.active').last().index();

				if (current > end) {
					sync2.data('owl.carousel').to(current, 100, true);
				}
				if (current < start) {
					sync2.data('owl.carousel').to(current - onscreen, 100, true);
				}
			};

			var syncPosition2 = function syncPosition2(el) {
				if (syncedSecondary) {
					var number = el.item.index;
					sync1.data('owl.carousel').to(number, 100, true);
				}
			};

			var sync1 = $(".review-slider-preview"),
			    sync2 = $(".review-slider-thumb"),
			    slidesPerPage = 5,
			    syncedSecondary = true;

			sync1.owlCarousel({
				items: 1,
				slideSpeed: 2000,
				nav: false,
				autoplay: true,
				dots: false,
				loop: true,
				responsiveRefreshRate: 200
			}).on('changed.owl.carousel', syncPosition);

			sync2.on('initialized.owl.carousel', function () {
				sync2.find(".owl-item").eq(0).addClass("current");
			}).owlCarousel({
				items: slidesPerPage,
				dots: false,
				nav: false,
				smartSpeed: 200,
				slideSpeed: 500,
				slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
				responsiveRefreshRate: 100,
				responsive: {
					0: {
						items: 1
					},
					480: {
						items: 1
					},
					768: {
						items: 3
					},
					1024: {
						items: slidesPerPage
					}
				}
			}).on('changed.owl.carousel', syncPosition2);

			sync2.on("click", ".owl-item", function (e) {
				e.preventDefault();
				var number = $(this).index();
				sync1.data('owl.carousel').to(number, 300, true);
			});
		}

		/*==========================================================
  			55. bubble slider
  ======================================================================*/
		if ($('.bouble-slider-privew').length > 0 && $('.bouble-slider-thumb').length > 0) {
			var _syncPosition = function _syncPosition(el) {
				//if you set loop to false, you have to restore this next line
				//var current = el.item.index;

				//if you disable loop you have to comment this block
				var count = el.item.count - 1;
				var current = Math.round(el.item.index - el.item.count / 2 - .5);

				if (current < 0) {
					current = count;
				}
				if (current > count) {
					current = 0;
				}
				//end block

				sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
				var onscreen = sync2.find('.owl-item.active').length - 1;
				var start = sync2.find('.owl-item.active').first().index();
				var end = sync2.find('.owl-item.active').last().index();

				if (current > end) {
					sync2.data('owl.carousel').to(current, 100, true);
				}
				if (current < start) {
					sync2.data('owl.carousel').to(current - onscreen, 100, true);
				}
			};

			var _syncPosition2 = function _syncPosition2(el) {
				if (syncedSecondary) {
					var number = el.item.index;
					sync1.data('owl.carousel').to(number, 100, true);
				}
			};

			var sync1 = $(".bouble-slider-privew"),
			    sync2 = $(".bouble-slider-thumb"),
			    slidesPerPage = 5,
			    syncedSecondary = true;

			sync1.owlCarousel({
				items: 1,
				slideSpeed: 2000,
				nav: true,
				autoplay: true,
				dots: false,
				loop: true,
				mouseDrag: false,
				touchDrag: false,
				responsiveRefreshRate: 200,
				responsive: {
					0: {
						touchDrag: true
					},
					768: {
						touchDrag: true
					},
					1024: {
						touchDrag: false
					}
				},
				navText: ['<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>']
			}).on('changed.owl.carousel', _syncPosition);

			sync2.on('initialized.owl.carousel', function () {
				sync2.find(".owl-item").eq(0).addClass("current");
			}).owlCarousel({
				items: slidesPerPage,
				dots: false,
				nav: false,
				smartSpeed: 200,
				slideSpeed: 500,
				autoWidth: true,
				mouseDrag: false,
				touchDrag: false,
				slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
				responsiveRefreshRate: 100
			}).on('changed.owl.carousel', _syncPosition2);

			sync2.on("click", ".owl-item", function (e) {
				e.preventDefault();
				var number = $(this).index();
				sync1.data('owl.carousel').to(number, 300, true);
			});
		}

		/*==========================================================
  			56. single page menu
  ======================================================================*/
		if ($('.single-page-menu li a').length > 0) {
			$('.single-page-menu li a').on('click', function () {
				if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top
						}, 1000);
						return false;
					}
				}
			});
			$('.single-page-menu li a').on('click', function () {
				var panel = $('.nav-overlay-panel'),
				    menuWraper = $('.nav-menus-wrapper');

				if (menuWraper.hasClass('nav-menus-wrapper-open')) {
					menuWraper.removeClass('nav-menus-wrapper-open');
				}

				if (panel.css('display') === 'block') {
					panel.css('display', 'none');
				}

				if ($('.offcanvas-menu-wraper').hasClass('active')) {
					$('.offcanvas-menu-wraper').removeClass('active');
				}
				if ($('.fullscreen_menu_tigger').hasClass('open')) {
					$('.fullscreen_menu_tigger').removeClass('open');
				}
				if ($('.off-canvas-menu-area').hasClass('nav-is-open')) {
					$('.off-canvas-menu-area').removeClass('nav-is-open');
				}
			});
		}

		/*==========================================================
  			57. typed init
  ======================================================================*/
		if ($('.typed').length > 0) {
			var typed = new Typed('.typed', {
				strings: ["busy", "laziness"],
				typeSpeed: 40,
				loop: true,
				backSpeed: 40,
				backDelay: 500,
				startDelay: 1000
			});
		}

		/*==========================================================
  			58. material input
  ======================================================================*/
		if ($('.input-material').length > 0) {
			var input = $('.input-material .form-control');
			for (var i = 0; i < input.length; i++) {
				$(input[i]).wrap('<div class="form-group"></div>');
				$(input[i]).after('<span class="bar"></span>');
			}
			$(input).each(function (index, el) {
				var attrPlaceholder = $(el).attr('placeholder');
				$(el).after('<span class="placeholder-title">' + attrPlaceholder + '</span>');
				$(el).removeAttr('placeholder');
			});
			$(input).on('blur', function (event) {
				if ($(this).val()) {
					$(this).addClass('active');
				} else {
					$(this).removeClass('active');
				}
			});
		}

		/*==========================================================
  			59. call to action parallax
  ======================================================================*/
		if ($('#cal_to_action_animation').length > 0) {
			$('#cal_to_action_animation').parallax();
		}

		/*==========================================================
  			60. video popup
  ======================================================================*/
		if ($('.xs-map-popup').length > 0) {
			$('.xs-map-popup').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});
		}

		/*==========================================================
  			61. vertical slider
  ======================================================================*/
		var swiper = new Swiper('.vertical-slider', {
			direction: 'vertical',
			loop: false,
			mousewheel: false,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			}
		});

		/*==========================================================
  			62. offcanvas menu
  ======================================================================*/
		$('body').on('click', '.fullscreen_menu_tigger', function (e) {
			e.preventDefault();
			$(this).toggleClass('open');
			$(".offcanvas-menu-wraper").toggleClass("active");
			$('.off-canvas-menu-area').toggleClass('nav-is-open');
		});

		$('.off-canvas-menu-area').append('<div class="menu-overlay"></div>');

		if ($('.offcanvas-menu .inner-submenu').prev('a').hasClass('tigger')) {
			$('.offcanvas-menu .inner-submenu').prev().removeClass('tigger');
		} else {
			$('.offcanvas-menu .inner-submenu').prev().addClass('tigger');
		}
		$('.offcanvas-menu li .tigger').on('click', function (event) {
			event.preventDefault();
			if ($(this).next().hasClass('show')) {
				$(this).next().removeClass('show');
				$(this).next().slideUp(500);
				$(this).removeClass('active');
			} else {
				$(this).next().addClass('show');
				$(this).parent().parent().find('.offcanvas-menu li ul').removeClass('show');
				$(this).parent().parent().find('.offcanvas-menu li ul').slideUp(400);
				$(this).next().slideToggle(500);
				$(this).addClass('active');
			}
		});

		/*==========================================================
  				63. rev slider init (#rev_slider_8_1)
  ======================================================================*/
		var revapi8, tpj;
		(function () {
			if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded", onLoad);else onLoad();

			function onLoad() {
				if (tpj === undefined) {
					tpj = jQuery;if ("off" == "on") tpj.noConflict();
				}
				if (tpj("#rev_slider_8_1").revolution == undefined) {
					revslider_showDoubleJqueryError("#rev_slider_8_1");
				} else {
					revapi8 = tpj("#rev_slider_8_1").show().revolution({
						sliderType: "hero",
						jsFileLocation: "",
						sliderLayout: "fullwidth",
						dottedOverlay: "none",
						delay: 9000,
						navigation: {},
						viewPort: {
							enable: true,
							outof: "wait",
							visible_area: "100%",
							presize: false
						},
						responsiveLevels: [1240, 1024, 778, 480],
						visibilityLevels: [1240, 1024, 778, 480],
						gridwidth: [1240, 1024, 778, 480],
						gridheight: [868, 768, 960, 720],
						lazyType: "none",
						parallax: {
							type: "mouse",
							origo: "enterpoint",
							speed: 400,
							speedbg: 0,
							speedls: 0,
							levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
							disable_onmobile: "on"
						},
						shadow: 0,
						spinner: "spinner0",
						autoHeight: "off",
						disableProgressBar: "on",
						hideThumbsOnMobile: "off",
						hideSliderAtLimit: 0,
						hideCaptionAtLimit: 0,
						hideAllCaptionAtLilmit: 0,
						debugMode: false,
						fallbacks: {
							simplifyAll: "off",
							disableFocusListener: false
						}
					});
				}; /* END OF revapi call */
			}; /* END OF ON LOAD FUNCTION */
		})(); /* END OF WRAPPING FUNCTION */

		/*==========================================================
  				64. rev slider init (#rev_slider_15_1)
  ======================================================================*/
		var revapi15, tpj;
		(function () {
			if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded", onLoad);else onLoad();

			function onLoad() {
				if (tpj === undefined) {
					tpj = jQuery;if ("off" == "on") tpj.noConflict();
				}
				if (tpj("#rev_slider_15_1").revolution == undefined) {
					revslider_showDoubleJqueryError("#rev_slider_15_1");
				} else {
					revapi15 = tpj("#rev_slider_15_1").show().revolution({
						sliderType: "hero",
						jsFileLocation: "",
						sliderLayout: "fullwidth",
						dottedOverlay: "none",
						delay: 9000,
						navigation: {},
						viewPort: {
							enable: true,
							outof: "wait",
							visible_area: "100%",
							presize: false
						},
						responsiveLevels: [1240, 1024, 778, 480],
						visibilityLevels: [1240, 1024, 778, 480],
						gridwidth: [1240, 1024, 778, 480],
						gridheight: [868, 768, 960, 720],
						lazyType: "none",
						parallax: {
							type: "mouse",
							origo: "enterpoint",
							speed: 400,
							speedbg: 0,
							speedls: 0,
							levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
							disable_onmobile: "on"
						},
						shadow: 0,
						spinner: "spinner0",
						autoHeight: "off",
						disableProgressBar: "on",
						hideThumbsOnMobile: "off",
						hideSliderAtLimit: 0,
						hideCaptionAtLimit: 0,
						hideAllCaptionAtLilmit: 0,
						debugMode: false,
						fallbacks: {
							simplifyAll: "off",
							disableFocusListener: false
						}
					});
				}; /* END OF revapi call */
			}; /* END OF ON LOAD FUNCTION */
		})(); /* END OF WRAPPING FUNCTION */

		var revapi16, tpj;
		(function () {
			if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded", onLoad);else onLoad();

			function onLoad() {
				if (tpj === undefined) {
					tpj = jQuery;if ("off" == "on") tpj.noConflict();
				}
				if (tpj("#rev_slider_16_1").revolution == undefined) {
					revslider_showDoubleJqueryError("#rev_slider_16_1");
				} else {
					revapi16 = tpj("#rev_slider_16_1").show().revolution({
						sliderType: "hero",
						jsFileLocation: "",
						sliderLayout: "fullwidth",
						dottedOverlay: "none",
						delay: 9000,
						navigation: {},
						responsiveLevels: [1240, 1024, 778, 480],
						visibilityLevels: [1240, 1024, 778, 480],
						gridwidth: [1240, 1024, 778, 480],
						gridheight: [868, 768, 960, 720],
						lazyType: "none",
						parallax: {
							type: "mouse",
							origo: "enterpoint",
							speed: 400,
							speedbg: 0,
							speedls: 0,
							levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
							disable_onmobile: "on"
						},
						shadow: 0,
						spinner: "spinner0",
						autoHeight: "off",
						disableProgressBar: "on",
						hideThumbsOnMobile: "off",
						hideSliderAtLimit: 0,
						hideCaptionAtLimit: 0,
						hideAllCaptionAtLilmit: 0,
						debugMode: false,
						fallbacks: {
							simplifyAll: "off",
							disableFocusListener: false
						}
					});
				}; /* END OF revapi call */
			}; /* END OF ON LOAD FUNCTION */
		})(); /* END OF WRAPPING FUNCTION */

		if ($('.service-boxed').length > 0) {
			$('.service-boxed').on('mouseenter', function () {
				if (!$(this).hasClass('active')) {
					$(this).addClass('active');
				}
			});
			$('.service-boxed').on('mouseleave', function (e) {
				if ($(this).hasClass('active')) {
					$(this).removeClass('active');
				}
			});
		}

		if ($('.portfolio-testimonial-slider').length > 0) {
			var testimonialSlider = $('.portfolio-testimonial-slider');
			testimonialSlider.myOwl({
				loop: false,
				dots: true,
				animateIn: 'fadeIn',
				animateOut: 'fadeOut'
			});
			testimonialSlider.on('mousewheel', '.owl-stage', function (e) {
				if (e.deltaY > 0) {
					testimonialSlider.trigger('next.owl');
				} else {
					testimonialSlider.trigger('prev.owl');
				}
				e.preventDefault();
			});
		}

		$(document).on('click', '.backtotop', function (e) {
			e.preventDefault();
			$('body, html').stop().animate({
				scrollTop: 0
			}, 1000);
		});
	}); // end ready function

	$(window).on('scroll', function () {
		/*==========================================================
  			65. shuffle letters
  ======================================================================*/
		if ($('.shuffle-letter-title-wraper').length > 0) {
			$('.shuffle-letter-title-wraper').each(function (e) {
				if ($(this).onScreen() && !$(this).hasClass('shuffle-title')) {
					setTimeout(function () {
						$(this).find('.shuufle-letter-title').shuffleLetters();
						$(this).addClass('shuffle-title');
					}.bind(this), 400);
				}
			});
		}
	}); // END Scroll Function

	$(window).on('resize', function () {

		/* content to center */
		contentToCenter();

		/* set logo */
		setLogo();

		/* equal height */
		equalHeight();
	}); // End Resize

	/*==========================================================
 			66. XpeedStudio Maps
 ======================================================================*/

	if ($('#xs-map').length > 0) {
		var init = function init() {
			// Basic options for a simple Google Map
			var mapOptions = {
				// How zoomed in you want the map to start at (always required)
				zoom: 11,

				// The latitude and longitude to center the map (always required)
				center: new google.maps.LatLng(40.6700, -73.9400), // New York

				// How you would like to style the map.
				// This is where you would paste any style found on Snazzy Maps.
				styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
			};

			// Get the HTML DOM element that will contain your map
			// We are using a div with id="map" seen below in the <body>
			var mapElement = document.getElementById('xs-map');

			// Create the Google Map using our element and options defined above
			var map = new google.maps.Map(mapElement, mapOptions);

			var mapPin = 'assets/images/map-marker.png';

			// Let's also add a marker while we're at it
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(40.6700, -73.9400),
				icon: mapPin,
				map: map,
				title: 'Agencyfi!'
			});
		};

		// When the window has finished loading create our google map below
		google.maps.event.addDomListener(window, 'load', init);
	}
})(jQuery);