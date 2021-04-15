/**
 * WordPress dependencies
 */

import { RichTextToolbarButton, RichTextShortcut } from '@wordpress/block-editor';
import domReady from '@wordpress/dom-ready';
import { select, subscribe } from '@wordpress/data';
import { Button } from '@wordpress/components';
 
const { __ } = wp.i18n; 
const { Fragment } = wp.element;
const { toggleFormat, getTextContent, insert } = wp.richText;
const { registerFormatType, getActiveFormat } = wp.richText;


/**
 * Block constants
 */
const name = 'kodigo-block/markup';
const classes = 'tooltip--object kodigo-markup';
var kodigoCurrentPostId = null;

let kodigoModal = null;

window.kodigoAnnotationsRegistry = {
    
	items: {},
    field: '#kodigo-annotations-list',
	postId: null,

	fields: ['content', 'img', 'type', 'name'],
	
	defaults: {
		type: 'definition',
	},
    
    removeItem: function( key ) {
        let itemIndex = this.items.findIndex( ( value, index ) => {
            return value.key === key;
        } );

        this.items.splice( itemIndex, 1 );
    },

    addItem: function( key, item ) {
		
        this.items[key] = item;

    },

	getItem: function( key ) {
		return ( this.items[key] != undefined )? this.items[key] : false;
	},

    store: function( onSuccessCallback = null ) {

		let postId = this.postId;
		let items = this.items;
		let url = ajaxurl + '?action=store_kodigo_annotations';
		
		items = this.items = this.setDefaults( items );
		console.log(items);
		//do ajax fetch
		KodigoUtils.fetch( {
			body: {
				post_id: postId,
				annotations: {
					items
				}
			}
		}, url, ( responseData ) => {
				
			if ( onSuccessCallback != null && typeof onSuccessCallback == 'function' ) {
				onSuccessCallback( responseData );
			} 
		} );
	},

	setDefaults: function( items ) {

		let newItems = {};

		for ( let id in items ) {
			
			if ( items[id] != undefined ) {
				
				newItems[id] = items[id];
				
				for ( let defaultIndex in this.defaults ) {
					if ( items[id][defaultIndex] == undefined ) {
						newItems[id][defaultIndex] = this.defaults[defaultIndex];
					}
				}
			}
		}

		return newItems;

	},

    loadItems: function() {

		this.items = {};	
		let annotationsField = document.querySelector( this.field ).value;
		annotationsField.trim();

		if ( annotationsField != '' )
			this.items = JSON.parse( document.querySelector( this.field ).value );

		for ( let index in this.items ) {
			document.getElementById( 'kodigo-' + index );
		}
    },

	loadItemsAjax: function ( onSuccessCallback = null ) {
		
		let postId = this.postId;
		let items = this.items; 
		let url = ajaxurl + '?action=fetch_kodigo_annotations';

		console.log('loading');

		KodigoUtils.fetch( {
			body: {
				post_id: postId
			}
		}, url, ( responseData ) => {

			if ( responseData.data !== undefined && responseData.data.items !== undefined ) {
				this.items = responseData.data.items;
				
				//this.cleanTags();
				this.cleanItems();

				this.items = this.setDefaults( responseData.data.items );
			}

			if ( onSuccessCallback != null && typeof onSuccessCallback == 'function' ) {
				onSuccessCallback( responseData );
			}
		} );
	},
	clean: function() {},
	cleanTags: function() {

		document.querySelectorAll( '.kodigo-markup' ).forEach( ( el, index ) => {
			
			let str = el.innerHtml;
			let id = el.id;
			id = this.extractKey( id );
			//check if id has corresponding record in the registry
			//delete if it does not have
			if ( this.getItem( id ) == false ) {
				let parent = el.parentNode;
				parent.replaceChild( str, el );
			}

		} );

	},

	cleanItems: function() {
		
		for ( let itemIndex in this.items ) {
			
			if ( document.querySelector( '#kodigo-' + itemIndex ) === null ) {
				delete this.items[itemIndex];
			}
		}
	},

	getItems: function() {

		if ( this.isEmpty() ) {
			this.loadItems();
		}
		return this.items;
	
	},

	isEmpty: function() { 

		for( let key in this.items ) {

			if( this.items.hasOwnProperty( key ) )
				return false;
		
		}
		
		return true;
	},

	extractKey: ( id ) => {
        let str = id.split('-');
        return ( str[1] !== undefined )? str[1] : false;
    }

};

