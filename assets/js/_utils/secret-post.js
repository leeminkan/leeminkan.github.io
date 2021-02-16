/*
 * Calculate the Timeago
 */

$(function () {

    let content = $("#secret-post").html();
    let shuffled = content.split('').sort(function () { return 0.5 - Math.random() }).join('');

    $("#secret-post-shuffled").empty().append(shuffled);

    $(this).find('.hide-first-load').removeClass("hide-first-load");

    $("#secret-form").on("submit", function (e) {

        const formData = new FormData(e.target);
        const key = formData.get("key");
        if (key === "key") {
            $(".blur-post").hide();
            $(".secret-form").hide();
            $("#secret-post-shuffled").hide();
            $("#secret-post").removeClass("hide-before-authen");
        } else {
            alert("Không chính xác!");
        }
        return false;
    });
});
