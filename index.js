/**
 * @file   mofron-comp-flowuplabels/index.js
 * @brief  expansion input component
 * @author simpart
 */
require('./src/jquery.FlowupLabels.js');
let $      = require('jquery');
let mf     = require('mofron');
let Input  = require('mofron-comp-input');

/**
 * @class mofron.comp.FlowupLabels
 * @brief FlowupLabels class
 */
mf.comp.FlowupLabels = class extends Input {
    /**
     * @param po : (string) default value
     * @param po : (object) option
     */
    constructor (po) {
        try {
            super();
            this.name('FlowupLabels');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts (prm) {
        try {
            
            let label = new mf.Dom({
                tag       : 'label',
                target    : this,
                className : 'fl_label'
            });
            
            let input = new mf.Dom({
                tag       : 'input',
                target    : this,
                className : 'fl_input'
            });
            
            if (null !== prm) {
                this.label(prm);
            }
            this.target(label);
            this.addChild(this.label());
            this.target(input);
            
            /* build dom constructure */
            this.adom().addChild(
                new mf.Dom({
                    tag       : 'div',
                    target    : this,
                    className : 'FlowupLabels',
                    addChild  : new mf.Dom({
                        tag       : 'div',
                        target    : this,
                        className : 'fl_wrap',
                        child     : [label, input]
                    })
                })
            );
            this.size(150, 48);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initStyle () {
        try {
            mf.func.addHeadConts({
                tag      : 'style',
                contents : [
                    mf.func.getStyleConts(
                        '.FlowupLabels .fl_wrap' ,
                        { 'margin'             : '12px auto' ,
                          'display'            : 'block'     ,
                          'position'           : 'relative'  ,
                          '-webkit-box-sizing' : 'border-box',
                          '-moz-box-sizing'    : 'border-box',
                          'box-sizing'         : 'border-box' }
                    ),
                    mf.func.getStyleConts(
                        '.FlowupLabels .fl_label',
                        { 'left'     : '5px'       ,
                          'position' : 'absolute'  ,
                          'z-index'  : '3'         ,
                          '-webkit-transition': 'all .05s linear',
                          '-moz-transition'   : 'all .05s linear',
                          '-transition'       : 'all .05s linear' }
                    ),
                    mf.func.getStyleConts(
                        '.FlowupLabels .fl_input',
                        { 'background'    : 'none'          ,
                          'border'        : 'none'          ,
                          'border-bottom' : '1px solid #555',
                          'border-radius' : '0'             ,
                          'line-height'   : '22px'          ,
                          'padding'       : '20px 0 0 5px'  ,
                          /* Don't change */
                          'position'           : 'absolute'  ,
                          'top'                : '0'         ,
                          'left'               : '0'         ,
                          'right'              : '0'         ,
                          'bottom'             : '0'         ,
                          'width'              : '100%'      ,
                          'z-index'            : '2'         ,
                          '-webkit-box-sizing' : 'border-box',
                          '-moz-box-sizing'    : 'border-box',
                          'box-sizing'         : 'border-box' }
                      ),
                      mf.func.getStyleConts(
                          '.FlowupLabels .fl_wrap.focused .fl_label,'   + 
                          '.FlowupLabels .fl_wrap.populated .fl_label,' + 
                          '.no-js .FlowupLabels .fl_label',
                          { 'top'       : '0'   ,
                            'font-size' : '12px',
                            'color'     : '#555', }
                      ),
                      mf.func.getStyleConts(
                          '.FlowupLabels .fl_wrap.focused .fl_label',
                          { 'color' : '#00A34D' }
                      )
                  ]
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    afterRender () {
        try {
            this.initStyle();
            $( '#' + this.adom().child()[0].getId() ).FlowupLabels({
                feature_onInitLoad : true      ,
                class_focused      : 'focused' ,
                class_populated    : 'populated'
            });
            this.adom().child()[0].child()[0].style({'margin' : '0px'});
            
            this.editStyle();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    editStyle() {
        try {
            mf.func.addHeadConts({
                tag      : 'style',
                contents : [
                    mf.func.getStyleConts(
                        '.FlowupLabels .fl_wrap' ,
                        { 'height' : this.height() + 'px' }
                    ),
                    mf.func.getStyleConts(
                        '.FlowupLabels .fl_label',
                        { 'top' : this.height()/4 + 'px' }
                    )
                ]
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    width (val) {
        try {
            let FlowupLabels = this.adom().child()[0];
            let flwrap       = FlowupLabels.child()[0];
            if (undefined === val) {
                /* getter */
                return mf.func.getLength(FlowupLabels.style('width'));
            }
            /* setter */
            let set = {'width' : val + 'px'};
            FlowupLabels.style(set);
            flwrap.style(set);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    height (val) {
        try {
            if (undefined === val) {
                /* getter */
                return (undefined !== this.m_height)? this.m_height : null;
            }
            /* setter */
            if ('number' !== typeof val) {
                throw new Error('invalid parameter');
            }
            this.label().size(null);
            this.style({ 'height'    : val + 'px' });
            if (40 < val) {
                this.style({ 'font-size' : val-30 + 'px' });
            }
            this.m_height = val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.FlowupLabels;
/* end of file */
