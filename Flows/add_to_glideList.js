var duplicate = false
var groups = fd_data._3__look_up_record.record.groups.toString(); //gets groups already part of template record
var groups_list = groups.split(','); // splits group string to array of groups
groups_list.forEach(isDuplicate) //calls isDupliacte for each entry in groups_list

if(duplicate==false){
    if (groups == '')
    {
        return fd_data._6__for_each.item.sys_id; //returns requested group if no other groups
    }
    else
    {
        return groups += ',' + fd_data._6__for_each.item.sys_id; //returns string of comma-seperated sys_id's rereing to new group and groups already attached to template
    }
}
else{
    duplicate = false
    return groups; //returns string containg the groups alredy attached to template
}

function isDuplicate(group){
     if (group == fd_data._6__for_each.item.sys_id.toString()){ //checks if sys_id of group passed in is the same as requested group
        duplicate = true;
    }
}