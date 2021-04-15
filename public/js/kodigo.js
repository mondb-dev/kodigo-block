
const KodigoAnnotationProcessor = {
    build: ( kodigoTooltipsContainer, markup, { content, type, img, str }, pluginUrl = '/' ) => {

        //markup.innerHTML = '';

        //markup.innerHTML = `${str} <span class="kodigo-tooltip--object-icon"><img src="${pluginUrl}/public/img/icons/kodigo-icon-diamond.svg" class="icon"></span>`;
        //markup.innerHTML = content;
        let imgWrapper = (img)?`<img src="${img}" alt="kodigo-image" class="kodigo-tooltip--main-image" />`: '';
        
        content = (content)? `<div class="kodigo-tooltip--content">
            <span class="kodigo-tooltip--icon-cont">
                <img src="${pluginUrl}/public/img/icons/kodigo-icon-bulb.svg" class="icon">
            </span>
            <div class="kodigo-tooltip--text-cont">
                <div class="kodigo-tooltip--text">
                    ${content}
                </div>
            </div>
        </div>` : '';
        
        let hasImageClass = (img || img == '')? 'kodigo--has-image' : '';

        kodigoTooltipsContainer.innerHTML += 
        `<div id="kodigo-tooltip--${markup.id}" class="kodigo-markup-tooltip kodigo-tooltip kodigo-markup-tooltip--${type} ${hasImageClass}" data-kodigo-ref="${markup.id}">
            <div class="kodigo-tooltip--wrapper">
                <span class="kodigo-tooltip--arrow"></span>
                <a href="#" class="kodigo-tooltip--close">
                    <img src="${pluginUrl}/public/img/icons/close-tooltip-button-white.svg" class="icon">
                </a>` + imgWrapper + content + 
                `
            </div>
        </div>`;
    },
    setOptions: () => {},
    extractKey: ( id ) => {
        let str = id.split('-');
        return ( str[1] !== undefined )? str[1] : false;
    }
};


