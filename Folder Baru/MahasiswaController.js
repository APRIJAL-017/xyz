import { MahasiswaModel } from "./MahasiswaModel.js";
import { MahasiswaView } from "./MahasiswaView.js";

class MahasiswaController {
    constructor(model, view) {
        this.model = new model("Budi", "123456", 85);  // Create instance of model
        this.view = new view();  // Create instance of view
    }

    tampilkanMahasiswa() {
        // Use the instance of MahasiswaModel and MahasiswaView
        document.getElementById("output").innerHTML = this.view.render(this.model);
    }

    ubahNilai(nama, nim, nilaiBaru) {
        const mahasiswa = new MahasiswaModel(nama, nim, 0); // Create new MahasiswaModel instance
        mahasiswa.setNilai(nilaiBaru);
        console.log(`${nama} memiliki nilai baru: ${mahasiswa.getNilai()}`);
        document.getElementById("output").innerHTML = this.view.render(mahasiswa);
    }
}

// Ensure to create instances of MahasiswaModel and MahasiswaView
const mahasiswaController = new MahasiswaController(MahasiswaModel, MahasiswaView);
mahasiswaController.tampilkanMahasiswa();
mahasiswaController.ubahNilai("Budi", "123456", 95);

export default MahasiswaController;
