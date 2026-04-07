var gr = new GlideRecord("sn_customerservice_case");

gr.addQuery("product",null);
gr.query();
while(gr.hasNext()){
	gr.next();
	var product = gr.getValue("u_insight_product");
	switch(product){
		case("DataBridge"):
			gr.setValue("product","23286c8dfbdff2d448a7f92abeefdc86");
			gr.update();
			break;
		case("Earned Recognition"):
			gr.setValue("product","3568a08dfbdff2d448a7f92abeefdcc4");
			gr.update();
			break;
		case("FleetAdmin"):
			gr.setValue("product","0788248dfbdff2d448a7f92abeefdce7");
			gr.update();
			break;
		case("FleetConnected"):
			gr.setValue("product","2cc064c1fb9ff2d448a7f92abeefdc27");
			gr.update();
			break;
		case("FleetConnected BrakePlus"):
			gr.setValue("product","51a8e001fb1336d448a7f92abeefdcd4");
			gr.update();
			break;
		case("FleetConnected Mobile"):
			gr.setValue("product","dbb8e401fb1336d448a7f92abeefdc90");
			gr.update();
			break;
		case("FleetConnected Reports"):
			gr.setValue("product","6cd8a801fb1336d448a7f92abeefdcf0");
			gr.update();
			break;
		case("FleetInspected"):
			gr.setValue("product","70f8ac01fb1336d448a7f92abeefdc38");
			gr.update();
			break;
		case("FleetRadar"):
			gr.setValue("product","8a096441fb1336d448a7f92abeefdc4b");
			gr.update();
			break;
		case("Scalar"):
			gr.setValue("product","d219e441fb1336d448a7f92abeefdc94");
			gr.update();
			break;
		default:
			gs.info('Skipped Record -' + gr.getValue('number'));


	}
}
