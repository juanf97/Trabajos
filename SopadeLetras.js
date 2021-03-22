$(document).ready(function () {
    $(".lorem").hover(function () {
        $(".lorem").addClass("resaltar");
    });
    $(".lorem").mouseleave(function () {
        $(".lorem").removeClass('resaltar');
    });
});