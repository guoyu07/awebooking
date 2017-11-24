<?php
namespace AweBooking\Admin\Settings;

use AweBooking\AweBooking;

class General_Setting extends Setting_Abstract {
	/**
	 * Register settings.
	 *
	 * @return void
	 */
	public function register() {
		$section = $this->settings->add_section( 'general', [
			'title' => esc_html__( 'General', 'awebooking' ),
			'priority' => 10,
			'capability' => 'manage_awebooking',
		]);

		$section->add_field( array(
			'id'   => '__general_system__',
			'type' => 'title',
			'name' => esc_html__( 'AweBooking General', 'awebooking' ),
			'priority' => 10,
		) );

		$section->add_field( array(
			'id'       => 'property_name',
			'type'     => 'text',
			'name'     => esc_html__( 'Property name', 'awebooking' ),
			'priority' => 11,
		) );

		$section->add_field( array(
			'id'       => 'accommodation_type',
			'type'     => 'select',
			'name'     => esc_html__( 'Accommodation type', 'awebooking' ),
			'options'  => [
				'' => '',
			],
			'priority' => 12,
		) );

		$section->add_field( array(
			'id'       => 'enable_location',
			'type'     => 'toggle',
			'name'     => esc_html__( 'Multi hotel location?', 'awebooking' ),
			'default'  => awebooking( 'setting' )->get_default( 'enable_location' ),
			'priority' => 13,
		) );

		$section->add_field( array(
			'id'       => 'location_default',
			'type'     => 'select',
			'name'     => esc_html__( 'Default location', 'awebooking' ),
			'description' => esc_html__( 'Select a default location.', 'awebooking' ),
			'options_cb'  => wp_data_callback( 'terms',  array(
				'taxonomy'   => AweBooking::HOTEL_LOCATION,
				'hide_empty' => false,
			)),
			'validate' => 'integer',
			'deps'     => array( 'enable_location', '==', true ),
			'priority' => 14,
		) );

		$section->add_field( array(
			'id'       => 'star',
			'type'     => 'select',
			'name'     => esc_html__( 'Star', 'awebooking' ),
			'options'  => [
				1 => '&#9733;',
				2 => '&#9733;&#9733;',
				3 => '&#9733;&#9733;&#9733;',
				4 => '&#9733;&#9733;&#9733;&#9733;',
				5 => '&#9733;&#9733;&#9733;&#9733;&#9733;',
			],
			'priority' => 15,
		) );

		$section->add_field( array(
			'id'       => 'address',
			'type'     => 'text',
			'name'     => esc_html__( 'Address', 'awebooking' ),
			'priority' => 16,
		) );

		$section->add_field( array(
			'id'       => 'address_supplement',
			'type'     => 'text',
			'name'     => esc_html__( 'Address 2', 'awebooking' ),
			'priority' => 17,
		) );

		$section->add_field( array(
			'id'       => 'country',
			'type'     => 'select',
			'name'     => esc_html__( 'Country', 'awebooking' ),
			'options'  => [
				'' => '',
			],
			'priority' => 18,
		) );

		$section->add_field( array(
			'id'       => 'city',
			'type'     => 'select',
			'name'     => esc_html__( 'City', 'awebooking' ),
			'options'  => [
				'' => '',
			],
			'priority' => 19,
		) );

		$section->add_field( array(
			'id'       => 'zipcode',
			'type'     => 'text_small',
			'name'     => esc_html__( 'Zipcode', 'awebooking' ),
			'priority' => 20,
		) );

		$section->add_field( array(
			'id'       => 'phone',
			'type'     => 'text',
			'name'     => esc_html__( 'Phone', 'awebooking' ),
			'priority' => 21,
		) );

		$section->add_field( array(
			'id'       => 'phone_2',
			'type'     => 'text',
			'name'     => esc_html__( 'Phone 2', 'awebooking' ),
			'priority' => 22,
		) );

		$section->add_field( array(
			'id'       => 'map',
			'type'     => 'map',
			'name'     => esc_html__( 'Map', 'awebooking' ),
			'priority' => 23,
		) );

		$section->add_field( array(
			'id'       => 'checkin_start',
			'type'     => 'text_time',
			'name'     => esc_html__( 'Check-in start', 'awebooking' ),
			'priority' => 25,
		) );

		$section->add_field( array(
			'id'       => 'checkin_end',
			'type'     => 'text_time',
			'name'     => esc_html__( 'Check-in end', 'awebooking' ),
			'priority' => 26,
		) );

		$section->add_field( array(
			'id'       => 'checkout_start',
			'type'     => 'text_time',
			'name'     => esc_html__( 'Check-out start', 'awebooking' ),
			'priority' => 28,
		) );

		$section->add_field( array(
			'id'       => 'checkout_end',
			'type'     => 'text_time',
			'name'     => esc_html__( 'Check-out end', 'awebooking' ),
			'priority' => 29,
		) );

		$section->add_field( array(
			'id'       => 'children_bookable',
			'type'     => 'toggle',
			'name'     => esc_html__( 'Children bookable?', 'awebooking' ),
			'default'  => awebooking( 'setting' )->get_default( 'children_bookable' ),
			'priority' => 31,
			'render_field_cb'   => array( $this, '_children_able_field_callback' ),
		));

		$section->add_field( array(
			'type'     => 'text',
			'id'       => 'children_bookable_description',
			'name'     => esc_html__( 'Description', 'awebooking' ),
			'default'  => awebooking( 'setting' )->get_default( 'children_bookable_description' ),
			'priority' => 32,
			'attributes' => [
				'placeholder' => esc_html__( 'Description', 'awebooking' ),
			],
			'deps'     => array( 'children_bookable', '==', true ),
			'show_on_cb' => '__return_false',
		) );

		$section->add_field( array(
			'id'       => 'infants_bookable',
			'type'     => 'toggle',
			'name'     => esc_html__( 'Infants bookable?', 'awebooking' ),
			'default'  => awebooking( 'setting' )->get_default( 'infants_bookable' ),
			'priority' => 33,
			'render_field_cb'   => array( $this, '_infants_able_field_callback' ),
		) );

		$section->add_field( array(
			'type'     => 'text',
			'id'       => 'infants_bookable_description',
			'name'     => esc_html__( 'Description', 'awebooking' ),
			'priority' => 34,
			'deps'     => array( 'infants_bookable', '==', true ),
			'default'  => awebooking( 'setting' )->get_default( 'infants_bookable_description' ),
			'attributes' => [
				'placeholder' => esc_html__( 'Description', 'awebooking' ),
			],
			'show_on_cb' => '__return_false',
		) );

		$section->add_field( array(
			'id'       => 'pets_allowed',
			'type'     => 'toggle',
			'name'     => esc_html__( 'Pets allowed?', 'awebooking' ),
			'default'  => true,
			'priority' => 35,
		) );

		$section->add_field( array(
			'id'   => '__general_currency__',
			'type' => 'title',
			'name' => esc_html__( 'Currency Options', 'awebooking' ),
			'priority' => 40,
		) );

		$section->add_field( array(
			'id'       => 'currency',
			'type'     => 'select',
			'name'     => esc_html__( 'Currency', 'awebooking' ),
			'default' => awebooking( 'setting' )->get_default( 'currency' ),
			'options_cb'  => function() {
				return awebooking( 'currency_manager' )->get_for_dropdown( '%name (%symbol)' );
			},
			'priority' => 41,
		) );

		$section->add_field( array(
			'id'       => 'currency_position',
			'type'     => 'select',
			'name'     => esc_html__( 'Currency position', 'awebooking' ),
			// 'desc'     => esc_html__( 'Controls the position of the currency symbol.', 'awebooking' ),
			'default'  => awebooking( 'setting' )->get_default( 'currency_position' ),
			'validate' => 'required',
			'options'  => awebooking( 'setting' )->get_currency_positions(),
			'priority' => 42,
		) );

		$section->add_field( array(
			'type'     => 'text_small',
			'id'       => 'price_thousand_separator',
			'name'     => esc_html__( 'Thousand separator', 'awebooking' ),
			// 'desc'     => esc_html__( 'Sets the thousand separator of displayed prices.', 'awebooking' ),
			'default'  => awebooking( 'setting' )->get_default( 'price_thousand_separator' ),
			'validate' => 'required',
			'priority' => 43,
		) );

		$section->add_field( array(
			'type'     => 'text_small',
			'id'       => 'price_decimal_separator',
			'name'     => esc_html__( 'Decimal separator', 'awebooking' ),
			// 'desc'     => esc_html__( 'Sets the decimal separator of displayed prices.', 'awebooking' ),
			'default'  => awebooking( 'setting' )->get_default( 'price_decimal_separator' ),
			'validate' => 'required',
			'priority' => 44,
		) );

		$section->add_field( array(
			'type'       => 'text_small',
			'id'         => 'price_number_decimals',
			'name'       => esc_html__( 'Number of decimals', 'awebooking' ),
			'default'    => awebooking( 'setting' )->get_default( 'price_number_decimals' ),
			'validate'   => 'required|integer|min:0',
			'attributes' => array(
				'min'  => 0,
				'type' => 'number',
			),
			'priority' => 45,
		) );
	}

