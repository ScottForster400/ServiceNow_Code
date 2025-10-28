var questions_concat = ["**Question - Field Type - Additional Information**"]; // Where the concatinated question details are stored as strings
var question_set = fd_data._1__get_catalog_variables.please_list_the_form_questions; // Gets the array of objects that has question details
var description="" //the final string that is returned

question_set.forEach(convert_questions_to_string);

for(var i=0;i<questions_concat.length;i++){
    description = description + questions_concat[i] + "\n\r"
}

return description;

//Gets each variable out of the object and adds to one string which is then pushed to questions_concat
function convert_questions_to_string(question){
    
    var question_string = ""; //Stores current question objets details to be pushed
    for(var i=0; i<3; i++){
        if(i==0){
            question_string = question.question;
        }
        else if(i==1){
            // Field Types sys_id is stored so have to fetch the label of field type
            var field_type = new GlideRecord('sys_choice');
            field_type.addQuery('sys_id',question.field_type);
            field_type.query();
            if(field_type.next()){
                question_string = question_string + " - " + field_type.label;
            }
            else{
                // If no fiels type can not be found asks user to refer to the RITM to see field type
                question_string = question_string + " - Refer to" + fd_data.trigger.request_item.number
            }
        }
        else{
            if(question.additional_information != ""){
                question_string = question_string + " - " + question.additional_information;
            }
            else{
                // Adds none if no addtional comment for current question - UI purposes
                question_string = question_string + " - None";
            }
            
        }
    }
    //pushes to array that stores question strings
    questions_concat.push(question_string);
}