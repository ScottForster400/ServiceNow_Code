var deploymentUpdateDescription = Class.create();
deploymentUpdateDescription.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {

	getItemDescriptions: function(){
		
		

		var item_id = this.getParameter('sysparm_item_id')
		var update_type = this.getParameter('sysparm_update_type');
		
		//sets table and where to fetch description + short decsription from based of update type
		if(update_type=="catalog_item"){
			var gr = new GlideRecord('sc_cat_item');
			var description_name ="description";
			var short_description_name = "name"
		}
		else if(update_type=="knowledge_article"){
			var gr = new GlideRecord('kb_knowledge');
			var description_name ="text";
			var short_description_name = "short_description"
		}
		else{
			return "ERROR";
		}
		
		gr.addQuery('sys_id',item_id);
		gr.query();
		if(gr.next()){
			var response = {}
			var short_description = gr.getValue(short_description_name) || " ";
			var description = gr.getValue(description_name) || " ";
			var number = gr.getValue("number");

			if(description != " "){
				//Removes HTML from description string
				var description = HTMLsanitise(description);
				if(description.length>88){
					response.description = description.substring(0,85) + "...";
				}
				else{
					response.description = description;
				}
			}
			else{
				response.description = description;
			}

			if(short_description != " "){
				if(short_description.length>23){
					response.short_description = short_description.substring(0,20) + "...";
				}
				else{
					response.short_description = short_description;
				}
			}
			else{
				response.short_description = short_description;
			}

			response.number = number;
			response.full_title = short_description;
			
			return JSON.stringify(response);
			
		}
		else{
			response.short_description = "";
			response.description = "";
			response.number=""
			
			return JSON.stringify(response);
		}

		//removes html from String
		function HTMLsanitise(description){
			
			//console.log(str);
			var a = description.replace(/<\/?[^>]+(>|$)/g, ""); //Remove tags
			console.log(a);
			
			var b = a.replace(/&amp;/g, '&'); //Retain any ampersands that are just ampersands
			console.log(b);
			var c = b.replace(/&#(\d+);/g, function(match, dec) {
				return String.fromCharCode(dec); //Returns the special character from the decimal code representation and returns the entire decoded string.
			});
			
			return c;
		}
		
	},
	

    type: 'deploymentUpdateDescription'
});