	/**
	 * Children bookable callback.
	 *
	 * @return void
	 */
	public function _children_able_field_callback( $field_args, $field ) {
		$cmb2 = $field->get_cmb();
		$children_description = $cmb2->get_field( 'children_bookable_description' );

		skeleton_render_field( $field );

		echo '<div data-fieldtype="input" data-deps="children_bookable" data-deps-condition="==" data-deps-value="1" style="display: none">';
		echo '<p class="cmb2-metabox-description">', esc_html__( 'Write some thing about this, eg: Ages 2 - 12.', 'awebooking' ), '</p>';
		$children_description->render();
		echo '</div>';

		$children_description->errors();
	}

	/**
	 * Infants bookable callback.
	 *
	 * @return void
	 */
	public function _infants_able_field_callback( $field_args, $field ) {
		$cmb2 = $field->get_cmb();
		$infants_description = $cmb2->get_field( 'infants_bookable_description' );

		skeleton_render_field( $field );

		echo '<div data-fieldtype="input" data-deps="infants_bookable" data-deps-condition="==" data-deps-value="1" style="display: none">';
		echo '<p class="cmb2-metabox-description">', esc_html__( 'Write some thing about this, eg: Under 2.', 'awebooking' ), '</p>';
		$infants_description->render();
		echo '</div>';

		$infants_description->errors();
	}
}
