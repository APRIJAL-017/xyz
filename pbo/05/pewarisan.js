class Orang {
    constructor(nama, alamat) {
        this.nama = nama;
        this.alamat = alamat;
    }

    tampilkanInformasi() {
        console.log('===========================');
        console.log(`Nama   : ${this.nama}`);
        console.log(`Alamat : ${this.alamat}`);
    }
}

// Definisi kelas turunan
class Mahasiswa extends Orang {
    constructor(nama, alamat, nim) {
        super(nama, alamat); // Memanggil konstruktor kelas induk
        this.nim = nim;
    }

    tampilkanInformasi() {
        super.tampilkanInformasi(); // Memanggil metode dari kelas induk
        console.log(`NIM    : ${this.nim}`);
        console.log('===========================');
    }

    tampilkanInformasi2(infoTambahan) {
        console.log('Informasi Tambahan:');
        console.log(infoTambahan);
        console.log('===========================');
    }
}

// Penggunaan kelas turunan
const mahasiswa1 = new Mahasiswa("Izall", "Jl. Arab Saudi", "202301110011");
mahasiswa1.tampilkanInformasi();
mahasiswa1.tampilkanInformasi2("Jurusan: Teknik Informatika, Semester: 5");
