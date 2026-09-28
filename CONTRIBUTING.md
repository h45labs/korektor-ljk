<div align="center">

<h1>🤝 KONTRIBUSI</h1>

<p><strong>Korektor LJK Web · Panduan Kontributor</strong></p>

<p>
<img src="https://img.shields.io/badge/STATUS-PR_WELCOME-3BE07C?style=flat-square" alt="PR Welcome">
<img src="https://img.shields.io/badge/LISENSI-MIT-7C3AED?style=flat-square" alt="MIT">
<img src="https://img.shields.io/badge/FRAMEWORK-NONE-4F46E5?style=flat-square" alt="No Framework">
</p>

<p><code>Vanilla JS</code> · <code>No Build Step</code> · <code>No Dependency</code></p>

</div>

<hr>

<h2>🐛 Melaporkan Bug</h2>

<p>Buka <a href="../../issues">Issues</a> baru dengan format berikut:</p>

<pre><code>**Judul:** [Bug] deskripsi singkat

**Versi:** (Sekolah / Offline)
**Perangkat:** (mis. Android 14 · Chrome 125)

**Langkah mereproduksi:**
1. ...
2. ...

**Hasil yang diharapkan:** ...
**Hasil yang terjadi:** ...
**Screenshot:** (jika ada)</code></pre>

<h2>💡 Mengusulkan Fitur</h2>

<p>Buka Issue berlabel <code>enhancement</code> dan jelaskan:</p>

<table>
<thead>
<tr><th>Poin</th><th>Keterangan</th></tr>
</thead>
<tbody>
<tr><td><strong>Masalah</strong></td><td>Apa pain point yang ingin diselesaikan</td></tr>
<tr><td><strong>Solusi</strong></td><td>Usulan perilaku / tampilan yang diinginkan</td></tr>
<tr><td><strong>Alternatif</strong></td><td>Opsi lain yang sudah dipertimbangkan</td></tr>
</tbody>
</table>

<blockquote>💡 Cek dulu <a href="./README.md#️-roadmap">Roadmap</a> di README — usulan yang selaras dengan roadmap lebih cepat diterima.</blockquote>

<h2>🔧 Alur Pull Request</h2>

<table>
<thead>
<tr><th>Step</th><th>Perintah / Aksi</th></tr>
</thead>
<tbody>
<tr><td><strong>1</strong></td><td><strong>Fork</strong> repositori ini</td></tr>
<tr><td><strong>2</strong></td><td><code>git checkout -b fitur/nama-fitur</code></td></tr>
<tr><td><strong>3</strong></td><td>Commit kecil &amp; jelas: <code>git commit -m "Add: nama-fitur"</code></td></tr>
<tr><td><strong>4</strong></td><td><code>git push origin fitur/nama-fitur</code></td></tr>
<tr><td><strong>5</strong></td><td>Buka <strong>Pull Request</strong> ke branch <code>main</code></td></tr>
</tbody>
</table>

<h2>🛠️ Catatan Teknis</h2>

<ul>
<li><code>Code.gs</code> — backend Apps Script (vanilla JS, tanpa library)</li>
<li><code>Index.html</code> — frontend versi sekolah, <strong>satu file</strong> (HTML + CSS + JS)</li>
<li><code>local.html</code> — frontend versi offline, <strong>satu file</strong>, data di <code>localStorage</code></li>
<li>Tanpa framework, tanpa build step — <strong>jangan menambahkan dependensi</strong> tanpa diskusi terlebih dahulu di Issue</li>
<li>Uji perubahan di spreadsheet salinan sebelum submit PR</li>
</ul>

<h2>✅ Checklist Sebelum PR</h2>

<ul>
<li>☐ Tampilan tetap responsif di HP (uji pada layar ≤ 380px)</li>
<li>☐ Tidak ada error di console browser</li>
<li>☐ Fitur lama tidak rusak (kunci → scan → simpan → hasil)</li>
<li>☐ Commit message jelas dan deskriptif</li>
</ul>

<h2>📜 Lisensi</h2>

<p>Dengan berkontribusi, Anda menyetujui kontribusi Anda dilisensikan
di bawah <a href="./LICENSE">LICENSE</a> (MIT) yang sama dengan proyek ini.</p>

<hr>

<div align="center">

<p><strong>Developer by. <a href="https://github.com/h45labs">HijraH45</a></strong></p>

<p><code>KOREKTOR—LJK · WEB v2.0 · PR WELCOME</code></p>

</div>