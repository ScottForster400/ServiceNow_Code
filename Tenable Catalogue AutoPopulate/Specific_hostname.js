//On change of ten_number_readonly as this needs to be autopopulated before the script can execute
//If you wish to display more information you will also have to later the tenablePluginInfo Include script
function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || newValue == '') {
      return;
   }



	var tenVal = g_form.getValue('ten_number');
	//clears ten_num if not blank - no incorrect  information is submitted
	if (tenVal != ''){
		g_form.setValue('ten_num','');
	}


	if(newValue != ''){
		//Creates a glide Ajax object of tenablePluginInfo Script
		var ga = new GlideAjax('tenablePluginInfo');
		//Defines whihc function in script to call
		ga.addParam('sysparm_name','getPluginInfo');
		//Sets the plugin Identifier as the ID of selected TEN Number
		ga.addParam('sysparm_pluginIdentifier',newValue);
		//Sets the gr query field as id
		ga.addParam('sysparm_field','id');
		//executes getPluginInfo script
		ga.getXMLAnswer(function(answer){
			//Converts the JSON string back to an object
			var response = JSON.parse(answer);

			//Sets form values as the corrosponding attributes of the object
			g_form.setValue('id',response.id);
			g_form.setValue('cve',response.cve);
			g_form.setValue('source',response.source);
			g_form.setValue('date_published',response.date_published);
			g_form.setValue('last_modified',response.last_modified);
			g_form.setValue('plugin_family',response.category);
			g_form.setValue('ten_severity',response.severity);
			g_form.setValue('short_description',response.short_description);
			g_form.setValue('description',response.description);
			g_form.setValue('solution',response.solution);
			g_form.setValue('threat',response.threat);
			g_form.setValue('attached_vulnerabilities',response.associated_vulns);
		});
	}
	//If the ten_number_readonly field is chnaged to blank it will clear the autopopulate fields	
	else{
		g_form.setValue('id','');
		g_form.setValue('cve','');
		g_form.setValue('source','');
		g_form.setValue('date_published','');
		g_form.setValue('last_modified','');
		g_form.setValue('plugin_family','');
		g_form.setValue('ten_severity','');
		g_form.setValue('short_description','');
		g_form.setValue('description','');
		g_form.setValue('solution','');
		g_form.setValue('threat','');
		g_form.setValue('attached_vulnerabilities','');
	}

//Type appropriate comment here, and begin script below

}