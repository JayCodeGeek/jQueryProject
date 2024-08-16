$(document).ready(function () {
    $("#changeTextColor").on("click", function () {
        $(".textContent").css("color", "white");
    });
    $("#addElement").on("click", function () {
        $(".empty").after("<img src='./jQuery.png'>");
    });
    $("#removeElement").on("click", function () {
        $("img").remove();
    });
    $("#hideDiv").on("click", function () {
        $(".divcolor").hide();
    });
    $("#showDiv").on("click", function () {
        $(".divcolor").show();
    });
    $("#toggleDiv").on("click", function () {
        $(".divcolor").toggle();
    });
    $("#italicText").on("click", function () {
        $(".textstyle").html("<em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quiarchitecto dolor quasi omnis nostrum quisquam temporibus sit,incidunt saepe commodi ducimus ullam maiores assumenda perferendiscum soluta. Recusandae, quisquam inventore.</em>");
    });
});


