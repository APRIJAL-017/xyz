export class MahasiswaModel {
    constructor(nama, nim, nilai) {
        this.nama = nama;  // Public attribute
        this.nim = nim;    // Public attribute
        let _nilai = nilai; // Private attribute using closure

        // Getter for _nilai (private)
        this.getNilai = () => _nilai;
        
        // Setter for _nilai with validation
        this.setNilai = (nilaiBaru) => {
            if (nilaiBaru >= 0 && nilaiBaru <= 100) {
                _nilai = nilaiBaru;
            } else {
                console.log("Nilai harus antara 0 dan 100");
            }
        };
    }
}
