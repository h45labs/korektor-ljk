<div align="center">

<h1>KOREKTOR—LJK</h1>

<p><strong>Koreksi lembar jawaban ujian via kamera HP · 2 versi · 100% berjalan di browser</strong></p>

<p>Tanpa server — tanpa framework — tanpa biaya. Foto LJK siswa, deteksi bulatan otomatis, nilai langsung jadi.</p>

<p>
<a href="https://h45labs.github.io/korektor-ljk/"><img src="https://img.shields.io/badge/LIVE-DEMO-4F46E5?style=flat-square" alt="Live Demo"></a>
<a href="https://h45labs.github.io/korektor-ljk/local.html"><img src="https://img.shields.io/badge/APLIKASI-OFFLINE-3BE07C?style=flat-square" alt="Aplikasi Offline"></a>
<a href="./LICENSE"><img src="https://img.shields.io/badge/LICENSE-MIT-7C3AED?style=flat-square" alt="Lisensi MIT"></a>
<a href="./CONTRIBUTING.md"><img src="https://img.shields.io/badge/CONTRIBUTE-PR_WELCOME-3BE07C?style=flat-square" alt="Kontribusi"></a>
</p>

<p><code>v2.0</code> · <code>HTML + CSS + Vanilla JS</code> · <code>Google Apps Script</code> · <code>LocalStorage</code></p>

</div>

<hr>

<h2>📋 Fitur</h2>

<table>
<thead>
<tr><th>#</th><th>Fitur</th><th>Grup</th><th>Fungsi</th></tr>
</thead>
<tbody>
<tr><td>01</td><td><strong>Scan via Kamera HP</strong></td><td>Input</td><td>Foto lembar jawaban langsung dari browser, atau unggah dari galeri — satu foto untuk semua blok soal</td></tr>
<tr><td>02</td><td><strong>Deteksi OMR Otomatis</strong></td><td>Inti</td><td>Ketuk 4 sudut kotak blok → bulatan terisi terdeteksi via sampling kegelapan piksel — murni JavaScript tanpa library</td></tr>
<tr><td>03</td><td><strong>Koreksi Per Blok</strong></td><td>Inti</td><td>40 soal dalam 4 blok à 10 soal (1–10, 11–20, 21–30, 31–40) — progress terpantau per blok</td></tr>
<tr><td>04</td><td><strong>Review Manual</strong></td><td>Akurasi</td><td>Jaring pengaman: guru memperbaiki hasil deteksi per soal sebelum disimpan — hijau = sesuai kunci, merah = salah</td></tr>
<tr><td>05</td><td><strong>Generator Template LJK</strong></td><td>Cetak</td><td>Template A4 berkop sekolah: identitas, bulatan bergaris, area uraian — unduh PNG tanpa screenshot</td></tr>
<tr><td>06</td><td><strong>Pengaturan Ujian</strong></td><td>Cetak</td><td>Jenis ujian (STS/PTS/PAS/ASAS/UAS/kustom), semester Ganjil/Genap, tahun pelajaran — otomatis tercetak di kop</td></tr>
<tr><td>07</td><td><strong>Kelola Kunci Jawaban</strong></td><td>Data</td><td>1–60 soal, 3–5 pilihan — tersimpan aman (Sheets versi sekolah, localStorage versi offline)</td></tr>
<tr><td>08</td><td><strong>Rekap &amp; Ekspor</strong></td><td>Data</td><td>Rekap nilai di aplikasi + data mentah: Google Sheets (sekolah) atau Export CSV (offline)</td></tr>
<tr><td>09</td><td><strong>Backup &amp; Restore</strong></td><td>Data</td><td>Versi offline: cadangan JSON lengkap (kunci + hasil + identitas) — aman saat ganti perangkat</td></tr>
<tr><td>10</td><td><strong>Multi-Guru</strong></td><td>Kolaborasi</td><td>Versi sekolah: semua guru berbagi satu spreadsheet dari HP masing-masing</td></tr>
</tbody>
</table>

<h2>📦 Dua Versi Aplikasi</h2>

<table>
<thead>
<tr><th>Versi</th><th>File</th><th>Penyimpanan</th><th>Cocok Untuk</th></tr>
</thead>
<tbody>
<tr><td><strong>🏫 Sekolah</strong></td><td><code>Code.gs</code> + <code>Index.html</code></td><td>Google Sheets (terpusat)</td><td>Pemakaian resmi — semua guru berbagi satu database nilai &amp; kunci</td></tr>
<tr><td><strong>⚡ Offline</strong></td><td><code>local.html</code></td><td>localStorage perangkat</td><td>Pengguna umum — buka langsung dari browser, tanpa instalasi, identitas lembaga bisa diedit</td></tr>
</tbody>
</table>

<blockquote>💡 Kedua versi tidak saling berhubungan — data sekolah ada di Sheets, data versi offline ada di masing-masing perangkat.</blockquote>

<h2>🚀 Demo</h2>

<p>Dashboard: <a href="https://h45labs.github.io/korektor-ljk/"><strong>h45labs.github.io/korektor-ljk</strong></a></p>

<p>Aplikasi offline: <a href="https://h45labs.github.io/korektor-ljk/local.html"><strong>h45labs.github.io/korektor-ljk/local.html</strong></a></p>

<h2>🏫 Versi Sekolah — Instalasi (± 5 Menit)</h2>

