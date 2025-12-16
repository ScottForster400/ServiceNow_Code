var gr = new GlideRecord("task");
gr.addQuery('sys_id','');
gr.query();
if(gr.next()){
	gr.setValue('state',4);
	gr.setValue('approval','rejected');
	gr.update();
}