(function(_, $) {
	$(document).ready(function() {
		var cartBlock 			= {};															// move image for this block if add to cart
		var wishlistBlock 		= {};															// move image for this block if add tu wishlist
		var addonData 			= _.altteam_animate_add_to_cart;								// add-on settings
		var percentageWidth 	= addonData.settings.percentageWidth || 0.5;					// percentage image coeficient
		var animateAddToCart 	= addonData.settings.animateAddToCart;							// animate add to cart status
		var animateWishlist 	= addonData.settings.animateWishlist;							// animate wishlist status
		var addToCartClass		= '.ty-btn__add-to-cart, input[type = submit][id ^= button_cart]'; // add to cart button class
		var addToWishlistClass	= '.ty-add-to-wish, .add-to-wish';								// add to wishlist button class
		// image animate to cart content block. If want animate to another block, add animate-add-to-cart for it.
		if (animateAddToCart) {
			cartBlock = $('.animate-add-to-cart').length ? $('.animate-add-to-cart').eq(0) : $('[id ^= cart_status_]').eq(0);
		};
		// add animate-add-to-wishlist to animation block
		if (animateWishlist) {
			wishlistBlock = $('.animate-add-to-wishlist').eq(0);
		};
		// Add to cart button
		if (cartBlock.length > 0) {
			$('div[id ^= add_to_cart_update], div[id ^= category_products]').on('click', addToCartClass, function() {
				if (~$(this).attr('id').indexOf("button_cart")) {
					var id = $(this).attr('id').str_replace("button_cart", 'det_img');
					$('img[id ^= ' + id + ']:visible').eq(0).animateAddToCart({'percentageWidth' : percentageWidth, 'cartObj' : cartBlock});
				}
			});
		}
		// Add to wish list button
		if (wishlistBlock.length > 0) {
			$('div[id ^= add_to_cart_update], div[id ^= category_products]').on('click', addToWishlistClass, function() {
				if (~$(this).attr('id').indexOf("button_wishlist")) {
					var id = $(this).attr('id').str_replace("button_wishlist", 'det_img');
					$('img[id ^= ' + id + ']:visible').eq(0).animateAddToCart({'percentageWidth' : percentageWidth, 'cartObj' : wishlistBlock});
				}
			});
		};
	});
}(Tygh, Tygh.$));