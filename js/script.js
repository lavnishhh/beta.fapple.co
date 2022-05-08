function collapse_form(collapse,form,thisButton,otherButton){
    thisButton.style.backgroundColor="black";
    thisButton.style.color="white";

    document.getElementById(otherButton).style.backgroundColor="transparent";
    document.getElementById(otherButton).style.color="grey"

    var collapse_obj = document.getElementById(collapse);
    var form_obj = document.getElementById(form);
    collapse_obj.style.opacity="0";
    setTimeout(function(){
        collapse_obj.style.display ="none";
        form_obj.style.display="block";
    },500)

    setTimeout(function(){
        form_obj.style.opacity="1";
    },750)
}