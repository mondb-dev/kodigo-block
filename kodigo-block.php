<?php
/**
 * Plugin Name:     Kodigo Block
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     kodigo-block
 *
 * @package         create-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_block_kodigo_block_block_init() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/kodigo-block" block first.'
		);
	}

	wp_enqueue_editor();
	wp_enqueue_media();
	wp_enqueue_style( 'wp-color-picker' );

	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	
	wp_register_script( 'kodigo-utils', plugins_url( '/src/kodigo-utils.js', __FILE__ ),  array(), uniqid() );
	
	$script_asset['dependencies'][] = 'wp-editor';
	$script_asset['dependencies'][] = 'wp-color-picker';
	$script_asset['dependencies'][] = 'jquery-ui-dialog';
	$script_asset['dependencies'][] = 'kodigo-utils';


	wp_register_script(
		'create-block-kodigo-block-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	wp_set_script_translations( 'create-block-kodigo-block-block-editor', 'kodigo-block' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'create-block-kodigo-block-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		uniqid()
		//filemtime( "$dir/$editor_css" )
	);
	

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-kodigo-block-block',
		plugins_url( $style_css, __FILE__ ),
		array( 'wp-jquery-ui-dialog' ),
		uniqid()
		//filemtime( "$dir/$style_css" )
	);
	

	register_block_type( 'create-block/kodigo-block', array(
		'editor_script' => 'create-block-kodigo-block-block-editor',
		'editor_style'  => 'create-block-kodigo-block-block-editor',
		'style'         => 'create-block-kodigo-block-block',
	) );


	add_filter( 'body_class', function( $classes ) {
		return array_merge( $classes, array( 'kodigo-enabled-content' ) );
	} );

	add_action( 'wp_footer', function() {
		echo '<div id="kodigo-tooltips-container"></div>';
	}, 100 );

	add_action('wp_head', function() {

		
		if ( is_single() || is_page() ) {
			global $post;
			
			$markup_colors = get_post_meta( $post->ID, 'kodigo_options', true );
			$markup_colors = json_decode( $markup_colors, true );
			$kodigo_markup_color = isset( $markup_colors['kodigo_markup_color'] )? $markup_colors['kodigo_markup_color'] : 'red';
			$kodigo_tooltip_background_color = isset( $markup_colors['kodigo_tooltip_background_color'] )? $markup_colors['kodigo_tooltip_background_color'] : 'red';
			$kodigo_tooltip_font_color = isset( $markup_colors['kodigo_tooltip_font_color'] )? $markup_colors['kodigo_tooltip_font_color'] : 'white';
			$kodigo_markup_icon_color = isset( $markup_colors['kodigo_markup_icon_color'] )? $markup_colors['kodigo_markup_icon_color'] : 'white';
			echo "<style>
					:root {
						--kodigo_markup_color: {$kodigo_markup_color};
						--kodigo_markup_icon_color: {$kodigo_markup_icon_color};
						--kodigo_tooltip_background_color: {$kodigo_tooltip_background_color};
						--kodigo_tooltip_font_color: {$kodigo_tooltip_font_color};
					}
				</style>
			";
			echo "<script>
				const kodigoColors = {
						kodigo_markup_color: '{$kodigo_markup_color}',
						kodigo_markup_icon_color: '{$kodigo_markup_icon_color}',
						kodigo_tooltip_background_color: '{$kodigo_tooltip_background_color}',
						kodigo_tooltip_font_color: '{$kodigo_tooltip_font_color}'
				};
			</script>";
			;
		}
		
	}, 5);


	//register post metadata
	register_post_meta( '', '_d3_kodigo_annotations', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
		'auth_callback' => function() {
			return current_user_can( 'edit_posts' );
		}
	) );
	


}
add_action( 'init', 'create_block_kodigo_block_block_init' );

//enqueue
add_action('wp_enqueue_scripts', function() {

	wp_enqueue_script( "jquery" ); 

	
	global $post;
	
	if ( ( is_single() || is_page() ) && $post ) {

		$post_id = $post->ID;
		$kodigo_annotations = new KodigoAnnotations( $post_id );
		
		wp_register_script( 'kodigo-popper-js', plugins_url( '/node_modules/@popperjs/core/dist/umd/popper.min.js', __FILE__ ), array(), true, true );
		wp_register_script( 'kodigo-annotation', plugins_url( '/public/js/kodigo.js', __FILE__ ),  array( 'kodigo-utils', 'kodigo-popper-js', 'jquery' ), uniqid(), true );
		//wp_register_script( 'kodigo-annotation', plugins_url( '/public/js/kodigo-build.js', __FILE__ ),  array( 'kodigo-popper-js', 'jquery' ), uniqid(), true );
		wp_localize_script( 'kodigo-annotation', 'kodigoData', 
		array( 
			'ajax_url' => admin_url( 'admin-ajax.php', 'relative' ),
			'plugin_url' => plugin_dir_url( __FILE__ ),  
			'post_id' => $post_id,
			'annotations' => json_encode( $kodigo_annotations->fetchAnnotations() ) ) );
			
		wp_enqueue_script( 'kodigo-annotation' );
			
	}

	add_filter( 'script_loader_tag', function( $tag, $handle, $src ){

		if ( $handle === 'kodigo-popper-js' ) {
			// $tag = '<script type="module" src="' . esc_url( $src ) . '"></script>';
		}

		return $tag;

	} , 10, 3 );

});


require_once( __DIR__ . '/inc/models/KodigoAnnotations.php' );
require_once( __DIR__ . '/inc/admin-metabox.php' );
require_once( __DIR__ . '/inc/admin-ajax.php' );