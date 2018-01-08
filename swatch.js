(function($) {
	$.fn.swatch = function(options) {
		
		return this.each(function() {
			var that = $(this);
			
			var colors = typeof that.data('colors') === 'string' ? that.data('colors').split(',') : that.data('colors');
			var container = $('<div/>', {class: 'color-select'});
			
			for(var i=0; i<colors.length; i++) {
				container.append($('<p/>', {'title': colors[i]}).css({'background-color': colors[i]}));
			}
			
			that.append(container);
		});
	};
}(jQuery));
