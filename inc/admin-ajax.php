<?php 
if(!function_exists('log_it')){
    function log_it( $message ) {
      if( WP_DEBUG === true ){
        if( is_array( $message ) || is_object( $message ) ){
          error_log( print_r( $message, true ) );
        } else {
          error_log( $message );
        }
      }
    }
   }

add_action( 'wp_ajax_store_kodigo_annotation', 'kodigo_ajax__store_annotation' );

function kodigo_ajax__store_annotation() {

    do_action( 'kodigo_ajax_auth' );
    do_action( 'kodigo_ajax_store_annotation' );
   
    $response = array();
    $http_code = '200';
    
    // Handle request then generate response using WP_Ajax_Response
    $request = json_decode( file_get_contents( 'php://input' ), true );
   
    if ( isset( $request['post_id'] ) &&
    isset( $request['annotation'] ) &&
    isset( $request['key'] ) ) {

        $post_id = $request['post_id'];
        $key = $request['key'];
        $annotation = $request['annotation'];

        $kodigo_annotations = new KodigoAnnotations( $post_id );
        $kodigo_annotations->storeAnnotation( $key, $annotation );

        $response['status'] = 'success';
        $response['data'] = $kodigo_annotations->fetchAnnotations();
   
    }

    wp_send_json( $response, $http_code );
}

add_action( 'wp_ajax_store_kodigo_annotations', 'kodigo_ajax__store_annotations' );

function kodigo_ajax__store_annotations() {

  do_action( 'kodigo_ajax_auth' );
  do_action( 'kodigo_ajax_store_annotations' );
 
  $response = array();
  $http_code = '200';
  
  // Handle request then generate response using WP_Ajax_Response
  $request = json_decode( file_get_contents( 'php://input' ), true );

  if ( isset( $request['post_id'] ) &&
  isset( $request['annotations'] ) ) {

      $post_id = $request['post_id'];
      $annotation = $request['annotations'];

      $kodigo_annotations = new KodigoAnnotations( $post_id );
      $kodigo_annotations->storeAnnotations( $annotation );

      $response['status'] = 'success';
      $response['data'] = $kodigo_annotations->fetchAnnotations();
 
  }

  wp_send_json( $response, $http_code );
}

add_action( 'wp_ajax_fetch_kodigo_annotation', 'kodigo_ajax__fetch_annotation' );

function kodigo_ajax__fetch_annotation() {

    do_action( 'kodigo_ajax_auth' );
    do_action( 'kodigo_ajax_fetch_annotation' );
   
    $response = array();
    $http_code = '200';
    
    // Handle request then generate response using WP_Ajax_Response
    $request = json_decode( file_get_contents( 'php://input' ), true );
   
    if ( isset( $request['post_id'] ) &&
    isset( $request['key'] ) ) {

        $post_id = $request['post_id'];
        $key = $request['key'];

        $kodigo_annotations = new KodigoAnnotations( $post_id );
        $response['data'] = $kodigo_annotations->fetchAnnotation( $key );

        $response['status'] = 'success';
    }

    wp_send_json( preg_replace("/\r\n|\r|\n/", '<br/>', $response), $http_code );
}

add_action( 'wp_ajax_fetch_kodigo_annotations', 'kodigo_ajax__fetch_annotations' );

function kodigo_ajax__fetch_annotations() {

    do_action( 'kodigo_ajax_auth' );
    do_action( 'kodigo_ajax_fetch_annotations' );
   
    $response = array();
    $http_code = '200';
    
    // Handle request then generate response using WP_Ajax_Response
    $request = json_decode( file_get_contents( 'php://input' ), true );
    if ( isset( $request['post_id'] ) && is_numeric( $request['post_id'] ) ) {
      
      $post_id = $request['post_id'];
      
      $kodigo_annotations = new KodigoAnnotations( $post_id );
      // update_post_meta($post_id, 'kodigo_annot_d3_2', '');
      // var_dump(get_post_meta($post_id)); die;

        $response['data'] = $kodigo_annotations->fetchAnnotations();
        //$kodigo_annotations->clearAnnotations();
        $response['status'] = 'success';
    }

    wp_send_json( $response, $http_code );
}

add_action( 'save_post', function( $post_id, $post, $is_update ) {

    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE )
        return $post_id;

    //var_dump($_POST); die;
    //of course sanitize!
    log_it($_POST);
    if ( isset( $_POST['kodigo_annotations_list'] ) ) {

        // $annotation = $_POST['kodigo_annotations_list'];
        // $kodigo_annotations = new KodigoAnnotations( $post_id );
        // $kodigo_annotations->storeAnnotations( $annotation );

    }

    //assign options
    $kodigo_colors = array(
      'kodigo_markup_color' => '#cc1818',
      'kodigo_markup_icon_color' => '#cc1818',
      'kodigo_tooltip_background_color' => '#cc1818',
      'kodigo_tooltip_font_color' => '#f5f0f0',

    );

    if ( isset( $_POST['kodigo_markup_color'] ) ) {
      $kodigo_colors['kodigo_markup_color'] = $_POST['kodigo_markup_color'];
    }

    if ( isset( $_POST['kodigo_markup_icon_color'] ) ) {
      $kodigo_colors['kodigo_markup_icon_color'] = $_POST['kodigo_markup_icon_color'];
    }
    
    if ( isset( $_POST['kodigo_tooltip_background_color'] ) ) {
      $kodigo_colors['kodigo_tooltip_background_color'] = $_POST['kodigo_tooltip_background_color'];
    }
    
    if ( isset( $_POST['kodigo_markup_color'] ) ) {
      $kodigo_colors['kodigo_markup_color'] = $_POST['kodigo_markup_color'];
    }

    update_post_meta( $post_id, 'kodigo_options', json_encode( $kodigo_colors ) );

}, 20, 3 );


?>