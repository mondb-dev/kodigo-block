<?php 


Class KodigoAnnotations {

    private $post_id = null;
    private $prefix = 'kodigo_annot_d3_';
    private $key = '';
    private $annotations = array();
    private $data_set = array();

    public function __construct ( $post_id = null ) {
        
        if ( is_null( $post_id ) )
            return false;

        $this->post_id = $post_id;
        $this->key = $this->prefix . $this->post_id;

        $this->fetchAnnotations();
    }

    public function fetchAnnotations() {

        $annotations = get_post_meta( $this->post_id, $this->key, true );

        if ( $annotations !== false ) {
            $this->annotations = maybe_unserialize( $annotations, true );
            return $this->annotations;
        }
        

        return false;

    }

    public function fetchAnnotation( $key ) {
        
        if ( isset( $this->annotations[$key] ) ) {
            return $this->annotations[$key];
        }

        return false;
    }

    public function storeAnnotations( $annotations = null ) {

        if ( is_null( $annotations ) )
            return false;

        $this->annotations = $annotations;
        
        $this->clearAnnotations();
        
        return update_post_meta( $this->post_id, $this->key, maybe_serialize( $annotations ) );

    }

    public function storeAnnotation( $key, $annotation ) {
        
        $this->fetchAnnotations();
        $this->annotations[$key] = $annotation; 
        
        $this->clearAnnotations();
        
        $this->storeAnnotations( $this->annotations );
    }

    public function clearAnnotations() {
        return delete_post_meta( $this->post_id, $this->key );
    }
}