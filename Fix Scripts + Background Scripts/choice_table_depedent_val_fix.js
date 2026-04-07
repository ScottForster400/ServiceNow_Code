var gr = new GlideRecord("sys_choice");

gr.addQuery("name","sn_customerservice_case");
gr.addQuery("element","subcategory")
gr.addQuery('dependent_value',"FleetRadar");
gr.addQuery("inactive",false);
gr.query();
while(gr.hasNext()){
	gr.next();
	var dependentVal = gr.getValue("dependent_value");
	// gs.info(dependentVal);
	switch(dependentVal){
		case("DataBridge"):
			gr.setValue("dependent_value","23286c8dfbdff2d448a7f92abeefdc86");
			gr.update();
			break;
		case("Earned Recognition"):
			gr.setValue("dependent_value","3568a08dfbdff2d448a7f92abeefdcc4");
			gr.update();
			break;
		case("FleetAdmin"):
			gr.setValue("dependent_value","0788248dfbdff2d448a7f92abeefdce7");
			gr.update();
			break;
		case("FleetConnected"):
			gr.setValue("dependent_value","2cc064c1fb9ff2d448a7f92abeefdc27");
			gr.update();
			break;
		case("FleetConnected BrakePlus"):
			gr.setValue("dependent_value","51a8e001fb1336d448a7f92abeefdcd4");
			gr.update();
			break;
		case("FleetConnected Mobile"):
			gr.setValue("dependent_value","dbb8e401fb1336d448a7f92abeefdc90");
			gr.update();
			break;
		case("FleetConnected Reports"):
			gr.setValue("dependent_value","6cd8a801fb1336d448a7f92abeefdcf0");
			gr.update();
			break;
		case("FleetInspected"):
			gr.setValue("dependent_value","70f8ac01fb1336d448a7f92abeefdc38");
			
			gr.update();
			break;
		case("FleetRadar"):
			gr.setValue("dependent_value","8a096441fb1336d448a7f92abeefdc4b");
			gr.update();
			break;
		case("Scalar"):
			gr.setValue("dependent_value","d219e441fb1336d448a7f92abeefdc94");
			gr.update();
			break;
		default:
			gs.info('Skipped Record - ' + gr.getValue('dependent_value'));


	}
}