
// clear input 
function clearInput() {
    document.getElementById("so-nguyen").value = "";
    document.getElementById("so-thuc").value = "";
}


// Nhập số nguyên
let chuoiSoNguyen = [];
function themSo() {

    let soNguyen = document.getElementById("so-nguyen").value * 1;
    chuoiSoNguyen.push(soNguyen);
    document.getElementById("ket-qua-them-so").innerText = chuoiSoNguyen;
    clearInput();
}


// Câu 1
function tinhTongSoDuong() {
    let tongSoDuong = 0;
    for (i = 0; i < chuoiSoNguyen.length; i++) {
        if (chuoiSoNguyen[i] > 0) {
            tongSoDuong += chuoiSoNguyen[i];
        }
    }
    document.getElementById("ket-qua-cau1").innerText = tongSoDuong;
}

// Câu 2
function demSoDuong() {
    let soDuong = 0;
    for (i = 0; i < chuoiSoNguyen.length; i++) {
        if (chuoiSoNguyen[i] > 0) {
            soDuong++;
        }
    }
    document.getElementById("ket-qua-cau2").innerText = soDuong;
    return soDuong;
}

// Câu 3
function timSoNhoNhat() {
    let soNhoNhat = chuoiSoNguyen[0];
    for (i = 1; i < chuoiSoNguyen.length; i++) {
        if (chuoiSoNguyen[i] < soNhoNhat) {
            soNhoNhat = chuoiSoNguyen[i];
        }
    }
    document.getElementById("ket-qua-cau3").innerText = soNhoNhat;

}

// Câu 4

function timDuongSoNhoNhat() {
    let chuoiSoNguyenDuong = [];
    for (i = 0; i < chuoiSoNguyen.length; i++) {
        if (chuoiSoNguyen[i] > 0) {
            chuoiSoNguyenDuong.push(chuoiSoNguyen[i]);
        }
    }
    let soNguyenDuongNhoNhat = chuoiSoNguyenDuong[0];
    for (i = 1; i < chuoiSoNguyenDuong.length; i++) {
        if (chuoiSoNguyenDuong[i] < soNguyenDuongNhoNhat) {
            soNguyenDuongNhoNhat = chuoiSoNguyenDuong[i];
        }
    }
    document.getElementById("ket-qua-cau4").innerText = soNguyenDuongNhoNhat;

}


// Câu 5

function timSoChanCuoiCung() {
    let chuoiSoChan = ["rỗng"];

    for (i = 0; i < chuoiSoNguyen.length; i++) {
        if (chuoiSoNguyen[i] % 2 == 0) {
            chuoiSoChan.push(chuoiSoNguyen[i]);
        }
    }
    let soChanCuoiCung = chuoiSoChan[chuoiSoChan.length - 1];
    if (soChanCuoiCung == "rỗng") {

        document.getElementById("ket-qua-cau5").innerText = -1;


    }
    else {
        document.getElementById("ket-qua-cau5").innerText = soChanCuoiCung;
    }

}


// Câu 6

function doiViTri() {
    let soThuNhat = document.getElementById("so-thu-nhat").value * 1;
    let soThuHai = document.getElementById("so-thu-hai").value * 1;
    let chuoiHaiSo = [];
    chuoiHaiSo.push(soThuNhat, soThuHai);
    let soThuNhatTam = chuoiHaiSo[0];
    chuoiHaiSo[0] = chuoiHaiSo[1];
    chuoiHaiSo[1] = soThuNhatTam;
    document.getElementById("ket-qua-cau6").innerText = `Mảng sau khi đổi là: ${chuoiHaiSo}`;



}

// Câu 7

function sapXep() {
    let chuoiSoNguyen2 = chuoiSoNguyen.slice(0);
    for (i = 0; i < chuoiSoNguyen2.length - 1; i++) {
        for (j = (i + 1); j < chuoiSoNguyen2.length; j++) {
            if (chuoiSoNguyen2[j] < chuoiSoNguyen2[i]) {
                let bienTam = chuoiSoNguyen2[j];
                chuoiSoNguyen2[j] = chuoiSoNguyen2[i];
                chuoiSoNguyen2[i] = bienTam;
            }
        }
    }
    document.getElementById("ket-qua-cau7").innerText = chuoiSoNguyen2;
}



// Câu 8
function timSoNguyenTo() {
    // Số nguyên tố: >1, chia hết cho 1 và chính nó
    let soNguyenTo = 0;
    for (i = 0; i < chuoiSoNguyen.length; i++) {
        if (chuoiSoNguyen[i] > 1 & chuoiSoNguyen[i] % 1 == 0 & chuoiSoNguyen[i] % chuoiSoNguyen[i] == 0) {
            soNguyenTo = chuoiSoNguyen[i];
            break;
        }
    }
    if (soNguyenTo == 0) {
        document.getElementById("ket-qua-cau8").innerText = -1;
    } else {
        document.getElementById("ket-qua-cau8").innerText = soNguyenTo;
    }

}

// Câu 9 
// Nhập số thực
let chuoiSoThuc = [];
function themSoThuc() {
    let soThuc = document.getElementById("so-thuc").value * 1;
    chuoiSoThuc.push(soThuc);
    document.getElementById("ket-qua-so-thuc").innerText = chuoiSoThuc;
    clearInput();
}

function timSoNguyen() {
    let tongSoNguyen = 0;
    for (i = 0; i < chuoiSoThuc.length; i++) {
        if (Number.isInteger(chuoiSoThuc[i])) {
            tongSoNguyen++;
        }
    }
    document.getElementById("ket-qua-cau9").innerText = `Tổng Số Nguyên là: ${tongSoNguyen}`;
}


// Câu 10
// Đếm số âm
function demSoAm() {
    let soAm = 0;
    for (i = 0; i < chuoiSoNguyen.length; i++) {
        if (chuoiSoNguyen[i] < 0) {
            soAm++;
        }
    }
    return soAm;
}

function soSanh() {
    let tongSoDuong = demSoDuong();
    let tongSoAm = demSoAm();
    let ketQua = "";
    if (tongSoAm == tongSoDuong) {
        ketQua = `Tổng Số âm = Tổng Số dương`;
    }
    else if (tongSoAm > tongSoDuong) {
        ketQua = `Tổng Số âm > Tổng Số dương`;
    }
    else {
        ketQua = `Tổng Số âm < Tổng Số dương`;
    }
    document.getElementById("ket-qua-cau10").innerText = ketQua;

}