<p>Tidak ada build step, tidak ada dependensi yang harus di-install:</p>

<ol>
<li>Buat <strong>Spreadsheet</strong> baru di sheets.google.com → menu <strong>Extensions → Apps Script</strong></li>
<li>Salin isi <code>Code.gs</code> ke editor; buat file HTML bernama <code>Index</code>, salin isi <code>Index.html</code></li>
<li><strong>Deploy → New deployment → Web app</strong> — Execute as: <strong>Me</strong>, Access: <strong>Anyone</strong></li>
<li>Salin URL <code>/exec</code> → buka dari HP — selesai</li>
</ol>

<blockquote>⚠️ Setiap kali kode diubah: <strong>Deploy → Manage deployments → ✏️ → New version → Deploy</strong> agar perubahan muncul di URL /exec.</blockquote>

<h2>⚡ Versi Offline — Jalankan Secara Lokal</h2>

<pre><code>git clone https://github.com/h45labs/korektor-ljk.git
cd korektor-ljk</code></pre>

<p>Lalu buka <code>local.html</code> di browser — selesai.<br>
Atau cukup download repo, lalu double-click <code>local.html</code>.</p>

<h2>📖 Alur Koreksi</h2>

<pre><code>kunci jawaban ──► cetak template ──► siswa menghitamkan bulatan
      │                                     │
      ▼                                     ▼
tab 🔑 Kunci                      guru memfoto lembar (1x)
                                            │
      ┌─────────────────────────────────────┘
      ▼
ketuk 4 sudut blok 1–10 ──► 🔍 deteksi ──► blok 11–20 ──► 21–30 ──► 31–40
      │
      ▼
✅ review/perbaiki ──► 💾 simpan ──► nilai masuk ke Sheets / localStorage</code></pre>

<h2>🔒 Privasi</h2>

<ul>
<li>Versi offline: foto <strong>diproses lewat Canvas API di browser</strong> — tidak pernah dikirim ke server mana pun</li>
<li>Data koreksi versi offline tersimpan di <code>localStorage</code> perangkat sendiri</li>
<li>Versi sekolah: data tersimpan di Google Sheets milik sekolah sendiri</li>
<li>Versi offline berfungsi penuh <strong>tanpa internet</strong> setelah halaman terbuka</li>
</ul>

<h2>🛠️ Teknologi</h2>

<ul>
<li><strong>HTML5 + CSS3 + Vanilla JavaScript</strong> — tanpa framework, tanpa build step, tanpa dependensi</li>
<li><strong>Canvas API</strong> — generator template LJK, sampling kegelapan bulatan, pratinjau scan</li>
<li><strong>getUserMedia API</strong> — akses kamera belakang HP</li>
<li><strong>Google Apps Script + Sheets</strong> — backend versi sekolah, kuota gratis hingga ratusan koreksi/hari</li>
<li><strong>localStorage</strong> — penyimpanan versi offline</li>
</ul>

<h2>🗺️ Roadmap</h2>

<ul>
<li>☐ Rekap per kelas + grafik distribusi nilai</li>
<li>☐ Analisis butir soal (tingkat kesukaran &amp; pemberdayaan pengecoh)</li>
<li>☐ Impor daftar nama siswa → dropdown saat menyimpan</li>
<li>☐ Mode PWA (dapat di-install seperti aplikasi)</li>
<li>☐ Pencocokan nomor peserta otomatis dari foto</li>
<li>☐ Mode multi-kunci (kunci per kelas/paket soal)</li>
</ul>

<h2>🔧 Troubleshooting</h2>

<table>
<thead>
<tr><th>Gejala</th><th>Solusi</th></tr>
</thead>
<tbody>
<tr><td>Jawaban terisi tapi terbaca kosong</td><td>Turunkan <strong>Sensitivitas</strong> (≈0.35) / pastikan hitaman pekat &amp; penuh</td></tr>
<tr><td>Bulatan kosong ikut terbaca</td><td>Naikkan <strong>Sensitivitas</strong> (≈0.55) / ketuk sudut tepat di pojok kotak blok</td></tr>
<tr><td>Kamera tidak muncul</td><td>Wajib lewat <strong>https</strong> (GitHub Pages ✅) / gunakan 📁 Unggah Foto</td></tr>
<tr><td>Kode tidak berubah setelah edit</td><td>Belum <em>deploy new version</em> di Apps Script</td></tr>
<tr><td>Favicon tidak tampil (Apps Script)</td><td>Normal — halaman dibungkus iframe Google; bekerja ✅ di GitHub Pages</td></tr>
</tbody>
</table>

<h2>🤝 Kontribusi</h2>

<p>Kontribusi sangat terbuka — baca <a href="./CONTRIBUTING.md">CONTRIBUTING.md</a>.</p>

<h2>📜 Lisensi</h2>

<p>Distribusikan di bawah <a href="./LICENSE">Lisensi MIT</a>.</p>

<hr>

<div align="center">

<p><strong>Developer by. <a href="https://github.com/h45labs">HijraH45</a></strong></p>

<p>🕌 Dikembangkan untuk penilaian di <a href="https://mtsdarulfalahctr.blogspot.com">MTS Darul Falah</a> — Citeureup, Bogor</p>

<p><code>KOREKTOR—LJK · WEB v2.0 · OMR · REC</code></p>

</div>