( function( kp, ku, kd, pop, kc ){
    
    var kodigoPopperInstance = null;

    function KodigoPopper( pop ) {
        
        this.pop = pop;
        this.instance = null;
        this.reg = [];

        this.options = {
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 20],
                },
              },
            ],
            placement: 'bottom',
        };

        let self = this;
        
        this.show = function( target, tooltip ) {
            
            if ( self.instance !== null ) {
                self.hide();
            }
            tooltip.setAttribute('data-show', '');
            self.instance = self.pop.createPopper( target, tooltip, self.options );
            self.reg.push(self.instance);

            return self.instance;
        };

        this.hide = function( tooltip = null ) {
            if ( self.instance ) {

                if ( tooltip ) {
                    tooltip.removeAttribute('data-show');
                }
                self.instance.destroy();
                self.instance = null;
            }

        };
    }

    document.addEventListener( "DOMContentLoaded", function() {
        
        const markups = document.querySelectorAll( '.kodigo-markup' );
        
        let kdata = ( kd.annotations != undefined )? JSON.parse( kd.annotations ) : null;
        kdata = ( kdata.items != undefined )? kdata.items : undefined ;
        
        let kodigoPopper = new KodigoPopper( pop );

        let kodigoTooltipsContainer = document.getElementById( 'kodigo-tooltips-container' );

        //add hand icons on markups
        markups.forEach( function( markup, index ){

            let kodigoKey = kp.extractKey( markup.id );
            
            kp.build( kodigoTooltipsContainer, markup, kdata[kodigoKey], kd.plugin_url );
            //add hand icon
            let markupIcon = document.createElement( 'div' );

            markupIcon.classList.add( 'kodigo-markup--icon' );
            markupIcon.id = 'kodigo-markup--icon-' + markup.id;
            
            //hand icon styles
            markupIcon.style.display = 'inline-block';
            markupIcon.append( kodigoGetIcon() );
            markup.append( markupIcon );

            let tooltipID = `#kodigo-tooltip--${markup.id}`;
            let tooltip = document.querySelector( tooltipID );

        });

        document.getElementsByTagName( 'body' )[0].addEventListener( 'click', function( e ){

            let target = e.target;
            let activePopover = null;

            markups.forEach( function( markup, index ){

                let tooltipID = `#kodigo-tooltip--${markup.id}`;
                let tooltip = document.querySelector( tooltipID );

                kodigoPopper.hide( tooltip );


                //if ( target.isEqualNode( tooltip ) ) return;

                if ( target.isEqualNode( markup ) || 
                markup.contains( target ) ||
                target.isEqualNode( markup.querySelector( '.kodigo-markup--icon svg' ) ) ||
                target.isEqualNode( tooltip ) ) {

                    //mark active popover to call out later
                    activePopover = () => {
                        
                        kodigoPopper.show( markup, tooltip );
                        
                        let closeButton = tooltip.querySelector( `.kodigo-tooltip--close` );
                        
                        closeButton.addEventListener( 'click', function( e ){
                            e.preventDefault();
                            let tooltip = e.target.closest( '.kodigo-tooltip' );
                            kodigoPopper.hide( tooltip );
                        } );

                    };

                }

            });

            //call active popover
            if ( activePopover !== null && typeof activePopover === 'function' ) {
                activePopover();
            }

        } );
    } )

    function kodigoGetIcon ( fill = kc.kodigo_markup_icon_color ) {
        let svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Layer_1" x="0px" y="0px" viewBox="0 0 11.7 17.8" style="enable-background:new 0 0 11.7 17.8;" xml:space="preserve">
        <g id="Group_533" transform="translate(10623 -5164)" fill="${fill}" pointer-events="all">
            <g id="Group_531" transform="translate(-10623 5167.753)">
                <g id="Group_511" transform="translate(5.253 3.979)">
                    <circle id="Ellipse_17" cx="1.1" cy="1.1" r="1.1"></circle>
                </g>
                <g id="Group_512" transform="translate(7.303 3.979)">
                    <circle id="Ellipse_18" cx="1.1" cy="1.1" r="1.1"></circle>
                </g>
                <g id="Group_513" transform="translate(9.353 3.979)">
                    <circle id="Ellipse_19" cx="1.1" cy="1.1" r="1.1"></circle>
                </g>
                <g id="Group_514" transform="translate(3.165 7.619)">
                    <circle id="Ellipse_20" cx="1.1" cy="1.1" r="1.1"></circle>
                </g>
                <g id="Group_515" transform="translate(0 0)">
                    <path id="Path_258" d="M3.2,0v7.5c0,0-1.9-3-3-1.4C-0.4,6.9,0.8,7.8,2,10.9c1.3,3.2,4.6,3.2,5.9,3.1c3.5-0.4,3.4-10.2-2.5-9.1V0     L3.2,0z"></path>
                </g>
                <g id="Group_516" transform="translate(7.92 5.102)">
                    <path id="Path_259" d="M0.1,0.4L3.7,0c0,0,1.1,8.2-3.7,8.9L0.1,0.4z"></path>
                </g>
            </g>
            <g id="Group_532" transform="translate(-10622.585 5164)">
                <g id="Group_510" transform="translate(2.749 2.371)">
                    <ellipse id="Ellipse_16" cx="1.1" cy="1.3" rx="1.1" ry="1.3"></ellipse>
                </g>
            </g>
        </g>
        </svg>`;

        let parser = new DOMParser();
        let svgObj = parser.parseFromString( svg, "image/svg+xml" );
        let frag = document.createDocumentFragment();

        while (svgObj.firstChild)
            frag.appendChild(svgObj.firstChild);
        return frag;

    }

} )( KodigoAnnotationProcessor, KodigoUtils, kodigoData, Popper, kodigoColors );