const kodigoAnnotationFormControl = {

	fields: [
		{
			id: null,
			type: 'select',
			name: 'kodigo_type',
			value: 'definition',
			class: '',
			options: [
				'definition',
				'profile',
				'link'
			]
		},
		{
			id: null,
			type: 'text',
			name: 'kodigo_profile_name',
			value: '',
			class: '',
		},
		{
			id: null,
			type: 'img',
			name: 'kodigo_image_url',
			value: '',
			class: '',
			sizes: ''
		},
		{
			id: null,
			type: 'wysiwyg',
			name: 'kodigo_content',
			value: '',
			class: '',
		},
		{
			id: null,
			type: 'tiny',
			name: 'kodigo_content',
			value: '',
			class: '',
		},
		{
			id: null,
			type: 'hidden',
			name: 'kodigo_annotation_id',
			value: '',
			class: '',
		},
		{
			id: null,
			type: 'repeater',
			name: 'kodigo_related_links',
			fields: [

			],
		},
		
	],

	generateForm: ( content ) => {},
	generateTextField: ( fieldInfo ) => {},
	generateTextAreaField: ( fieldInfo ) => {},
	generateWysiwygField: ( fieldInfo ) => {},
	generateHiddenField: ( fieldInfo ) => {},
	generateImageField: ( fieldInfo ) => {},
	generateSelectField: ( fieldInfo ) => {},
	generateLinkField: ( fieldInfo ) => {},
	generateRepeaterItems: ( fieldInfo ) => {},

	generateUniqueID: () => {
		let kodigoId = Math.random().toString(36).substring(2, 15);
		kodigoId = kodigoId + Math.random().toString(36).substring(2, 15);
		return kodigoId;
	},
	
	handleConditional: ( form ) => {
	},

	setContent: ( annotation ) => {

		jQuery('#kodigo-image-clear').hide();

		for( let index in annotation ) {

			if ( document.querySelector( '#kodigo-' + index  ) != null )
				document.querySelector( '#kodigo-' + index  ).value = annotation[index];
			
			if ( index == 'content' && tinyMCE.activeEditor.id == 'kodigo-content' ) {
				tinyMCE.activeEditor.setContent( annotation[index] );
			}

			if ( index == 'img' && ( annotation[index] != undefined ) && annotation[index] !== '' ) {
				document.querySelector('#kodigo-image').src = annotation[index];
				document.querySelector('#kodigo-image-url').src = annotation[index];

				if ( annotation[index] ) {
					jQuery('#kodigo-image-clear').show();
				}
			}
		}
	},
	clearContent: ( form ) => {
		
		let elements = form.querySelectorAll( '.kodigo-form-control' );

		elements.forEach( ( el, index ) => {

			el.value = '';

		} );

		jQuery( '#kodigo-image-url' ).val( '' );
		jQuery( '#kodigo-image-url' ).data( 'sizes', '' );
		jQuery( '#kodigo-image' ).attr( 'src', '' );
	},
	handleConditionalType: function ( form ) {

		let value = form.querySelector( '.kodigo-type' ).value;
		
		this.toggleConditionalType( form, value );

		form.querySelector( '.kodigo-type' ).addEventListener( 'change', event => {
			let value = event.target.value;
			this.toggleConditionalType( form, value );
		} );
	},

	toggleConditionalType: ( form, currentValue ) => {

		form.querySelectorAll( '.kodigo-type--conditional' ).forEach( ( el, index ) => {
			el.style.display = 'none';
		} );
		
		form.querySelectorAll( '.kodigo-type--' + currentValue ).forEach( ( el, index ) => {
			el.style.display = 'block';
		} );

	},

	loadWPEditor: ( id ) => {
		return wp.oldEditor.initialize( id, {
			tinymce: {
				toolbar1:"bold,italic,underline,bullist,",
				force_p_newlines : false,
				force_br_newlines : false,
			},
		} );
	},

	loadMediaLibraryButton: () => {
		if ( typeof wp !== 'undefined' && wp.media && wp.media.editor) {

			jQuery( '#kodigo-image-clear' ).on( 'click', function(e){
				e.preventDefault();
				jQuery( '#kodigo-image-url' ).val( '' );
				jQuery( '#kodigo-image' ).attr( 'src', '' );
				jQuery( '#kodigo-image-clear' ).css( 'display', 'none' );
			} );

            jQuery( '#kodigo-media-library' ).on( 'click', function(e) {

                e.preventDefault();

                let imageWrapper = e.target.closest( '.kodigo-form-wrapper' ).querySelector('.kodigo-image--wrapper');
				console.log(imageWrapper);
                wp.media.editor.send.attachment = function(props, attachment) {

					let imageSizes = wp.media.attachment( attachment.id ).get( 'sizes' );
					console.log(imageSizes);
					let url = ( imageSizes.medium )? imageSizes.medium['url'] : imageSizes.full['url'];

					jQuery( '#kodigo-image-url' ).val( url );
					jQuery( '#kodigo-image' ).attr( 'src', url );
					jQuery( '#kodigo-image' ).data( 'sizes', imageSizes );
					jQuery( '#kodigo-image-clear' ).css('display', 'block');

					let selectSize = document.createElement( 'select' );
					selectSize.id = 'kodigo-image-sizes';
					
					for ( let size in imageSizes ) {
						let optionSize = document.createElement( 'option' );
						optionSize.value = imageSizes[size];
						optionSize.innerHTML = size;
						selectSize.appendChild( optionSize );
					}

					//imageWrapper.appendChild( selectSize );

				};

                wp.media.editor.open(this);
                return false;
            } );
        }
	},

	generateEditAction: ( id, modal, okCallback = null, cancelCallback = null ) => {

		document.querySelector( '#' + 'kodigo-' + id ).addEventListener( 'click', event => {
			
			modal.open( () => {

				let kodigoAnnotation = kodigoAnnotationsRegistry.getItem( id );

				kodigoAnnotation['content'] = wp.oldEditor.getContent( 'kodigo-content' );
				kodigoAnnotation['type'] = jQuery( modal.modalId ).find( '#kodigo-type' ).val();
				kodigoAnnotation['img'] = jQuery( modal.modalId ).find( '#kodigo-image-url' ).val();
				kodigoAnnotation['img_sizes'] = jQuery( modal.modalId ).find( '#kodigo-image-url' ).data('sizes');

				kodigoAnnotationsRegistry.addItem( id, kodigoAnnotation );

				if ( okCallback != undefined && typeof okCallback === 'function' ) {
					okCallback();
				}

			}, () => {

				if ( cancelCallback != undefined && typeof cancelCallback === 'function' ) {
					cancelCallback();
				}

			}, () => {
				
				//open callback
				let kdata = kodigoAnnotationsRegistry.getItem( id );
				
				kodigoAnnotationFormControl.setContent( kdata );

				let modalInstance = modal.getInstance();
				jQuery( modal.modalId ).dialog( 'option', 'title', 'Kodigo' );

				
				let kodigoModalForm = modalInstance.element.find( '.kodigo-form' );
				let kodigoIdField = document.querySelector( '#kodigo-annotation-id' );
				
				//create extrafield for kodigo id here
				//if field does not exist
				if ( kodigoIdField == null ) {
					kodigoIdField = document.createElement( 'input' );
					kodigoIdField.setAttribute( 'type', 'hidden' );
					kodigoIdField.setAttribute( 'id', 'kodigo-annotation-id' );
				}
				
				kodigoIdField.value = id;

				kodigoModalForm.get().forEach( ( el, index ) => {
					el.appendChild(kodigoIdField);
				} );

			}, () => {
				
				if ( jQuery( modal.modalId ).dialog( 'instance' ) ) {
					jQuery( modal.modalId ).dialog( 'destroy' );
				}
			} );

			//modal.open();


		} );

	},
};

