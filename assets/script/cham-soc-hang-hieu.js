var dichVuSpa = document.getElementById("dich-vu-spa");
var dichVuCheTac = document.getElementById("dich-vu-che-tac");

var dvSpa = document.getElementById("dv__spa");
var dvCheTac = document.getElementById("dv__che-tac")

dichVuSpa.onclick = function() {
    dichVuSpa.classList.add("dv-item-checked");
    dichVuCheTac.classList.remove("dv-item-checked");

    dvSpa.style.display = "block";
    dvCheTac.style.display = "none"
}

dichVuCheTac.onclick = function() {
    dichVuCheTac.classList.add("dv-item-checked");
    dichVuSpa.classList.remove("dv-item-checked");

    dvCheTac.style.display = "block";
    dvSpa.style.display = "none"
}