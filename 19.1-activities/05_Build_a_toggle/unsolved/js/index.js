// Add Event Listener Below
$("#toggle").on("click", function(){
    $("#dropDown").slideToggle();
    $("img").css("transform", "rotate(180deg)")
});