// sc : https://github.com/Xvannn07/Lyrics-Runners/blob/master/public/script.js, tapi tak kudu dikit.
const lyricsData = [
  { lirik: "Bukan Karena Make up Di", delay: 1240 },
  { lirik: "Wajahmu 😶‍🌫  Atau Lisptik Merah itu", delay: 3390 },
  { lirik: "Lembut hati tutur kata", delay: 2200 },
  { lirik: "Terciptalah cinta yang ku puja 💞", delay: 3800 },
  { lirik: "Tak Peduli 🏃....", delay: 3800 },
  { lirik: "Langit Menertawakanku 🌬🤺", delay: 3000 },
  { lirik: "Kau Mencuri 🥷....", delay: 3500 },
  { lirik: "Hatiku, Mimpiku, Semua Rinduku 😵‍💫", delay: 2800 },
  { lirik: "Kar'na Kamu Cantik 🥰", delay: 2200 },
  { lirik: "kan Ku Beri Segalanya 🏄", delay: 2000 },
  { lirik: "Apa yang ku punya 🌹💐", delay: 1300 },
  { lirik: "Dan Hatimu Baik 😍", delay: 2700 },
  { lirik: "Sempurnalah duniaku 😋", delay: 1400 },
  { lirik: "Saat Kau Di sisiku 😘", delay: 3000 }
];

// Fungsi untuk menampilkan teks dengan efek typewriter
function typeText(element, text, callback) {
  const textArray = Array.from(text); // Mengelompokkan emoji dan karakter dengan benar
  let i = 0;
  element.innerHTML = "";
  const cursorSpan = document.createElement("span");
  cursorSpan.className = "cursor";
  element.appendChild(cursorSpan);

  function type() {
    if (i < textArray.length) {
      cursorSpan.insertAdjacentText("beforebegin", textArray[i]);
      i++;
      setTimeout(type, 50); // 50ms per karakter/emoji
    } else {
      element.removeChild(cursorSpan);
      if (callback) callback();
    }
  }
  type();
}

// Fungsi untuk menampilkan lirik satu per satu dengan delay.
// Jika sudah mencapai lirik terakhir, tidak akan ada pembersihan container atau perulangan.
function displayLyrics(index) {
  if (index < lyricsData.length) {
    const lyricObj = lyricsData[index];
    const lyricsContainer = document.getElementById("lyrics");
    typeText(lyricsContainer, lyricObj.lirik, () => {
      // Jika masih ada lirik berikutnya, lakukan pembersihan dan tampilkan lirik selanjutnya.
      if (index < lyricsData.length - 1) {
        setTimeout(() => {
          lyricsContainer.innerHTML = "";
          displayLyrics(index + 1);
        }, lyricObj.delay);
      }
      // Jika lirik terakhir sudah ditampilkan, tidak ada tindakan lebih lanjut (animasi berhenti).
    });
  }
}

// Mulai animasi lirik
displayLyrics(0);
