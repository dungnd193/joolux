var dichVuKiemDinh = document.getElementById("dvkd");
var congNgheEntrupy = document.getElementById("cne");
var cauHoiThuongGap = document.getElementById("quest");


dichVuKiemDinh.onclick = function dichVuKiemDinhDefault() {
    dichVuKiemDinh.classList.add("kdhh__content-item-checked")
    congNgheEntrupy.classList.remove("kdhh__content-item-checked")
    cauHoiThuongGap.classList.remove("kdhh__content-item-checked")
    document.getElementById("kdhh__dvkd").style.display = 'block';
    document.getElementById("kdhh__technology").style.display = 'none';
    document.getElementById("ky-gui__question").style.display = 'none';
}

congNgheEntrupy.onclick = function() {
    dichVuKiemDinh.classList.remove("kdhh__content-item-checked")
    congNgheEntrupy.classList.add("kdhh__content-item-checked")
    cauHoiThuongGap.classList.remove("kdhh__content-item-checked")
    document.getElementById("kdhh__dvkd").style.display = 'none';
    document.getElementById("kdhh__technology").style.display = 'block';
    document.getElementById("ky-gui__question").style.display = 'none';
}

cauHoiThuongGap.onclick = function() {
    dichVuKiemDinh.classList.remove("kdhh__content-item-checked")
    congNgheEntrupy.classList.remove("kdhh__content-item-checked")
    cauHoiThuongGap.classList.add("kdhh__content-item-checked")
    document.getElementById("kdhh__dvkd").style.display = 'none';
    document.getElementById("kdhh__technology").style.display = 'none';
    document.getElementById("ky-gui__question").style.display = 'block';
}

