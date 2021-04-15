const KodigoUtils = {

    fetch: ( data = {}, url, success_callback = false, failed_callback = false ) => {
        
        fetch ( url, {
            method: ( data.method != undefined )? data.method : 'POST',
            body: ( data.body != undefined )? JSON.stringify( data.body ) : '{error: "empty body"}',
            credentials: ( data.credentials != undefined )? data.credentials : 'same-origin'
        } ).then( ( response ) => {
            
            if ( !response.ok ) {
                if ( typeof failed_callback === 'function' ) {
                    failed_callback.call( this, response );
                }
            } else {
               return response.json();
            }

        } ).then( ( data ) => {
            console.log( data );

            if ( typeof success_callback === 'function' ) {
                success_callback.call( this, data );
            }

        } ).catch((error) => {
            console.error('Fetch error:', error);
        });

    }

};