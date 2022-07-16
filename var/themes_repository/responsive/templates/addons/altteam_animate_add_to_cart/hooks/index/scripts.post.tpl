{script src="js/addons/altteam_animate_add_to_cart/jquery.animateAddToCart.js"}
{script src="js/addons/altteam_animate_add_to_cart/func.js"}

<script type="text/javascript">
(function(_, $) {

	var altteam_animate_add_to_cart = {};

	altteam_animate_add_to_cart.settings = {
		animateAddToCart: 	{if $addons.altteam_animate_add_to_cart.animateAddToCart == 'Y'}true{else}false{/if},
		animateWishlist:  	{if $addons.altteam_animate_add_to_cart.animateWishlist == 'Y'}true{else}false{/if},
		percentageWidth: 	"{$addons.altteam_animate_add_to_cart.percentageWidth}"
	};

	_.altteam_animate_add_to_cart = altteam_animate_add_to_cart;
$.extend({});
}(Tygh, Tygh.$));
</script>