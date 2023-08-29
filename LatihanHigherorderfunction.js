//ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

//pilih hanya yang 'JAVASCRIPT LANJUTA'
let video = videos.filter(a => a.textContent.includes('JAVASCRIPT LANJUTAN'))


//ambil durasi masing2 video
    .map(durasi => durasi.dataset.duration)


//ubah durasi menjadi int, ubah menit menjadi detik
    .map(waktu => {
        // 10:10 -> [10,30]
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })


//jumlahkan semua detik
    .reduce((acc, curr) => acc + curr);
//ubah format jadi jam menit detik
const jam = Math.floor(video / 3600);
video = video - jam * 3600;
const menit = Math.floor(video/60);
const detik = video - (menit * 60);
//simpan di DOM
const vDurasi = document.querySelector('.total-durasi');
vDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;
const vJumlah = document.querySelector('.jumlah-video');
vJumlah.textContent = videos.filter(a => a.textContent.includes('JAVASCRIPT LANJUTAN')).length, 'video';
console.log(detik);