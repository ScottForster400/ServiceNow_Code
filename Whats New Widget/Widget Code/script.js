(function() {

    if(!input){
        data.updates=[];
        //change to alter number of items added - update else if (line 98) at bottom to match this number
        var num_of_items_left = 5
        var isData = false;


        //Fetches Fetaured Items
        var grFeatured = new GlideRecord('') //Removed table for security
        grFeatured.addActiveQuery();
        grFeatured.addQuery('u_published',true);
        grFeatured.addQuery('u_featured',true);
        grFeatured.orderByDesc('u_publish_date');
        grFeatured.setLimit(num_of_items_left);
        grFeatured.query();
        if(grFeatured.hasNext()){
            while(grFeatured.next()){
                isData=true;
                var update_type = grFeatured.getValue('u_update_type');
                var name = ""
                if(update_type == 'catalog_item'){
                    name = grFeatured.getDisplayValue('u_catalog_item');
                    
                }
                else{
                    name = grFeatured.getValue('short_description');
                    
                }

                data.updates.push({
                    'name': grFeatured.getValue('short_description'),
                    'update_type': update_type,
                    'description': grFeatured.getValue('description'),
                    'item_link': grFeatured.getValue('u_item_link'),
                    'new_or_updated': grFeatured.getDisplayValue('u_new_or_updated'),
                    'full_title': grFeatured.getValue('u_full_title'),
                    'isData': isData
                    // 'is_update': is_update
                })

                //Reduces the number of items left to fetch
                num_of_items_left = num_of_items_left - 1;
                
            }


        }

        if(num_of_items_left != 0){
            var grUpdate = new GlideRecord('') //removed table for security
            grUpdate.addActiveQuery();
            grUpdate.addQuery('u_published',true);
            grUpdate.addQuery('u_featured',false);
            grUpdate.orderByDesc('u_publish_date');
            grUpdate.setLimit(num_of_items_left)
            grUpdate.query();
            
            if(grUpdate.hasNext()){
                while(grUpdate.next()){
                    isData=true;
                    var update_type = grUpdate.getValue('u_update_type');
                    var name = ""
                    if(update_type == 'catalog_item'){
                        name = grUpdate.getDisplayValue('u_catalog_item');
                        
                    }
                    else{
                        // data.updates.push('AHHH');
                        name = grUpdate.getValue('short_description');
                        
                    }

                    // if(grUpdate.getValue('u_new_or_updated') == 'new'){
                    //     is_update = false;
                    // }

                    data.updates.push({
                        'name': grUpdate.getValue('short_description'),
                        'update_type': update_type,
                        'description': grUpdate.getValue('description'),
                        'item_link': grUpdate.getValue('u_item_link'),
                        'new_or_updated': grUpdate.getDisplayValue('u_new_or_updated'),
                        'full_title': grUpdate.getValue('u_full_title'),
                        'isData': isData
                        // 'is_update': is_update
                    })
                
                }
        
            }
            else if(num_of_items_left == 5){
                    data.updates.push({
                    'isData': isData
                })
            }
        }

       
    }

})();