function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }

   var article_id = newValue;
   var update_type = g_form.getValue('u_update_type');

   var ga = new GlideAjax(''); // Removed Script include for security
   console.dir(article_id);
   ga.addParam('sysparm_name','getItemDescriptions');
   ga.addParam('sysparm_item_id',article_id);
   ga.addParam('sysparm_update_type',update_type);
   console.dir(ga);
   
   ga.getXMLAnswer(function(answer){
		//console.dir(answer);
		var response = JSON.parse(answer);
		
		
		g_form.setValue('short_description',response.short_description);
		g_form.setValue('description',response.description);
      g_form.setValue('u_item_link','id=kb_article&sysparm_article='+response.number)
      //g_form.setValue('u_new_or_updated',response.new_or_updated);
   });

   

  
   
}