let warna1, warna2, warna3;
function warna() {
    warna1 = document.getElementById("warna1").value;
    warna2 = document.getElementById("warna2").value;
    warna3 = document.getElementById("warna3").value;
    console.log(warna1);
    console.log(warna2);
    console.log(warna3);
    kumpulanGambar = [
        { backgroundColor: 'gray', borderRadius: '0' },
        { backgroundColor: warna1, borderRadius: '50%' },
        { backgroundColor: warna2, borderRadius: '0' },
        { backgroundColor: warna3, borderRadius: '50%' },
    ];
    document.getElementById("gmbr").style.display = "block";
}

let kumpulanGambar = [
    { backgroundColor: 'gray', borderRadius: '0' },
    { backgroundColor: '', borderRadius: '50%' },
    { backgroundColor: '', borderRadius: '0' },
    { backgroundColor: '', borderRadius: '50%' },
];

let patokan = 0;

function mengubahGambar() {
    patokan = (patokan + 1) % kumpulanGambar.length;
    const ambilGambar = document.getElementById('gmbr');
    const next = kumpulanGambar[patokan];
    ambilGambar.style.backgroundColor = next.backgroundColor;
    ambilGambar.style.borderRadius = next.borderRadius;
}