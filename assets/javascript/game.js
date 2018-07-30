$(document).ready(function() {

    var wins = 0;
    
    var losses = 0;

    var yourScore = 0;
    $("#your-score").text(yourScore);

    var goalScore = Math.floor((Math.random() * 120) + 19);
    $("#goal-score").text(goalScore);

    var reset = function() {
        yourScore = 0;
        $("#your-score").text(yourScore);

        goalScore = Math.floor((Math.random() * 120) + 19);
        $("#goal-score").text(goalScore);

        crystal1 = Math.floor((Math.random() * 12) + 1);
        crystal2 = Math.floor((Math.random() * 12) + 1);
        crystal3 = Math.floor((Math.random() * 12) + 1);
        crystal4 = Math.floor((Math.random() * 12) + 1);
    };

    var test = function() {
        if (yourScore === goalScore) {
            wins++;
            $("#wins").text(wins);
            reset();
        } else if (yourScore > goalScore) {
            losses++;
            $("#losses").text(losses);
            reset();
        };
    };

    var crystal1 = Math.floor((Math.random() * 12) + 1);
    $("#crystal1").on("click", function() {
        yourScore = yourScore + crystal1;
        $("#your-score").text(yourScore);
        test();
    });

    var crystal2 = Math.floor((Math.random() * 12) + 1);
    $("#crystal2").on("click", function() {
        yourScore = yourScore + crystal2;
        $("#your-score").text(yourScore);
        test();
    });

    var crystal3 = Math.floor((Math.random() * 12) + 1);
    $("#crystal3").on("click", function() {
        yourScore = yourScore + crystal3;
        $("#your-score").text(yourScore);
        test();
    });

    var crystal4 = Math.floor((Math.random() * 12) + 1);
    $("#crystal4").on("click", function() {
        yourScore = yourScore + crystal4;
        $("#your-score").text(yourScore);
        test();
    });

});
