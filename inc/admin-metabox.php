<?php 

add_action( 'add_meta_boxes', function(){

    add_meta_box(
        'kodigo_metabox',
        'Kodigo Annotations',
        function ( $post ) {
            //var_dump($post);

            $current_screen = get_current_screen();
            $kodigo_annotations = new KodigoAnnotations( $post->ID );
            ?> 
            <div id="kodigo-editor-modal" >
                <div class="kodigo-form">
                    <div class="kodigo-form-wrapper" style="display: none;">
                        <label for="kodigo-type">Type</label>
                        <select id="kodigo-type" name="kodigo_type" class="kodigo-type kodigo-form-control">
                            <option>definition</option>
                            <option>profile</option>
                            <option>link</option>
                        </select> 
                    </div>
                    <div class="kodigo-form-wrapper kodigo-type--conditional kodigo-type--profile">
                        <label for="kodigo-profile-name">Name</label>
                        <input type="text" id="kodigo-profile-name" name="kodigo_profile_name" class="kodigo-form-control">
                    </div>
                    <div class="kodigo-form-wrapper">
                        <div class="kodigo-image--wrapper">
                            <a href="#" id="kodigo-image-clear" style="display: none;" class=""><button type="button" class="components-button has-icon" aria-label="Close settings">Remove <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false"><path d="M13 11.9l3.3-3.4-1.1-1-3.2 3.3-3.2-3.3-1.1 1 3.3 3.4-3.5 3.6 1 1L12 13l3.5 3.5 1-1z"></path></svg></button></a>
                            <img id="kodigo-image" class="kodigo-image" src="" style="width: 100%; height: auto;"/>
                            <input type="hidden" name="kodigo_image_url" id="kodigo-image-url" />
                        </div>
                        <button type="button" id="kodigo-media-library" class=" components-button is-primary">Insert Image</button>
                    </div>
                    <div class="kodigo-form-wrapper">
                        <label for="kodigo-content">Content</label>
                        <textarea id="kodigo-content" name="kodigo_content" class="kodigo-form-control" rows="8"></textarea>
                    </div>

                </div>
            </div>

            <div style="display: -none !important">
                    <input type="hidden" id="kodigo-post-id" value="<?php echo $post->ID; ?>" readonly="true" >
                <textarea id="kodigo-annotations-list" name="kodigo_annotations_list" style="display: none;">
                <?php echo ( $kodigo_annotations->fetchAnnotations() !== false )? json_encode( $kodigo_annotations->fetchAnnotations() ) : '';?>
                </textarea>
            </div>



            <?php 
            $markup_colors = get_post_meta( $post->ID, 'kodigo_options', true );
            $markup_colors = json_decode( $markup_colors, true );
            ?>

            <div>
                <h5>Annotations Style</h5>
                <div class="kodigo-form-wrapper">
                    <label>Markup Color:</label> 
                    <input type="text" class="kodigo-color-field" 
                    name="kodigo_markup_color" 
                    value="<?php echo isset( $markup_colors['kodigo_markup_color'] )? $markup_colors['kodigo_markup_color'] : '#1e73be'; ?>">
                </div>
                <div class="kodigo-form-wrapper">
                    <label>Markup Icon Color:</label> 
                    <input type="text" class="kodigo-color-field" 
                    name="kodigo_markup_icon_color" 
                    value="<?php echo isset( $markup_colors['kodigo_markup_icon_color'] )? $markup_colors['kodigo_markup_icon_color'] : '#1e73be'; ?>">
                </div>
            </div>

            <div>
                <h5>Tooltip Style</h5>
                <div class="kodigo-form-wrapper">
                    <label>Tooltip Background Color:</label> 
                    <input type="text" class="kodigo-color-field" 
                    name="kodigo_tooltip_background_color"
                    value="<?php echo isset( $markup_colors['kodigo_tooltip_background_color'] )? $markup_colors['kodigo_tooltip_background_color'] : '#1e73be'; ?>">
                </div>
                <div class="kodigo-form-wrapper">
                    <label>Tooltip Font Color:</label> 
                    <input type="text" class="kodigo-color-field" 
                    name="kodigo_tooltip_font_color"
                    value="<?php echo isset( $markup_colors['kodigo_tooltip_font_color'] )? $markup_colors['kodigo_tooltip_font_color'] : '#ffffff'; ?>">
                </div>
            </div>

            <div id="clear-kodigo-wrapper">
                 
            </div>
             <?php
        }
    );
    
    } );


?>