var KodigoModal = function() {
	
	let self = this;
	this.modalId = '#kodigo-editor-modal';

	this.getInstance = function (){
		
		let activeModal = jQuery( self.modalId ).dialog( 'instance' );
		return activeModal;

	};

	this.create = function( okCallback = null, cancelCallback = null, openCallback = null, closeCallback = null, beforeCloseCallback = null ) {
		
		jQuery( self.modalId ).dialog( {
			dialogClass: "no-close",
			autoOpen: false,
			height: 500,
			width: 500,
			classes: {
				"ui-dialog": "kodigo__ui-dialog"
			},
			open: function( event, ui ) {
				let modalForm = document.querySelector( '#kodigo-editor-modal' );
				let kodigoModalEditor = kodigoAnnotationFormControl.loadWPEditor( 'kodigo-content' );
				
				kodigoAnnotationFormControl.loadMediaLibraryButton();
				kodigoAnnotationFormControl.handleConditionalType( modalForm );

				if ( openCallback != null && typeof openCallback == 'function' ) {
					openCallback();
				}

			},
			beforeClose: function( event, ui ) {
				//remove active editor
				wp.oldEditor.remove('kodigo-content');
				let form = document.querySelector( '#kodigo-editor-modal' );
				kodigoAnnotationFormControl.clearContent( form );

				if ( beforeCloseCallback != null && typeof beforeCloseCallback == 'function' ) {
					beforeCloseCallback();
				}
			},
			close: function ( event, ui ) {
				if ( closeCallback != null && typeof closeCallback == 'function' ) {
					closeCallback();
				}
			},
			buttons: [
				{
					text: "Cancel",
					class: ' components-button is-tertiary',
					click: function( e ) {

						if ( cancelCallback != null && typeof cancelCallback == 'function' ) {
							cancelCallback();
						}

						jQuery( this ).dialog( "close" );
					}
					},
				{
				text: "OK",
				class: this.class + ' components-button is-primary',
				click: function( e ) {

						if ( okCallback != null && typeof okCallback == 'function' ) {
							
							okCallback();
						}

						jQuery( self.modalId ).dialog( 'close' );
					}
					
				}
			]
		});
	}

	this.open = function( okCallback = null, cancelCallback = null, openCallback = null, closeCallback = null, beforeCloseCallback = null ){
		
		let activeModal = jQuery( self.modalId ).dialog( 'instance' );
		let isOpen = false;
		
		if ( activeModal != undefined ) {
			isOpen = jQuery( self.modalId ).dialog( 'isOpen' );
			self.close(); 
		} 
		
		self.create( okCallback, cancelCallback, openCallback, closeCallback, beforeCloseCallback );
		//self.create( okCallback, cancelCallback, openCallback, closeCallback, beforeCloseCallback );
		
		if ( !isOpen ) {
			jQuery( self.modalId ).dialog( 'open' );
		}
	};

	this.edit = function( okCallback = null, cancelCallback = null, openCallback = null, closeCallback = null, beforeCloseCallback = null ){
			
		self.create( okCallback, cancelCallback, openCallback, closeCallback, beforeCloseCallback );
		jQuery( self.modalId ).dialog( 'open' );
	
	};

	this.close = function(){
		let activeModal = jQuery( self.modalId ).dialog( 'instance' );

		if ( activeModal != undefined ) {

			jQuery( self.modalId ).dialog( 'close' );
			jQuery( self.modalId ).dialog( 'destroy' );

		}
	}

	this.setOption = function( optionName, optionValue ){

	}

	this.setButtons = function(){}

	return this;
}

