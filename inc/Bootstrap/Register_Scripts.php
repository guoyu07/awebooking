<?php
namespace AweBooking\Bootstrap;

use AweBooking\AweBooking;
use AweBooking\Constants;

class Register_Scripts {
	/**
	 * Bootstrap the AweBooking.
	 *
	 * @param  AweBooking $awebooking The AweBooking instance.
	 * @return void
	 */
	public function bootstrap( AweBooking $awebooking ) {
		add_action( 'admin_enqueue_scripts', [ $this, 'register_admin_scripts' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_admin_scripts' ], 20 );

		add_action( 'wp_enqueue_scripts', [ $this, 'awebooking_template_scripts' ], 20 );
	}

	/**
	 * Register admin scripts.
	 *
	 * @access private
	 */
	public function register_admin_scripts() {
		$version = AweBooking::VERSION;
		$awebooking_url = awebooking()->plugin_url();

		// Register vendor styles and scripts.
		wp_register_style( 'select2', $awebooking_url . '/assets/css/select2.css', [], '4.0.3' );
		wp_register_style( 'awebooking-admin', $awebooking_url . '/assets/css/admin.css', [ 'wp-jquery-ui-dialog', 'select2' ], $version );

		wp_register_script( 'moment', $awebooking_url . '/assets/js/moment/moment.js', [], '2.18.1' );
		wp_register_script( 'select2', $awebooking_url . '/assets/js/select2/select2.full.js', [ 'jquery' ], '4.0.3' );

		wp_register_script( 'awebooking-yearly-calendar', $awebooking_url . '/assets/js/abkng-calendar/yearly-calendar.js', [ 'wp-backbone' ], $version, true );
		wp_register_script( 'awebooking-pricing-calendar', $awebooking_url . '/assets/js/abkng-calendar/pricing-calendar.js', [ 'wp-backbone' ], $version, true );

		// Register awebooking main styles and scripts.
		$deps = [ 'awebooking-manifest', 'awebooking-vendor', 'moment', 'select2', 'wp-util', 'jquery-effects-highlight', 'jquery-ui-dialog', 'jquery-ui-datepicker' ];
		wp_register_script( 'awebooking-manifest', $awebooking_url . '/assets/js/admin/manifest.js', [], $version, true );
		wp_register_script( 'awebooking-vendor', $awebooking_url . '/assets/js/admin/vendor.js', [], $version, true );
		wp_register_script( 'awebooking-admin', $awebooking_url . '/assets/js/admin/awebooking.js', $deps, $version, true );

		wp_register_script( 'awebooking-edit-booking', awebooking()->plugin_url() . '/assets/js/admin/edit-booking.js', array( 'awebooking-admin' ), $version, true );
		wp_register_script( 'awebooking-edit-service', awebooking()->plugin_url() . '/assets/js/admin/edit-service.js', array( 'awebooking-admin' ), $version, true );
		wp_register_script( 'awebooking-edit-room-type', awebooking()->plugin_url() . '/assets/js/admin/edit-room-type.js', array( 'awebooking-admin' ), $version, true );

		wp_register_script( 'awebooking-manager-pricing', $awebooking_url . '/assets/js/admin/manager-pricing.js', [ 'awebooking-admin', 'awebooking-pricing-calendar' ], $version, true );
		wp_register_script( 'awebooking-manager-availability', $awebooking_url . '/assets/js/admin/manager-availability.js', [ 'awebooking-admin', 'awebooking-yearly-calendar' ], $version, true );
		wp_register_script( 'awebooking-schedule-calendar', $awebooking_url . '/assets/js/admin/schedule-calendar.js', [ 'backbone', 'awebooking-admin' ], $version, true );

		// Send AweBooking object.
		wp_localize_script( 'awebooking-admin', '_awebookingSettings', array(
			'ajax_url'    => esc_url( admin_url( 'admin-ajax.php' ) ),
			'admin_route' => esc_url( awebooking( 'url' )->admin_route( '/' ) ),
			'strings'     => [
				'warning'              => esc_html__( 'Are you sure you want to do this?', 'awebooking' ),
				'ask_reduce_the_rooms' => esc_html__( 'Are you sure you want to do this?', 'awebooking' ),
			],
		));

		do_action( 'awebooking/register_admin_scripts' );
	}

	/**
	 * Enqueue admin scripts.
	 *
	 * @access private
	 */
	public function enqueue_admin_scripts() {
		$screen = get_current_screen();

		/**
		 * Hack for checking submenu-page ID correcly.
		 *
		 * WP core use menu_title to construct subpage load-hooks, so when "AweBooking"
		 * (which we use in Menu) is translated to something else, $screen->id will change.
		 *
		 * @see https://www.skyverge.com/blog/screen-id-checks-wordpress-submenu-pages/
		 *
		 * @var string
		 */
		$awebooking_screen_id = sanitize_title( esc_html__( 'AweBooking', 'awebooking' ) );

		wp_enqueue_style( 'cmb2-styles' );
		wp_enqueue_style( 'awebooking-admin' );
		wp_enqueue_script( 'awebooking-admin' );

		if ( Constants::ROOM_TYPE === $screen->id ) {
			wp_enqueue_script( 'awebooking-edit-room-type' );
		}

		if ( Constants::BOOKING === $screen->id ) {
			wp_enqueue_script( 'awebooking-edit-booking' );
		}

		if ( $awebooking_screen_id . '_page_manager-pricing' === $screen->id ) {
			wp_enqueue_script( 'awebooking-manager-pricing' );
		}

		if ( $awebooking_screen_id . '_page_manager-awebooking' === $screen->id ) {
			wp_enqueue_script( 'awebooking-manager-availability' );
		}
	}

	public function awebooking_template_scripts() {
		wp_enqueue_style( 'awebooking-template', awebooking()->plugin_url() . '/assets/css/awebooking.css', array(), AweBooking::VERSION );
		wp_register_style( 'magnific-popup', awebooking()->plugin_url() . '/assets/css/magnific-popup.css', array(), '1.1.0' );

		wp_enqueue_style( 'magnific-popup' );

		wp_enqueue_script( 'jquery-ui-accordion' );
		wp_enqueue_script( 'jquery-ui-datepicker' );
		wp_enqueue_script( 'awebooking', awebooking()->plugin_url() . '/assets/js/front-end/awebooking.js', array( 'jquery' ), AweBooking::VERSION, true );
		wp_register_script( 'magnific-popup', awebooking()->plugin_url() . '/assets/js/magnific-popup/jquery.magnific-popup.min.js', array( 'jquery' ), '1.1.0', true );
		wp_enqueue_script( 'magnific-popup' );

		wp_enqueue_script( 'booking-ajax', awebooking()->plugin_url() . '/assets/js/front-end/booking-handler.js', array( 'jquery' ), AweBooking::VERSION, true );
		wp_localize_script( 'booking-ajax', 'booking_ajax', array(
			'ajax_url' => admin_url( 'admin-ajax.php' ),
		));

		wp_localize_script( 'awebooking', 'AweBooking', array(
			'ajax_url'   => admin_url( 'admin-ajax.php' ),
			'route_url'  => awebooking( 'url' )->route(),
		));

		wp_register_script( 'awebooking-manifest', awebooking()->plugin_url() . '/assets/js/frontend/manifest.js', [], AweBooking::VERSION, true );
		wp_register_script( 'awebooking-vendor', awebooking()->plugin_url() . '/assets/js/frontend/vendor.js', [], AweBooking::VERSION, true );

		// Register awebooking main styles and scripts.
		$deps = [ 'awebooking-manifest', 'awebooking-vendor' ];

		wp_enqueue_script( 'awebooking-cart', awebooking()->plugin_url() . '/assets/js/frontend/cart.js', $deps, AweBooking::VERSION, true );

		global $wp_locale;

		wp_localize_script( 'awebooking', '_awebookingDateSetting', array(
			'i10n' => [
				'locale'        => get_locale(),
				'months'        => array_values( $wp_locale->month ),
				'monthsShort'   => array_values( $wp_locale->month_abbrev ),
				'weekdays'      => array_values( $wp_locale->weekday ),
				'weekdaysMin'   => array_values( $wp_locale->weekday_initial ),
				'weekdaysShort' => array_values( $wp_locale->weekday_abbrev ),
			],
		));
	}
}
