
/**
 * Kodigo Annotation Prototype Object
 */
const KodigoAnnotationType = function(){

    this.id = '';
    this.str = '';
    this.type = '';
    this.typeData = array(
        'definition',
        'profile',
        'link'
    );

    this.content = '';
    this.imageUrl = '';

    this.popupStyle = {

    }

    this.template = '';

};

const KodigoAnnotationDefinition = function(){
    KodigoAnnotationType.call( this );
}
const KodigoAnnotationProfile = function(){
    KodigoAnnotationType.call( this );
    this.name = '';
}
const KodigoAnnotationDefinition = function(){
    KodigoAnnotationType.call( this );
}

/**
 * Kodigo Annotation Factory
 */
export const KodigoAnnotation = function() {

    this.create = function() {

        let kodigoAnnotation;
        return kodigoAnnotation;
    }


}