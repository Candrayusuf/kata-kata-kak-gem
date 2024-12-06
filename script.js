const button = document.getElementById('generateButton');
const mainText = document.getElementById('mainText');
const bgMusic = document.getElementById('bgMusic');

// Menunggu klik pertama pengguna untuk memulai audio
button.addEventListener('click', () => {
    // Jika audio belum diputar, mulai memutarnya
    if (bgMusic.paused) {
        bgMusic.play().catch(error => {
            console.error('Audio gagal diputar:', error);
        });
    }

    const motivationalQuotes = [
        "Jangan kasih kesempatan kedua bagi orang yang mendua. Paham?",
        "Akhirnya aku sampai di titik aku mencintaimu namun aku juga harus menjauh darimu. Paham?",
        "Aku mencintaimu mati-matian sedangkan kau mengkhianatiku di belakang. Luar biasa, kan? Paham?",
        "Kalau cinta katakan cinta, kalau sayang katakan sayang. Jangan sampai aku diambil orang. Paham?",
        "Semakin benci kau melihat aku, akan semakin banyak gaya aku di depan kau. Paham?",
        "Cantik itu adalah soal yang biasa, yang luar biasa adalah bisakah kau menahan godaan dari mulutnya para buaya. Paham?",
        "Menjadi tua adalah takdir tapi untuk tetap keren adalah kewajiban. Paham?",
        "Aku tipikal orang yang suka bertanya sebab itu aku selalu bertanya setiap harinya, apakah kau masih mencintaiku dan aku masih selalu ada di hatimu. Paham?",
        "Jangan mencintai orang yang tidak pernah mencintaimu, kau hanya membuang-buang waktu. Lebih baik kau mencintai orang yang mempunyai kepastian kepadamu. Paham?",
        "Aku kira aku sudah dicintai hebat olehnya ternyata masih ada dia di antara kita. Paham?",
        "Hubungan kita memang sementara tapi kupastikan cinta kita akan bersemi selamanya. Paham?",
        "Aku mencintaimu dengan sepenuh hati namun kau balas perasaanku dengan setengah hati. Tapi tak mengapa, suatu hari nanti, akan kupastikan kau akan mencariku dengan kerinduan yang menyakitkan. Paham?",
        "Tetap bekerja keras untuk sesuatu yang bisa kamu nikmati. Nikmati makanan yang nantinya akan kamu beli dan nikmati situasi dan pemandangannya. Jangan pikirkan omongan orang karena omongan orang bisa membuat rusak mentalmu dan kau tidak berhak divonis oleh seseorang atas dirimu karena kau berhak hidup di atas dirimu sendiri bukan di atas kehendak orang lain. Paham?",
        "Sekarang aku mengenangmu tidak lagi sebagai rindu tapi sebagai pelajaran. Paham?",
        "Mungkin kita berdua tidak akan pernah bisa bersama selamanya tapi aku pernah tertawa bahagia dengan cinta kita. Paham?",
        "Aku tetap mencintaimu walau aku tahu kau tidak akan pernah menjadi milikku. Paham?",
        "Sedang menikmati kerinduan tanpa sebuah pertemuan. Paham?",
        "Jadilah wanita yang sulit didapat namun beruntung jika dimiliki. Paham?",
        "Di langit yang kau tatap, ada rindu yang kutitip. Paham?",
        "Kok sedih diselingkuhi, ingat hidup ini hanya sekali jadi harus dibawa happy. Paham?",
        "Kenapa kok merasa sedih ketika aku cuek? Bukannya kamu pernah bilang cari yang terbaik daripada aku dan sekarang, aku sudah ketemu. Paham?",
        "Kok bisa ya cinta itu hadir kepada seseorang yang jelas aku tahu aku tidak akan pernah memilikinya selamanya. Paham?",
        "Jika engkau sudah menemukan seseorang yang mencintaimu melebihi mencintai dirinya sendiri, jangan pernah engkau lukai karena engkau tidak akan pernah temukan orang itu di kedua kali. Paham?",
        "Aku tidak menerimamu menjadi pacarku karena aku tahu setiap yang namanya kata pacaran akan ada kata mantan dan aku tidak mau menjadi masa lalumu di masa yang akan datang. Paham?",
        "Cukup dengan kita yang berbagai cerita jika pada akhirnya kita asing juga. Paham?",
        "Maafkan seseorang yang telah menyakitimu, seseorang yang tiba-tiba sayang lalu menghilang. Paham?",
        "Jangan pernah merasa heran dengan perilaku berubahnya seseorang kepadamu. Bukannya kita sudah tidak asing lagi dengan kata-kata bahwa berharap kepada manusia adalah patah hati yang disengaja. Jadi hari ini kamu dipanggil sayang, besok kamu bisa saja ditinggalkan. Paham?",
        "Setia itu menyakitkan jika kau setia kepada seorang pembohong. Paham?",
        "Boleh menangis karena cinta tapi menangislah untuk orang yang benar-benar mencintaimu. Paham?",
        "Berhentilah memvonis dirimu tidak berguna karena mustahil Tuhan menciptakan manusia secara sia-sia. Paham?",
        "Jika engkau sudah disakiti beberapa kali dengan seseorang maka cara terbaik adalah diam ketika engkau sedang dikecewakan. Paham?",
        "Selain ilmu ikhlas, pelajari juga ilmu biarin. Paham?",
        "Omongan itu harus dijaga karena penghargaan diri seseorang bukan dilihat dari pangkatnya tetapi dari nada Anda bicara. Paham?",
        "Apalah dayaku yang hanya sebatas mencintaimu, sedangkan kau bukan milikku. Paham?",
        "Kita hanya boleh terpisah karena takdir, bukan pertengkaran. Paham?",
        "Jika kau sudah berusaha untuk melupakan seseorang di dalam hidupmu, namun dia selalu masih ada di hati dan pikiranmu maka percayalah seseorang itu sangat berarti untukmu. Paham?",
        "Lebih baik bersedih dengan orang yang tepat daripada berbahagia dengan orang yang salah. Paham?"
    ];

    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    const selectedQuote = motivationalQuotes[randomIndex];

    // Tambahkan animasi untuk menghilangkan teks
    mainText.classList.add('hidden');

    setTimeout(() => {
        mainText.textContent = selectedQuote;
        mainText.classList.remove('hidden');
    }, 1000); // Sesuaikan waktu dengan durasi animasi
});
