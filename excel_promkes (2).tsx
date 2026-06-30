<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>SIMKES Tambora – Pelaporan Pustu</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#0B2F45;--blue:#1565C0;--teal:#00796B;--green:#2E7D32;
  --red:#C62828;--orange:#E65100;--purple:#6A1B9A;--indigo:#283593;
  --bg:#EEF2F7;--card:#fff;--border:#D0DAE5;--text:#1A2B3C;--muted:#607080;
}
body{font-family:'Segoe UI',system-ui,sans-serif;background:var(--bg);color:var(--text);font-size:13.5px}
.hidden{display:none!important}

/* LOGIN */
#pg-login{min-height:100vh;display:flex;background:linear-gradient(135deg,#0B2F45 0%,#1565C0 55%,#00796B 100%)}
.ll{flex:1;display:flex;flex-direction:column;justify-content:center;padding:3rem;color:#fff}
.ll-brand{display:flex;align-items:center;gap:.75rem;margin-bottom:2rem}
.ll-ico{width:56px;height:56px;background:rgba(255,255,255,.15);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.7rem}
.ll-brand h1{font-size:1.3rem;font-weight:800}
.ll-brand p{font-size:.74rem;opacity:.7}
.ll h2{font-size:1.9rem;font-weight:800;line-height:1.25;margin-bottom:.7rem}
.ll .desc{font-size:.86rem;opacity:.75;line-height:1.75;max-width:400px}
.feat{margin-top:1.8rem;display:flex;flex-direction:column;gap:.5rem}
.feat-item{display:flex;align-items:center;gap:.55rem;font-size:.82rem;opacity:.85}
.feat-item .dot{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,.5);flex-shrink:0}
.lr{width:440px;background:#fff;display:flex;align-items:center;justify-content:center;padding:2.5rem;box-shadow:-8px 0 40px rgba(0,0,0,.25)}
.lbox{width:100%}
.lhead{margin-bottom:1.8rem}
.lhead h3{font-size:1.3rem;font-weight:800;color:var(--navy)}
.lhead p{font-size:.77rem;color:var(--muted);margin-top:.22rem}
.fg{margin-bottom:.9rem}
.fg label{display:block;font-size:.69rem;font-weight:700;color:#3A5060;margin-bottom:.32rem;text-transform:uppercase;letter-spacing:.04em}
.fg input,.fg select{width:100%;padding:.62rem .82rem;border:1.5px solid var(--border);border-radius:9px;font-size:.88rem;color:var(--text);background:#F4F7FB;outline:none;transition:all .2s;font-family:inherit}
.fg input:focus,.fg select:focus{border-color:var(--blue);background:#fff;box-shadow:0 0 0 3px rgba(21,101,192,.12)}
.pw-wrap{position:relative}
.pw-wrap input{padding-right:2.8rem}
.pw-toggle{position:absolute;right:.75rem;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:1rem;color:var(--muted)}
.login-err{background:#FFEBEE;border:1px solid #FFCDD2;color:var(--red);border-radius:8px;padding:.52rem .82rem;font-size:.79rem;margin-bottom:.85rem;display:flex;align-items:center;gap:.4rem}
.btn-login{width:100%;padding:.8rem;background:linear-gradient(135deg,#0B2F45,#1565C0);color:#fff;border:none;border-radius:9px;font-size:.9rem;font-weight:700;cursor:pointer}
.btn-login:hover{opacity:.88}
.lfooter{margin-top:1.5rem;text-align:center;font-size:.71rem;color:var(--muted)}
@media(max-width:700px){.ll{display:none}.lr{width:100%}}

/* APP */
#pg-app{min-height:100vh;display:flex;flex-direction:column}
.topbar{background:var(--navy);color:#fff;height:52px;display:flex;align-items:center;padding:0 1.1rem;justify-content:space-between;position:sticky;top:0;z-index:200;box-shadow:0 2px 10px rgba(0,0,0,.3)}
.tb-brand{display:flex;align-items:center;gap:.55rem}
.tb-brand .logo{font-size:1.3rem}
.tb-brand h2{font-size:.9rem;font-weight:800}
.tb-brand p{font-size:.64rem;opacity:.6}
.tb-right{display:flex;align-items:center;gap:.75rem}
.tb-chip{display:flex;align-items:center;gap:.45rem;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:25px;padding:.28rem .75rem .28rem .38rem}
.tb-av{width:26px;height:26px;border-radius:50%;background:var(--teal);display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;color:#fff}
.tb-nm{font-size:.76rem;font-weight:700}
.tb-rl{font-size:.62rem;opacity:.65}
.btn-out{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.25);color:#fff;padding:.28rem .68rem;border-radius:7px;font-size:.71rem;cursor:pointer}

/* MOD BAR */
.mod-bar{background:#132D40;display:flex;padding:0 1.1rem;gap:.15rem;overflow-x:auto;border-bottom:1px solid rgba(255,255,255,.1)}
.mod-btn{padding:.52rem 1rem;font-size:.79rem;font-weight:600;color:rgba(255,255,255,.52);border-bottom:2.5px solid transparent;cursor:pointer;white-space:nowrap;transition:all .2s}
.mod-btn.active{color:#fff;border-bottom-color:#4FC3F7}

/* LAYOUT */
.app-body{display:flex;flex:1}
.sidebar{width:215px;background:#fff;border-right:1px solid var(--border);position:sticky;top:88px;height:calc(100vh - 88px);overflow-y:auto;flex-shrink:0;display:flex;flex-direction:column}
.sb-sec{padding:.55rem .78rem .2rem;font-size:.62rem;font-weight:800;color:#9AABBF;text-transform:uppercase;letter-spacing:.07em;margin-top:.35rem}
.ni{display:flex;align-items:center;gap:.52rem;padding:.52rem .82rem;margin:.05rem .45rem;border-radius:8px;cursor:pointer;color:#3A5060;font-size:.8rem;font-weight:500;transition:all .18s;position:relative}
.ni:hover{background:#EEF4FB;color:var(--blue)}
.ni.active{background:#DEEAFB;color:var(--blue);font-weight:700}
.ni.active::before{content:'';position:absolute;left:-8px;top:22%;height:56%;width:3px;background:var(--blue);border-radius:2px}
.ni-ic{font-size:.93rem;width:18px;text-align:center}
.ni-bd{margin-left:auto;background:var(--blue);color:#fff;font-size:.59rem;font-weight:700;border-radius:20px;padding:.06rem .38rem}
.sb-bot{margin-top:auto;border-top:1px solid var(--border);padding:.65rem .82rem;font-size:.64rem;color:#9AABBF}
.main{flex:1;overflow-y:auto;padding:1.25rem}

/* PAGE HEADER */
.ph{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:1.1rem;flex-wrap:wrap;gap:.65rem}
.ph h2{font-size:1.05rem;font-weight:800;color:var(--navy)}
.ph p{font-size:.76rem;color:var(--muted);margin-top:.16rem}
.pa{display:flex;gap:.45rem;flex-wrap:wrap}

/* STAT */
.sg{display:grid;grid-template-columns:repeat(auto-fit,minmax(135px,1fr));gap:.72rem;margin-bottom:1.1rem}
.sc{background:#fff;border-radius:11px;padding:.85rem 1rem;border:1px solid var(--border);box-shadow:0 1px 5px rgba(0,0,0,.06);position:relative;overflow:hidden}
.sc::before{content:'';position:absolute;top:0;left:0;width:4px;height:100%}
.sc-ico{font-size:1.3rem;margin-bottom:.28rem}
.sc-val{font-size:1.75rem;font-weight:800;line-height:1;color:var(--navy)}
.sc-lbl{font-size:.67rem;color:var(--muted);margin-top:.22rem}
.c1::before{background:var(--blue)}.c2::before{background:var(--teal)}.c3::before{background:var(--green)}.c4::before{background:var(--orange)}.c5::before{background:var(--purple)}

/* PANEL */
.panel{background:#fff;border-radius:11px;border:1px solid var(--border);box-shadow:0 1px 5px rgba(0,0,0,.06);margin-bottom:1rem;overflow:hidden}
.ph2{padding:.68rem 1rem;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between}
.ph2 h3{font-size:.83rem;font-weight:700;color:var(--navy)}
.pb{padding:1rem}
.pb.p0{padding:0}

/* FORM */
.fg2{display:grid;grid-template-columns:repeat(auto-fit,minmax(185px,1fr));gap:.72rem}
.ff{display:flex;flex-direction:column;gap:.26rem}
.ff label{font-size:.68rem;font-weight:700;color:#3A5060;text-transform:uppercase;letter-spacing:.04em}
.ff input,.ff select,.ff textarea{padding:.54rem .72rem;border:1.5px solid var(--border);border-radius:8px;font-size:.84rem;color:var(--text);background:#F8FAFD;outline:none;transition:all .2s;width:100%;font-family:inherit}
.ff input:focus,.ff select:focus,.ff textarea:focus{border-color:var(--blue);background:#fff;box-shadow:0 0 0 3px rgba(21,101,192,.1)}
.ff textarea{resize:vertical;min-height:56px}
.ff.full{grid-column:1/-1}
.form-foot{display:flex;justify-content:flex-end;gap:.52rem;padding-top:.82rem;margin-top:.82rem;border-top:1px solid var(--border)}

/* BTN */
.btn{padding:.44rem .9rem;border:none;border-radius:8px;font-size:.76rem;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:.3rem;transition:all .18s}
.btn-primary{background:var(--blue);color:#fff}.btn-primary:hover{background:#0D47A1}
.btn-success{background:var(--green);color:#fff}.btn-success:hover{background:#1B5E20}
.btn-teal{background:var(--teal);color:#fff}.btn-teal:hover{background:#00574B}
.btn-danger{background:var(--red);color:#fff}.btn-danger:hover{background:#8E0000}
.btn-orange{background:var(--orange);color:#fff}.btn-orange:hover{background:#BF360C}
.btn-purple{background:var(--purple);color:#fff}.btn-purple:hover{background:#4A148C}
.btn-outline{background:#fff;color:var(--blue);border:1.5px solid var(--blue)}.btn-outline:hover{background:#EEF4FB}
.btn-ghost{background:#EEF2F7;color:#3A5060;border:1px solid var(--border)}.btn-ghost:hover{background:#E2E8F0}
.btn-navy{background:var(--navy);color:#fff}.btn-navy:hover{background:#07202F}
.btn-sm{padding:.26rem .58rem;font-size:.7rem}

/* TABLE */
.tw{overflow-x:auto}
table.ut{width:100%;border-collapse:collapse;font-size:.76rem}
table.ut thead th{background:#F4F7FB;color:#3A5060;font-weight:700;padding:.5rem .68rem;text-align:left;border-bottom:1.5px solid var(--border);white-space:nowrap}
table.ut tbody td{padding:.46rem .68rem;border-bottom:1px solid #EDF2F7;vertical-align:middle}
table.ut tbody tr:hover td{background:#F8FBFF}
table.ut tfoot td{background:#EEF3F8;font-weight:700;padding:.42rem .68rem;border-top:1.5px solid var(--border)}
.badge{display:inline-block;padding:.15rem .48rem;border-radius:20px;font-size:.66rem;font-weight:700;white-space:nowrap}
.b-green{background:#E8F5E9;color:#1B5E20}.b-orange{background:#FFF3E0;color:#BF360C}
.b-blue{background:#E3F0FC;color:#1255A0}.b-gray{background:#ECEFF3;color:#4A6070}
.b-red{background:#FFEBEE;color:#8E0000}.b-purple{background:#F3E5F5;color:#6A1B9A}

/* UNIT SELECTOR */
.unit-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:.5rem;margin-bottom:1rem}
.unit-btn{border:1.5px solid var(--border);background:#fff;border-radius:8px;padding:.5rem .7rem;cursor:pointer;text-align:left;transition:all .18s;font-size:.78rem;color:#3A5060}
.unit-btn:hover{border-color:var(--blue);color:var(--blue)}
.unit-btn.active{border-color:var(--blue);background:#DEEAFB;color:var(--blue);font-weight:700}
.unit-btn.filled{border-color:var(--green);background:#E8F5E9;color:var(--green);font-weight:600}
.unit-btn.active.filled{border-color:var(--blue);background:#DEEAFB;color:var(--blue)}

/* GERMAS IND TABS */
.ind-tabs{display:flex;gap:.28rem;flex-wrap:wrap;margin-bottom:.9rem}
.ind-tab{padding:.35rem .8rem;border-radius:20px;font-size:.75rem;font-weight:600;cursor:pointer;border:1.5px solid var(--border);background:#fff;color:var(--muted);transition:all .18s}
.ind-tab.active{background:var(--blue);color:#fff;border-color:var(--blue)}

/* MODAL */
#modal{position:fixed;inset:0;background:rgba(0,0,0,.48);z-index:500;display:flex;align-items:center;justify-content:center;padding:1rem}
.modal-box{background:#fff;border-radius:12px;width:520px;max-width:100%;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.3)}
.modal-head{padding:.8rem 1rem;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1}
.modal-head b{font-size:.88rem;color:var(--navy)}
.modal-close{background:none;border:none;font-size:1.3rem;cursor:pointer;color:var(--muted)}
.modal-body{padding:1rem}
.modal-foot{padding:.75rem 1rem;border-top:1px solid var(--border);display:flex;justify-content:flex-end;gap:.5rem;position:sticky;bottom:0;background:#fff}

/* FOTO UPLOAD */
.foto-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:.6rem;margin-top:.4rem}
.fub{border:2px dashed #C8D5E0;border-radius:8px;min-height:90px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#F8FAFD;font-size:.7rem;color:#7A9BAA;cursor:pointer;position:relative;transition:all .18s;overflow:hidden}
.fub:hover{border-color:var(--blue);background:#EEF4FB}
.fub input[type=file]{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%}
.fub img{width:100%;height:100%;object-fit:cover;position:absolute;inset:0;border-radius:6px}
.fub .fub-ico{font-size:1.4rem;margin-bottom:.2rem;position:relative;z-index:1}
.fub .fub-lbl{font-size:.65rem;position:relative;z-index:1}
.fub .fub-del{position:absolute;top:3px;right:3px;background:rgba(198,40,40,.85);color:#fff;border:none;border-radius:50%;width:18px;height:18px;font-size:.68rem;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:2}
.foto-grid-print{display:grid;grid-template-columns:1fr 1fr;gap:.9rem;margin:.5rem 0 1rem}
.fg-box{border:1px solid #bbb;border-radius:4px;overflow:hidden;background:#F8F8F8}
.fg-img{width:100%;height:160px;object-fit:cover;display:block}
.fg-cap{font-size:.7rem;text-align:center;padding:.25rem .5rem;color:#444;border-top:1px solid #ddd}

/* TOAST */
.toast{position:fixed;bottom:1.5rem;right:1.5rem;background:#1A2B3C;color:#fff;padding:.62rem 1.1rem;border-radius:9px;font-size:.79rem;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,.3);animation:tst .22s ease}
@keyframes tst{from{opacity:0;transform:translateY(6px)}to{opacity:1}}

/* PRINT LAPORAN */
.lap-root{background:#fff;max-width:820px;margin:0 auto;font-size:.81rem;line-height:1.65;color:#111}
.kop{display:flex;align-items:center;border-bottom:3px solid #000;padding-bottom:.55rem;margin-bottom:.45rem;gap:.9rem}
.kop-logo{width:66px;height:66px;border:1px solid #aaa;display:flex;align-items:center;justify-content:center;font-size:1.7rem;flex-shrink:0;border-radius:4px}
.kop-text{flex:1;text-align:center}
.kop-text .k1{font-size:.72rem}
.kop-text .k2{font-size:.88rem;font-weight:800;text-transform:uppercase;margin:.1rem 0}
.kop-text .k3{font-size:.7rem}
.kop-text .k4{font-size:.68rem;color:#333}
.lt-block{text-align:center;margin:1.1rem 0 .9rem}
.lt-block div{font-size:.82rem;font-weight:700;text-transform:uppercase}
.lt-block .lt1{font-size:.88rem;text-decoration:underline}
.lbab{margin:.9rem 0 .35rem;font-size:.84rem;font-weight:800}
.lsubbab{margin:.5rem 0 .2rem .75rem;font-size:.8rem;font-weight:700}
.lpars{margin:.15rem 0 .32rem 1.5rem;text-align:justify}
.llst{margin:.15rem 0 .35rem 2rem;list-style:disc}
.llst li{margin-bottom:.16rem}
table.ltbl{width:100%;border-collapse:collapse;font-size:.76rem;margin:.3rem 0 .7rem}
table.ltbl th{background:#D0D9E5;padding:.34rem .5rem;border:1px solid #999;text-align:center;font-weight:700;font-size:.72rem}
table.ltbl td{padding:.31rem .5rem;border:1px solid #bbb;vertical-align:top}
table.ltbl td.tc{text-align:center}
table.ltbl tfoot td{background:#E8EEF4;font-weight:700}
.lap-ttd{display:grid;grid-template-columns:1fr 1fr;gap:3rem;margin-top:2rem;text-align:center;font-size:.79rem}
.ttd-name{font-weight:800;text-decoration:underline;margin-top:2.5rem}
.ttd-nip{font-size:.72rem}

@media print{
  #pg-login,.topbar,.mod-bar,.sidebar,.pa,.btn,.no-print{display:none!important}
  .app-body{display:block}
  .main{padding:0}
  .panel{border:none;box-shadow:none;border-radius:0}
  @page{size:A4;margin:2cm}
  body{background:#fff}
}
</style>
</head>
<body>

<!-- LOGIN -->
<div id="pg-login">
  <div class="ll">
    <div class="ll-brand">
      <div class="ll-ico">🏥</div>
      <div><h1>SIMKES Tambora</h1><p>Sistem Informasi Manajemen Kesehatan</p></div>
    </div>
    <h2>Pelaporan Promkes<br>Pustu & Rekap PKM</h2>
    <p class="desc">Platform pelaporan terintegrasi Penyuluhan Kesehatan dan GERMAS untuk seluruh pustu/kelurahan di Kecamatan Tambora.</p>
    <div class="feat">
      <div class="feat-item"><div class="dot"></div>Input laporan per pustu (11 unit)</div>
      <div class="feat-item"><div class="dot"></div>Penyuluhan: materi, frekuensi, peserta, krisis, ABAT</div>
      <div class="feat-item"><div class="dot"></div>GERMAS: 6 indikator per kegiatan</div>
      <div class="feat-item"><div class="dot"></div>Dokumentasi foto minimal 4 per kegiatan</div>
      <div class="feat-item"><div class="dot"></div>Rekap otomatis PKM Tambora: per unit + total gabungan</div>
    </div>
  </div>
  <div class="lr">
    <div class="lbox">
      <div class="lhead"><h3>Masuk ke Sistem</h3><p>Gunakan akun yang diberikan administrator</p></div>
      <div id="login-err" class="login-err hidden">⚠️ <span id="lerr-msg"></span></div>
      <div class="fg"><label>Username</label><input type="text" id="i-u" placeholder="Username" onkeydown="if(event.key==='Enter')doLogin()"></div>
      <div class="fg"><label>Password</label>
        <div class="pw-wrap"><input type="password" id="i-p" placeholder="Password" onkeydown="if(event.key==='Enter')doLogin()">
        <button class="pw-toggle" onclick="tglPw()" tabindex="-1">👁</button></div>
      </div>
      <button class="btn-login" onclick="doLogin()">Masuk →</button>
      <div class="lfooter">Lupa akun? Hubungi Admin Promkes Puskesmas Tambora<br>
      <span style="display:block;margin-top:.25rem">© 2026 Puskesmas Tambora · Dinkes DKI Jakarta</span></div>
    </div>
  </div>
</div>

<!-- APP -->
<div id="pg-app" class="hidden">
  <div class="topbar">
    <div class="tb-brand"><div class="logo">🏥</div><div><h2>SIMKES Tambora</h2><p>Pelaporan Promkes Pustu</p></div></div>
    <div class="tb-right">
      <div class="tb-chip"><div class="tb-av" id="tb-av">?</div><div><div class="tb-nm" id="tb-nm">—</div><div class="tb-rl" id="tb-rl">—</div></div></div>
      <button class="btn-out" onclick="doLogout()">⏻ Keluar</button>
    </div>
  </div>
  <div class="mod-bar">
    <div class="mod-btn active" id="mb-pustu" onclick="switchMod('pustu')">📋 Input Laporan Pustu</div>
    <div class="mod-btn" id="mb-rekap" onclick="switchMod('rekap')">📊 Rekap PKM Tambora</div>
    <div class="mod-btn" id="mb-sett" onclick="switchMod('sett')">⚙️ Pengaturan</div>
  </div>
  <div class="app-body">
    <nav class="sidebar" id="sidebar"></nav>
    <div class="main" id="main"></div>
  </div>
</div>

<!-- MODAL -->
<div id="modal" class="hidden">
  <div class="modal-box">
    <div class="modal-head"><b id="modal-title">—</b><button class="modal-close" onclick="closeModal()">×</button></div>
    <div class="modal-body" id="modal-body"></div>
    <div class="modal-foot" id="modal-foot"></div>
  </div>
</div>

<script>
// ═══════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════
var ACCOUNTS = [
  {u:'admin.tambora',  p:'Tambora@2026',  n:'Administrator Sistem',         unit:'PKM Tambora', role:'admin'},
  {u:'nabil.promkes',  p:'Nabil@2026',    n:'Nabil Abulfida Alfayadh, SKM', unit:'PKM Tambora', role:'promkes', nip:'199507112025061006'},
  {u:'maisaroh',       p:'Maisaroh@2026', n:'Maisaroh',                     unit:'PKM Tambora', role:'promkes'},
  {u:'tasya.promkes',  p:'Tasya@2026',    n:'Tasya Meilani Putri',          unit:'PKM Tambora', role:'promkes'},
  {u:'pustu.tambora',  p:'Tambora@26',    n:'Petugas Pustu Tambora',        unit:'Kel. Tambora',       role:'promkes'},
  {u:'pustu.kaliany',  p:'KalAny@26',     n:'Petugas Pustu Kali Anyar',     unit:'Kel. Kali Anyar',    role:'promkes'},
  {u:'pustu.dursel',   p:'DurSel@26',     n:'Petugas Pustu Duri Selatan',   unit:'Kel. Duri Selatan',  role:'promkes'},
  {u:'pustu.durut',    p:'DurUt@26',      n:'Petugas Pustu Duri Utara',     unit:'Kel. Duri Utara',    role:'promkes'},
  {u:'pustu.jembesi',  p:'JemBesi@26',    n:'Petugas Pustu Jembatan Besi',  unit:'Kel. Jembatan Besi', role:'promkes'},
  {u:'pustu.jemlima',  p:'JemLima@26',    n:'Petugas Pustu Jembatan Lima',  unit:'Kel. Jembatan Lima', role:'promkes'},
  {u:'pustu.krend',    p:'Krend@26',      n:'Petugas Pustu Krendang',       unit:'Kel. Krendang',      role:'promkes'},
  {u:'pustu.tanser',   p:'TanSer@26',     n:'Petugas Pustu Tanah Sereal',   unit:'Kel. Tanah Sereal',  role:'promkes'},
  {u:'pustu.angke',    p:'Angke@26',      n:'Petugas Pustu Angke',          unit:'Kel. Angke',         role:'promkes'},
  {u:'pustu.pekojan1', p:'Pekojan1@26',   n:'Petugas Pustu Pekojan 1',      unit:'Pustu Pekojan 1',    role:'promkes'},
  {u:'pustu.pekojan2', p:'Pekojan2@26',   n:'Petugas Pustu Pekojan 2',      unit:'Pustu Pekojan 2',    role:'promkes'},
  {u:'kapus.tambora',  p:'Kapus@2026',    n:'dr. Maryati Kasiman, M.KKK',   unit:'PKM Tambora',        role:'viewer', nip:'197803312006042007'}
];

var UNITS = [
  'Kel. Tambora','Kel. Kali Anyar','Kel. Duri Selatan','Kel. Duri Utara',
  'Kel. Jembatan Besi','Kel. Jembatan Lima','Kel. Krendang',
  'Kel. Tanah Sereal','Kel. Angke','Pustu Pekojan 1','Pustu Pekojan 2'
];
var TWS = [
  {k:'TW1',l:'Triwulan I',  rng:'Januari – Maret',    end:'30 Maret'},
  {k:'TW2',l:'Triwulan II', rng:'April – Juni',       end:'30 Juni'},
  {k:'TW3',l:'Triwulan III',rng:'Juli – September',   end:'30 September'},
  {k:'TW4',l:'Triwulan IV', rng:'Oktober – Desember', end:'31 Desember'}
];
var GI = [
  {id:1,nm:'Peningkatan Aktivitas Fisik',ic:'🏃',col:'#1565C0',
   jenis:['Senam Bersama','Jalan Sehat','Olahraga di Posyandu/Posbindu','Pelatihan Senam Kader','Lomba Olahraga','Lainnya']},
  {id:2,nm:'Peningkatan PHBS',ic:'🧼',col:'#2E7D32',
   jenis:['Penyuluhan PHBS Rumah Tangga','Penyuluhan PHBS Sekolah','Demo CTPS','Inspeksi Sanitasi','Lainnya']},
  {id:3,nm:'Pangan Sehat & Perbaikan Gizi',ic:'🥦',col:'#E65100',
   jenis:['Demo Masak Pangan Sehat','Penyuluhan Gizi Seimbang','Penyuluhan Protein Hewani/Stunting','Pemberian PMT','Lainnya']},
  {id:4,nm:'Pencegahan & Deteksi Dini',ic:'🩺',col:'#C62828',
   jenis:['Skrining Hipertensi/DM','Cek Kesehatan Gratis','Penyuluhan TBC','Penyuluhan DBD/PSN','Posbindu PTM','Lainnya']},
  {id:5,nm:'Peningkatan Kualitas Lingkungan',ic:'🌿',col:'#00796B',
   jenis:['Kerja Bakti Lingkungan','PSN 3M Plus','Pengelolaan Sampah','Sanitasi Dasar','Inspeksi Jentik','Lainnya']},
  {id:6,nm:'Edukasi Hidup Sehat',ic:'📚',col:'#6A1B9A',
   jenis:['Penyuluhan di Posyandu','Penyuluhan di Sekolah','Edukasi Digital/Media Sosial','Seminar/Webinar Kesehatan','Lainnya']}
];
var JENIS_KRISIS = ['Banjir','Kebakaran','Kewaspadaan DBD','Wabah/KLB','Gempa/Bencana','Lainnya'];
var SEGMENTASI  = ['Pengetahuan','Persepsi','Perilaku Pencegahan','Penghilangan Stigma'];

// ═══════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════
var S = { user:null, mod:'pustu', selUnit:0, gitab:1, _page:'pdash', _rpage:'rdash', _spage:'skapus' };
var _tmpF = [null,null,null,null];

function emptyPen()  { return {materi:'',freq:0,mj:0,kia:0,upl:0,analisis:'',fotos:[null,null,null,null]}; }
function emptyKri()  { return {jenis:'',materi:'',freq:0,mj:0,kia:0,upl:0,fotos:[null,null,null,null]}; }
function emptyAbat() { return {sasaran:'',peserta:0,freq:0,segmentasi:[],hasil:'',fotos:[null,null,null,null]}; }
function emptyGkeg() { return {tgl:'',ind:1,jenis:'',tatanan:'',tempat:'',pl:0,pp:0,lintas:'',ang:0,sumber:'',fotos:[null,null,null,null]}; }
function initUnit(unit) {
  return {
    unit:unit, petugas:'', nip:'', tw:'TW1', tahun:'2026', tglLaporan:'',
    latar:{gambaran:'',masalah:'',tujuan:''},
    pen:[emptyPen()], pra:[emptyKri()], saat:[emptyKri()], pasca:[emptyKri()],
    hiv:[emptyAbat()], kespro:[emptyAbat()], napza:[emptyAbat()],
    penutup:{kesimpulan:'',kendala:'',evaluasi:''},
    germas:[emptyGkeg()]
  };
}

function sKey(unit) { return 'simkes_pustu_' + unit; }
function saveUnit(unit, data) { try{ localStorage.setItem(sKey(unit), JSON.stringify(data)); }catch(e){} }
function loadUnit(unit) {
  try{ var r=localStorage.getItem(sKey(unit)); return r?JSON.parse(r):initUnit(unit); }catch(e){ return initUnit(unit); }
}
function getD()    { return loadUnit(UNITS[S.selUnit]); }
function setD(fn)  { var d=getD(); saveUnit(UNITS[S.selUnit], fn(d)); }
function getKapus(){ return localStorage.getItem('simkes_kapus')||'dr. Maryati Kasiman, M.KKK'; }
function getKapusNip(){ return localStorage.getItem('simkes_kapus_nip')||'197803312006042007'; }

function sumR(rows,k) { return rows.reduce(function(s,r){ return s+(+r[k]||0); },0); }
function isFilled(unit) { var d=loadUnit(unit); return d.pen.some(function(p){return p.materi;}) || (d.germas||[]).some(function(g){return g.tgl;}); }
function fotoCnt(fotos) { return (fotos||[]).filter(Boolean).length; }

function fotoUploadHtml() {
  var html = '<div class="foto-grid">';
  for (var i=0;i<4;i++) {
    var src = _tmpF[i];
    html += '<div class="fub" id="fub'+i+'">';
    html += '<input type="file" accept="image/*" onchange="onFotoChange('+i+',this)">';
    if (src) {
      html += '<img src="'+src+'"><button class="fub-del" onclick="rmFoto('+i+');event.stopPropagation()">×</button>';
    } else {
      html += '<div class="fub-ico">📷</div><div class="fub-lbl">Foto '+(i+1)+'</div>';
    }
    html += '</div>';
  }
  html += '</div><div style="font-size:.7rem;color:var(--muted);margin-top:.3rem">💡 Upload minimal 4 foto dokumentasi, lalu tekan Simpan.</div>';
  return html;
}
function onFotoChange(idx,input) {
  var f=input.files[0]; if(!f) return;
  var rdr=new FileReader();
  rdr.onload=function(ev){
    _tmpF[idx]=ev.target.result;
    var box=$('fub'+idx); if(!box) return;
    box.innerHTML='<input type="file" accept="image/*" onchange="onFotoChange('+idx+',this)"><img src="'+ev.target.result+'"><button class="fub-del" onclick="rmFoto('+idx+');event.stopPropagation()">×</button>';
  };
  rdr.readAsDataURL(f);
}
function rmFoto(idx) {
  _tmpF[idx]=null;
  var box=$('fub'+idx); if(!box) return;
  box.innerHTML='<input type="file" accept="image/*" onchange="onFotoChange('+idx+',this)"><div class="fub-ico">📷</div><div class="fub-lbl">Foto '+(idx+1)+'</div>';
}
function mergeFotos(oldF) {
  return _tmpF.map(function(v,i){ return v!==null ? v : ((oldF && oldF[i]) || null); });
}

// ═══════════════════════════════════════════════
// AUTH
// ═══════════════════════════════════════════════
function tglPw() { var i=$('i-p'); i.type = i.type==='password' ? 'text' : 'password'; }
function doLogin() {
  var u=vv('i-u').trim(), p=vv('i-p');
  if(!u||!p){ lerr('Username dan password wajib diisi.'); return; }
  var acc=null;
  for (var i=0;i<ACCOUNTS.length;i++) { if(ACCOUNTS[i].u===u && ACCOUNTS[i].p===p) { acc=ACCOUNTS[i]; break; } }
  if(!acc){ lerr('Username atau password salah.'); return; }
  S.user=acc;
  if(acc.unit!=='PKM Tambora') {
    var idx=UNITS.indexOf(acc.unit);
    if(idx>=0) S.selUnit=idx;
  }
  $('pg-login').classList.add('hidden');
  $('pg-app').classList.remove('hidden');
  $('tb-av').textContent=acc.n.charAt(0).toUpperCase();
  $('tb-nm').textContent=acc.n.split(' ').slice(0,2).join(' ');
  $('tb-rl').textContent=acc.unit+' · '+({admin:'Admin',promkes:'Promkes',viewer:'Viewer'})[acc.role];
  switchMod('pustu');
}
function doLogout() {
  if(!confirm('Keluar dari sesi ini?')) return;
  S.user=null;
  $('pg-login').classList.remove('hidden');
  $('pg-app').classList.add('hidden');
  $('i-p').value='';
  $('login-err').classList.add('hidden');
}
function lerr(m) { $('login-err').classList.remove('hidden'); $('lerr-msg').textContent=m; }

// ═══════════════════════════════════════════════
// MODULE SWITCH
// ═══════════════════════════════════════════════
function switchMod(mod) {
  S.mod=mod;
  ['pustu','rekap','sett'].forEach(function(m){ $('mb-'+m).classList.toggle('active', m===mod); });
  buildSidebar();
}

// ═══════════════════════════════════════════════
// SIDEBAR
// ═══════════════════════════════════════════════
function buildSidebar() {
  var sb=$('sidebar');
  if(S.mod==='pustu') {
    var d=getD();
    var penN=d.pen.filter(function(p){return p.materi;}).length;
    var kriN=(d.pra||[]).filter(function(r){return r.materi;}).length+(d.saat||[]).filter(function(r){return r.materi;}).length+(d.pasca||[]).filter(function(r){return r.materi;}).length;
    var abatN=(d.hiv||[]).filter(function(r){return r.sasaran;}).length+(d.kespro||[]).filter(function(r){return r.sasaran;}).length+(d.napza||[]).filter(function(r){return r.sasaran;}).length;
    var gerN=(d.germas||[]).filter(function(g){return g.tgl;}).length;
    var showAllUnits = S.user.unit==='PKM Tambora';
    var html='';
    if (showAllUnits) {
      html += '<div style="padding:.7rem .82rem;border-bottom:1px solid var(--border)">';
      html += '<div style="font-size:.62rem;font-weight:800;color:#9AABBF;text-transform:uppercase;letter-spacing:.07em;margin-bottom:.4rem">Unit / Kelurahan</div>';
      UNITS.forEach(function(u,i){
        var act = S.selUnit===i ? ' active' : '';
        var ic = isFilled(u) ? '✓' : '○';
        var nm = u.replace('Kel. ','').replace('Pustu ','');
        html += '<div onclick="selUnit('+i+')" class="ni'+act+'" style="padding:.42rem .7rem;margin:.03rem .35rem">';
        html += '<span class="ni-ic">'+ic+'</span><span style="font-size:.77rem">'+nm+'</span></div>';
      });
      html += '</div>';
    } else {
      html += '<div style="padding:.7rem .82rem;border-bottom:1px solid var(--border);font-size:.78rem;color:var(--muted)">Unit: <b>'+d.unit+'</b></div>';
    }
    html += '<div class="sb-sec">Menu</div>';
    html += ni('pdash','📊','Dashboard','');
    html += ni('platar','📝','Latar Belakang','');
    html += ni('ppen','📋','Penyuluhan', penN?(penN+' materi'):'');
    html += ni('pkrisis','⚠️','Komunikasi Krisis', kriN?(kriN+' data'):'');
    html += ni('pabat','🎗️','ABAT', abatN?(abatN+' data'):'');
    html += ni('pgermas','🌿','GERMAS', gerN?(gerN+' keg.'):'');
    html += ni('ppenutup','📌','Penutup','');
    html += ni('plap','📄','Cetak Laporan','');
    html += '<div class="sb-bot">SIMKES Tambora v5.1 · 2026</div>';
    sb.innerHTML=html;
    renderPage(S._page);
  } else if(S.mod==='rekap') {
    var html2='';
    html2 += '<div class="sb-sec">Rekap</div>';
    html2 += ni('rdash','📊','Dashboard Rekap','');
    html2 += ni('rpen','📋','Rekap Penyuluhan','');
    html2 += ni('rgermas','🌿','Rekap GERMAS','');
    html2 += ni('rcetak','📄','Cetak Rekap','');
    html2 += '<div class="sb-bot">SIMKES Tambora v5.1 · 2026</div>';
    sb.innerHTML=html2;
    renderPage(S._rpage);
  } else {
    var html3='';
    html3 += '<div class="sb-sec">Pengaturan</div>';
    html3 += ni('skapus','⚙️','Kepala Puskesmas','');
    if (S.user.role==='admin') html3 += ni('sakun','👥','Kelola Akun','');
    html3 += '<div class="sb-bot">SIMKES Tambora v5.1 · 2026</div>';
    sb.innerHTML=html3;
    renderPage('skapus');
  }
}

function ni(page,ic,lbl,badge) {
  var cur = S.mod==='pustu' ? S._page : (S.mod==='rekap' ? S._rpage : S._spage);
  var act = cur===page ? ' active' : '';
  var bd = badge ? '<span class="ni-bd">'+badge+'</span>' : '';
  return '<div class="ni'+act+'" onclick="renderPage(\''+page+'\')"><span class="ni-ic">'+ic+'</span>'+lbl+bd+'</div>';
}

function selUnit(i) {
  S.selUnit=i; S._page='pdash';
  buildSidebar();
}

// ═══════════════════════════════════════════════
// PAGE ROUTER
// ═══════════════════════════════════════════════
function renderPage(page) {
  if(S.mod==='pustu') S._page=page;
  else if(S.mod==='rekap') S._rpage=page;
  else S._spage=page;

  document.querySelectorAll('.ni').forEach(function(el){
    var m = el.getAttribute('onclick').match(/'([^']+)'/);
    var pg = m ? m[1] : '';
    var cur = S.mod==='pustu' ? S._page : (S.mod==='rekap' ? S._rpage : S._spage);
    el.classList.toggle('active', pg===cur);
  });

  if(page==='pdash')    pDash();
  else if(page==='platar')   pLatar();
  else if(page==='ppen')     pPen();
  else if(page==='pkrisis')  pKrisis();
  else if(page==='pabat')    pAbat();
  else if(page==='pgermas')  pGermas();
  else if(page==='ppenutup') pPenutup();
  else if(page==='plap')     pLap();
  else if(page==='rdash')    rDash();
  else if(page==='rpen')     rPen();
  else if(page==='rgermas')  rGermas();
  else if(page==='rcetak')   rCetak();
  else if(page==='skapus')   sKapus();
  else if(page==='sakun')    sAkun();
}

// ═══════════════════════════════════════════════
// PUSTU — DASHBOARD
// ═══════════════════════════════════════════════
function pDash() {
  var d=getD();
  var pen=d.pen.filter(function(p){return p.materi;});
  var tF=sumR(pen,'freq'), tP=sumR(pen,'mj')+sumR(pen,'kia')+sumR(pen,'upl');
  var kri=[].concat(d.pra||[],d.saat||[],d.pasca||[]).filter(function(r){return r.materi;});
  var germas=(d.germas||[]).filter(function(g){return g.tgl;});
  var tw=TWS.filter(function(t){return t.k===d.tw;})[0]||TWS[0];

  var topMateri='';
  if (pen.length) {
    var sorted=pen.slice().sort(function(a,b){return b.freq-a.freq;}).slice(0,6);
    var mx=pen.reduce(function(m,x){return Math.max(m,x.freq);},1);
    sorted.forEach(function(r){
      var pct=Math.round(r.freq/mx*100);
      topMateri += '<div style="margin-bottom:.45rem"><div style="display:flex;justify-content:space-between;font-size:.73rem;margin-bottom:.12rem"><span>'+r.materi+'</span><b>'+r.freq+'x</b></div><div style="background:#EEF4F8;border-radius:3px;height:6px"><div style="background:var(--blue);border-radius:3px;height:6px;width:'+pct+'%"></div></div></div>';
    });
  } else {
    topMateri='<div style="text-align:center;color:var(--muted);padding:1.5rem">Belum ada data</div>';
  }

  var germasRows='';
  GI.forEach(function(ind){
    var gs=germas.filter(function(g){return g.ind===ind.id;});
    germasRows += '<div style="display:flex;justify-content:space-between;align-items:center;padding:.26rem 0;border-bottom:1px solid #EEF2F7;font-size:.76rem"><span>'+ind.ic+' '+ind.nm+'</span><span class="badge '+(gs.length?'b-green':'b-gray')+'">'+gs.length+' keg.</span></div>';
  });

  mc().innerHTML =
  '<div class="ph"><div><h2>Dashboard – '+d.unit+'</h2><p>'+tw.l+' '+d.tahun+'</p></div>'+
  '<div class="pa no-print">'+
    '<button class="btn btn-primary" onclick="renderPage(\'ppen\')">➕ Input Penyuluhan</button>'+
    '<button class="btn btn-teal" onclick="renderPage(\'pgermas\')">🌿 Input GERMAS</button>'+
    '<button class="btn btn-outline" onclick="renderPage(\'plap\')">📄 Cetak Laporan</button>'+
  '</div></div>'+
  '<div class="sg">'+
    '<div class="sc c1"><div class="sc-ico">📋</div><div class="sc-val">'+pen.length+'</div><div class="sc-lbl">Jenis Materi Penyuluhan</div></div>'+
    '<div class="sc c2"><div class="sc-ico">🔁</div><div class="sc-val">'+tF+'</div><div class="sc-lbl">Total Frekuensi</div></div>'+
    '<div class="sc c3"><div class="sc-ico">👥</div><div class="sc-val">'+tP.toLocaleString()+'</div><div class="sc-lbl">Total Peserta</div></div>'+
    '<div class="sc c4"><div class="sc-ico">⚠️</div><div class="sc-val">'+kri.length+'</div><div class="sc-lbl">Data Krisis</div></div>'+
    '<div class="sc c5"><div class="sc-ico">🌿</div><div class="sc-val">'+germas.length+'</div><div class="sc-lbl">Kegiatan GERMAS</div></div>'+
  '</div>'+
  '<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">'+
    '<div class="panel"><div class="ph2"><h3>📌 Top Materi Penyuluhan</h3></div><div class="pb">'+topMateri+'</div></div>'+
    '<div class="panel"><div class="ph2"><h3>🌿 GERMAS per Indikator</h3></div><div class="pb">'+germasRows+'</div></div>'+
  '</div>';
}

// ═══════════════════════════════════════════════
// PUSTU — LATAR BELAKANG
// ═══════════════════════════════════════════════
function pLatar() {
  var d=getD();
  mc().innerHTML =
  '<div class="ph"><div><h2>Latar Belakang</h2><p>'+d.unit+'</p></div></div>'+
  '<div class="panel"><div class="ph2"><h3>📝 Gambaran Umum & Tujuan</h3></div><div class="pb">'+
    '<div class="fg2">'+
      '<div class="ff full"><label>1.2 Gambaran Umum Wilayah</label><textarea id="lb-g" rows="4">'+e(d.latar.gambaran)+'</textarea></div>'+
      '<div class="ff full"><label>1.3 Permasalahan Kesehatan Prioritas</label><textarea id="lb-m" rows="4">'+e(d.latar.masalah)+'</textarea></div>'+
      '<div class="ff full"><label>2.2 Tujuan Kegiatan</label><textarea id="lb-t" rows="3">'+e(d.latar.tujuan)+'</textarea></div>'+
    '</div>'+
    '<div class="form-foot"><button class="btn btn-primary" onclick="saveLatar()">💾 Simpan</button></div>'+
  '</div></div>';
}
function saveLatar() {
  setD(function(d){ return Object.assign({},d,{latar:{gambaran:vv('lb-g'),masalah:vv('lb-m'),tujuan:vv('lb-t')}}); });
  toast('✅ Latar belakang disimpan');
}

// ═══════════════════════════════════════════════
// PUSTU — PENYULUHAN UMUM
// ═══════════════════════════════════════════════
function pPen() {
  var d=getD(); var pen=d.pen||[]; var can=S.user.role!=='viewer';
  var tF=sumR(pen,'freq'),tMj=sumR(pen,'mj'),tKia=sumR(pen,'kia'),tUpl=sumR(pen,'upl');
  var sorted=pen.slice().sort(function(a,b){return b.freq-a.freq;});

  var rowsHtml='';
  if (sorted.length) {
    sorted.forEach(function(r,i){
      var oi=pen.indexOf(r);
      rowsHtml += '<tr>'+
        '<td style="text-align:center">'+(i+1)+'</td>'+
        '<td><b>'+(r.materi||'—')+'</b></td>'+
        '<td style="text-align:center">'+r.freq+'</td>'+
        '<td style="text-align:center">'+r.mj+'</td>'+
        '<td style="text-align:center">'+r.kia+'</td>'+
        '<td style="text-align:center">'+r.upl+'</td>'+
        '<td style="text-align:center;font-weight:700;background:#EEF4FB">'+(r.mj+r.kia+r.upl)+'</td>'+
        '<td style="font-size:.73rem;color:var(--muted)">'+(r.analisis||'—')+'</td>'+
        '<td style="text-align:center"><span class="badge '+(fotoCnt(r.fotos)>=4?'b-green':'b-orange')+'">'+fotoCnt(r.fotos)+'/4</span> <button class="btn btn-outline btn-sm no-print" style="margin-left:.2rem" onclick="openFotoMod(\'pen\','+oi+')">📷</button></td>'+
        (can ? ('<td class="no-print" style="white-space:nowrap"><button class="btn btn-outline btn-sm" onclick="openPenMod('+oi+')">✏️</button><button class="btn btn-danger btn-sm" style="margin-left:.2rem" onclick="delPen('+oi+')">🗑️</button></td>') : '')+
      '</tr>';
    });
  } else {
    rowsHtml = '<tr><td colspan="10" style="text-align:center;color:#999;font-style:italic;padding:1.5rem">Belum ada materi penyuluhan.</td></tr>';
  }

  mc().innerHTML =
  '<div class="ph"><div><h2>Penyuluhan Umum</h2><p>'+d.unit+'</p></div>'+
  '<div class="pa no-print">'+(can?'<button class="btn btn-primary" onclick="openPenMod()">➕ Tambah Materi</button>':'')+'</div></div>'+
  '<div class="panel"><div class="ph2"><h3>3.1 Jumlah Frekuensi & 3.2 Peserta per Klaster</h3></div><div class="pb p0">'+
    '<div class="tw"><table class="ut">'+
      '<thead><tr><th>#</th><th>Materi Edukasi</th><th>Frekuensi</th><th>Kl. Manajemen</th><th>Kl. KIA</th><th>Kl. UPL</th><th>Total Peserta</th><th>Analisis</th><th>📷 Foto</th>'+(can?'<th class="no-print">Aksi</th>':'')+'</tr></thead>'+
      '<tbody>'+rowsHtml+'</tbody>'+
      '<tfoot><tr>'+
        '<td colspan="2" style="text-align:right">Total</td>'+
        '<td style="text-align:center">'+tF+'</td>'+
        '<td style="text-align:center">'+tMj+'</td>'+
        '<td style="text-align:center">'+tKia+'</td>'+
        '<td style="text-align:center">'+tUpl+'</td>'+
        '<td style="text-align:center">'+(tMj+tKia+tUpl)+'</td>'+
        '<td></td><td></td>'+
        (can?'<td class="no-print"></td>':'')+
      '</tr></tfoot>'+
    '</table></div>'+
  '</div></div>';
}
function openPenMod(idx) {
  if (idx===undefined) idx=null;
  var d=getD(); var r=idx!==null?d.pen[idx]:null;
  _tmpF=(r && r.fotos ? r.fotos : [null,null,null,null]).slice();
  openModal(idx!==null?'Edit Materi':'Tambah Materi Penyuluhan',
    '<div class="fg2">'+
      '<div class="ff full"><label>Materi Edukasi *</label><input type="text" id="mp-m" value="'+e(r?r.materi:'')+'" placeholder="Nama materi edukasi kesehatan"></div>'+
      '<div class="ff"><label>Frekuensi *</label><input type="number" id="mp-f" value="'+(r?r.freq:'')+'" min="1" placeholder="0"></div>'+
      '<div class="ff"><label>Kl. Manajemen</label><input type="number" id="mp-mj" value="'+(r?r.mj:0)+'" min="0"></div>'+
      '<div class="ff"><label>Kl. KIA</label><input type="number" id="mp-kia" value="'+(r?r.kia:0)+'" min="0"></div>'+
      '<div class="ff"><label>Kl. UPL</label><input type="number" id="mp-upl" value="'+(r?r.upl:0)+'" min="0"></div>'+
      '<div class="ff full"><label>Analisis (kenapa materi ini dipilih)</label><textarea id="mp-an" rows="2">'+e(r?r.analisis:'')+'</textarea></div>'+
      '<div class="ff full"><label>📷 Dokumentasi Foto (minimal 4)</label>'+fotoUploadHtml()+'</div>'+
    '</div>',
    '<button class="btn btn-ghost" onclick="closeModal()">Batal</button>'+
    '<button class="btn btn-primary" onclick="savePenMod('+idx+')">💾 Simpan</button>');
}
function savePenMod(idx) {
  if (idx===-1 || isNaN(idx)) idx=null;
  var materi=vv('mp-m').trim();
  if(!materi||!vv('mp-f')) { toast('⚠️ Materi dan frekuensi wajib diisi'); return; }
  setD(function(d){
    var oldF=(idx!==null && d.pen[idx]) ? d.pen[idx].fotos : null;
    var rec={materi:materi,freq:+vv('mp-f'),mj:+vv('mp-mj')||0,kia:+vv('mp-kia')||0,upl:+vv('mp-upl')||0,analisis:vv('mp-an'),fotos:mergeFotos(oldF)};
    var pen=d.pen.slice(); if(idx!==null)pen[idx]=rec;else pen.push(rec); return Object.assign({},d,{pen:pen});
  });
  closeModal(); pPen(); toast('✅ Disimpan');
}
function delPen(i) {
  if(!confirm('Hapus materi ini?')) return;
  setD(function(d){ return Object.assign({},d,{pen:d.pen.filter(function(_,j){return j!==i;})}); });
  pPen(); toast('🗑️ Dihapus');
}

// ═══════════════════════════════════════════════
// PUSTU — KRISIS
// ═══════════════════════════════════════════════
function pKrisis() {
  var can=S.user.role!=='viewer';
  var html =
  '<div class="ph"><div><h2>Komunikasi Risiko & Krisis</h2></div>'+
  '<div class="pa no-print">'+(can?(
    '<button class="btn btn-primary" onclick="openKriMod(\'pra\')">➕ Pra-Krisis</button>'+
    '<button class="btn btn-outline" onclick="openKriMod(\'saat\')">➕ Saat Krisis</button>'+
    '<button class="btn btn-ghost" onclick="openKriMod(\'pasca\')">➕ Pasca-Krisis</button>'
  ):'')+'</div></div>';
  html += kriSec('pra','🔶 Edukasi Pra-Krisis');
  html += kriSec('saat','🔴 Edukasi Saat Krisis');
  html += kriSec('pasca','🟢 Edukasi Pasca-Krisis');
  mc().innerHTML=html;
}
function kriSec(fase,label) {
  var allRows=getD()[fase]||[];
  var rows=allRows.filter(function(r){return r.materi;});
  var can=S.user.role!=='viewer';
  var rowsHtml='';
  if (rows.length) {
    rows.forEach(function(r){
      var oi=allRows.indexOf(r);
      rowsHtml += '<tr>'+
        '<td style="text-align:center">'+(rows.indexOf(r)+1)+'</td>'+
        '<td><span class="badge b-orange">'+(r.jenis||'—')+'</span></td>'+
        '<td>'+r.materi+'</td>'+
        '<td style="text-align:center">'+r.freq+'</td>'+
        '<td style="text-align:center">'+r.mj+'</td>'+
        '<td style="text-align:center">'+r.kia+'</td>'+
        '<td style="text-align:center">'+r.upl+'</td>'+
        '<td style="text-align:center;font-weight:700">'+(r.mj+r.kia+r.upl)+'</td>'+
        '<td style="text-align:center"><span class="badge '+(fotoCnt(r.fotos)>=4?'b-green':'b-orange')+'">'+fotoCnt(r.fotos)+'/4</span> <button class="btn btn-outline btn-sm no-print" style="margin-left:.2rem" onclick="openFotoMod(\''+fase+'\','+oi+')">📷</button></td>'+
        (can?('<td class="no-print" style="white-space:nowrap"><button class="btn btn-outline btn-sm" onclick="openKriMod(\''+fase+'\','+oi+')">✏️</button><button class="btn btn-danger btn-sm" style="margin-left:.2rem" onclick="delKri(\''+fase+'\','+oi+')">🗑️</button></td>'):'')+
      '</tr>';
    });
  } else {
    rowsHtml='<tr><td colspan="10" style="text-align:center;color:#999;font-style:italic;padding:1rem">Belum ada data.</td></tr>';
  }
  return '<div class="panel"><div class="ph2"><h3>'+label+'</h3>'+(can?('<button class="btn btn-outline btn-sm no-print" onclick="openKriMod(\''+fase+'\')">➕ Tambah</button>'):'')+'</div>'+
  '<div class="pb p0"><div class="tw"><table class="ut">'+
    '<thead><tr><th>#</th><th>Jenis Krisis</th><th>Materi</th><th>Frekuensi</th><th>Kl. Manajemen</th><th>Kl. KIA</th><th>Kl. UPL</th><th>Total</th><th>📷 Foto</th>'+(can?'<th class="no-print">Aksi</th>':'')+'</tr></thead>'+
    '<tbody>'+rowsHtml+'</tbody>'+
    '<tfoot><tr><td colspan="3" style="text-align:right">Total</td>'+
      '<td style="text-align:center">'+sumR(rows,'freq')+'</td>'+
      '<td style="text-align:center">'+sumR(rows,'mj')+'</td>'+
      '<td style="text-align:center">'+sumR(rows,'kia')+'</td>'+
      '<td style="text-align:center">'+sumR(rows,'upl')+'</td>'+
      '<td style="text-align:center">'+(sumR(rows,'mj')+sumR(rows,'kia')+sumR(rows,'upl'))+'</td>'+
      '<td></td>'+
      (can?'<td></td>':'')+
    '</tr></tfoot>'+
  '</table></div></div></div>';
}
function openKriMod(fase,idx) {
  if (idx===undefined) idx=null;
  var d=getD(); var r=idx!==null?d[fase][idx]:null;
  var fl={pra:'Pra-Krisis',saat:'Saat Krisis',pasca:'Pasca-Krisis'}[fase];
  _tmpF=(r && r.fotos ? r.fotos : [null,null,null,null]).slice();
  var jenisOpts='';
  JENIS_KRISIS.forEach(function(j){ jenisOpts += '<option '+((r&&r.jenis===j)?'selected':'')+'>'+j+'</option>'; });
  openModal((idx!==null?'Edit':'Tambah')+' Edukasi '+fl,
    '<div class="fg2">'+
      '<div class="ff"><label>Jenis Krisis *</label><select id="mk-j">'+jenisOpts+'</select></div>'+
      '<div class="ff"><label>Fase</label><input value="'+fl+'" readonly style="background:#EEF2F7"></div>'+
      '<div class="ff full"><label>Materi Edukasi *</label><input type="text" id="mk-m" value="'+e(r?r.materi:'')+'"></div>'+
      '<div class="ff"><label>Frekuensi *</label><input type="number" id="mk-f" value="'+(r?r.freq:'')+'" min="1"></div>'+
      '<div class="ff"><label>Kl. Manajemen</label><input type="number" id="mk-mj" value="'+(r?r.mj:0)+'" min="0"></div>'+
      '<div class="ff"><label>Kl. KIA</label><input type="number" id="mk-kia" value="'+(r?r.kia:0)+'" min="0"></div>'+
      '<div class="ff"><label>Kl. UPL</label><input type="number" id="mk-upl" value="'+(r?r.upl:0)+'" min="0"></div>'+
      '<div class="ff full"><label>📷 Dokumentasi Foto (minimal 4)</label>'+fotoUploadHtml()+'</div>'+
    '</div>',
    '<button class="btn btn-ghost" onclick="closeModal()">Batal</button>'+
    '<button class="btn btn-primary" onclick="saveKriMod(\''+fase+'\','+idx+')">💾 Simpan</button>');
}
function saveKriMod(fase,idx) {
  if (idx===-1 || isNaN(idx)) idx=null;
  if(!vv('mk-m')||!vv('mk-f')) { toast('⚠️ Lengkapi field wajib'); return; }
  setD(function(d){
    var oldF=(idx!==null && d[fase][idx]) ? d[fase][idx].fotos : null;
    var rec={jenis:vv('mk-j'),materi:vv('mk-m'),freq:+vv('mk-f'),mj:+vv('mk-mj')||0,kia:+vv('mk-kia')||0,upl:+vv('mk-upl')||0,fotos:mergeFotos(oldF)};
    var rows=(d[fase]||[]).slice(); if(idx!==null)rows[idx]=rec;else rows.push(rec);
    var nd={}; nd[fase]=rows; return Object.assign({},d,nd);
  });
  closeModal(); pKrisis(); toast('✅ Disimpan');
}
function delKri(fase,i) {
  if(!confirm('Hapus?')) return;
  setD(function(d){ var nd={}; nd[fase]=d[fase].filter(function(_,j){return j!==i;}); return Object.assign({},d,nd); });
  pKrisis(); toast('🗑️ Dihapus');
}

// ═══════════════════════════════════════════════
// PUSTU — ABAT
// ═══════════════════════════════════════════════
function pAbat() {
  var can=S.user.role!=='viewer';
  var html =
  '<div class="ph"><div><h2>Penyuluhan ABAT</h2><p>HIV/AIDS · Kesehatan Reproduksi · NAPZA</p></div>'+
  '<div class="pa no-print">'+(can?(
    '<button class="btn btn-primary" onclick="openAbatMod(\'hiv\')">➕ HIV/AIDS</button>'+
    '<button class="btn btn-outline" onclick="openAbatMod(\'kespro\')">➕ Kespro</button>'+
    '<button class="btn btn-ghost" onclick="openAbatMod(\'napza\')">➕ NAPZA</button>'
  ):'')+'</div></div>';
  html += abatSec('hiv','🎗️ HIV/AIDS');
  html += abatSec('kespro','🩺 Kesehatan Reproduksi');
  html += abatSec('napza','💊 NAPZA');
  mc().innerHTML=html;
}
function abatSec(type,label) {
  var allRows=getD()[type]||[];
  var rows=allRows.filter(function(r){return r.sasaran;});
  var can=S.user.role!=='viewer';
  var rowsHtml='';
  if (rows.length) {
    rows.forEach(function(r){
      var oi=allRows.indexOf(r);
      rowsHtml += '<tr>'+
        '<td style="text-align:center">'+(rows.indexOf(r)+1)+'</td><td>'+r.sasaran+'</td>'+
        '<td style="text-align:center">'+r.peserta+'</td><td style="text-align:center">'+r.freq+'</td>'+
        '<td style="font-size:.72rem">'+(r.segmentasi.join(', ')||'—')+'</td>'+
        '<td style="font-size:.73rem">'+(r.hasil||'—')+'</td>'+
        '<td style="text-align:center"><span class="badge '+(fotoCnt(r.fotos)>=4?'b-green':'b-orange')+'">'+fotoCnt(r.fotos)+'/4</span> <button class="btn btn-outline btn-sm no-print" style="margin-left:.2rem" onclick="openFotoMod(\''+type+'\','+oi+')">📷</button></td>'+
        (can?('<td class="no-print" style="white-space:nowrap"><button class="btn btn-outline btn-sm" onclick="openAbatMod(\''+type+'\','+oi+')">✏️</button><button class="btn btn-danger btn-sm" style="margin-left:.2rem" onclick="delAbat(\''+type+'\','+oi+')">🗑️</button></td>'):'')+
      '</tr>';
    });
  } else {
    rowsHtml='<tr><td colspan="8" style="text-align:center;color:#999;font-style:italic;padding:1rem">Belum ada data.</td></tr>';
  }
  return '<div class="panel"><div class="ph2"><h3>'+label+'</h3>'+(can?('<button class="btn btn-outline btn-sm no-print" onclick="openAbatMod(\''+type+'\')">➕ Tambah</button>'):'')+'</div>'+
  '<div class="pb p0"><div class="tw"><table class="ut">'+
    '<thead><tr><th>#</th><th>Sasaran</th><th>Peserta</th><th>Frekuensi</th><th>Segmentasi</th><th>Hasil/Deskripsi</th><th>📷 Foto</th>'+(can?'<th class="no-print">Aksi</th>':'')+'</tr></thead>'+
    '<tbody>'+rowsHtml+'</tbody>'+
    '<tfoot><tr><td colspan="2" style="text-align:right">Total</td>'+
      '<td style="text-align:center">'+sumR(rows,'peserta')+'</td>'+
      '<td style="text-align:center">'+sumR(rows,'freq')+'</td>'+
      '<td colspan="'+(can?4:3)+'"></td>'+
    '</tr></tfoot>'+
  '</table></div></div></div>';
}
function openAbatMod(type,idx) {
  if (idx===undefined) idx=null;
  var d=getD(); var r=idx!==null?d[type][idx]:null;
  var tn={'hiv':'HIV/AIDS','kespro':'Kesehatan Reproduksi','napza':'NAPZA'}[type];
  _tmpF=(r && r.fotos ? r.fotos : [null,null,null,null]).slice();
  var segHtml='';
  SEGMENTASI.forEach(function(seg){
    var chk = r && r.segmentasi && r.segmentasi.indexOf(seg)>=0 ? 'checked' : '';
    segHtml += '<label style="display:flex;align-items:center;gap:.35rem;font-size:.82rem;cursor:pointer"><input type="checkbox" id="ab-seg-'+seg.replace(/\s/g,'_')+'" '+chk+'> '+seg+'</label>';
  });
  openModal((idx!==null?'Edit':'Tambah')+' ABAT – '+tn,
    '<div class="fg2">'+
      '<div class="ff full"><label>Sasaran (Sekolah/Lembaga) *</label><input type="text" id="ab-s" value="'+e(r?r.sasaran:'')+'"></div>'+
      '<div class="ff"><label>Jumlah Peserta</label><input type="number" id="ab-p" value="'+(r?r.peserta:0)+'" min="0"></div>'+
      '<div class="ff"><label>Frekuensi</label><input type="number" id="ab-f" value="'+(r?r.freq:1)+'" min="1"></div>'+
      '<div class="ff full"><label>Segmentasi</label><div style="display:flex;flex-wrap:wrap;gap:.6rem;margin-top:.3rem">'+segHtml+'</div></div>'+
      '<div class="ff full"><label>Hasil / Deskripsi</label><textarea id="ab-h" rows="2">'+e(r?r.hasil:'')+'</textarea></div>'+
      '<div class="ff full"><label>📷 Dokumentasi Foto (minimal 4)</label>'+fotoUploadHtml()+'</div>'+
    '</div>',
    '<button class="btn btn-ghost" onclick="closeModal()">Batal</button>'+
    '<button class="btn btn-primary" onclick="saveAbatMod(\''+type+'\','+idx+')">💾 Simpan</button>');
}
function saveAbatMod(type,idx) {
  if (idx===-1 || isNaN(idx)) idx=null;
  if(!vv('ab-s')) { toast('⚠️ Sasaran wajib'); return; }
  var seg=SEGMENTASI.filter(function(s){ var el=$('ab-seg-'+s.replace(/\s/g,'_')); return el && el.checked; });
  setD(function(d){
    var oldF=(idx!==null && d[type][idx]) ? d[type][idx].fotos : null;
    var rec={sasaran:vv('ab-s'),peserta:+vv('ab-p')||0,freq:+vv('ab-f')||1,segmentasi:seg,hasil:vv('ab-h'),fotos:mergeFotos(oldF)};
    var rows=(d[type]||[]).slice(); if(idx!==null)rows[idx]=rec;else rows.push(rec);
    var nd={}; nd[type]=rows; return Object.assign({},d,nd);
  });
  closeModal(); pAbat(); toast('✅ Disimpan');
}
function delAbat(type,i) {
  if(!confirm('Hapus?')) return;
  setD(function(d){ var nd={}; nd[type]=d[type].filter(function(_,j){return j!==i;}); return Object.assign({},d,nd); });
  pAbat(); toast('🗑️ Dihapus');
}

// ═══════════════════════════════════════════════
// PUSTU — GERMAS
// ═══════════════════════════════════════════════
function pGermas() {
  var d=getD(); var can=S.user.role!=='viewer';
  var allKeg=(d.germas||[]).map(function(g,i){ var o=Object.assign({},g); o._i=i; return o; });
  var filtered=allKeg.filter(function(g){ return S.gitab===0 || g.ind===S.gitab; });

  var tabsHtml='<div class="ind-tab'+(S.gitab===0?' active':'')+'" onclick="S.gitab=0;pGermas()">Semua</div>';
  GI.forEach(function(g){
    var act = S.gitab===g.id ? ' active' : '';
    var style = S.gitab===g.id ? ('background:'+g.col+';border-color:'+g.col+';color:#fff') : '';
    tabsHtml += '<div class="ind-tab'+act+'" onclick="S.gitab='+g.id+';pGermas()" style="'+style+'">'+g.ic+' Ind '+g.id+'</div>';
  });

  var curInd = S.gitab>0 ? GI.filter(function(g){return g.id===S.gitab;})[0] : null;
  var titleH3 = S.gitab===0 ? 'Semua Kegiatan' : (curInd.ic+' Indikator '+S.gitab+': '+curInd.nm);

  var rowsHtml='';
  if (filtered.length) {
    filtered.forEach(function(g,n){
      var ind=GI.filter(function(x){return x.id===g.ind;})[0];
      rowsHtml += '<tr>'+
        '<td style="text-align:center">'+(n+1)+'</td>'+
        '<td style="white-space:nowrap">'+(g.tgl||'—')+'</td>'+
        '<td><span class="badge" style="background:'+(ind?ind.col:'#eee')+'22;color:'+(ind?ind.col:'#666')+'">'+(ind?ind.ic:'')+' Ind '+g.ind+'</span></td>'+
        '<td>'+(g.jenis||'—')+'</td>'+
        '<td>'+(g.tatanan||'—')+'</td>'+
        '<td>'+(g.tempat||'—')+'</td>'+
        '<td style="text-align:center">'+(g.pl||0)+'</td>'+
        '<td style="text-align:center">'+(g.pp||0)+'</td>'+
        '<td style="text-align:center;font-weight:700">'+((+g.pl||0)+(+g.pp||0))+'</td>'+
        '<td style="text-align:center">'+((g.ang||0).toLocaleString())+'</td>'+
        '<td style="text-align:center"><span class="badge '+(fotoCnt(g.fotos)>=4?'b-green':'b-orange')+'">'+fotoCnt(g.fotos)+'/4</span> <button class="btn btn-outline btn-sm no-print" style="margin-left:.2rem" onclick="openFotoMod(\'germas\','+g._i+')">📷</button></td>'+
        (can?('<td class="no-print" style="white-space:nowrap"><button class="btn btn-outline btn-sm" onclick="openGermasMod('+g._i+')">✏️</button><button class="btn btn-danger btn-sm" style="margin-left:.2rem" onclick="delGermas('+g._i+')">🗑️</button></td>'):'')+
      '</tr>';
    });
  } else {
    rowsHtml = '<tr><td colspan="12" style="text-align:center;color:#999;font-style:italic;padding:1.5rem">Belum ada kegiatan.</td></tr>';
  }

  var tfoot='';
  if (filtered.length) {
    tfoot = '<tfoot><tr>'+
      '<td colspan="6" style="text-align:right">Sub-Total</td>'+
      '<td style="text-align:center">'+sumR(filtered,'pl')+'</td>'+
      '<td style="text-align:center">'+sumR(filtered,'pp')+'</td>'+
      '<td style="text-align:center">'+(sumR(filtered,'pl')+sumR(filtered,'pp'))+'</td>'+
      '<td style="text-align:center">'+sumR(filtered,'ang').toLocaleString()+'</td>'+
      '<td></td>'+
      (can?'<td></td>':'')+
    '</tr></tfoot>';
  }

  mc().innerHTML =
  '<div class="ph"><div><h2>Kegiatan GERMAS</h2><p>'+d.unit+'</p></div>'+
  '<div class="pa no-print">'+(can?'<button class="btn btn-teal" onclick="openGermasMod()">➕ Tambah Kegiatan</button>':'')+'</div></div>'+
  '<div class="ind-tabs">'+tabsHtml+'</div>'+
  '<div class="panel"><div class="ph2"><h3>🌿 '+titleH3+'</h3><span class="badge '+(filtered.length?'b-green':'b-gray')+'">'+filtered.length+' kegiatan</span></div>'+
  '<div class="pb p0"><div class="tw"><table class="ut">'+
    '<thead><tr><th>#</th><th>Tanggal</th><th>Indikator</th><th>Jenis Kegiatan</th><th>Tatanan</th><th>Tempat</th><th>Peserta L</th><th>Peserta P</th><th>Total</th><th>Anggaran (Rp)</th><th>📷 Foto</th>'+(can?'<th class="no-print">Aksi</th>':'')+'</tr></thead>'+
    '<tbody>'+rowsHtml+'</tbody>'+tfoot+
  '</table></div></div></div>';
}
function openGermasMod(idx) {
  if (idx===undefined) idx=null;
  var d=getD(); var r=idx!==null?d.germas[idx]:null;
  var ind=GI.filter(function(g){return g.id===(r?r.ind:1);})[0]||GI[0];
  _tmpF=(r && r.fotos ? r.fotos : [null,null,null,null]).slice();
  var jenisOpts='';
  ind.jenis.forEach(function(j){ jenisOpts += '<option '+((r&&r.jenis===j)?'selected':'')+'>'+j+'</option>'; });
  var indOpts='';
  GI.forEach(function(g){ indOpts += '<option value="'+g.id+'" '+((r?r.ind:1)===g.id?'selected':'')+'>'+g.ic+' Ind '+g.id+': '+g.nm+'</option>'; });
  var sumberOpts='';
  ['BOK','BLUD','APBD','Swadaya','Lintas Sektor','Non-Budgeting'].forEach(function(s){ sumberOpts += '<option '+((r&&r.sumber===s)?'selected':'')+'>'+s+'</option>'; });

  openModal(idx!==null?'Edit Kegiatan GERMAS':'Tambah Kegiatan GERMAS',
    '<div class="fg2">'+
      '<div class="ff"><label>Tanggal *</label><input type="date" id="gk-t" value="'+(r?r.tgl:'')+'"></div>'+
      '<div class="ff"><label>Indikator *</label><select id="gk-ind" onchange="updGJenis()">'+indOpts+'</select></div>'+
      '<div class="ff full"><label>Jenis Kegiatan *</label><select id="gk-j">'+jenisOpts+'</select></div>'+
      '<div class="ff"><label>Tatanan</label><input type="text" id="gk-ta" value="'+e(r?r.tatanan:'')+'"></div>'+
      '<div class="ff"><label>Tempat</label><input type="text" id="gk-lo" value="'+e(r?r.tempat:'')+'"></div>'+
      '<div class="ff"><label>Peserta L</label><input type="number" id="gk-pl" value="'+(r?r.pl:0)+'" min="0"></div>'+
      '<div class="ff"><label>Peserta P</label><input type="number" id="gk-pp" value="'+(r?r.pp:0)+'" min="0"></div>'+
      '<div class="ff"><label>Lintas Sektor</label><input type="text" id="gk-ls" value="'+e(r?r.lintas:'')+'"></div>'+
      '<div class="ff"><label>Anggaran (Rp)</label><input type="number" id="gk-ang" value="'+(r?r.ang:0)+'" min="0"></div>'+
      '<div class="ff"><label>Sumber Anggaran</label><select id="gk-sa">'+sumberOpts+'</select></div>'+
      '<div class="ff full"><label>📷 Dokumentasi Foto (minimal 4)</label>'+fotoUploadHtml()+'</div>'+
    '</div>',
    '<button class="btn btn-ghost" onclick="closeModal()">Batal</button>'+
    '<button class="btn btn-teal" onclick="saveGermasMod('+idx+')">💾 Simpan</button>');
}
function updGJenis(sel) {
  if (sel===undefined) sel='';
  var ind=GI.filter(function(g){return g.id===parseInt(vv('gk-ind'));})[0]||GI[0];
  var s=$('gk-j'); if(!s) return;
  var html='';
  ind.jenis.forEach(function(j){ html += '<option '+(j===sel?'selected':'')+'>'+j+'</option>'; });
  s.innerHTML=html;
}
function saveGermasMod(idx) {
  if (idx===-1 || isNaN(idx)) idx=null;
  if(!vv('gk-t')||!vv('gk-j')) { toast('⚠️ Tanggal dan jenis wajib'); return; }
  setD(function(d){
    var oldF=(idx!==null && d.germas[idx]) ? d.germas[idx].fotos : null;
    var rec={tgl:vv('gk-t'),ind:parseInt(vv('gk-ind')),jenis:vv('gk-j'),tatanan:vv('gk-ta'),tempat:vv('gk-lo'),pl:+vv('gk-pl')||0,pp:+vv('gk-pp')||0,lintas:vv('gk-ls'),ang:+vv('gk-ang')||0,sumber:vv('gk-sa'),fotos:mergeFotos(oldF)};
    var rows=(d.germas||[]).slice(); if(idx!==null)rows[idx]=rec;else rows.push(rec);
    return Object.assign({},d,{germas:rows});
  });
  closeModal(); pGermas(); toast('✅ Disimpan');
}
function delGermas(i) {
  if(!confirm('Hapus?')) return;
  setD(function(d){ return Object.assign({},d,{germas:d.germas.filter(function(_,j){return j!==i;})}); });
  pGermas(); toast('🗑️ Dihapus');
}

// ═══════════════════════════════════════════════
// FOTO — kelola langsung dari tabel
// ═══════════════════════════════════════════════
function openFotoMod(key,idx) {
  var d=getD();
  var r = key==='germas' ? d.germas[idx] : d[key][idx];
  _tmpF=(r && r.fotos ? r.fotos : [null,null,null,null]).slice();
  var label = (r && (r.materi || r.sasaran || r.jenis)) || 'Kegiatan';
  openModal('📷 Kelola Foto – '+label, fotoUploadHtml(),
    '<button class="btn btn-ghost" onclick="closeModal()">Batal</button>'+
    '<button class="btn btn-primary" onclick="saveFotoMod(\''+key+'\','+idx+')">💾 Simpan Foto</button>');
}
function saveFotoMod(key,idx) {
  setD(function(d){
    if(key==='germas') {
      var rowsG=d.germas.slice(); rowsG[idx]=Object.assign({},rowsG[idx],{fotos:mergeFotos(rowsG[idx].fotos)}); return Object.assign({},d,{germas:rowsG});
    }
    var rows=d[key].slice(); rows[idx]=Object.assign({},rows[idx],{fotos:mergeFotos(rows[idx].fotos)});
    var nd={}; nd[key]=rows; return Object.assign({},d,nd);
  });
  closeModal();
  if(key==='pen') pPen();
  else if(['pra','saat','pasca'].indexOf(key)>=0) pKrisis();
  else if(['hiv','kespro','napza'].indexOf(key)>=0) pAbat();
  else if(key==='germas') pGermas();
  toast('✅ Foto disimpan');
}

// ═══════════════════════════════════════════════
// PUSTU — PENUTUP
// ═══════════════════════════════════════════════
function pPenutup() {
  var d=getD();
  var twOpts='';
  TWS.forEach(function(t){ twOpts += '<option value="'+t.k+'" '+(d.tw===t.k?'selected':'')+'>'+t.l+'</option>'; });
  var yOpts='';
  ['2025','2026','2027'].forEach(function(y){ yOpts += '<option '+(d.tahun===y?'selected':'')+'>'+y+'</option>'; });

  mc().innerHTML =
  '<div class="ph"><div><h2>Penutup</h2><p>'+d.unit+'</p></div></div>'+
  '<div class="panel"><div class="ph2"><h3>📌 Identitas & Penutup Laporan</h3></div><div class="pb">'+
    '<div class="fg2" style="margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px solid var(--border)">'+
      '<div class="ff"><label>Triwulan</label><select id="pt-tw">'+twOpts+'</select></div>'+
      '<div class="ff"><label>Tahun</label><select id="pt-thn">'+yOpts+'</select></div>'+
      '<div class="ff"><label>Nama Petugas</label><input type="text" id="pt-pet" value="'+e(d.petugas)+'"></div>'+
      '<div class="ff"><label>NIP Petugas</label><input type="text" id="pt-nip" value="'+e(d.nip)+'"></div>'+
      '<div class="ff"><label>Tanggal Laporan</label><input type="date" id="pt-tgl" value="'+(d.tglLaporan||'')+'"></div>'+
    '</div>'+
    '<div class="fg2">'+
      '<div class="ff full"><label>6.1 Kesimpulan</label><textarea id="pt-k" rows="3">'+e(d.penutup.kesimpulan)+'</textarea></div>'+
      '<div class="ff full"><label>6.2 Kendala</label><textarea id="pt-kd" rows="3">'+e(d.penutup.kendala)+'</textarea></div>'+
      '<div class="ff full"><label>6.3 Evaluasi & Tindak Lanjut</label><textarea id="pt-e" rows="3">'+e(d.penutup.evaluasi)+'</textarea></div>'+
    '</div>'+
    '<div class="form-foot"><button class="btn btn-primary" onclick="savePenutup()">💾 Simpan</button></div>'+
  '</div></div>';
}
function savePenutup() {
  setD(function(d){
    return Object.assign({},d,{
      tw:vv('pt-tw'),tahun:vv('pt-thn'),petugas:vv('pt-pet'),nip:vv('pt-nip'),tglLaporan:vv('pt-tgl'),
      penutup:{kesimpulan:vv('pt-k'),kendala:vv('pt-kd'),evaluasi:vv('pt-e')}
    });
  });
  toast('✅ Penutup & identitas disimpan');
}

// ═══════════════════════════════════════════════
// PUSTU — LAPORAN CETAK
// ═══════════════════════════════════════════════
function pLap() {
  var d=getD(); var tw=TWS.filter(function(t){return t.k===d.tw;})[0]||TWS[0];
  var kapus=getKapus(); var kapusNip=getKapusNip();
  var tglFmt=d.tglLaporan?new Date(d.tglLaporan).toLocaleDateString('id-ID',{day:'2-digit',month:'long',year:'numeric'}):(tw.end+' '+d.tahun);
  var pen=d.pen.filter(function(p){return p.materi;}).sort(function(a,b){return b.freq-a.freq;});
  function gl(s) { return (s||'').split('\n'); }
  var tF=sumR(pen,'freq'),tMj=sumR(pen,'mj'),tKia=sumR(pen,'kia'),tUpl=sumR(pen,'upl');

  function kriTbl(rows,label) {
    var kd=rows.filter(function(r){return r.materi;});
    if(!kd.length) return '<p class="lpars"><i>Tidak ada data '+label.toLowerCase()+'.</i></p>';
    var body='';
    kd.forEach(function(r,i){ body += '<tr><td class="tc">'+(i+1)+'</td><td>'+r.jenis+'</td><td>'+r.materi+'</td><td class="tc">'+r.freq+'</td><td class="tc">'+r.mj+'</td><td class="tc">'+r.kia+'</td><td class="tc">'+r.upl+'</td><td class="tc"><b>'+(r.mj+r.kia+r.upl)+'</b></td></tr>'; });
    return '<table class="ltbl"><caption style="text-align:left;font-weight:700;padding:.28rem 0;font-size:.77rem">'+label+'</caption>'+
    '<thead><tr><th>No.</th><th>Jenis Krisis</th><th>Materi Edukasi</th><th>Frekuensi</th><th>Kl. Manajemen</th><th>Kl. KIA</th><th>Kl. UPL</th><th>Total</th></tr></thead>'+
    '<tbody>'+body+'</tbody>'+
    '<tfoot><tr><td colspan="3" style="text-align:right">Total</td><td class="tc">'+sumR(kd,'freq')+'</td><td class="tc">'+sumR(kd,'mj')+'</td><td class="tc">'+sumR(kd,'kia')+'</td><td class="tc">'+sumR(kd,'upl')+'</td><td class="tc"><b>'+(sumR(kd,'mj')+sumR(kd,'kia')+sumR(kd,'upl'))+'</b></td></tr></tfoot></table>';
  }
  function abatTbl(rows,label) {
    var ad=rows.filter(function(r){return r.sasaran;});
    if(!ad.length) return '<p class="lpars"><i>'+label+' belum dilaksanakan.</i></p>';
    var body='';
    ad.forEach(function(r,i){ body += '<tr><td class="tc">'+(i+1)+'</td><td>'+r.sasaran+'</td><td class="tc">'+r.peserta+'</td><td class="tc">'+r.freq+'</td><td>'+(r.segmentasi.join(', ')||'—')+'</td><td>'+(r.hasil||'—')+'</td></tr>'; });
    return '<table class="ltbl"><thead><tr><th>No.</th><th>Sasaran</th><th>Peserta</th><th>Frekuensi</th><th>Segmentasi</th><th>Hasil</th></tr></thead>'+
    '<tbody>'+body+'</tbody>'+
    '<tfoot><tr><td colspan="2" style="text-align:right">Total</td><td class="tc">'+sumR(ad,'peserta')+'</td><td class="tc">'+sumR(ad,'freq')+'</td><td colspan="2"></td></tr></tfoot></table>';
  }
  var germas=d.germas||[];
  function germasTbl() {
    var body='';
    GI.forEach(function(ind,i){
      var gs=germas.filter(function(g){return g.ind===ind.id;});
      var l=sumR(gs,'pl'),p=sumR(gs,'pp'),a=sumR(gs,'ang');
      body += '<tr><td class="tc">'+(i+1)+'</td><td>'+ind.ic+' '+ind.nm+'</td><td class="tc">'+gs.length+'</td><td class="tc">'+l+'</td><td class="tc">'+p+'</td><td class="tc"><b>'+(l+p)+'</b></td><td class="tc">'+a.toLocaleString()+'</td></tr>';
    });
    return '<div class="lsubbab">Rekapitulasi per Indikator</div>'+
    '<table class="ltbl"><thead><tr><th>No.</th><th>Indikator</th><th>Kegiatan</th><th>Peserta L</th><th>Peserta P</th><th>Total</th><th>Anggaran (Rp)</th></tr></thead>'+
    '<tbody>'+body+'</tbody>'+
    '<tfoot><tr><td colspan="2" style="text-align:right">Total</td><td class="tc">'+germas.length+'</td><td class="tc">'+sumR(germas,'pl')+'</td><td class="tc">'+sumR(germas,'pp')+'</td><td class="tc"><b>'+(sumR(germas,'pl')+sumR(germas,'pp'))+'</b></td><td class="tc">'+sumR(germas,'ang').toLocaleString()+'</td></tr></tfoot></table>';
  }
  function fotoSecPrint(items,label) {
    var fotos=[];
    items.forEach(function(r){ (r.fotos||[]).forEach(function(f){ if(f&&fotos.length<8) fotos.push(f); }); });
    if(!fotos.length) return '<div class="lsubbab" style="margin-top:.8rem">'+label+'</div><p class="lpars"><i>Belum ada foto dokumentasi.</i></p>';
    var grid='';
    fotos.forEach(function(src,i){ grid += '<div class="fg-box"><img src="'+src+'" class="fg-img"><div class="fg-cap">Dokumentasi '+(i+1)+'</div></div>'; });
    return '<div class="lsubbab" style="margin-top:.8rem">'+label+' ('+fotos.length+' foto)</div><div class="foto-grid-print">'+grid+'</div>';
  }

  var penBody='';
  if (pen.length) { pen.forEach(function(r,i){ penBody += '<tr><td class="tc">'+(i+1)+'</td><td>'+r.materi+'</td><td class="tc">'+r.freq+'</td><td>'+(r.analisis||'—')+'</td></tr>'; }); }
  else { penBody = '<tr><td colspan="4" style="text-align:center;font-style:italic;color:#888">Belum ada data</td></tr>'; }

  var penPesertaBody='';
  if (pen.length) { pen.forEach(function(r,i){ penPesertaBody += '<tr><td class="tc">'+(i+1)+'</td><td>'+r.materi+'</td><td class="tc">'+r.mj+'</td><td class="tc">'+r.kia+'</td><td class="tc">'+r.upl+'</td><td class="tc"><b>'+(r.mj+r.kia+r.upl)+'</b></td></tr>'; }); }
  else { penPesertaBody = '<tr><td colspan="6" style="text-align:center;font-style:italic;color:#888">Belum ada data</td></tr>'; }

  var tujuanList = gl(d.latar.tujuan||'').filter(function(l){return l.trim();});
  var kendalaList = gl(d.penutup.kendala||'').filter(function(l){return l.trim();});
  var evaluasiList = gl(d.penutup.evaluasi||'').filter(function(l){return l.trim();});
  var kesimpulanList = gl(d.penutup.kesimpulan||'').filter(function(l){return l.trim();});

  mc().innerHTML =
  '<div class="ph"><div><h2>Cetak Laporan</h2><p>'+d.unit+' · '+tw.l+' '+d.tahun+'</p></div>'+
  '<div class="pa no-print">'+
    '<button class="btn btn-ghost" onclick="expData()">⬇️ Ekspor Data</button>'+
    '<label class="btn btn-ghost" style="cursor:pointer">📂 Impor<input type="file" accept=".json" onchange="impData(event)" style="display:none"></label>'+
    '<button class="btn btn-teal" onclick="window.print()">🖨️ Cetak / PDF</button>'+
  '</div></div>'+
  '<div class="lap-root">'+
    '<div class="kop"><div class="kop-logo">🏥</div><div class="kop-text"><div class="k1">PEMERINTAH DAERAH KHUSUS IBUKOTA JAKARTA – DINAS KESEHATAN – SUDINKES JAKARTA BARAT</div><div class="k2">PUSAT KESEHATAN MASYARAKAT TAMBORA</div><div class="k3">Jalan Krendang Utara No. 4, Tambora, Jakarta Barat 11260</div><div class="k4">Telp. 021-6313651 / 021-6318822 | www.puskesmastambora.com</div></div></div>'+
    '<div class="lt-block"><div class="lt1">LAPORAN PENGELOLAAN PELAYANAN PROMOSI KESEHATAN</div><div>PENYULUHAN KESEHATAN KEPADA MASYARAKAT</div><div>'+d.unit.toUpperCase()+'</div><div>'+tw.l.toUpperCase()+' TAHUN '+d.tahun+' ('+tw.rng+')</div></div>'+

    '<div class="lbab">1.1 Latar Belakang</div>'+
    '<div class="lsubbab">1.2 Gambaran Umum</div>'+
    gl(d.latar.gambaran||'').map(function(l){return '<p class="lpars">'+(l||'&nbsp;')+'</p>';}).join('')+
    '<div class="lsubbab">2.2 Tujuan Kegiatan</div>'+
    (tujuanList.length ? ('<ul class="llst">'+tujuanList.map(function(l){return '<li>'+l.replace(/^[-•]\s*/,'')+'</li>';}).join('')+'</ul>') : '<p class="lpars"><i>Belum diisi.</i></p>')+
    '<div class="lsubbab">2.3 Periode Pelaksanaan</div>'+
    '<p class="lpars">Kegiatan dilaksanakan selama 3 (tiga) bulan ('+tw.l+'), terhitung sejak '+tw.rng+' Tahun '+d.tahun+'.</p>'+

    '<div class="lbab">3.1 Penyuluhan Edukasi Kesehatan Masyarakat</div>'+
    '<div class="lsubbab">3.1 Jumlah Frekuensi</div>'+
    '<table class="ltbl"><thead><tr><th>No.</th><th>Materi Edukasi Kesehatan Masyarakat</th><th>Jumlah Frekuensi</th><th>Analisis</th></tr></thead>'+
    '<tbody>'+penBody+'</tbody>'+
    (pen.length?('<tfoot><tr><td colspan="2" style="text-align:right">Total Frekuensi</td><td class="tc"><b>'+tF+'</b></td><td></td></tr></tfoot>'):'')+'</table>'+
    '<div class="lsubbab">3.2 Jumlah Peserta</div>'+
    '<table class="ltbl"><thead><tr><th>No.</th><th>Materi Edukasi</th><th>Klaster Manajemen</th><th>Klaster KIA</th><th>Klaster UPL</th><th>Total</th></tr></thead>'+
    '<tbody>'+penPesertaBody+'</tbody>'+
    (pen.length?('<tfoot><tr><td colspan="2" style="text-align:right">Total</td><td class="tc">'+tMj+'</td><td class="tc">'+tKia+'</td><td class="tc">'+tUpl+'</td><td class="tc"><b>'+(tMj+tKia+tUpl)+'</b></td></tr></tfoot>'):'')+'</table>'+

    '<div class="lbab">4.1 Komunikasi Risiko & Krisis</div>'+
    kriTbl(d.pra||[],'Edukasi Pra-Krisis')+
    kriTbl(d.saat||[],'Edukasi Saat Krisis')+
    kriTbl(d.pasca||[],'Edukasi Pasca-Krisis')+

    '<div class="lbab">5.1 Penyuluhan ABAT</div>'+
    '<div class="lsubbab">5.1 HIV/AIDS</div>'+abatTbl(d.hiv||[],'HIV/AIDS')+
    '<div class="lsubbab">5.2 Kesehatan Reproduksi</div>'+abatTbl(d.kespro||[],'Kesehatan Reproduksi')+
    '<div class="lsubbab">5.3 NAPZA</div>'+abatTbl(d.napza||[],'NAPZA')+

    '<div class="lbab">6. Kegiatan GERMAS</div>'+
    (germas.length?germasTbl():'<p class="lpars"><i>Belum ada kegiatan GERMAS.</i></p>')+

    '<div class="lbab">7. Penutup</div>'+
    (kesimpulanList.length ? kesimpulanList.map(function(l){return '<p class="lpars">'+l+'</p>';}).join('') : '<p class="lpars"><i>Kesimpulan belum diisi.</i></p>')+
    '<div class="lsubbab">7.1 Kendala</div>'+
    (kendalaList.length?('<ul class="llst">'+kendalaList.map(function(l){return '<li>'+l.replace(/^[-•]\s*/,'')+'</li>';}).join('')+'</ul>'):'<p class="lpars"><i>Belum diisi.</i></p>')+
    '<div class="lsubbab">7.2 Evaluasi</div>'+
    (evaluasiList.length?('<ul class="llst">'+evaluasiList.map(function(l){return '<li>'+l.replace(/^[-•]\s*/,'')+'</li>';}).join('')+'</ul>'):'<p class="lpars"><i>Belum diisi.</i></p>')+

    '<div class="lap-ttd">'+
      '<div><div>Mengetahui,</div><div>Kepala Puskesmas Tambora</div><div class="ttd-name">'+kapus+'</div><div class="ttd-nip">NIP. '+kapusNip+'</div></div>'+
      '<div><div>Jakarta, '+tglFmt+'</div><div>Pembuat Laporan</div><div class="ttd-name">'+(d.petugas||'____________________')+'</div><div class="ttd-nip">NIP. '+(d.nip||'____________________')+'</div></div>'+
    '</div>'+

    '<div style="page-break-before:always"></div>'+
    '<div class="lbab">LAMPIRAN</div>'+
    '<p class="lpars">Dokumentasi hasil kegiatan minimal 4 foto per kegiatan yang berbeda.</p>'+
    fotoSecPrint(pen,'Dokumentasi Penyuluhan Kesehatan')+
    fotoSecPrint([].concat(d.pra||[],d.saat||[],d.pasca||[]),'Dokumentasi Penyuluhan Krisis Kesehatan')+
    fotoSecPrint([].concat(d.hiv||[],d.kespro||[],d.napza||[]),'Dokumentasi Penyuluhan ABAT')+
    fotoSecPrint(germas,'Dokumentasi Kegiatan GERMAS')+
  '</div>';
}
function expData() {
  var d=getD();
  var b=new Blob([JSON.stringify({unit:d.unit,data:d},null,2)],{type:'application/json'});
  var a=document.createElement('a'); a.href=URL.createObjectURL(b);
  a.download='promkes_'+d.unit.replace(/[\s./]/g,'_')+'_'+d.tw+'_'+d.tahun+'.json'; a.click();
  toast('📁 Data diekspor!');
}
function impData(ev) {
  var f=ev.target.files[0]; if(!f) return;
  var r=new FileReader();
  r.onload=function(e){
    try{ var j=JSON.parse(e.target.result); if(j.data){ saveUnit(j.unit||UNITS[S.selUnit],j.data); pLap(); toast('✅ Data dimuat!'); } }
    catch(err){ alert('File tidak valid.'); }
  };
  r.readAsText(f);
}

// ═══════════════════════════════════════════════
// REKAP — DASHBOARD
// ═══════════════════════════════════════════════
function rDash() {
  var allD=UNITS.map(function(u){return loadUnit(u);});
  var totKeg=allD.reduce(function(s,d){return s+d.pen.filter(function(p){return p.materi;}).length;},0);
  var totFreq=allD.reduce(function(s,d){return s+sumR(d.pen.filter(function(p){return p.materi;}),'freq');},0);
  var totPes=allD.reduce(function(s,d){var pen=d.pen.filter(function(p){return p.materi;});return s+sumR(pen,'mj')+sumR(pen,'kia')+sumR(pen,'upl');},0);
  var totGermas=allD.reduce(function(s,d){return s+(d.germas||[]).filter(function(g){return g.tgl;}).length;},0);
  var terisi=allD.filter(function(d){return isFilled(d.unit);}).length;

  var rowsHtml='';
  allD.forEach(function(d,i){
    var pen=d.pen.filter(function(p){return p.materi;});
    var kri=[].concat(d.pra||[],d.saat||[],d.pasca||[]).filter(function(r){return r.materi;});
    var abat=[].concat(d.hiv||[],d.kespro||[],d.napza||[]).filter(function(r){return r.sasaran;});
    var ger=(d.germas||[]).filter(function(g){return g.tgl;});
    var filled=pen.length>0||ger.length>0;
    var pes=sumR(pen,'mj')+sumR(pen,'kia')+sumR(pen,'upl');
    rowsHtml += '<tr>'+
      '<td style="text-align:center">'+(i+1)+'</td>'+
      '<td><b>'+d.unit+'</b></td>'+
      '<td>'+(d.petugas||'<span style="color:#9AABBF;font-style:italic">belum diisi</span>')+'</td>'+
      '<td style="text-align:center">'+pen.length+'</td>'+
      '<td style="text-align:center">'+sumR(pen,'freq')+'</td>'+
      '<td style="text-align:center;font-weight:700">'+pes+'</td>'+
      '<td style="text-align:center">'+kri.length+'</td>'+
      '<td style="text-align:center">'+abat.length+'</td>'+
      '<td style="text-align:center">'+ger.length+'</td>'+
      '<td style="text-align:center"><span class="badge '+(filled?'b-green':'b-gray')+'">'+(filled?'✓ Terisi':'⬜ Kosong')+'</span></td>'+
    '</tr>';
  });

  mc().innerHTML =
  '<div class="ph"><div><h2>Dashboard Rekap PKM Tambora</h2><p>Seluruh unit/kelurahan</p></div>'+
  '<div class="pa no-print"><button class="btn btn-navy" onclick="renderPage(\'rcetak\')">📄 Cetak Rekap</button></div></div>'+
  '<div class="sg">'+
    '<div class="sc c1"><div class="sc-ico">🏘️</div><div class="sc-val">'+terisi+'/'+UNITS.length+'</div><div class="sc-lbl">Unit Terisi</div></div>'+
    '<div class="sc c2"><div class="sc-ico">📋</div><div class="sc-val">'+totKeg+'</div><div class="sc-lbl">Total Jenis Materi</div></div>'+
    '<div class="sc c3"><div class="sc-ico">🔁</div><div class="sc-val">'+totFreq+'</div><div class="sc-lbl">Total Frekuensi</div></div>'+
    '<div class="sc c4"><div class="sc-ico">👥</div><div class="sc-val">'+totPes.toLocaleString()+'</div><div class="sc-lbl">Total Peserta</div></div>'+
    '<div class="sc c5"><div class="sc-ico">🌿</div><div class="sc-val">'+totGermas+'</div><div class="sc-lbl">Kegiatan GERMAS</div></div>'+
  '</div>'+
  '<div class="panel"><div class="ph2"><h3>📊 Status Pengisian Data per Unit</h3></div><div class="pb p0">'+
    '<div class="tw"><table class="ut">'+
      '<thead><tr><th>#</th><th>Unit/Kelurahan</th><th>Petugas</th><th>Materi</th><th>Frekuensi</th><th>Peserta</th><th>Krisis</th><th>ABAT</th><th>GERMAS</th><th>Status</th></tr></thead>'+
      '<tbody>'+rowsHtml+'</tbody>'+
      '<tfoot><tr>'+
        '<td colspan="3" style="text-align:right">TOTAL PKM TAMBORA</td>'+
        '<td style="text-align:center">'+totKeg+'</td>'+
        '<td style="text-align:center">'+totFreq+'</td>'+
        '<td style="text-align:center;font-weight:700">'+totPes+'</td>'+
        '<td style="text-align:center">'+allD.reduce(function(s,d){return s+[].concat(d.pra||[],d.saat||[],d.pasca||[]).filter(function(r){return r.materi;}).length;},0)+'</td>'+
        '<td style="text-align:center">'+allD.reduce(function(s,d){return s+[].concat(d.hiv||[],d.kespro||[],d.napza||[]).filter(function(r){return r.sasaran;}).length;},0)+'</td>'+
        '<td style="text-align:center">'+totGermas+'</td>'+
        '<td></td>'+
      '</tr></tfoot>'+
    '</table></div>'+
  '</div></div>';
}

// ═══════════════════════════════════════════════
// REKAP — PENYULUHAN
// ═══════════════════════════════════════════════
function rPen() {
  var allD=UNITS.map(function(u){return loadUnit(u);});
  var matMap={};
  allD.forEach(function(d){
    d.pen.filter(function(p){return p.materi;}).forEach(function(p){
      if(!matMap[p.materi]) matMap[p.materi]={freq:0,mj:0,kia:0,upl:0,units:[]};
      matMap[p.materi].freq+=p.freq; matMap[p.materi].mj+=p.mj; matMap[p.materi].kia+=p.kia; matMap[p.materi].upl+=p.upl;
      if(matMap[p.materi].units.indexOf(d.unit)<0) matMap[p.materi].units.push(d.unit);
    });
  });
  var matSorted=Object.keys(matMap).map(function(k){return [k,matMap[k]];}).sort(function(a,b){return b[1].freq-a[1].freq;});

  var unitRows='';
  allD.forEach(function(d,i){
    var pen=d.pen.filter(function(p){return p.materi;});
    var tMj=sumR(pen,'mj'),tKia=sumR(pen,'kia'),tUpl=sumR(pen,'upl');
    unitRows += '<tr><td style="text-align:center">'+(i+1)+'</td><td><b>'+d.unit+'</b></td><td style="text-align:center">'+pen.length+'</td><td style="text-align:center">'+sumR(pen,'freq')+'</td><td style="text-align:center">'+tMj+'</td><td style="text-align:center">'+tKia+'</td><td style="text-align:center">'+tUpl+'</td><td style="text-align:center;font-weight:700">'+(tMj+tKia+tUpl)+'</td></tr>';
  });

  var matRows='';
  if (matSorted.length) {
    matSorted.slice(0,10).forEach(function(pair,i){
      var mat=pair[0], v=pair[1];
      matRows += '<tr><td style="text-align:center">'+(i+1)+'</td><td><b>'+mat+'</b></td><td style="text-align:center">'+v.freq+'</td><td style="text-align:center">'+v.mj+'</td><td style="text-align:center">'+v.kia+'</td><td style="text-align:center">'+v.upl+'</td><td style="text-align:center;font-weight:700">'+(v.mj+v.kia+v.upl)+'</td><td style="font-size:.72rem;color:var(--muted)">'+v.units.join(', ')+'</td></tr>';
    });
  } else {
    matRows = '<tr><td colspan="8" style="text-align:center;color:#999;font-style:italic;padding:1.5rem">Belum ada data.</td></tr>';
  }

  mc().innerHTML =
  '<div class="ph"><div><h2>Rekap Penyuluhan</h2><p>Gabungan seluruh unit/kelurahan</p></div></div>'+
  '<div class="panel"><div class="ph2"><h3>📋 Rekap Frekuensi & Peserta per Unit</h3></div><div class="pb p0"><div class="tw"><table class="ut">'+
    '<thead><tr><th>#</th><th>Unit/Kelurahan</th><th>Jml Materi</th><th>Total Frekuensi</th><th>Kl. Manajemen</th><th>Kl. KIA</th><th>Kl. UPL</th><th>Total Peserta</th></tr></thead>'+
    '<tbody>'+unitRows+'</tbody>'+
    '<tfoot><tr><td colspan="3" style="text-align:right">Total PKM Tambora</td>'+
      '<td style="text-align:center">'+allD.reduce(function(s,d){return s+sumR(d.pen.filter(function(p){return p.materi;}),'freq');},0)+'</td>'+
      '<td style="text-align:center">'+allD.reduce(function(s,d){return s+sumR(d.pen.filter(function(p){return p.materi;}),'mj');},0)+'</td>'+
      '<td style="text-align:center">'+allD.reduce(function(s,d){return s+sumR(d.pen.filter(function(p){return p.materi;}),'kia');},0)+'</td>'+
      '<td style="text-align:center">'+allD.reduce(function(s,d){return s+sumR(d.pen.filter(function(p){return p.materi;}),'upl');},0)+'</td>'+
      '<td style="text-align:center;font-weight:700">'+allD.reduce(function(s,d){var pen=d.pen.filter(function(p){return p.materi;});return s+sumR(pen,'mj')+sumR(pen,'kia')+sumR(pen,'upl');},0)+'</td>'+
    '</tr></tfoot>'+
  '</table></div></div></div>'+
  '<div class="panel" style="margin-top:1rem"><div class="ph2"><h3>📌 10 Materi Terbanyak – Gabungan</h3></div><div class="pb p0"><div class="tw"><table class="ut">'+
    '<thead><tr><th>#</th><th>Materi Edukasi</th><th>Total Frekuensi</th><th>Kl. Manajemen</th><th>Kl. KIA</th><th>Kl. UPL</th><th>Total Peserta</th><th>Unit yang Melakukan</th></tr></thead>'+
    '<tbody>'+matRows+'</tbody>'+
  '</table></div></div></div>';
}

// ═══════════════════════════════════════════════
// REKAP — GERMAS
// ═══════════════════════════════════════════════
function rGermas() {
  var allD=UNITS.map(function(u){return loadUnit(u);});

  var indHeaders='';
  GI.forEach(function(ind){ indHeaders += '<th>'+ind.ic+' Ind '+ind.id+'</th>'; });

  var bodyRows='';
  allD.forEach(function(d){
    var counts=GI.map(function(ind){ var gs=(d.germas||[]).filter(function(g){return g.ind===ind.id;}); return {cnt:gs.length,pes:sumR(gs,'pl')+sumR(gs,'pp')}; });
    var tot=counts.reduce(function(s,c){return s+c.cnt;},0);
    var pes=counts.reduce(function(s,c){return s+c.pes;},0);
    var countCells='';
    counts.forEach(function(c){ countCells += '<td style="text-align:center">'+(c.cnt?c.cnt:'-')+'</td>'; });
    bodyRows += '<tr><td><b>'+d.unit+'</b></td>'+countCells+'<td style="text-align:center;font-weight:700">'+tot+'</td><td style="text-align:center;font-weight:700">'+pes.toLocaleString()+'</td></tr>';
  });

  var footCells='';
  GI.forEach(function(ind){ footCells += '<td style="text-align:center;font-weight:700">'+allD.reduce(function(s,d){return s+(d.germas||[]).filter(function(g){return g.ind===ind.id;}).length;},0)+'</td>'; });

  var indSections='';
  GI.forEach(function(ind){
    var allGsInd=[];
    allD.forEach(function(d){ (d.germas||[]).filter(function(g){return g.ind===ind.id;}).forEach(function(g){ var o=Object.assign({},g); o._unit=d.unit; allGsInd.push(o); }); });
    var sectionBody='';
    if (allGsInd.length) {
      allGsInd.forEach(function(g,i){
        sectionBody += '<tr><td style="text-align:center">'+(i+1)+'</td><td><span class="badge b-blue">'+g._unit.replace('Kel.','').replace('Pustu','').trim()+'</span></td><td>'+(g.tgl||'-')+'</td><td>'+(g.jenis||'-')+'</td><td>'+(g.tatanan||'-')+'</td><td>'+(g.tempat||'-')+'</td><td style="text-align:center">'+(g.pl||0)+'</td><td style="text-align:center">'+(g.pp||0)+'</td><td style="text-align:center;font-weight:700">'+((+g.pl||0)+(+g.pp||0))+'</td><td style="text-align:center">'+((g.ang||0).toLocaleString())+'</td></tr>';
      });
      indSections += '<div class="panel" style="margin-bottom:.8rem"><div class="ph2"><h3>'+ind.ic+' Indikator '+ind.id+': '+ind.nm+'</h3><span class="badge b-green">'+allGsInd.length+' kegiatan gabungan</span></div>'+
      '<div class="pb p0"><div class="tw"><table class="ut"><thead><tr><th>#</th><th>Unit</th><th>Tanggal</th><th>Jenis Kegiatan</th><th>Tatanan</th><th>Tempat</th><th>L</th><th>P</th><th>Total</th><th>Anggaran</th></tr></thead>'+
      '<tbody>'+sectionBody+'</tbody>'+
      '<tfoot><tr><td colspan="6" style="text-align:right">Sub-Total</td><td style="text-align:center">'+sumR(allGsInd,'pl')+'</td><td style="text-align:center">'+sumR(allGsInd,'pp')+'</td><td style="text-align:center">'+(sumR(allGsInd,'pl')+sumR(allGsInd,'pp'))+'</td><td style="text-align:center">'+sumR(allGsInd,'ang').toLocaleString()+'</td></tr></tfoot>'+
      '</table></div></div></div>';
    } else {
      indSections += '<div class="panel" style="margin-bottom:.8rem"><div class="ph2"><h3>'+ind.ic+' Indikator '+ind.id+': '+ind.nm+'</h3><span class="badge b-gray">0 kegiatan gabungan</span></div>'+
      '<div class="pb"><div style="text-align:center;padding:1rem;color:var(--muted);font-style:italic">Tidak ada kegiatan.</div></div></div>';
    }
  });

  mc().innerHTML =
  '<div class="ph"><div><h2>Rekap GERMAS</h2><p>Gabungan seluruh unit/kelurahan</p></div></div>'+
  '<div class="panel"><div class="ph2"><h3>🌿 Rekap GERMAS per Unit per Indikator</h3></div><div class="pb p0"><div class="tw"><table class="ut">'+
    '<thead><tr><th>Unit</th>'+indHeaders+'<th>Total Keg.</th><th>Total Peserta</th></tr></thead>'+
    '<tbody>'+bodyRows+'</tbody>'+
    '<tfoot><tr><td style="font-weight:700">TOTAL PKM TAMBORA</td>'+footCells+
      '<td style="text-align:center;font-weight:700">'+allD.reduce(function(s,d){return s+(d.germas||[]).filter(function(g){return g.tgl;}).length;},0)+'</td>'+
      '<td style="text-align:center;font-weight:700">'+allD.reduce(function(s,d){return s+sumR((d.germas||[]),'pl')+sumR((d.germas||[]),'pp');},0).toLocaleString()+'</td>'+
    '</tr></tfoot>'+
  '</table></div></div></div>'+
  '<div style="margin-top:1rem">'+indSections+'</div>';
}

// ═══════════════════════════════════════════════
// REKAP — CETAK
// ═══════════════════════════════════════════════
function rCetak() {
  var allD=UNITS.map(function(u){return loadUnit(u);});
  var kapus=getKapus(); var kapusNip=getKapusNip();
  var today=new Date().toLocaleDateString('id-ID',{day:'2-digit',month:'long',year:'numeric'});
  var matMap={};
  allD.forEach(function(d){
    d.pen.filter(function(p){return p.materi;}).forEach(function(p){
      if(!matMap[p.materi]) matMap[p.materi]={freq:0,mj:0,kia:0,upl:0};
      matMap[p.materi].freq+=p.freq; matMap[p.materi].mj+=p.mj; matMap[p.materi].kia+=p.kia; matMap[p.materi].upl+=p.upl;
    });
  });
  var matTop=Object.keys(matMap).map(function(k){return [k,matMap[k]];}).sort(function(a,b){return b[1].freq-a[1].freq;}).slice(0,10);
  var totMj=0,totKia=0,totUpl=0,totFreq=0;
  Object.keys(matMap).forEach(function(k){ totMj+=matMap[k].mj; totKia+=matMap[k].kia; totUpl+=matMap[k].upl; totFreq+=matMap[k].freq; });

  var unitRows='';
  allD.forEach(function(d,i){
    var pen=d.pen.filter(function(p){return p.materi;});
    var tMj=sumR(pen,'mj'),tKia=sumR(pen,'kia'),tUpl=sumR(pen,'upl');
    unitRows += '<tr><td class="tc">'+(i+1)+'</td><td>'+d.unit+'</td><td>'+(d.petugas||'—')+'</td><td class="tc">'+pen.length+'</td><td class="tc">'+sumR(pen,'freq')+'</td><td class="tc">'+tMj+'</td><td class="tc">'+tKia+'</td><td class="tc">'+tUpl+'</td><td class="tc"><b>'+(tMj+tKia+tUpl)+'</b></td></tr>';
  });

  var matRows='';
  if (matTop.length) {
    matTop.forEach(function(pair,i){
      var mat=pair[0], v=pair[1];
      matRows += '<tr><td class="tc">'+(i+1)+'</td><td>'+mat+'</td><td class="tc">'+v.freq+'</td><td class="tc">'+v.mj+'</td><td class="tc">'+v.kia+'</td><td class="tc">'+v.upl+'</td><td class="tc"><b>'+(v.mj+v.kia+v.upl)+'</b></td></tr>';
    });
  } else {
    matRows = '<tr><td colspan="7" style="text-align:center;font-style:italic;color:#888">Belum ada data</td></tr>';
  }

  var krisisRows='';
  allD.forEach(function(d,i){
    var tp=sumR((d.pra||[]).filter(function(r){return r.materi;}),'freq'),ts=sumR((d.saat||[]).filter(function(r){return r.materi;}),'freq'),tpa=sumR((d.pasca||[]).filter(function(r){return r.materi;}),'freq');
    krisisRows += '<tr><td class="tc">'+(i+1)+'</td><td>'+d.unit+'</td><td class="tc">'+(tp||'-')+'</td><td class="tc">'+(ts||'-')+'</td><td class="tc">'+(tpa||'-')+'</td><td class="tc"><b>'+(tp+ts+tpa)+'</b></td></tr>';
  });

  var germasIndHeaders='';
  GI.forEach(function(ind){ germasIndHeaders += '<th>'+ind.ic+' Ind '+ind.id+'</th>'; });
  var germasRows='';
  allD.forEach(function(d){
    var counts=GI.map(function(ind){ var gs=(d.germas||[]).filter(function(g){return g.ind===ind.id;}); return {cnt:gs.length,pes:sumR(gs,'pl')+sumR(gs,'pp')}; });
    var tot=counts.reduce(function(s,c){return s+c.cnt;},0);
    var pes=counts.reduce(function(s,c){return s+c.pes;},0);
    var cells='';
    counts.forEach(function(c){ cells += '<td class="tc">'+(c.cnt||'-')+'</td>'; });
    germasRows += '<tr><td>'+d.unit+'</td>'+cells+'<td class="tc"><b>'+tot+'</b></td><td class="tc"><b>'+pes.toLocaleString()+'</b></td></tr>';
  });
  var germasFootCells='';
  GI.forEach(function(ind){ germasFootCells += '<td class="tc"><b>'+allD.reduce(function(s,d){return s+(d.germas||[]).filter(function(g){return g.ind===ind.id;}).length;},0)+'</b></td>'; });

  mc().innerHTML =
  '<div class="ph"><div><h2>Cetak Rekap PKM Tambora</h2></div>'+
  '<div class="pa no-print"><button class="btn btn-teal" onclick="window.print()">🖨️ Cetak / PDF</button></div></div>'+
  '<div class="lap-root">'+
    '<div class="kop"><div class="kop-logo">🏥</div><div class="kop-text"><div class="k1">PEMERINTAH DAERAH KHUSUS IBUKOTA JAKARTA – DINAS KESEHATAN – SUDINKES JAKARTA BARAT</div><div class="k2">PUSAT KESEHATAN MASYARAKAT TAMBORA</div><div class="k3">Jalan Krendang Utara No. 4, Tambora, Jakarta Barat 11260</div><div class="k4">Telp. 021-6313651 / 021-6318822 | www.puskesmastambora.com</div></div></div>'+
    '<div class="lt-block"><div class="lt1">REKAPITULASI LAPORAN PROMOSI KESEHATAN</div><div>PENYULUHAN KESEHATAN & GERMAS</div><div>PUSKESMAS TAMBORA – SELURUH UNIT/KELURAHAN</div></div>'+

    '<div class="lbab">I. REKAP PENYULUHAN PER UNIT</div>'+
    '<table class="ltbl"><thead><tr><th>No.</th><th>Unit/Kelurahan</th><th>Petugas</th><th>Jml Materi</th><th>Total Frekuensi</th><th>Kl. Manajemen</th><th>Kl. KIA</th><th>Kl. UPL</th><th>Total Peserta</th></tr></thead>'+
    '<tbody>'+unitRows+'</tbody>'+
    '<tfoot><tr><td colspan="4" style="text-align:right">TOTAL PKM TAMBORA</td><td class="tc"><b>'+totFreq+'</b></td><td class="tc"><b>'+totMj+'</b></td><td class="tc"><b>'+totKia+'</b></td><td class="tc"><b>'+totUpl+'</b></td><td class="tc"><b>'+(totMj+totKia+totUpl)+'</b></td></tr></tfoot></table>'+

    '<div class="lbab">II. 10 MATERI TERBANYAK – GABUNGAN</div>'+
    '<table class="ltbl"><thead><tr><th>No.</th><th>Materi Edukasi</th><th>Total Frekuensi</th><th>Klaster Manajemen</th><th>Klaster KIA</th><th>Klaster UPL</th><th>Total Peserta</th></tr></thead>'+
    '<tbody>'+matRows+'</tbody></table>'+

    '<div class="lbab">III. REKAP KOMUNIKASI KRISIS PER UNIT</div>'+
    '<table class="ltbl"><thead><tr><th>No.</th><th>Unit</th><th>Pra-Krisis (frek)</th><th>Saat Krisis (frek)</th><th>Pasca-Krisis (frek)</th><th>Total Frekuensi</th></tr></thead>'+
    '<tbody>'+krisisRows+'</tbody>'+
    '<tfoot><tr><td colspan="2" style="text-align:right">Total</td>'+
      '<td class="tc">'+allD.reduce(function(s,d){return s+sumR((d.pra||[]).filter(function(r){return r.materi;}),'freq');},0)+'</td>'+
      '<td class="tc">'+allD.reduce(function(s,d){return s+sumR((d.saat||[]).filter(function(r){return r.materi;}),'freq');},0)+'</td>'+
      '<td class="tc">'+allD.reduce(function(s,d){return s+sumR((d.pasca||[]).filter(function(r){return r.materi;}),'freq');},0)+'</td>'+
      '<td class="tc"><b>'+allD.reduce(function(s,d){return s+sumR((d.pra||[]).filter(function(r){return r.materi;}),'freq')+sumR((d.saat||[]).filter(function(r){return r.materi;}),'freq')+sumR((d.pasca||[]).filter(function(r){return r.materi;}),'freq');},0)+'</b></td>'+
    '</tr></tfoot></table>'+

    '<div class="lbab">IV. REKAP GERMAS PER UNIT PER INDIKATOR</div>'+
    '<table class="ltbl"><thead><tr><th>Unit</th>'+germasIndHeaders+'<th>Total Keg.</th><th>Total Peserta</th></tr></thead>'+
    '<tbody>'+germasRows+'</tbody>'+
    '<tfoot><tr><td><b>TOTAL</b></td>'+germasFootCells+
      '<td class="tc"><b>'+allD.reduce(function(s,d){return s+(d.germas||[]).filter(function(g){return g.tgl;}).length;},0)+'</b></td>'+
      '<td class="tc"><b>'+allD.reduce(function(s,d){return s+sumR((d.germas||[]),'pl')+sumR((d.germas||[]),'pp');},0).toLocaleString()+'</b></td>'+
    '</tr></tfoot></table>'+

    '<div class="lap-ttd">'+
      '<div><div>Mengetahui,</div><div>Kepala Puskesmas Tambora</div><div class="ttd-name">'+kapus+'</div><div class="ttd-nip">NIP. '+kapusNip+'</div></div>'+
      '<div><div>Jakarta, '+today+'</div><div>Pengelola Promkes</div><div class="ttd-name">Nabil Abulfida Alfayadh, SKM</div><div class="ttd-nip">NIP. 199507112025061006</div></div>'+
    '</div>'+
  '</div>';
}

// ═══════════════════════════════════════════════
// PENGATURAN
// ═══════════════════════════════════════════════
function sKapus() {
  mc().innerHTML =
  '<div class="ph"><div><h2>Pengaturan</h2><p>Identitas kepala puskesmas pada laporan</p></div></div>'+
  '<div class="panel"><div class="ph2"><h3>⚙️ Kepala Puskesmas</h3></div><div class="pb">'+
    '<div class="fg2">'+
      '<div class="ff full"><label>Nama Kepala Puskesmas</label><input type="text" id="kp-n" value="'+e(getKapus())+'" placeholder="Nama lengkap + gelar"></div>'+
      '<div class="ff full"><label>NIP Kepala Puskesmas</label><input type="text" id="kp-nip" value="'+e(getKapusNip())+'" placeholder="NIP"></div>'+
    '</div>'+
    '<div class="form-foot"><button class="btn btn-primary" onclick="saveKapus()">💾 Simpan</button></div>'+
  '</div></div>';
}
function saveKapus() {
  var n=vv('kp-n').trim(); if(!n){toast('⚠️ Nama wajib diisi');return;}
  localStorage.setItem('simkes_kapus',n); localStorage.setItem('simkes_kapus_nip',vv('kp-nip'));
  toast('✅ Pengaturan disimpan');
}
function sAkun() {
  var rl={admin:'Admin',promkes:'Promkes',viewer:'Viewer'};
  var rows='';
  ACCOUNTS.forEach(function(a,i){
    rows += '<tr><td>'+(i+1)+'</td><td><b>'+a.n+'</b></td><td><code style="background:#EEF2F7;padding:.12rem .4rem;border-radius:4px;font-size:.76rem">'+a.u+'</code></td><td>'+a.unit+'</td><td><span class="badge b-blue">'+rl[a.role]+'</span></td></tr>';
  });
  mc().innerHTML =
  '<div class="ph"><div><h2>Kelola Akun</h2></div></div>'+
  '<div style="background:#FFF8E1;border:1px solid #FFD54F;color:#7B4F00;border-radius:9px;padding:.65rem .95rem;font-size:.79rem;margin-bottom:.9rem">⚠️ Hanya untuk Administrator.</div>'+
  '<div class="panel"><div class="ph2"><h3>👥 Daftar Akun ('+ACCOUNTS.length+' akun)</h3></div><div class="pb p0"><div class="tw"><table class="ut">'+
    '<thead><tr><th>#</th><th>Nama</th><th>Username</th><th>Unit</th><th>Peran</th></tr></thead>'+
    '<tbody>'+rows+'</tbody>'+
  '</table></div></div></div>';
}

// ═══════════════════════════════════════════════
// MODAL
// ═══════════════════════════════════════════════
function openModal(t,b,f) {
  $('modal-title').textContent=t; $('modal-body').innerHTML=b; $('modal-foot').innerHTML=f;
  $('modal').classList.remove('hidden');
}
function closeModal() { $('modal').classList.add('hidden'); }

// ═══════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════
function $(id) { return document.getElementById(id); }
function mc()  { return $('main'); }
function vv(id){ var el=$(id); return el?el.value:''; }
function e(s)  { return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function toast(msg) { var t=document.createElement('div'); t.className='toast'; t.textContent=msg; document.body.appendChild(t); setTimeout(function(){t.remove();},2600); }
</script>
</body>
</html>
