var currentTime = new GlideDateTime();

var gr = new GlideRecord(''); //Removed table for security
gr.addQuery('active',true);
gr.addQuery('u_published', false);
gr.addQuery('approval','approved');
gr.query();
while (gr.next()) {
    var publishDate = new GlideDateTime(gr.getValue('u_publish_date'));
    var expireyDate = new GlideDateTime(gr.getValue("u_expiry_date"));
    if (currentTime.getNumericValue() > expireyDate.getNumericValue() && currentTime.getNumericValue() > publishDate.getNumericValue()){

        gr.setValue('u_published',true);
        gr.update();
    };
    
}