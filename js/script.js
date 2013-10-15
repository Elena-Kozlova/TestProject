var tabs = [];
var tabHeaders = [];

$(document).ready(function () {
    initCarousel();

    initTabs();
});

function initCarousel() {
    $('#liquid1').liquidcarousel({height:129, duration:100, hidearrows:false});
}

function initTabs() {
    tabs.push($("#tabContent1"));
    tabs.push($("#tabContent2"));
    tabs.push($("#tabContent3"));

    tabHeaders.push($("#tabHeader1"));
    tabHeaders.push($("#tabHeader2"));
    tabHeaders.push($("#tabHeader3"));

    activateTab(0);

    $("#tabHeader1").bind("click", function () {
        activateTab(0);
    });

    $("#tabHeader2").bind("click", function () {
        activateTab(1);
    });

    $("#tabHeader3").bind("click", function () {
        activateTab(2);
    });
}

function activateTab(tabNum) {
    for (var i = 0; i < 3; i++) {
        if (i == tabNum) {
            tabs[i].show();
            tabHeaders[i].addClass("active");
        } else {
            tabs[i].hide();
            tabHeaders[i].removeClass("active");
        }
    }
}
