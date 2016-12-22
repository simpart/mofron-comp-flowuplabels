/**
 * @file mofron-parts-flowuplabel/index.js
 */

mofron.parts.FlowupLabels = class extends mofron.parts.InputText {
    
    constructor (lbl, txt) {
        try {
            super([lbl,txt]);
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initContents (vd, prm) {
        try {
            if (null === prm) {
                throw new Error('invalid parameter');
            }
            var lbl_txt = null;
            if ('object' === (typeof prm)) {
                lbl_txt = prm[0];
            } else {
                lbl_txt = prm;
            }
            if ('object' !== (typeof lbl_txt)) {
                lbl_txt = new mofron.parts.Text(lbl_txt);
            }
            
            var fl_top = new mofron.util.Vdom('div');
            fl_top.addClname('FlowupLabels');
            this.tgt_id = fl_top.getId();
            
            var fl_wrp = new mofron.util.Vdom('div');
            fl_wrp.addClname('fl_wrap');
            
            var lbl = new mofron.util.Vdom('label');
            lbl.addClname('fl_label');
            
            var inp = new mofron.util.Vdom('input');
            inp.addClname('fl_input');
            
            vd.addChild(fl_top);
            fl_top.addChild(fl_wrp);
            fl_wrp.addChild(lbl);
            lbl.addChild(lbl_txt.getVdom());
            fl_wrp.addChild(inp);
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    afterInit () {
        try {
            $( '#' + this.vdom.getChild(0).getId() ).FlowupLabels({
                feature_onInitLoad: true      ,
                class_focused:      'focused' ,
                class_populated:    'populated'
            });
            
            this.vdom.getChild(0).getChild(0).setStyle('margin', '0px');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    getTarget () {
        try {
            return this.vdom.getChild(0).getChild(0).getChild(1);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    text (val) {
        try {
            var prm = val;
            if ('object' === (typeof val)) {
                prm = val[1];
            }
            return super.text(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

}
