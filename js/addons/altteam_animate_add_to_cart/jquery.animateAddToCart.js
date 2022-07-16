(function($){
	$.fn.extend({
		animateAddToCart: function(dynamicParams)
		{
	//		default cart block
			var cartObj = dynamicParams.cartObj || $('[id ^= cart_status_]');
			
	//		finish image style
			var params = {
				offsetTop: 0,				//offset from the cart block
				zIndex: 2000,
				opacity: 0.5,
				width: cartObj.width(),		//default: cart block with
				height: 0,					//default: automatically determined from width
				duration: 1100
			};
			
			$.extend(params, dynamicParams);
			
			var cartObjParams = {
					'top' : cartObj.offset().top - params.offsetTop + 'px',
					'left' : cartObj.offset().left + 'px',
			};

			this.each(function() {
				
				var obj = $(this);

				if (obj.hasClass("product-to-cart-copy")) {
					return true;
				}
				
				if (params.percentageWidth) {
					params.width = obj.width() * params.percentageWidth;
				}

				obj.clone()
					.prependTo("body")
					.attr("class", "product-to-cart-copy")
					.css({
						'z-index' : params.zIndex,
						'position' : 'absolute',
						'top' : obj.offset().top - obj.height() + 'px',
						'left' : obj.offset().left + 'px',
					})
					.animate({
						opacity: params.opacity,
						top: cartObjParams.top,
						left: cartObjParams.left,
						width: params.width,
						height: params.height || '-=' + Math.ceil(obj.height() * (1 - params.width / obj.width()))
					}, params.duration, function() {$(this).remove();});
			});

			return this;
		}
	});
}(jQuery));