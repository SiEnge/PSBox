fields = {
  "field1": false,
  "field2": false,
  "field3": false,
  "field4": false,
  "field5": false
};
var namepattern  = new RegExp("^[A-Z][a-z]+$");
var emailpattern = new RegExp("^.+@.+$");
var phonepattern = new RegExp("^[0-9+-]+$");
function check(field){
    var id = $(field).attr("id");
    if (id =="field1" || id == "field2")
    {
        if ($(field).val().match(namepattern))
        {
            $(field).parent().removeClass("error");            
            $(field).parent().addClass("correct");            
            fields[id] = true;
            readycheck();
        }
        else 
        {
            $(field).parent().removeClass("correct");
            $(field).parent().addClass("error");
            fields[id]  = false;
            readycheck();
        }
    }
    else if (id == "field3") 
    {
        if ($(field).val().match(emailpattern))
        {
            $(field).parent().removeClass("error");            
            $(field).parent().addClass("correct");            
            fields[id] = true;
            readycheck();
        }
        else 
        {
            $(field).parent().removeClass("correct");
            $(field).parent().addClass("error");
            fields[id]  = false;
            readycheck();
        }
    }
    else if (id == "field4") 
    {
        if ($(field).val().match(phonepattern))
        {
            $(field).parent().removeClass("error");            
            $(field).parent().addClass("correct");            
            fields[id] = true;
            readycheck();
        }
        else 
        {
            $(field).parent().removeClass("correct");
            $(field).parent().addClass("error");
            fields[id]  = false;
            readycheck();
        }        
    }
    else if (id == "field5") 
    {
        if ($(field).val() !='')
        {
            $(field).parent().removeClass("error");            
            $(field).parent().addClass("correct");            
            fields[id] = true;
            readycheck();
        }
        else 
        {
            $(field).parent().removeClass("correct");
            $(field).parent().addClass("error");
            fields[id]  = false;
            readycheck();
        }        
    }
}
function readycheck()
{
    if (fields["field1"] && 
        fields["field2"] && 
        fields["field3"] && 
        fields["field4"] && 
        fields["field5"]
        )
        $(".submit").prop('disabled', false);
    else
        $(".submit").prop('disabled', true);
}
$(".string input").focusin(function(){    
    $(this).parent().addClass("focus");
    $(this).parent().children(".tooltip").css("visibility","visible");
});
$(".string input").focusout(function(){    
    $(this).parent().removeClass("focus");  
    $(this).parent().children(".tooltip").css("visibility","hidden");  
    check(this);
});