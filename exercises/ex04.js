
let count = 0;
let colorsCount = 0; // new line


let colors = ["green", "orange", "brown", "yellow", "gold", "purple", "red", "pink"];

let buttonText = "";


$("#needy-button").click(function () {

    count = count + 1;

     console.log(count);
     console.log(colors[colorsCount]);

    buttonText = "I took everything " + count + " times and color is " + colors[colorsCount];

    $("#needy-button").html(buttonText);

    $("body").css("background-color", colors[colorsCount]);

     if (count >= 16) { $("#needy-button").after("<p>my mood is...wild</P."); }
     else if (count >= 13) { $("#needy-button").after("<p>my mood is...really really agitated</P."); }
     else if (count >= 5) { $("#needy-button").after("<p>my mood is...agitated</P."); }

    colorsCount = colorsCount + 1;

    if (colorsCount >= 8) { colorsCount = 0; }

});