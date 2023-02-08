function volumeluaspermukaanbalok(panjang, lebar, tinggi) {
    let volume ;
    volume = (panjang*lebar*tinggi)
    document.write("Jika Panjang Balok " + panjang, "Cm, Lebar " + lebar, "Cm, Dan Tinggi " + tinggi, "Cm, Maka Volume Nya Adalah " + volume, "Cm^3 <br><br>")
}
    volumeluaspermukaanbalok(15, 5, 10);

function luaspermukaan(panjang, lebar, tinggi ) {
    let luas ;
    luas = 2* ((panjang*lebar) + (panjang*tinggi) + (lebar*tinggi))
    document.write("Jika Panjang Balok " + panjang, "Cm, Lebar ", +lebar, "Cm, Dan Tinggi " + tinggi, "Cm, Maka Luas Permukaan Balok Adalah " + luas, "Cm^")
}

    luaspermukaan (15, 5, 10)