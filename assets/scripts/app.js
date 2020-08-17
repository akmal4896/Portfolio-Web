const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Stastical data analysis",
				weight: 12.3
			}, {
				text: "R",
				weight: 8
			}, {
				text: "Python",
				weight: 14
			}, {
				text: "tech news",
				weight: 3
			}, {
				text: "research",
				weight: 7
			}, {
				text: "Machine Learning",
				weight: 10
			}, {
				text: "Cloud services",
				weight: 9
			}, {
				text: "Webapps",
				weight: 15
			}, {
				text: "troubleshooting",
				weight: 7
			}
		];
		return words;
	}

	$(function () {
    	$('#btn1').click(function () {
        	$('#datalist1 li:hidden').show();
        	if ($('#datalist1 li').length == $('#datalist1 li:visible').length) {
            	$('#btn1 ').hide();
        	}
    	});
	});

	$(function () {
    	$('#btn2').click(function () {
        	$('#datalist2 li:hidden').show();
        	if ($('#datalist2 li').length == $('#datalist2 li:visible').length) {
            	$('#btn2 ').hide();
        	}
    	});
	});

	$(function () {
    	$('#btn3').click(function () {
        	$('#datalist3 li:hidden').show();
        	if ($('#datalist3 li').length == $('#datalist3 li:visible').length) {
            	$('#btn3 ').hide();
        	}
    	});
	});

	$(function () {
    	$('#btn8').click(function () {
        	$('#datalist8 li:hidden').show();
        	if ($('#datalist8 li').length == $('#datalist8 li:visible').length) {
            	$('#btn8 ').hide();
        	}
    	});
	});

	$(function () {
    	$('#btn4').click(function () {
        	$('#datalist4 li:hidden').show();
        	if ($('#datalist4 li').length == $('#datalist4 li:visible').length) {
            	$('#btn4 ').hide();
        	}
    	});
	});

	$(function () {
    	$('#btn5').click(function () {
        	$('#datalist5 li:hidden').show();
        	if ($('#datalist5 li').length == $('#datalist5 li:visible').length) {
            	$('#btn5 ').hide();
        	}
    	});
	});

	$(function () {
    	$('#btn6').click(function () {
        	$('#datalist6 li:hidden').show();
        	if ($('#datalist6 li').length == $('#datalist6 li:visible').length) {
            	$('#btn6 ').hide();
        	}
    	});
	});

	$(function () {
    	$('#btn7').click(function () {
        	$('#datalist7 li:hidden').show();
        	if ($('#datalist7 li').length == $('#datalist7 li:visible').length) {
            	$('#btn7 ').hide();
        	}
    	});
	});

	$(function () {
    	$('#btn9').click(function () {
        	$('#datalist9 li:hidden').show();
        	if ($('#datalist9 li').length == $('#datalist9 li:visible').length) {
            	$('#btn9 ').hide();
        	}
    	});
	});

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Chemist.", "love research and data analysis.", "passionate with web programming.", "am a self-taught developer."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
