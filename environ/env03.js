let environmentTitle = "The Wilderness";

let environmenentElements = ["jackie's heart necklace", "wilderness symbol"]

let buttonCreature= {
    name: ["shauna", "natalie", "lottie", "taissa", "misty"],
    type: "character",
    mood: "foreboding",
};


$("#needy-button").click(function () {
    let message = "<p>I am " + buttonCreature.name + ".</p>";
    $("#output").html(message);
});