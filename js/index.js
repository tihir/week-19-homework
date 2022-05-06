$("#darkMode").click(function() {
    $("#theme").attr("href", "css/dark.css");
    $("#darkMode").attr("src", "images/light-mode.png");
    $("#darkUser").attr("src", "images/light-profile.png");
    $("#darkSearch").attr("src", "images/light-search.png");
    $("#darkBag").attr("src", "images/light-shopping-bag.png");
    return false;
});