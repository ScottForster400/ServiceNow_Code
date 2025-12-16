var tenablePluginInfo = Class.create();
tenablePluginInfo.prototype = Object.extendsObject(AbstractAjaxProcessor, {

	//If you wish to upadte what is displayed you will also have to alter Entire Vulnerability Auto-Populate and Specific Hostname Auto-Populate catalogue client scripts
    getPluginInfo: function(){
		//Gets the sys_id or ID of tenable plugin from custom UI policy
		var pluginIdentfier = this.getParameter('sysparm_pluginIdentifier'); 

		//Gets the field name to query on the teneble plugin table
		var fieldName = this.getParameter('sysparm_field');

		//Querys tenable plugin table based on parameters passed in
		var gr = new GlideRecord('x_tsirm_tio_itsm_plugin');
		gr.addQuery(fieldName,pluginIdentfier);
		gr.query();

		//Gets the necessary detailts from the item and stores them as variables
		if(gr.next()){
			var id = gr.getValue('id');
			var cve = gr.getValue('cve');
			var source = gr.getValue('source');
			var date_published = gr.getDisplayValue('date_published');
			var last_modified = gr.getDisplayValue('last_modified');
			var category = gr.getValue('category');
			var severity = gr.getValue('severity') + ' - ' + gr.getDisplayValue('severity');
			var short_description = gr.getValue('short_description');
			var description = gr.getValue('description');
			var threat = gr.getValue('threat');
			var solution = gr.getValue('solution');

			//Fetches all accociated Vulnerabilities
			associated_vulns = '';
			var gr_2 = new GlideRecord('x_tsirm_tio_itsm_vulnerability');
		
			gr_2.addQuery('tenable_plugin',gr.sys_id);
			gr_2.query();
			// return gr_2.next();
			while(gr_2.next()){
				associated_vulns= associated_vulns +gr_2.number + ', ';
			}
		
			
			//Creates an object and stores details as attributes for the object
			var response = {};
			response.id = id;
			response.cve = cve;
			response.source = source;
			response.date_published = date_published;
			response.last_modified = last_modified;
			response.category = category;
			response.severity = severity;
			response.short_description = short_description;
			response.description = description;
			response.threat = threat;
			response.solution = solution;
			response.associated_vulns = associated_vulns;
			
			//Converts Objet to a JSON and converts it to string, Then returns it to client script that called it.
			return JSON.stringify(response);
			
		}

		
	},
	type: 'tenablePluginInfo',
});