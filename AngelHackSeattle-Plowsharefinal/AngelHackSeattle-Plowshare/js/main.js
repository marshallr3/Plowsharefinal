var Plowshare ={};
var lastSelected = null;
Plowshare.plots = 9;
Plowshare.planted = null;
Plowshare.init = function () {
    Plowshare.welcomeFunc();
    Plowshare.gridCreate();
};
Plowshare.welcomeFunc = function () {
    var welcomeText = document.createElement("h1");
    welcomeText.id = "welcomeStuff";
    welcomeText.innerHTML = "Turning Swords into Plowshares";
    document.body.appendChild(welcomeText);
};
Plowshare.gridCreate = function () {
    var mainCont = document.createElement("div");
    mainCont.className = "container";
    mainCont.id = "mainCont";
    document.body.appendChild(mainCont);
    Plowshare.createPlots();
};
Plowshare.createPlots = function () {
    var mainCont = document.getElementById("mainCont");
    for (var i = 0; i < Plowshare.plots; i++) {
        var plotDivs = document.createElement("div");
        plotDivs.className += "col-sm-4 plotBox dirtPlot";
        plotDivs.id = i;
        plotDivs.addEventListener("click", Plowshare.navBox);
        plotDivs.planted = false;
        mainCont.appendChild(plotDivs);
    }
};
Plowshare.navBox = function (e) {
    console.log("Box id " + e.target.id + " was clicked");
    lastSelected = e.target;
    console.log(document.getElementById(lastSelected.id).planted);
    if (document.getElementById(lastSelected.id).planted == false){
        document.getElementById("tabNav").style.width = "100%";
    }
    else {
        document.getElementById("myNav").style.width = "100%";
    }
};
Plowshare.closeNav = function () {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("tabNav").style.width = "0%";
};
Plowshare.chickpeaClick = function (e) {
    Plowshare.closeNav();
    lastSelected.className += " chickpeaImg";
    document.getElementById(lastSelected.id).planted = true;
    Plowshare.addPlots();
};
Plowshare.sesameClick = function (e) {
    Plowshare.closeNav();
    lastSelected.className += " sesameImg";
    document.getElementById(lastSelected.id).planted = true;
    Plowshare.addPlots();
};
Plowshare.openFruits = function (e) {
    console.log("Here is some information on fruits");
    var tabs = document.getElementsByClassName("active");
    tabs.classList.remove("active");
    var setActive = document.getElementById("fruits");
    setActive.className += " active";
};
Plowshare.openVeggies = function (e) {
    console.log("Here is some information on vegetables");
    var tabs = document.getElementsByClassName("active");
    tabs.classList.remove("active");
    var setActive = document.getElementById("veggies");
    setActive.className += " active";
};
Plowshare.openHerbs = function (e) {
    console.log("Here is some information on herbs");
    var tabs = document.getElementsByClassName("active");
    tabs.classList.remove("active");
    var setActive = document.getElementById("herbs");
    setActive.className += " active";
};
Plowshare.addPlots = function (e) {
    console.log("working to here")
    var newPlot = document.createElement("div")
    console.log(document.getElementById(lastSelected.id).planted)
    if (document.getElementById(lastSelected.id).planted == false) {
    }
    else {
        newPlot.id = lastSelected.id
        //newPlot.innerHTML = "Plot " + newPlot.id
        newPlot.className = "plot"
        var countDownDate = new Date("July 17, 2017 15:37:25").getTime();
        var x = setInterval(function (e) {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // Display the result in the element with id="demo"
            newPlot.innerHTML = "Plot " + newPlot.id + " WATER IN: " + days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";
        }, 1000);
        document.getElementById("myNav").appendChild(newPlot)
    }
};
Plowshare.delete = function (e) {
    lastSelected.className = "col-sm-4 plotBox dirtPlot";
    document.getElementById(lastSelected.id).planted = false;
    console.log(lastSelected.id);
    var parent = document.getElementById("myNav");
    var child = document.getElementById(lastSelected.id);
    parent.removeChild(child);
    Plowshare.closeNav();
    document.getElementById(lastSelected.id).planted = false;
};
Plowshare.init();