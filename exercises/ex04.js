// the clicker button progrm

let counter = 0; 

$("#needy-button").click(function(){
    counter = counter + 1;
    $("#needy-button").html("I was clicked" + counter + "times");
}); 