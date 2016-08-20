 (function($) {
	$.fn.trunc = function (settings) {
	
		var config = {
			showChars: 100,
			ellipsesText: "...",
			moreText: "more",
			minimizText: "less"
		};

		if (settings) {
			$.extend(config, settings);
		}
		
		$(document).off("click", '.linkMore');
		
		$(document).on({click: function () {

				var $this = $(this);
				if ($this.hasClass('minimize')) {
					$this.removeClass('minimize');
					$this.html(config.moreText);
				} else {
					$this.addClass('minimize');
					$this.html(config.minimizText);
				}
				$this.parent().prev().toggle('');
				$this.prev().toggle('');
				return false;
			}
		}, '.linkMore');

		return this.each(function () {
			var $this = $(this);
			if($this.hasClass("shorten")) return;

			$this.addClass("shorten");
			var content = $this.html();
			if (content.length > config.showChars) {
				var findChars = content.substr(0, config.showChars);
				var findCharsLength = content.substr(config.showChars, content.length - config.showChars);
				var html = findChars + '<span class="moreellipses">' + config.ellipsesText + ' </span><span class="moreInfo"><span>' + findCharsLength + '</span> <a href="#" class="linkMore">' + config.moreText + '</a></span>';
				$this.html(html);
				$(".moreInfo span").hide();
			}
		});


	};

 })(jQuery);

