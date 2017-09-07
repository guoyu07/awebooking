<?php
/**
 * AweBooking bootstrap file.
 *
 * @package AweBooking
 */

// We require our framework if needed.
if ( ! defined( 'AWETHEMES_SKELETON_LOADED' ) ) {
	if ( file_exists( __DIR__ . '/skeleton/skeleton.php' ) ) {
		require_once trailingslashit( __DIR__ ) . '/skeleton/skeleton.php';
	} elseif ( file_exists( __DIR__ . '/vendor/awethemes/skeleton/skeleton.php' ) ) {
		require_once trailingslashit( __DIR__ ) . '/vendor/awethemes/skeleton/skeleton.php';
	} else {
		wp_die( '<h1>Something went wrong!</h1> <p>AweBooking can\'t works without the Skeleton. Please double-check that everything is setup correctly!</p>' );
	}
}

/**
 * We need autoload via Composer to make everything works.
 */
require trailingslashit( __DIR__ ) . 'vendor/autoload.php';

require_once trailingslashit( __DIR__ ) . 'vendor/ericmann/wp-session-manager/wp-session-manager.php';
require_once trailingslashit( __DIR__ ) . 'vendor/webdevstudios/taxonomy_single_term/class.taxonomy-single-term.php';

require_once trailingslashit( __DIR__ ) . 'inc/functions.php';
require_once trailingslashit( __DIR__ ) . 'inc/template-functions.php';

WP_Session::get_instance();

// Make AweBooking\AweBooking as AweBooking alias.
class_alias( 'AweBooking\\AweBooking', 'AweBooking' );

// Skeleton Support.
skeleton()->trigger( new AweBooking\Skeleton_Hooks );