/**
 * 
 *  Components
 */

/**
 * Gutenberg Kodigo Markup controls
 */

const MyButton = () => <Button isPrimary>Click me!</Button>;
export const kodigoMarkup = {
	name,
	title: __( 'Kodigo' ),
	tagName: 'span',
	className: 'kodigo-markup',
	attributes: {
		style: 'style',
	},
	edit( props ) {

		let value = props.value;
		let isActive = props.isActive;
		let onChange = props.onChange;

		const onToggle = () => {

			//generate random ID
			let kodigoId = kodigoAnnotationFormControl.generateUniqueID();
			let postId = select('core/editor').getCurrentPostId();

			if ( isActive ) {
				onChange(
					toggleFormat( value, {
						type: name,
						attributes: {
							id: 'kodigo-' + kodigoId,
						},
						className: { classes }
					} ) 
                );

                /*kodigoAnnotationsRegistry.removeItem( formValues );
                kodigoAnnotationsRegistry.store();*/
			} else {

				//call modal here
				//attach okCallback
				kodigoModal.open( () => {
	
					onChange(
						toggleFormat( value, {
							type: name,
							attributes: {
								id: 'kodigo-' + kodigoId,
							},
							className: { classes }
						} ) 
					);

					//fetch original string
					let originalString = jQuery( '#kodigo-'+kodigoId ).html();

					//extract form values
					let kodigoAnnotation = {
						"content": wp.oldEditor.getContent('kodigo-content'),
						"type": jQuery( kodigoModal.modalId ).find('#kodigo-type').val(),
						"img": jQuery( kodigoModal.modalId ).find( '#kodigo-image-url' ).val(),
						"img_sizes": jQuery( kodigoModal.modalId ).find( '#kodigo-image-url' ).data( 'sizes' ),
						"str": originalString,
						"richtext": value
					};

					//store annotations to registry
					kodigoAnnotationsRegistry.addItem( kodigoId, kodigoAnnotation );
					
					//attach edit action to newly added annotation
					kodigoAnnotationFormControl.generateEditAction( kodigoId, kodigoModal );
	
				} );
			}
		};
		return (
			<Fragment>
				<RichTextShortcut
					type="primary"
					character="k"
					onUse={ onToggle }
				/>
				<RichTextToolbarButton
					icon="edit-page"
					title={ __( ' Kodigo' ) }
					onClick={ onToggle }
					isActive={ isActive }
					shortcutType="primary"
					shortcutCharacter="k"
				/>
			</Fragment>
		);

	},
};

