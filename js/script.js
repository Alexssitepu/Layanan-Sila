// function test() {
//     alert("Sukses")
// }

// daftar kode layanan
const layanan = ["CAK", "RDA", "TNM", "SKA"]
// validasi
function validasiForm() {
    // Daptkan Semua nilai dari inputan
    const namalengkap = document.getElementById("nama").value;
    value.trim();
    const nim = document.getElementById("nim").value;
    value.trim();
    const prodi = document.getElementById("prodi").value;
    value.trim();
    const layanan = document.getElementById("layanan").value;
    const tanggal = document.getElementById("tanggal").value;
    const keterangan = document.getElementById("keterangan").value;
    value.trim();
    // cek apakah ada field yang kosong

    if (namalengkap === "" || nim === "" || prodi === "" || layanan === "" || tanggal === "" || keterangan === "") {
        alert("❌ semua field harus diisi");
        return false;
    }
}