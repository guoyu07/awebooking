<?php
namespace AweBooking\Admin\Controllers;

use AweBooking\Setting;
use AweBooking\AweBooking;
use Awethemes\Http\Request;
use Awethemes\Http\Redirect_Response;
use AweBooking\Admin\Controllers\Controller_Abstract;

class Setting_Controller extends Controller_Abstract {

	public function save( Request $request ) {
		echo 123;
		// return $this->redirect( $this->url->get_admin_setting_url() );
	}

}