jQuery( function(){
	
	//kodigoAnnotationsRegistry.loadItems();
	let postId = select('core/editor').getCurrentPostId();
	
	kodigoModal = new KodigoModal();

	kodigoAnnotationsRegistry.loadItemsAjax( ( res ) => {
		
		if ( 'data' in res && 'items' in res.data ) {

			let annotations = res.data?.items;
			for ( let kodigoId in annotations ) {
	
				//attach edit action to newly added annotation
				kodigoAnnotationFormControl.generateEditAction( kodigoId, kodigoModal );
	
			}

		}

	} );

	window._wpLoadBlockEditor.then( function( s ) {

	} );

	jQuery( '.kodigo-color-field' ).wpColorPicker();

} );

domReady( function() {
	kodigoAnnotationsRegistry.postId = Number( document.querySelector( '#kodigo-post-id' ).value );
	//kodigoModal.create();
} );

var selectCore = select('core/editor');
var checked = true; // Start in a checked state.

//kodigo block subscribe event
subscribe( () => {
    if ( selectCore.isSavingPost() ) {
		 checked = false;
    } else {
 		if ( ! checked ) {

			let postId = select('core/editor').getCurrentPostId();

			kodigoAnnotationsRegistry.store( ( response ) => {
				console.log('storing...');
			} );

            checked = true;
			
		}

    }
} );

function registerFormats () {
	[
		kodigoMarkup,
	].forEach( ( { name, ...settings } ) => registerFormatType( name, settings ) );
};

registerFormats();