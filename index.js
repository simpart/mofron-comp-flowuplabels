/**
 * @file   mofron-comp-flowuplabels/index.js
 * @brief  expansion input component
 * @author simpart
 */
const mf     = require('mofron');
const Input  = require('mofron-comp-input');
const Text   = require('mofron-comp-text');
const Border = require('mofron-effect-border');
const Focus  = require('mofron-event-focus');

/**
 * @class mofron.comp.FlowupLabels
 * @brief FlowupLabels class
 */
mf.comp.FlowupLabels = class extends Input {
    
    constructor (po, p2) {
        try {
            super();
            this.name('FlowupLabels');
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts () {
        try {
            let label = new mf.Dom({ tag: 'label', component: this, className: 'fl_label' });
            let input = new mf.Dom({
                tag: 'input', component: this, className: 'fl_input',
                style: {
                    'background'         : 'none'        ,
                    'border'             : 'none'        ,
                    'line-height'        : '22px'        ,
                    'padding'            : '20px 0 0 5px',
                    'position'           : 'absolute'    ,
                    'top'                : '0'           ,
                    'left'               : '0'           ,
                    'right'              : '0'           ,
                    'bottom'             : '0'           ,
                    'width'              : '100%'        ,
                    'z-index'            : '2'           ,
                    '-webkit-box-sizing' : 'border-box'  ,
                    '-moz-box-sizing'    : 'border-box'  ,
                    'box-sizing'         : 'border-box'
                }
            });
            /* build dom constructure */
            this.adom().addChild(
                new mf.Dom({
                    tag: 'div', component: this, className: 'FlowupLabels',
                    addChild  : new mf.Dom({
                        tag: 'div', component: this, className: 'fl_wrap', child: [ label, input ],
                        style: {
                            'display'            : 'block'     ,
                            'position'           : 'relative'  ,
                            '-webkit-box-sizing' : 'border-box',
                            '-moz-box-sizing'    : 'border-box',
                            'box-sizing'         : 'border-box'
                        }
                    })
                })
            );
            
            this.target(label);
            this.addChild(this.label());
            this.target(input);
            this.effect([ new Border({ type: 'bottom', width: '0.01rem' }) ]);
            this.event([ new Focus(this.focusEvent) ]);
            
            this.mainColor([85,85,85]);
            this.accentColor('#00A34D');
            this.size('2rem', '0.4rem');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    focusEvent (p1, p2, p3) {
        try {
           if (null !== p1.value()) {
               return;
           }
           let hei = p1.height();
           p1.label().option({
               size: (true === p2) ? hei.value()/3 + hei.type() : hei.value()*0.6 + hei.type(),
               color: (true === p2) ? p1.accentColor() : p1.mainColor()
           });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    height (val) {
        try {
            let ret = this.sizeValue('height', val);
            if (undefined !== val) {
                /* setter */
                let siz = mf.func.getSize(val);
                this.label().option({ size : siz.value()*0.6 + siz.type() });
                this.option({ style: { 'font-size' : siz.value()/2 + siz.type() } });
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    label (prm) {
        try {
            let ret = super.label(prm);
            if (undefined !== prm) {
                this.label().option({
                    sizeValue: ['margin-left', '0.05rem'],
                    style: {
                        '-webkit-transition': 'all .05s linear',
                        '-moz-transition'   : 'all .05s linear',
                        '-transition'       : 'all .05s linear'
                    }
                });
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    mainColor (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return this.style('border-bottom-color');
            }
            /* setter */
            let clr = mf.func.getColor(prm);
            this.style({ 'border-bottom-color' : clr.toString() });
            this.label().option({ color: clr.toString() });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    accentColor (prm) {
        try {
            return this.member(
                'accentColor',
                'string',
                (undefined !== prm) ? mf.func.getColor(prm).toString() : prm
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.FlowupLabels;
/* end of file */
