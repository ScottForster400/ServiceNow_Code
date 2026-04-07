var currentTime = new GlideDateTime

var gr = new GlideRecord(' x_tipts_deployme_0_u_deployment_updates');
gr.addQuery('active', true);
gr.query();
while (gr.Next()) {
    gs.console.log("DEPLOY UPDATE:" + gr.getValue(sys_id));
    
    var expireyDate = gr.getValue("u_expiry_date");
    if (expireyDate != ' ' && currentTime.getNumericValue()>expireyDate.getNumericValue()){
        gr.setValue('active',false);
        gr.update();
    };
    
}