// Definisi kelas induk
class Motor {
    tampilkanJenis() {
        console.log("Jenis Motor: Motor biasa");
    }
}

// Definisi kelas turunan
class SportBike extends Motor {
    tampilkanJenis() {
        console.log("Jenis Motor: Sport Bike");
    }
}

class Scooter extends Motor {
    tampilkanJenis() {
        console.log("Jenis Motor: Scooter");
    }
}

// Menggunakan polimorfisme
const motor1 = new Motor();
const sportBike1 = new SportBike();
const scooter1 = new Scooter();

motor1.tampilkanJenis();    // Output: Jenis Motor: Motor biasa
sportBike1.tampilkanJenis(); // Output: Jenis Motor: Sport Bike
scooter1.tampilkanJenis();   // Output: Jenis Motor: Scooter
