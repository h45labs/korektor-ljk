/*** KOREKTOR LJK - BACKEND GOOGLE APPS SCRIPT (v3) ***/
const SHEET_HASIL = 'HasilKoreksi';
const SHEET_KUNCI = 'KunciJawaban';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Korektor LJK — MTS Darul Falah')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getSheet_(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    if (headers) sh.appendRow(headers);
  }
  return sh;
}

// ---- Kunci Jawaban (+ pengaturan ujian) ----
function simpanKunci(jumlahSoal, jumlahPilihan, kunci, pengaturan) {
  const sh = getSheet_(SHEET_KUNCI, ['Jumlah Soal', 'Jumlah Pilihan', 'Kunci', 'Pengaturan']);
  sh.clear();
  sh.appendRow(['Jumlah Soal', 'Jumlah Pilihan', 'Kunci', 'Pengaturan']);
  sh.appendRow([jumlahSoal, jumlahPilihan, JSON.stringify(kunci),
                pengaturan ? JSON.stringify(pengaturan) : '']);
  return true;
}

function ambilKunci() {
  const sh = getSheet_(SHEET_KUNCI, null);
  if (sh.getLastRow() < 2) return null;
  const lastCol = sh.getLastColumn();
  const r = sh.getRange(2, 1, 1, lastCol).getValues()[0];
  const out = { jumlahSoal: r[0], jumlahPilihan: r[1], kunci: JSON.parse(r[2]) };
  if (r[3]) { try { out.pengaturan = JSON.parse(r[3]); } catch (e) {} }
  return out;
}

function simpanPengaturan(p) {
  const sh = getSheet_(SHEET_KUNCI, ['Jumlah Soal', 'Jumlah Pilihan', 'Kunci', 'Pengaturan']);
  if (sh.getLastRow() < 2) sh.appendRow(['', '', '', '']);
  sh.getRange(2, 4).setValue(JSON.stringify(p));
  return true;
}

function ambilPengaturan() {
  const sh = getSheet_(SHEET_KUNCI, null);
  if (sh.getLastRow() < 2 || sh.getLastColumn() < 4) return null;
  const v = sh.getRange(2, 4).getValue();
  if (!v) return null;
  try { return JSON.parse(v); } catch (e) { return null; }
}

// ---- Hasil Koreksi ----
function simpanHasil(d) {
  const sh = getSheet_(SHEET_HASIL, ['Waktu', 'Nama', 'Kelas', 'Jawaban', 'Benar', 'Salah', 'Kosong', 'Nilai']);
  sh.appendRow([new Date(), d.nama, d.kelas, d.jawaban, d.benar, d.salah, d.kosong, d.nilai]);
  return true;
}

function ambilHasil() {
  const sh = getSheet_(SHEET_HASIL, null);
  const n = sh.getLastRow();
  if (n < 2) return [];
  const tz = Session.getScriptTimeZone();
  return sh.getRange(2, 1, n - 1, 8).getValues().map(function(r, i) {
    return {
      _row: i + 2,
      waktu: Utilities.formatDate(new Date(r[0]), tz, 'dd/MM/yyyy HH:mm'),
      nama: r[1], kelas: r[2], jawaban: r[3],
      benar: r[4], salah: r[5], kosong: r[6], nilai: r[7]
    };
  });
}

// v3: hapus satu baris hasil
function hapusHasil(rowNum) {
  const sh = getSheet_(SHEET_HASIL, null);
  const n = sh.getLastRow();
  if (rowNum < 2 || rowNum > n) throw new Error('Baris tidak valid');
  sh.deleteRow(rowNum);
  return true;
}
