const firebaseConfig = {
  apiKey: "AIzaSyDKLPbYEEk-KuEvEyZtcdRFtXkb-DcMHA0",
  authDomain: "datasiswa-e6dbc.firebaseapp.com",
  databaseURL: "https://datasiswa-e6dbc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "datasiswa-e6dbc",
  storageBucket: "datasiswa-e6dbc.firebasestorage.app",
  messagingSenderId: "252071892087",
  appId: "1:252071892087:web:f0982af002b6bf92346272"
};

   firebase.initializeApp(firebaseConfig);
   const auth = firebase.auth();
    const db = firebase.firestore();
  
  
  let today = new Date();
  let month = String(today.getMonth() + 1).padStart(2, '0'); // bulan (01–12)
  let year = today.getFullYear(); // tahun
  let tglcek = `${month}-${year}`;
  let blncek=''
  // Set selected di dropdown
  let select = document.getElementById("bulanTahun");
  if (select.querySelector(`option[value="${tglcek}"]`)) {
    select.value = tglcek;
	blncek= select.options[select.selectedIndex].text;
  }
  
   let select1 = document.getElementById("bulanTahun1");
  if (select1.querySelector(`option[value="${tglcek}"]`)) {
    select1.value = tglcek;
	blncek= select1.options[select1.selectedIndex].text;
  }
  
  
  
  function tampilValue(select) {
	blncek=select.options[select.selectedIndex].text;
	 
  tglcek=select.value;
  
}
  
  function isWebView() {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  // Deteksi WebView di Android
  const isAndroidWebView = /\bwv\b/.test(ua) || /Android.*Version\/\d+\.\d+/.test(ua);
  alert(ua)
  return isAndroidWebView ;
}

if (isWebView()) {
  console.log("Aplikasi ini dibuka dari WebView");
} else {
  console.log("Aplikasi ini dibuka dari browser biasa");
}

  
  
  function handleBangunPagi(value) {
    const jamField = document.getElementById('jam_bangun_pagi');
    const alasanField = document.getElementById('alasan_bangun_pagi');
	 

    if (value === 'Ya') {
      jamField.style.display = 'block';
      alasanField.style.display = 'none';
    } else if (value === 'Tidak') {
      jamField.style.display = 'block';
      alasanField.style.display = 'block';
    }
  }
  function handleBeribadah(value) {
  const checkboxDiv = document.getElementById('sholat_checkboxes');
  const alasanDiv = document.getElementById('alasan_beribadah');

  if (value === 'Ya') {
    checkboxDiv.style.display = 'block';
    alasanDiv.style.display = 'none';

    // Reset semua alasan dan centang
    document.querySelectorAll('input[name="sholat"]').forEach(cb => {
      cb.checked = false;
      toggleAlasan(cb.value);
    });
  } else {
    checkboxDiv.style.display = 'none';
    alasanDiv.style.display = 'block';
  }
}

function toggleAlasan(sholat) {
  const cb = document.querySelector(`input[name="sholat"][value="${sholat}"]`);
  const alasanInput = document.querySelector(`input[name="alasan_${sholat}"]`);

  if (cb.checked) {
    alasanInput.style.display = 'none';
    alasanInput.value = ""; // kosongkan
  } else {
    alasanInput.style.display = 'inline-block';
  }
}

function handleOlahraga(value) {
  const formYa = document.getElementById('form_olahraga');
  const formTidak = document.getElementById('alasan_olahraga');

  if (value === 'Ya') {
    formYa.style.display = 'block';
    formTidak.style.display = 'none';
  } else if (value === 'Tidak') {
    formYa.style.display = 'none';
    formTidak.style.display = 'block';
  }
}

  function handleBermasyarakat(value) {
    const yaFields = document.getElementById('bermasyarakat_ya_fields');
    const tidakField = document.getElementById('bermasyarakat_tidak_field');

    if (value === 'Ya') {
      yaFields.style.display = 'block';
      tidakField.style.display = 'none';
    } else if (value === 'Tidak') {
      yaFields.style.display = 'none';
      tidakField.style.display = 'block';
    }
  }
  function handleTidurCepat(value) {
    const yaFields = document.getElementById('tidur_cepat_ya_fields');
    const tidakField = document.getElementById('tidur_cepat_tidak_field');

    if (value === 'Ya') {
      yaFields.style.display = 'block';
      tidakField.style.display = 'none';
    } else if (value === 'Tidak') {
      yaFields.style.display = 'block';
      tidakField.style.display = 'block';
    }
  }
    document.getElementById('kebiasaanForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Cegah reload form

  const form = e.target;
  const formData = new FormData(form);
  const result = {};

  const sholatValues = [];
  form.querySelectorAll('input[name="sholat"]:checked').forEach(cb => {
    sholatValues.push(cb.value);
  });
  result['sholat'] = sholatValues;

  form.querySelectorAll('input, textarea, select').forEach(input => {
    const { name, type } = input;
    if (!name || name === 'sholat') return;

    if (type === 'radio') {
      if (input.checked) result[name] = input.value;
    } else if (type === 'checkbox') {
      // Checkbox selain 'sholat'
      if (!result[name]) result[name] = [];
      if (input.checked) result[name].push(input.value);
    } else {
      result[name] = input.value;
    }
  });
let mn=localStorage.getItem("nama")
     result.nama=mn;
	 let mn1=localStorage.getItem("nis")
	 let jk=localStorage.getItem("jk")
	 let kelas=localStorage.getItem("kelas")
	 let wali1=localStorage.getItem("wali")
	 result.jk=jk;
	 result.kelas=kelas;
	 result.nis=mn1;
     result.nama=mn;
	 result.wali=wali1;
    result.kode=2;
	
	let mkn=document.getElementById("menu_makan_sehat").value;
	result.menu_makan_sehat=mkn;
	send2(result);
  // Tampilkan di layar
 // document.getElementById('outputJSON').textContent = JSON.stringify(result, null, 2);
//console.log(JSON.stringify(result, null, 2))
   
});
   
      let errorMsg = document.getElementById("loginError");
	  var css='';
async function login(ss) {
document.querySelector("#tabelSiswa tbody").innerHTML = '';	
 css=ss;
  let username = document.getElementById("username").value.trim();
      let password = document.getElementById("password").value.trim();
	 if (username && password) {
    ss.innerHTML = '<i class="fas fa-spinner fa-spin" style="font-size: 25px; margin-right: 10px; color: white;"></i>Login';
    ss.disabled=true;
	 
	
	try {
    const userCred = await auth.signInWithEmailAndPassword(username+"@gmail.com", password);
    const uid = userCred.user.uid; // kalau sukses, uid pasti ada
	 send1(username,password)
    //console.log("✅ Login sukses. UID:", uid);
} catch (error) {
	localStorage.removeItem("nama");
	localStorage.removeItem("wali");
		localStorage.removeItem("nis");
			localStorage.removeItem("sbg");
        errorMsg.style.display = "block";
		css.disabled=false;
		css.innerHTML = ' <i class="fas fa-sign-in-alt"></i> Login';
		 setTimeout(()=>{errorMsg.style.display = "none";},2000)
    console.error("❌ Login gagal:", error.message);
}

	 
      
      // Login sederhana
      }
    }
	let isup=0;
	function logout() {
		
		
		
   today = new Date();
   month = String(today.getMonth() + 1).padStart(2, '0'); // bulan (01–12)
   year = today.getFullYear(); // tahun
    tglcek = `${month}-${year}`;

  // Set selected di dropdown
  
  if (select.querySelector(`option[value="${tglcek}"]`)) {
    select.value = tglcek;
	blncek= select.options[select.selectedIndex].text;
  }
  
   
  if (select1.querySelector(`option[value="${tglcek}"]`)) {
    select1.value = tglcek;
	blncek= select1.options[select1.selectedIndex].text;
  }
  		
		isup=0;
		document.getElementById("jud").innerText='Daftar Siswa Perwalian Anda'
	 document.body.style.overflow = "scroll"
	document.getElementsByClassName("container1")[0].style.marginTop="70px"
  // Sembunyikan form utama dan tampilkan login kembali
  document.getElementById("mainForm").style.display = "none";
   document.getElementById("mainForm1").style.display = "none";
  document.getElementById("loginCard").style.display = "block";
  localStorage.removeItem("nama");
		localStorage.removeItem("nis");
		localStorage.removeItem("wali");
		localStorage.removeItem("sbg");
		localStorage.removeItem("jk");
		localStorage.removeItem("kelas");
		
  // Kosongkan form login
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

  // Kosongkan hasil output JSON jika perlu
  document.getElementById("outputJSON").textContent = "";
  
  auth.signOut()
    .then(() => {
       // console.log("✅ Berhasil logout");
    })
    .catch((error) => {
        console.error("❌ Gagal logout:", error);
    });
  
}

let glink=window.atob('aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J4UFhWdUNSVTQyMVQwUE5qeS16VndhcFhvVFFaaXU3SzVUZmRWLUNKMmEtTU92czdfS09IUVIzNnB2eWh4UGxRVmd0QS9leGVj')
function send1(user,pass){
  errorMsg.style.display = "none";
   
db.collection("users")
  .where("nis", "==", user)
  .where("pass", "==", pass)
  .get()
  .then((querySnapshot) => {
    if (querySnapshot.empty) {
     // console.log("Data tidak ditemukan atau password salah");
	    localStorage.removeItem("nama");
		localStorage.removeItem("nis");
			localStorage.removeItem("sbg");
        errorMsg.style.display = "block";
		css.disabled=false;
		css.innerHTML = ' <i class="fas fa-sign-in-alt"></i> Login';
		 
		 setTimeout(()=>{errorMsg.style.display = "none";},2000)
    } else {
      querySnapshot.forEach((doc) => {
       // console.log("Nama siswa:", doc.data().nama);
		
		
									  
								  document.getElementsByClassName("container1")[0].style.marginTop="0px"
									 css.disabled=false;
									 if(doc.data().sbg==1){
									document.getElementById("loginCard").style.display = "none";
									document.getElementById("mainForm").style.display = "block";
									document.getElementById("logoutBtn").innerHTML=`<div style="display: flex; justify-content: space-between; align-items: center; 
            background: #1d3557;
            padding: 3px 3px; 
            border-radius: 10px; 
            color: white; font-family: 'Segoe UI', sans-serif;">
			  <span style="font-size: 14px; display:flex; align-items:center; gap:8px;">
				<i class="fas fa-user-circle" style="font-size:22px;"></i>
				<span>
				  Selamat Datang <br>
				  <b style="font-size: 12px;">${doc.data().nama}</b>
				</span>
			  </span>
			  
			  
			   <a href="#" onclick="openPasswordModal()" style="color: white; 
						text-decoration: none; 
						background: #2a476f;
						padding: 6px 14px; 
						border-radius: 6px; 
						font-size: 12px; 
						display:flex; 
						align-items:center; 
									box-shadow: 0 4px 6px rgba(0,0,0,0.1);
						gap:6px;
						transition: 0.3s;">
				<i class="fas fa-key"></i> GPass
			  </a>
			  
			  
			  
			  
			  
			  
			  
			  <a href="#" onclick="logout()" style="color: white; 
						text-decoration: none; 
						background: #2a476f;
						padding: 6px 14px; 
						border-radius: 6px; 
						font-size: 12px; 
						display:flex; 
						align-items:center; 
									box-shadow: 0 4px 6px rgba(0,0,0,0.1);
						gap:6px;
						transition: 0.3s;">
				<i class="fas fa-sign-out-alt"></i> Logout
			  </a>
			</div>`
							
									}
									  if(doc.data().sbg==2 || doc.data().sbg==3){  
							 
								if(doc.data().sbg==3){document.getElementById("jud").innerText='Daftar Siswa'}
								else{document.getElementById("jud").innerText='Daftar Siswa Perwalian Anda'}		  
									document.getElementById("loginCard").style.display = "none";
									document.getElementById("mainForm1").style.display = "block";
									 document.getElementById("logoutBtn1").innerHTML=`<div style="display: flex; justify-content: space-between; align-items: center; 
            background: #1d3557;
            padding: 3px 3px; 
            border-radius: 10px; 
            color: white; font-family: 'Segoe UI', sans-serif;">
			  <span style="font-size: 14px; display:flex; align-items:center; gap:8px;">
				<i class="fas fa-user-circle" style="font-size:22px;"></i>
				<span>
				  Selamat Datang <br>
				  <b style="font-size: 12px;">${doc.data().nama}</b>
				</span>
			  </span>
			   <a href="#" onclick="openPasswordModal()" style="color: white; 
						text-decoration: none; 
						background: #2a476f;
						padding: 6px 14px; 
						border-radius: 6px; 
						font-size: 12px; 
						display:flex; 
						align-items:center; 
									box-shadow: 0 4px 6px rgba(0,0,0,0.1);
						gap:6px;
						transition: 0.3s;">
				<i class="fas fa-key"></i> GPass
			  </a>
			  <a href="#" onclick="logout()" style="color: white; 
						text-decoration: none; 
						background: #2a476f;
						padding: 6px 14px; 
						border-radius: 6px; 
						font-size: 12px; 
						display:flex; 
						align-items:center; 
									box-shadow: 0 4px 6px rgba(0,0,0,0.1);
						gap:6px;
						transition: 0.3s;">
				<i class="fas fa-sign-out-alt"></i> Logout
			  </a>
			</div>`
							 
								   send3(doc.data().nama,doc.data().sbg)
								}
									
									errorMsg.style.display = "none";
									localStorage.setItem("nama", doc.data().nama);
									localStorage.setItem("nis",doc.data().nis);
									localStorage.setItem("sbg", doc.data().sbg);
									localStorage.setItem("kelas", doc.data().kelas);
									localStorage.setItem("jk", doc.data().jk)
									localStorage.setItem("wali", doc.data().wali)
								 
									
									css.innerHTML = ' <i class="fas fa-sign-in-alt"></i> Login';
									
									
									

								  
		
		 
		
      });
    }
  })
  .catch((error) => {css.disabled=false;
	css.innerHTML = ' <i class="fas fa-sign-in-alt"></i> Login';
   // console.error("Error mencari data:", error);
  });

  
   
};

if(localStorage.getItem("nama") && localStorage.getItem("nis") && localStorage.getItem("sbg")==1 ){
document.getElementsByClassName("container1")[0].style.marginTop="0px"
let mn=localStorage.getItem("nama")
document.getElementById("logoutBtn").innerHTML=`<div style="display: flex; justify-content: space-between; align-items: center; 
            background: #1d3557;
            padding: 3px 3px; 
            border-radius: 10px; 
            color: white; font-family: 'Segoe UI', sans-serif;">
			  <span style="font-size: 14px; display:flex; align-items:center; gap:8px;">
				<i class="fas fa-user-circle" style="font-size:22px;"></i>
				<span>
				  Selamat Datang <br>
				  <b style="font-size: 12px;">${mn}</b>
				</span>
			  </span>
			   <a href="#" onclick="openPasswordModal()" style="color: white; 
						text-decoration: none; 
						background: #2a476f;
						padding: 6px 14px; 
						border-radius: 6px; 
						font-size: 12px; 
						display:flex; 
						align-items:center; 
									box-shadow: 0 4px 6px rgba(0,0,0,0.1);
						gap:6px;
						transition: 0.3s;">
				<i class="fas fa-key"></i> GPass
			  </a>
			  <a href="#" onclick="logout()" style="color: white; 
						text-decoration: none; 
						background: #2a476f;
						padding: 6px 14px; 
						border-radius: 6px; 
						font-size: 12px; 
						display:flex; 
						align-items:center; 
									box-shadow: 0 4px 6px rgba(0,0,0,0.1);
						gap:6px;
						transition: 0.3s;">
				<i class="fas fa-sign-out-alt"></i> Logout
			  </a>
			</div>`
document.getElementById("loginCard").style.display = "none";
        document.getElementById("mainForm").style.display = "block";
		 
}

if(localStorage.getItem("nama") && localStorage.getItem("nis") && ((localStorage.getItem("sbg")==2) || localStorage.getItem("sbg")==3 )){
document.getElementsByClassName("container1")[0].style.marginTop="0px"
let mn=localStorage.getItem("nama")
let sb=localStorage.getItem("sbg")
 document.getElementById("logoutBtn1").innerHTML=`<div style="display: flex; justify-content: space-between; align-items: center; 
            background: #1d3557;
            padding: 3px 3px; 
            border-radius: 10px; 
            color: white; font-family: 'Segoe UI', sans-serif;">
			  <span style="font-size: 14px; display:flex; align-items:center; gap:8px;">
				<i class="fas fa-user-circle" style="font-size:22px;"></i>
				<span>
				  Selamat Datang <br>
				  <b style="font-size: 12px;">${mn}</b>
				</span>
			  </span>
			  
			   <a href="#" onclick="openPasswordModal()" style="color: white; 
						text-decoration: none; 
						background: #2a476f;
						padding: 6px 14px; 
						border-radius: 6px; 
						font-size: 12px; 
						display:flex; 
						align-items:center; 
									box-shadow: 0 4px 6px rgba(0,0,0,0.1);
						gap:6px;
						transition: 0.3s;">
				<i class="fas fa-key"></i> GPass
			  </a>
			  <a href="#" onclick="logout()" style="color: white; 
						text-decoration: none; 
						background: #2a476f;
						padding: 6px 14px; 
						border-radius: 6px; 
						font-size: 12px; 
						display:flex; 
						align-items:center; 
									box-shadow: 0 4px 6px rgba(0,0,0,0.1);
						gap:6px;
						transition: 0.3s;">
				<i class="fas fa-sign-out-alt"></i> Logout
			  </a>
			</div>`
  
       send3(mn,sb)
	 
document.getElementById("loginCard").style.display = "none";
        document.getElementById("mainForm1").style.display = "block";
}
//eval(atob('aWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gIjdrLnNtcG45c2luamFpLnNjaC5pZCIpIHsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTCA9ICI8Y2VudGVyPjxoMT5Ba3NlcyBkaXRvbGFrPC9oMT48L2NlbnRlcj4iOyB9'))
function send2(data){
	
	
	 const tanggal = data.tanggal_bangun_pagi;
  
   
	
  var bagian = tanggal.split("-"); // ["2025", "08", "07"]
  var tglFormatBaru = bagian[2] + "-" + bagian[1] + "-" + bagian[0];
   var tglFormatBaru2 = bagian[0] + "-" + bagian[1] + "-" + bagian[2];


  const nis1 = data.nis;
 
 


                        let tgl6 = tglFormatBaru; // misal "01-08-2025"
						let parts6 = tgl6.split("-");
						let bulanTahun6 = `${parts6[1]}-${parts6[2]}`;

  
var nama1 = data.nama;

  
   var jk1 = data.jk;
   var kls1 = data.kelas;
    var bangun_pagi1 = (data.bangun_pagi === "Ya") ? 'Ya jam : '+data.jam_bangun_pagi :  'Tidak Jam : '+data.jam_bangun_pagi+' Alasan '+data.alasan_bangun_pagi;

    var ket = '';
ket += data.alasan_Subuh   ? 'Subuh tidak, alasan: '   + data.alasan_Subuh + '. '   : '';
ket += data.alasan_Dzuhur  ? 'Dzuhur tidak, alasan: '  + data.alasan_Dzuhur + '. '  : '';
ket += data.alasan_Ashar   ? 'Ashar tidak, alasan: '   + data.alasan_Ashar + '. '   : '';
ket += data.alasan_Maghrib ? 'Maghrib tidak, alasan: ' + data.alasan_Maghrib + '. ' : '';
ket += data.alasan_Isya    ? 'Isya tidak, alasan: '    + data.alasan_Isya + '. '    : '';


     var beribadah1 = (data.beribadah === "Ya") ? 'Ya Shalat : '+data.sholat+", "+ket :  'Tidak Alasan : '+data.alasan_beribadah;
     
    var berolahraga1 = (data.berolahraga === "Ya") ? 'Ya Jam Mulai : '+data.jam_mulai_olahraga+", Jam Selesai : "+data.jam_selesai_olahraga+' Jenis olahraga '+data.jenis_olahraga :  'Tidak Alasan : '+data.alasan_olahraga;

   var judul_buku1 = (data.gemar_belajar == "Ya")  ? "Ya Judul : "+data.judul_buku+", informasi yg didapat : "+data.informasi_didapat : "Tidak"
       
   var bermasyarakat1 = (data.bermasyarakat === "Ya") ? 'Ya Kegiatan : '+data.kegiatan_bermasyarakat+", Persaaan "+data.perasaan_bermasyarakat : 'Tidak alasan '+data.alasan_bermasyarakat;
     
 var tidur_cepat1 = (data.tidur_cepat === "Ya") ? 'Ya Jam tidur : '+data.jam_tidur :  'Tidak Jam tidur :'+data.jam_tidur+'  Alasan : '+data.alasan_tidur_cepat;

   var menu_makan_sehat1 = (data.makan_sehat == "Ya") ? 'Ya : '+data.menu_makan_sehat :  'Tidak';
var gagal=0;	





let now = new Date();

    // Format YYYY-MM-DD
    let tahun = now.getFullYear();
    let bulan = String(now.getMonth() + 1).padStart(2, '0'); 
    let tanggal2 = String(now.getDate()).padStart(2, '0'); 
    let tglFormat = `${tahun}-${bulan}-${tanggal2}`;

    // Format HH:MM
    let jam = String(now.getHours()).padStart(2, '0');
    let menit = String(now.getMinutes()).padStart(2, '0');
    let jamFormat = `${jam}:${menit}`;
  
	
  document.getElementById("kdata").disabled=true;
 document.getElementById("kdata").innerHTML='<i class="fas fa-spinner fa-spin" style="font-size: 25px; margin-right: 10px; color: white;"></i>Kirim Jawaban';
  	
	db.collection("datasiswa")
  .where("tgl", "==",tglFormatBaru )
  .where("nis", "==", nis1)
  .get()
  .then(querySnapshot => {
    if (!querySnapshot.empty) {
		  document.getElementsByClassName("container1")[0].style.marginTop="0px"
	//alert(xhr.responseText)
	 document.getElementById("loadingModal").style.display = "block";
	document.getElementById('tmodal').innerHTML=`<div class="pesan-box">
    <i class="fas fa-times-circle"></i>
    <p>Gagal menyimpan, data tanggal ${tglFormatBaru} sudah ada </p>
  </div> `
  document.body.style.overflow = "hidden"
    document.getElementById("kdata").innerHTML='<i class="fas fa-paper-plane" style="margin-right:7px"></i> Kirim Jawaban';
     document.getElementById("kdata").disabled=false;
    //  console.log("⚠️ Data sudah ada, tidak disimpan.");
    } else {
      db.collection("datasiswa").add({
          tgl: tglFormatBaru ,
		  tglsort: tglFormatBaru2,
		  bulan:bulanTahun6,
		  tglinput:tglFormat,
		  jaminput:jamFormat,
		  "7k1": (data.bangun_pagi === "Ya") ? 1:0,
		  "7k2": (data.beribadah === "Ya") ? 1:0,
		  "7k3": (data.berolahraga === "Ya") ? 1:0,
		  "7k4":  (data.makan_sehat == "Ya") ? 1:0,
		  "7k5":  (data.gemar_belajar == "Ya") ? 1:0,
		  "7k6":  (data.bermasyarakat === "Ya") ?  1:0,
		  "7k7":  (data.tidur_cepat === "Ya") ?  1:0,
		  nis: nis1,
		  nama:nama1,
		  jk:jk1,
		  kelas:kls1,
		  wali:data.wali,
		  bagunpagi:bangun_pagi1 ,
		  beribadah:beribadah1,
		  olahraga:berolahraga1,
		  makansehat:menu_makan_sehat1,
		  belajar:judul_buku1 ,
		  bermasyarakat: bermasyarakat1,
		  tidurcepat:tidur_cepat1,
		  ortu:0,
		  guru:0
      })
      .then(() => {
		 
	  
		  // console.log("Data berhasil ditambahkan dengan ID:", docRef.id);
       document.getElementsByClassName("container1")[0].style.marginTop="0px"
	//alert(xhr.responseText)
	 document.getElementById("loadingModal").style.display = "block";
	document.getElementById('tmodal').innerHTML=`<div class="pesan-box">
    <i class="fas fa-circle-check"></i>
    <p>Data Berhasil disimpan </p>
  </div> `
  document.body.style.overflow = "hidden"
    document.getElementById("kdata").innerHTML='<i class="fas fa-paper-plane" style="margin-right:7px"></i> Kirim Jawaban';
     document.getElementById("kdata").disabled=false;
      //  console.log("✅ Data berhasil ditambahkan.");
		
	setTimeout(()=>{
		
			  gagal=1;
		 
		 if (gagal==1){
	 
	 let datasiswa77 = {
					  "7k1": (data.bangun_pagi === "Ya") ? 1 : 0,
					  "7k2": (data.beribadah === "Ya") ? 1 : 0,
					  "7k3": (data.berolahraga === "Ya") ? 1 : 0,
					  "7k4": (data.makan_sehat === "Ya") ? 1 : 0,
					  "7k5": (data.gemar_belajar === "Ya") ? 1 : 0,
					  "7k6": (data.bermasyarakat === "Ya") ? 1 : 0,
					  "7k7": (data.tidur_cepat === "Ya") ? 1 : 0,
					}

						let tgl = tglFormatBaru; // misal "01-08-2025"
						let parts = tgl.split("-");
						let bulanTahun = `${parts[1]}-${parts[2]}`;

						// Panggil fungsi update
					updateKebiasaanBulanan(kls1, bulanTahun, datasiswa77);
		
		
}
		 
		
		
		
		
		
		
		
		
	},200)	
		
      })
      .catch(error => {
        console.error("❌ Error menambahkan data:", error);
		 document.getElementById("kdata").disabled=false;
   document.getElementById("kdata").innerHTML='<i class="fas fa-paper-plane" style="margin-right:7px"></i>  Kirim Jawaban';
    document.getElementById("loadingModal").style.display = "block";
	document.getElementById('tmodal').innerHTML="<b>Tidak dapat terhubung ke server</b>"
  
      });
    }
  })
  .catch(error => {
	   document.getElementById("kdata").innerHTML='<i class="fas fa-paper-plane" style="margin-right:7px"></i>  Kirim Jawaban';
    console.error("❌ Error mencari data:", error);
  });
	
 
	 
};
function closeModal() {
    document.body.style.overflow = "scroll"	
  document.getElementById("loadingModal").style.display = "none";
}

let mn1=localStorage.getItem("nama")
 
 var bdata='';

function send3(data,sbg) {
 
  document.getElementById("lod").style.display = "block";

  

  let query;
   
  if (sbg === "2") {
    query = db.collection("users").where("wali", "==", data);
  } else if (sbg === "3") {
    query = db.collection("users").where("sbg", "==", "1");
  } else {
   // console.warn("Peran (sbg) tidak dikenali:", sbg);
    document.getElementById("lod").style.display = "none";
    return;
  }

  query.get()
    .then((querySnapshot) => {
      if (querySnapshot.empty) {
	   document.getElementById("lod").style.display = "none";
     //   console.log("⚠️ Data tidak ditemukan");
      } else {
        document.getElementById("kdata3").style.display = "none";
        document.getElementById("lod").style.display = "none";

        const tbody = document.querySelector("#tabelSiswa tbody");
        let ct = "";
        let nom = 1;

        querySnapshot.forEach((doc) => {
          let d = doc.data();
          ct += `<tr>
            <td style='text-align:center'>${nom++}</td>
            <td style='text-align:center'>${d.nis}</td>
            <td >${d.nama}</td>
            <td style='text-align:center'>${d.jk}</td>
            <td style='text-align:center'>${d.kelas}</td>
          </tr>`;
        });

        tbody.innerHTML = ct;

        // Pasang event listener klik per baris
        tbody.querySelectorAll("tr").forEach(row => {
          row.addEventListener("click", function () {
            const nis2 = this.cells[1].textContent;
			 const cell2 = this.cells[1]
            rekap(nis2,cell2);
          });
        });
      }
    })
    .catch((error) => {
      console.error("❌ Error mengambil data:", error);
      document.getElementById("lod").style.display = "none";
    });
}

 const modal1 = document.getElementById("rekapModal");
 const closeBtn = document.querySelector(".close");
 closeBtn.onclick = function () {
      modal1.style.display = "none";
	  document.body.style.overflow = ""
    };
	const modal2 = document.getElementById("rekapModal2");
const closeBtn1 = document.querySelector(".close1");
 closeBtn1.onclick = function () {
      modal2.style.display = "none";
	  document.body.style.overflow = ""
    };
function rekap(niss,gar){
	let gg=gar.innerText;
	 gar.innerHTML=`<i class="fas fa-spinner fa-spin" style="font-size: 15px; margin-right: 1px; color: black;"></i> ${gg}`
 let ssbg=localStorage.getItem("sbg");
document.body.style.overflow = "hidden"
 const rekapBody = document.getElementById("rekapBody");
var ct=''
var mnn="";
var cpp=0;
var num=0;
 
db.collection("datasiswa")
  .where("nis", "==", niss)
  .where("bulan", "==", tglcek)
  .get()
  .then(querySnapshot => {
    if (querySnapshot.empty) {
     // console.log("⚠️ Tidak ada data dengan nis=2622");
	 gar.innerHTML=gg;
	  document.getElementById("loadingModal").style.display = "block";
	document.getElementById('tmodal').innerHTML=`
	<div class="pesan-box">
    <i class="fas fa-database"></i>
    <p>Data siswa bulan ${blncek} tidak ditemukan </p>`
 
    } else {
		var nom=1;
		var mnn='';
      querySnapshot.forEach(doc => {
       // console.log(`📄 ID: ${doc.id}`, doc.data());
		mnn=doc.data().nama;
		let gr=''; 
					 if (ssbg==2){
					   gr = (doc.data().guru == 0)
					  ? `<button class='btn' onclick='verifikasi(this, 2, "${doc.data().tgl}", "${doc.data().nis}")' style='font-size:13px;padding:5px'>
						  <i class='fa-solid fa-user'></i> Verifikasi
						 </button>`
					  : `<span class='success'><i class='fa-solid fa-circle-check' style='font-size: 20px'></i></span>`;
					  
					  }
					  else {
						  gr=(doc.data().guru ==0) ? "<button disabled class='btn' style='font-size:13px;padding:5px;background:#cfd1bd'><i class='fa-solid fa-user'  ></i> Verifikasi</button>" : "<span class='success'><i class='fa-solid fa-circle-check' style='font-size: 20px'></i></span>"
						  
					  }

					   let ort=(doc.data().ortu==0) ? "<button disabled class='btn' style='font-size:13px;padding:5px;background:#cfd1bd'><i class='fa-solid fa-user'  ></i> Verifikasi</button>" : "<span class='success'><i class='fa-solid fa-circle-check' style='font-size: 20px'></i></span>"
						  ct+="<tr><td style='text-align:center'>"+(nom++)+"</td><td class='nowrap' style='text-align:center;width:100px'>"+doc.data().tgl+"</td><td>"+doc.data().bagunpagi+"</td><td style='text-align:center'>"+doc.data().beribadah+"</td><td style='text-align:center'>"+doc.data().olahraga+"</td><td style='text-align:center'>"+doc.data().makansehat+"</td><td style='text-align:center'>"+doc.data().belajar+"</td><td style='text-align:center'>"+doc.data().bermasyarakat+"</td><td style='text-align:center'>"+doc.data().tidurcepat+"</td><td style='text-align:center;width:100px'>"+ort+"</td><td style='text-align:center;width:100px'>"+gr+"</td></tr>"
								   
  
      });
	  gar.innerHTML=gg;
	  rekapBody.innerHTML=ct; 
	  sortTableByDate()
	document.getElementById("pp").innerHTML=`<br><div class="g5" style="margin-top:3px;padding:5px 20px 5px 20px;font-size:18px;border-radius:10px;color:white">Rekap Bulan ${blncek} | ${mnn}</div>`;
    modal1.style.display = "block";
	  
	 
	  const kebiasaanNames = {
    "7k1": "1. Bangun Pagi",
    "7k2": "2. Beribadah",
    "7k3": "3. Berolahraga",
    "7k4": "4. Makan Sehat",
    "7k5": "5. Gemar Belajar",
    "7k6": "6. Bermasyarakat",
    "7k7": "7. Tidur Cepat"
  };	
	    let totalK = { "7k1": 0, "7k2": 0, "7k3": 0, "7k4": 0, "7k5": 0, "7k6": 0, "7k7": 0 };
      let jumlahSiswa = 0;

      querySnapshot.forEach(doc => {
        const data = doc.data();
        for (let k in totalK) {
          totalK[k] += data[k] || 0;
        }
        jumlahSiswa++;
      });

     
       var gabh="";
      for (let k in totalK) {
        let persen = jumlahSiswa > 0 ? ((totalK[k] / jumlahSiswa) * 100).toFixed(0) : 0;

        const radius = persen == 100 ? "25px" : "25px 0 0 25px";
        

       gabh+= `
          <div class="progress-item">
            <div style="margin-top:10px" class="label">${kebiasaanNames[k]}</div>
            <div class="progress-container">
              <div class="progress-bar" style="width:${persen}%; background:linear-gradient(90deg, #f6d365, #fda085); color:white;border-radius:${radius}">
                ${persen}%
              </div>
            </div>
          </div>
        `;
	  }
	  
	
	 
	 let mmk=document.getElementById("prog")
	     mmk.innerHTML=gabh+'<br><br>'
	  
	  
	 
    }
  })
  .catch(error => {
	  gar.innerHTML=gg;
    console.error("❌ Error mencari data:", error);
  });




   
}


function rekap_g(){
	 
	 
  document.getElementById("kdata7").innerHTML='<i class="fas fa-spinner fa-spin" style="font-size: 25px; margin-right: 10px; color: white;"></i> Mencari data';
  
 let ssbg=localStorage.getItem("sbg");
 let nms=localStorage.getItem("nama");
document.body.style.overflow = "hidden"
 const rekapBody = document.getElementById("rekapBody");
var ct=''
var mnn="";
var cpp=0;
var num=0;
 
db.collection("datasiswa")
  .where("wali", "==", nms)
  .where("bulan", "==", tglcek)
  .where("guru", "==", 0)
  .get()
  .then(querySnapshot => {
    if (querySnapshot.empty) {
     // console.log("⚠️ Tidak ada data dengan nis=2622");
	   document.getElementById("kdata7").innerHTML=` <i class="fas fa-check-circle" ></i>
      <div class="text-block">
        Verifikasi Data
        <span id="val">Validasi data siswa</span>
      </div>`
	  document.getElementById("loadingModal").style.display = "block";
	 
	document.getElementById('tmodal').innerHTML=`
	<div class="pesan-box">
    <i class="fas fa-database"></i>
    <p>Tidak ada data siswa yang mau di verifikasi bulan ${blncek} </p>`;
	document.body.style.overflow = "hidden"
    } else {
		var nom=1;
		var mnn='';
      querySnapshot.forEach(doc => {
       // console.log(`📄 ID: ${doc.id}`, doc.data());
		mnn=doc.data().nama;
		let gr=''; 
					 if (ssbg==2){
					   gr = (doc.data().guru == 0)
					  ? `<button class='btn' onclick='verifikasi(this, 2, "${doc.data().tgl}", "${doc.data().nis}")' style='font-size:13px;padding:5px'>
						  <i class='fa-solid fa-user'></i> Verifikasi
						 </button>`
					  : `<span class='success'><i class='fa-solid fa-circle-check' style='font-size: 20px'></i></span>`;
					  
					  }
					  else {
						  gr=(doc.data().guru ==0) ? "<button disabled class='btn' style='font-size:13px;padding:5px;background:#cfd1bd'><i class='fa-solid fa-user'  ></i> Verifikasi</button>" : "<span class='success'><i class='fa-solid fa-circle-check' style='font-size: 20px'></i></span>"
						  
					  }

					   let ort=(doc.data().ortu==0) ? "<button disabled class='btn' style='font-size:13px;padding:5px;background:#cfd1bd'><i class='fa-solid fa-user'  ></i> Verifikasi</button>" : "<span class='success'><i class='fa-solid fa-circle-check' style='font-size: 20px'></i></span>"
						  ct+="<tr><td style='text-align:center'>"+(nom++)+"</td><td class='nowrap' style='text-align:center;width:100px'>"+doc.data().tgl+"<br>"+doc.data().nama+"</td><td>"+doc.data().bagunpagi+"</td><td style='text-align:center'>"+doc.data().beribadah+"</td><td style='text-align:center'>"+doc.data().olahraga+"</td><td style='text-align:center'>"+doc.data().makansehat+"</td><td style='text-align:center'>"+doc.data().belajar+"</td><td style='text-align:center'>"+doc.data().bermasyarakat+"</td><td style='text-align:center'>"+doc.data().tidurcepat+"</td><td style='text-align:center;width:100px'>"+ort+"</td><td style='text-align:center;width:100px'>"+gr+"</td></tr>"
								   
  
      });
	  document.getElementById("kdata7").innerHTML=` <i class="fas fa-check-circle" ></i>
      <div class="text-block">
        Verifikasi Data
        <span id="val">Validasi data siswa</span>
      </div>`
	  rekapBody.innerHTML=ct; 
	  sortTableByDate();
	  document.getElementById("pp").innerHTML=`<br><div class="g5" style="margin-top:3px;padding:5px 18px 5px 20px;font-size:20px;border-radius:10px;color:white">Verifikasi Bulan ${blncek}</div>`;
      modal1.style.display = "block";
	   let mmk=document.getElementById("prog")
	     mmk.innerHTML='<br><br>'
    }
  })
  .catch(error => {
	   document.getElementById("kdata7").innerHTML=` <i class="fas fa-check-circle" ></i>
      <div class="text-block">
        Verifikasi Data
        <span id="val">Validasi data siswa</span>
      </div>`
    console.error("❌ Error mencari data:", error);
  });




   
}


var  bdata='';
 function sendp(){
	 
	  let dnis=localStorage.getItem("nis");
	 
	 
	 
 
  document.getElementById("kdata2").disabled=true;
  document.getElementById("kdata2").innerHTML='<i class="fas fa-spinner fa-spin" style="font-size: 25px; margin-right: 10px; color: white;"></i> Mencari data';
  
  db.collection("datasiswa")
  .where("nis", "==", dnis)
  .where("bulan", "==", tglcek)
  .get()
  .then(querySnapshot => {
    if (querySnapshot.empty) {
		document.getElementById("kdata2").disabled=false;
    //  console.log("⚠️ Tidak ada data dengan NIS 2422");
	  document.getElementById("kdata2").innerHTML=` <i class="fas fa-user-graduate"></i>
      <div class="text-block">
      Lihat Data & Verifikasi Ortu/Wali
        <span id="val">Validasi data oleh orang tua/wali siswa</span>
      </div>`
	  document.getElementById("loadingModal").style.display = "block";
	  document.getElementById('tmodal').innerHTML=`
	  <div class="pesan-box">
    <i class="fas fa-database"></i>
    <p>Tidak ada data siswa bulan ${blncek}</p>
  </div> `;
  document.body.style.overflow = "hidden"
    } else {
     
		
													
								 
									 document.getElementById("kdata2").disabled=false;
								 document.getElementById("kdata2").innerHTML=` <i class="fas fa-user-graduate"></i>
      <div class="text-block">
      Lihat Data & Verifikasi Ortu/Wali
        <span id="val">Validasi data oleh orang tua/wali siswa</span>
      </div>`
									 
								 
									 document.body.style.overflow = "hidden"
								 const rekapBody = document.getElementById("rekapBody");
								var ct=''
								var mnn="";
								var cpp=0;
								 var nom=1;
		querySnapshot.forEach(doc => {
       // console.log("📄 ID:", doc.id, "Data:", doc.data()); 
							 
								 mnn=doc.data().nama;
								   
							 
								  cpp=1;
								   let ort = (doc.data().ortu == 0)
								  ? `<button class='btn' onclick='verifikasi(this, 1, "${doc.data().tgl}", "${doc.data().nis}")' style='font-size:13px;padding:5px'>
									  <i class='fa-solid fa-user'></i> Verifikasi
									 </button>`
								  : `<span class='success'><i class='fa-solid fa-circle-check' style='font-size: 20px'></i></span>`;

								   let gr=(doc.data().guru==0) ? "<button disabled class='btn' style='font-size:13px;padding:5px;background:#cfd1bd'><i class='fa-solid fa-user'  ></i> Verifikasi</button>" : "<span class='success'><i class='fa-solid fa-circle-check' style='font-size: 20px'></i></span>"
									  ct+="<tr><td style='text-align:center'>"+(nom++)+"</td><td class='nowrap' style='text-align:center;width:100px'>"+doc.data().tgl+"</td><td>"+doc.data().bagunpagi+"</td><td style='text-align:center'>"+doc.data().beribadah+"</td><td style='text-align:center'>"+doc.data().olahraga+"</td><td style='text-align:center'>"+doc.data().makansehat+"</td><td style='text-align:center'>"+doc.data().belajar+"</td><td style='text-align:center'>"+doc.data().bermasyarakat+"</td><td style='text-align:center'>"+doc.data().tidurcepat+"</td><td style='text-align:center;width:100px'>"+ort+"</td><td style='text-align:center;width:100px'>"+gr+"</td></tr>"
							 	
		   
		   
      });
	  
	    	
		
	  
	  const kebiasaanNames = {
    "7k1": "1. Bangun Pagi",
    "7k2": "2. Beribadah",
    "7k3": "3. Berolahraga",
    "7k4": "4. Makan Sehat",
    "7k5": "5. Gemar Belajar",
    "7k6": "6. Bermasyarakat",
    "7k7": "7. Tidur Cepat"
  };	
	    let totalK = { "7k1": 0, "7k2": 0, "7k3": 0, "7k4": 0, "7k5": 0, "7k6": 0, "7k7": 0 };
      let jumlahSiswa = 0;

      querySnapshot.forEach(doc => {
        const data = doc.data();
        for (let k in totalK) {
          totalK[k] += data[k] || 0;
        }
        jumlahSiswa++;
      });

     
       var gabh="";
      for (let k in totalK) {
        let persen = jumlahSiswa > 0 ? ((totalK[k] / jumlahSiswa) * 100).toFixed(0) : 0;

        const radius = persen == 100 ? "25px" : "25px 0 0 25px";
        
 
       gabh+= `
          <div class="progress-item">
            <div style="margin-top:10px" class="label">${kebiasaanNames[k]}</div>
            <div class="progress-container">
              <div class="progress-bar" style="width:${persen}%; background:linear-gradient(90deg, #f6d365, #fda085); color:white;border-radius:${radius}">
                ${persen}%
              </div>
            </div>
          </div>
        `;
	  }
	  
	  
	   if(cpp==1){
										 
									rekapBody.innerHTML=ct; 
									sortTableByDate();
									document.getElementById("pp").innerHTML=`<br><div class="g5" style="margin-top:3px;padding:5px 20px 5px 20px;font-size:18px;border-radius:10px;color:white">Rekap Bulan ${blncek} | ${mnn}</div>`;
									modal1.style.display = "block";
								   }
								   else{
									document.getElementById("loadingModal").style.display = "block";
									document.getElementById('tmodal').innerHTML=`
									<div class="pesan-box">
									<i class="fas fa-database"></i>
									<p>Tidak ada data siswa bulan ${blncek}</p>
									 `;
									 document.body.style.overflow = "hidden";
								   }
	
	 
	 let mmk=document.getElementById("prog")
	     mmk.innerHTML=gabh+'<br><br>'
		
    }
  })
  .catch(error => {
	  document.getElementById("kdata2").disabled=false;
   document.getElementById("kdata2").innerHTML=` <i class="fas fa-user-graduate"></i>
      <div class="text-block">
      Lihat Data & Verifikasi Ortu/Wali
        <span id="val">Validasi data oleh orang tua/wali siswa</span>
      </div>`
    document.getElementById("loadingModal").style.display = "block";
	document.getElementById('tmodal').innerHTML="<b>Tidak dapat terhubung ke server</b>"
    console.error("❌ Error mengambil data:", error);
  });

  
  
  
    
 }
function ref3(){
document.querySelector("#tabelSiswa tbody").innerHTML = '';			
 document.getElementById("kdata3").style.display = "none";
let mn=localStorage.getItem("nama")
let bb4={"kode":3,"nama":mn}
       send3(bb4)	

}

function verifikasi2(button, tipe1,tipe2,tipe3) {
	 
      const cell = button.parentElement;

      // Simpan konten lama
      const originalContent = button.innerHTML;
      button.disabled = true;
      button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memproses...';

      setTimeout(() => {
        cell.innerHTML = `<span class="success"><i class="fa-solid fa-circle-check" style="font-size: 24px"></i> ${tipe1 === 1 ? '' : ''}</span>`;
      }, 2000);
    }
  





function verifikasi(button, tipe1,tipe2,tipe3){
	 
	 
	let bv={"kode":5,"tp1":tipe1,"tp2":tipe2,"tp3":tipe3}
      const cell = button.parentElement;

      // Simpan konten lama
      const originalContent = button.innerHTML;
      button.disabled = true;
      button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> '; 
	  
	  
	  
	  db.collection("datasiswa")
	  .where("tgl", "==", tipe2)
	  .where("nis", "==", tipe3)
	  .get()
	  .then(querySnapshot => {
		if (querySnapshot.empty) {
		//  console.log("⚠️ Data tidak ditemukan");
		} else {
		  querySnapshot.forEach(doc => {
			// Update field ortu menjadi 1
			
			if(tipe1==1){
				
				       
						 db.collection("datasiswa")
						  .where("tgl", "==", tipe2) // filter tgl
						  .where("nis", "==", tipe3)       // filter nis
						  .get()
						  .then((querySnapshot) => {
							if (querySnapshot.empty) {
							  console.log("❌ Data tidak ditemukan");
							  return;
							}

							querySnapshot.forEach((doc) => {
							  db.collection("datasiswa").doc(doc.id).update({
								ortu: 1
							  })
							  .then(() => {
								   cell.innerHTML = `<span class="success"><i class="fa-solid fa-circle-check" style="font-size: 20px"></i> ${tipe1 === 1 ? '' : ''}</span>`;
							//	console.log(`✅ Data dengan ID ${doc.id} berhasil diupdate (guru=1)`);
							  })
							  .catch((error) => {
								console.error("❌ Gagal update data:", error);
							  });
							});
						  })
						  .catch((error) => {
							console.error("❌ Error mencari data:", error);
						  });

			
			}
			if(tipe1==2){
				
							 db.collection("datasiswa")
							  .where("tgl", "==", tipe2) // filter tgl
							  .where("nis", "==", tipe3)       // filter nis
							  .get()
							  .then((querySnapshot) => {
								if (querySnapshot.empty) {
								//  console.log("❌ Data tidak ditemukan");
								  return;
								}

								querySnapshot.forEach((doc) => {
								  db.collection("datasiswa").doc(doc.id).update({
									guru: 1
								  })
								  .then(() => {
									   cell.innerHTML = `<span class="success"><i class="fa-solid fa-circle-check" style="font-size: 20px"></i> ${tipe1 === 1 ? '' : ''}</span>`;
								//	console.log(`✅ Data dengan ID ${doc.id} berhasil diupdate (guru=1)`);
								  })
								  .catch((error) => {
									console.error("❌ Gagal update data:", error);
								  });
								});
							  })
							  .catch((error) => {
								console.error("❌ Error mencari data:", error);
							  });

				
				
			}
			
			
			
			
		  });
		}
	  })
	  .catch(error => {
		console.error("❌ Error mencari data:", error);
	  });
	  
	  
	  
	  
 
 }
document.body.style.background = "linear-gradient(135deg, #dbe9f4 0%, #fce8e6 25%, #e6f7f1 50%, #fff4e6 75%, #e8eaf6 100%)";
document.body.style.backgroundAttachment = "fixed";


 let container = document.getElementById("progressList");
      container.innerHTML = "";
function rekap33(){
	 document.getElementById("kdata5").innerHTML='<i class="fas fa-spinner fa-spin" style="font-size: 25px; margin-right: 10px; color: white;"></i> Mencari data';
	 
 
const kebiasaanNames = {
    "7k1": "1. Bangun Pagi",
    "7k2": "2. Beribadah",
    "7k3": "3. Berolahraga",
    "7k4": "4. Makan Sehat",
    "7k5": "5. Gemar Belajar",
    "7k6": "6. Bermasyarakat",
    "7k7": "7. Tidur Cepat"
  };	
	
 const waliTarget =localStorage.getItem("nama");
 
  db.collection("datasiswa")
    .where("wali", "==", waliTarget)
	.where("bulan", "==", tglcek)
    .get()
    .then(snapshot => {
		 if (snapshot.empty){
			 document.getElementById("kdata5").innerHTML=`  <i class="fas fa-chalkboard-teacher"></i>
	   <div class="text-block">
      Persentase Perwalian Anda
	  <span id="val">Rekap data siswa wali anda</span>
	  </div>`
			 document.getElementById("loadingModal").style.display = "block";
	         document.getElementById('tmodal').innerHTML=`
			 <div class="pesan-box">
			<i class="fas fa-database"></i>
			<p>Tidak ada data siswa bulan ${blncek} </p>`; 		
			document.body.style.overflow = "hidden"
             return;			 
		 }
		 
      let totalK = { "7k1": 0, "7k2": 0, "7k3": 0, "7k4": 0, "7k5": 0, "7k6": 0, "7k7": 0 };
      let jumlahSiswa = 0;

      snapshot.forEach(doc => {
        const data = doc.data();
        for (let k in totalK) {
          totalK[k] += data[k] || 0;
        }
        jumlahSiswa++;
      });

     
       var gabh="";
      for (let k in totalK) {
        let persen = jumlahSiswa > 0 ? ((totalK[k] / jumlahSiswa) * 100).toFixed(0) : 0;

        const radius = persen == 100 ? "25px" : "25px 0 0 25px";
        

       gabh+= `
          <div class="progress-item">
            <div class="label">${kebiasaanNames[k]}</div>
            <div class="progress-container">
              <div class="progress-bar" style="width:${persen}%; background:linear-gradient(90deg, #f6d365, #fda085); color:white;border-radius:${radius}">
                ${persen}%
              </div>
            </div>
          </div>
        `;
      }
	    document.getElementById("tp").innerHTML=`<b class="g5" style="padding:10px;font-size:20px;border-radius:10px;color:white">Rekap Bulan ${blncek}</b>`
	    container.innerHTML=`<b style="font-size:20px"><i class="fa fa-bullhorn" style="font-size:20px"></i>  Persentase Perwalian anda</b>`+gabh;
	    document.body.style.overflow = "hidden"
	   modal2.style.display = "block";
	   document.getElementById("kdata5").innerHTML=`  <i class="fas fa-chalkboard-teacher"></i>
	   <div class="text-block">
      Persentase Perwalian Anda
	  <span id="val">Rekap data siswa wali anda</span>
	  </div>`
    })
    .catch(error => {
		document.getElementById("kdata5").innerHTML=`  <i class="fas fa-chalkboard-teacher"></i>
	   <div class="text-block">
      Persentase Perwalian Anda
	  <span id="val">Rekap data siswa wali anda</span>
	  </div>`
	 
      console.error("Error:", error);
    });
}



function rekapall(){
	document.getElementById("kdata4").innerHTML='<i class="fas fa-spinner fa-spin" style="font-size: 25px; margin-right: 10px; color: white;"></i>Persentase Per kelas';

	const kebiasaanNames = {
  "7k1": "1. Bangun Pagi",
  "7k2": "2. Beribadah",
  "7k3": "3. Berolahraga",
  "7k4": "4. Makan Sehat",
  "7k5": "5. Gemar Belajar",
  "7k6": "6. Bermasyarakat",
  "7k7": "7. Tidur Cepat"
};


const kelasList = ["7A", "7B", "8A", "8B", "9A", "9B"];

db.collection("datasiswa")
  .get()
  .then(snapshot => {
    let totalSekolah = { "7k1": 0, "7k2": 0, "7k3": 0, "7k4": 0, "7k5": 0, "7k6": 0, "7k7": 0 };
    let jumlahSekolah = 0;

    let dataKelas = {};
    kelasList.forEach(kelas => {
      dataKelas[kelas] = {
        total: { "7k1": 0, "7k2": 0, "7k3": 0, "7k4": 0, "7k5": 0, "7k6": 0, "7k7": 0 },
        jumlahSiswa: 0
      };
    });

    // Hitung total & per kelas
    snapshot.forEach(doc => {
      const data = doc.data();
      const kelas = data.kelas; // Pastikan ada field 'kelas' di Firestore

      // Total keseluruhan
      for (let k in totalSekolah) {
        totalSekolah[k] += data[k] || 0;
      }
      jumlahSekolah++;

      // Per kelas
      if (kelasList.includes(kelas)) {
        for (let k in dataKelas[kelas].total) {
          dataKelas[kelas].total[k] += data[k] || 0;
        }
        dataKelas[kelas].jumlahSiswa++;
      }
    });

    let output = "<h2>📊 Persentase Keseluruhan Siswa</h2>";
    for (let k in kebiasaanNames) {
      let persen = jumlahSekolah > 0 ? ((totalSekolah[k] / jumlahSekolah) * 100).toFixed(0) : 0;

      let gradient;
      if (persen >= 75) gradient = "linear-gradient(90deg, #43e97b, #38f9d7)";
      else if (persen >= 50) gradient = "linear-gradient(90deg, #f6d365, #fda085)";
      else gradient = "linear-gradient(90deg, #ff758c, #ff7eb3)";

      let textColor = persen >= 20 ? "white" : "#333";

      output += `
        <div class="progress-item">
          <div class="label">${kebiasaanNames[k]}</div>
          <div class="progress-container">
            <div class="progress-bar" style="width:${persen}%; background:${gradient}; color:${textColor}">
              ${persen}%
            </div>
          </div>
        </div>
      `;
    }

    // Detail per kelas
    output += "<h2>🏫 Persentase Per Kelas</h2>";
    for (let kelas of kelasList) {
      output += `<h3>Kelas ${kelas}</h3>`;
      for (let k in kebiasaanNames) {
        let jumlah = dataKelas[kelas].jumlahSiswa;
        let persen = jumlah > 0 ? ((dataKelas[kelas].total[k] / jumlah) * 100).toFixed(0) : 0;

        let gradient;
        if (persen >= 75) gradient = "linear-gradient(90deg, #43e97b, #38f9d7)";
        else if (persen >= 50) gradient = "linear-gradient(90deg, #f6d365, #fda085)";
        else gradient = "linear-gradient(90deg, #ff758c, #ff7eb3)";

        let textColor = persen >= 20 ? "white" : "#333";

        output += `
          <div class="progress-item">
            <div class="label">${kebiasaanNames[k]}</div>
            <div class="progress-container">
              <div class="progress-bar" style="width:${persen}%; background:${gradient}; color:${textColor}">
                ${persen}%
              </div>
            </div>
          </div>
        `;
      }
    }

    container.innerHTML = output;
    modal2.style.display = "block";
    document.body.style.overflow = "hidden";
	  document.getElementById("kdata4").innerHTML='Persentase Per Kelas';
  })
  .catch(error => {
	  document.getElementById("kdata4").innerHTML='Persentase Per Kelas';
    console.error("Error:", error);
  });
}

function updateKebiasaanBulanan(kelas, bulan, datasiswa) {
	//alert(kelas+" "+bulan+" "+datasiswa)
  const increment = firebase.firestore.FieldValue.increment;
  let updates = { tot: increment(1) };

  for (let i = 1; i <= 7; i++) {
    let key = `7k${i}`;
    if (datasiswa[key] === 1) updates[key] = increment(1);
  }

  db.collection("presentase")
    .doc(kelas)
    .collection("bulan")
    .doc(bulan)
    .set(updates, { merge: true })
    .then(() => {
    //  console.log("Update kebiasaan berhasil!");
    })
    .catch((err) => {
      console.error("Update gagal:", err);
    });
}


//pertingakatan
async function rekaptingkat() {
  var bulanTahun = tglcek;

  document.getElementById("kdata4").innerHTML =
    '<i class="fas fa-spinner fa-spin" style="font-size: 25px; margin-right: 10px; color: white;"></i> Mencari data';

  const kebiasaanNames = {
    "7k1": "1. Bangun Pagi",
    "7k2": "2. Beribadah",
    "7k3": "3. Berolahraga",
    "7k4": "4. Makan Sehat",
    "7k5": "5. Gemar Belajar",
    "7k6": "6. Bermasyarakat",
    "7k7": "7. Tidur Cepat"
  };
  const kebiasaanNames1 = {
    "7k1": "Bangun Pagi",
    "7k2": "Beribadah",
    "7k3": "Berolahraga",
    "7k4": "Makan Sehat",
    "7k5": "Gemar Belajar",
    "7k6": "Bermasyarakat",
    "7k7": "Tidur Cepat"
  };

  const kelasList = ["7A", "7B", "8A", "8B", "9A", "9B"];
  const tingkatList = {
    "VII": ["7A", "7B"],
    "VIII": ["8A", "8B"],
    "IX": ["9A", "9B"]
  };

  let totalSekolah = { "7k1": 0, "7k2": 0, "7k3": 0, "7k4": 0, "7k5": 0, "7k6": 0, "7k7": 0 };
  let jumlahSekolah = 0;
  let dataKelas = {};
  kelasList.forEach(kelas => {
    dataKelas[kelas] = { total: { "7k1": 0, "7k2": 0, "7k3": 0, "7k4": 0, "7k5": 0, "7k6": 0, "7k7": 0 }, jumlahSiswa: 0 };
  });
  let cektot = 0;

  const promises = kelasList.map(kelas =>
    db.collection("presentase").doc(kelas).collection("bulan").doc(bulanTahun).get()
      .then(doc => {
        if (doc.exists) {
          const data = doc.data();
          const jumlah = data.tot || 0;
          cektot += jumlah;
          jumlahSekolah += jumlah;
          for (let k in totalSekolah) {
            totalSekolah[k] += data[k] || 0;
            dataKelas[kelas].total[k] = data[k] || 0;
          }
          dataKelas[kelas].jumlahSiswa = jumlah;
        }
      })
  );

  Promise.all(promises).then(() => {
    let output = `<b style="font-size:20px"><i class="fa fa-bullhorn"></i> Persentase Seluruh Siswa</b>`;

    // === Progress bar total sekolah ===
    for (let k in kebiasaanNames) {
      let persen = jumlahSekolah > 0 ? ((totalSekolah[k] / jumlahSekolah) * 100).toFixed(0) : 0;
      const radius = persen == 100 ? "25px" : "25px 0 0 25px";
      output += `
        <div class="progress-item">
          <div class="label">${kebiasaanNames[k]}</div>
          <div class="progress-container">
            <div class="progress-bar" style="width:${persen}%; background:linear-gradient(90deg, #f6d365, #fda085); color:white; border-radius:${radius}">
              ${persen}%
            </div>
          </div>
        </div>`;
    }

    // === Rekap per tingkatan ===
    let dataTingkat = {};
    for (let tingkat in tingkatList) {
      dataTingkat[tingkat] = { total: { "7k1": 0, "7k2": 0, "7k3": 0, "7k4": 0, "7k5": 0, "7k6": 0, "7k7": 0 }, jumlahSiswa: 0 };
      for (let kelas of tingkatList[tingkat]) {
        dataTingkat[tingkat].jumlahSiswa += dataKelas[kelas].jumlahSiswa;
        for (let k in dataKelas[kelas].total) {
          dataTingkat[tingkat].total[k] += dataKelas[kelas].total[k];
        }
      }
    }

    output += '<br><b style="font-size:20px"><i class="fa fa-bullhorn"></i> Persentase Per Tingkatan</b>';
    for (let tingkat in dataTingkat) {
      output += `<br><b style="font-size:20px"><i class="fa fa-layer-group"></i> Tingkat ${tingkat}</b>`;
      for (let k in kebiasaanNames) {
        const jumlah = dataTingkat[tingkat].jumlahSiswa;
        const persen = jumlah > 0 ? ((dataTingkat[tingkat].total[k] / jumlah) * 100).toFixed(0) : 0;
        const radius = persen == 100 ? "25px" : "25px 0 0 25px";
        output += `
          <div class="progress-item">
            <div class="label">${kebiasaanNames[k]}</div>
            <div class="progress-container">
             <div class="progress-bar" style="width:${persen}%; background:linear-gradient(90deg, #f6d365, #fda085); color:white; border-radius:${radius}">
                ${persen}%
              </div>
            </div>
          </div>`;
      }
    }

    // === Rekap per kelas ===
    output += '<br><b style="font-size:20px"><i class="fa fa-bullhorn"></i> Persentase Per Kelas</b>';
    for (let kelas of kelasList) {
      output += `<br><b style="font-size:20px"><i class="fa fa-bullseye"></i> Kelas ${kelas}</b>`;
      for (let k in kebiasaanNames) {
        const jumlah = dataKelas[kelas].jumlahSiswa;
        const persen = jumlah > 0 ? ((dataKelas[kelas].total[k] / jumlah) * 100).toFixed(0) : 0;
        const radius = persen == 100 ? "25px" : "25px 0 0 25px";
        output += `
          <div class="progress-item">
            <div class="label">${kebiasaanNames[k]}</div>
            <div class="progress-container">
              <div class="progress-bar" style="width:${persen}%; background:linear-gradient(90deg, #f6d365, #fda085); color:white; border-radius:${radius}">
                ${persen}%
              </div>
            </div>
          </div>`;
      }
    }

    // === Tabel total sekolah ===
    let tabelTotal = `<h3 style="display:none">Seluruh Siswa</h3>
      <table id="tblTotal" border="1" style="border-collapse:collapse;display:none"><thead><tr><th>Seluruh Siswa</th>`;
    for (let k in kebiasaanNames1) {
      tabelTotal += `<th>${kebiasaanNames1[k]}</th>`;
    }
    tabelTotal += `</tr></thead><tbody><tr><td>Persentase</td>`;
    for (let k in kebiasaanNames1) {
      let persen = jumlahSekolah > 0 ? ((totalSekolah[k] / jumlahSekolah) * 100).toFixed(0) : 0;
      tabelTotal += `<td>${persen}%</td>`;
    }
    tabelTotal += `</tr></tbody></table>`;

    // === Tabel per tingkatan ===
    let tabelTingkat = `<h3 style="display:none;">Per Tingkatan</h3>
      <table id="tblTingkat" border="1" style="border-collapse:collapse;display:none"><thead><tr><th>Tingkatan</th>`;
    for (let k in kebiasaanNames1) {
      tabelTingkat += `<th>${kebiasaanNames1[k]}</th>`;
    }
    tabelTingkat += `</tr></thead><tbody>`;
    for (let tingkat in dataTingkat) {
      tabelTingkat += `<tr><td>${tingkat}</td>`;
      for (let k in kebiasaanNames1) {
        const jumlah = dataTingkat[tingkat].jumlahSiswa;
        const persen = jumlah > 0 ? ((dataTingkat[tingkat].total[k] / jumlah) * 100).toFixed(0) : 0;
        tabelTingkat += `<td>${persen}%</td>`;
      }
      tabelTingkat += `</tr>`;
    }
    tabelTingkat += `</tbody></table>`;

    // === Tabel per kelas ===
    let tabelKelas = `<h3 style="display:none;">Per Kelas</h3>
      <table id="tblKelas" border="1" style="border-collapse:collapse;display:none"><thead><tr><th>Kelas</th>`;
    for (let k in kebiasaanNames1) {
      tabelKelas += `<th>${kebiasaanNames1[k]}</th>`;
    }
    tabelKelas += `</tr></thead><tbody>`;
    for (let kelas of kelasList) {
      tabelKelas += `<tr><td>${kelas}</td>`;
      for (let k in kebiasaanNames1) {
        const jumlah = dataKelas[kelas].jumlahSiswa;
        const persen = jumlah > 0 ? ((dataKelas[kelas].total[k] / jumlah) * 100).toFixed(0) : 0;
        tabelKelas += `<td>${persen}%</td>`;
      }
      tabelKelas += `</tr>`;
    }
    tabelKelas += `</tbody></table>`;

    document.getElementById("tp").innerHTML =
      `<b class="g5" style="padding:10px;font-size:20px;border-radius:10px;color:white">Rekap Bulan ${blncek}</b>`;

    container.innerHTML = output + tabelTotal + tabelTingkat + tabelKelas +
      `<br><button id="downloadXLS" style="max-width:250px;margin-left:15px;padding:10px 10px;border:none;border-radius:10px;background:green;color:white">
        <i class="fa fa-file-excel"></i> Download Excel
      </button><br>`;

    if (cektot <= 0) {
      document.getElementById("kdata4").innerHTML = `<i class="fas fa-users"></i>
        <div class="text-block">Persentase Per Kelas
          <span id="val">Rekap data siswa per kelas</span>
        </div>`;
      document.getElementById("loadingModal").style.display = "block";
      document.getElementById('tmodal').innerHTML = `<div class="pesan-box">
<i class="fas fa-database"></i>
<p>Tidak ada data siswa bulan ${blncek} </p>`;
      document.body.style.overflow = "hidden"
      return;
    }

    modal2.style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById("kdata4").innerHTML = `<i class="fas fa-users"></i>
      <div class="text-block">Persentase Per Kelas
        <span id="val">Rekap data siswa per kelas</span>
      </div>`;

    // === ExcelJS Export ===
    document.getElementById("downloadXLS").addEventListener("click", async function () {
      const workbook = new ExcelJS.Workbook();
      const sheet = workbook.addWorksheet(`Rekap Bulan ${blncek}`);

      sheet.columns = [
        { width: 15 }, { width: 15 }, { width: 15 }, { width: 15 },
        { width: 15 }, { width: 15 }, { width: 15 }, { width: 15 }
      ];

      // Judul
      sheet.mergeCells('A1:H1');
      const titleCell = sheet.getCell('A1');
      titleCell.value = `Laporan Persentase Per Kelas & Per Tingkatan  UPTD SMPN 9 SINJAI`;
      titleCell.font = { bold: true, size: 14 };
      titleCell.alignment = { horizontal: 'center', vertical: 'middle' };

      // Tanggal
      const today = new Date();
      const formattedDate = today.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
      sheet.mergeCells('A2:H2');
      sheet.getCell('A2').value = `Rekap Bulan ${blncek}`;
      sheet.getCell('A2').alignment = { horizontal: 'center', vertical: 'middle' };
      sheet.getCell('A2').font = { bold: true, size: 14 };

      sheet.mergeCells('A3:H3');
      sheet.getCell('A3').value = `Tanggal Cetak: ${formattedDate}`;
      sheet.getCell('A3').alignment = { horizontal: 'center', vertical: 'middle' };
      sheet.getCell('A3').font = { italic: true, size: 11 };

      // Ambil tabel dari halaman (Total, Tingkat, Kelas)
      const tables = container.querySelectorAll("table");
      let startRow = 4;
      tables.forEach((tbl, tIndex) => {
        const title = tbl.previousElementSibling?.innerText || `Tabel ${tIndex+1}`;
        sheet.getCell(`A${startRow}`).value = title;
        sheet.getCell(`A${startRow}`).font = { bold: true, size: 12 };
        startRow++;

        const rows = tbl.querySelectorAll("tr");
        rows.forEach((row, rIndex) => {
          const cells = row.querySelectorAll("th,td");
          const dataRow = [];
          cells.forEach(cell => dataRow.push(cell.innerText));
          sheet.addRow(dataRow);

          const excelRow = sheet.lastRow;
          excelRow.eachCell((cell) => {
            cell.border = { top:{style:'thin'},left:{style:'thin'},bottom:{style:'thin'},right:{style:'thin'} };
            cell.alignment = { vertical: 'middle', horizontal: 'center' };
          });

          if (rIndex === 0) {
            excelRow.eachCell((cell) => {
              cell.font = { bold: true, color: { argb: 'FFFFFFFF' } };
              cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4F81BD' } };
            });
          }
        });

        startRow = sheet.lastRow.number + 3;
        sheet.addRow([]);
      });

      // tanda tangan
      const lastRow = sheet.lastRow.number + 2;
      sheet.mergeCells(`F${lastRow}:H${lastRow}`);
      sheet.getCell(`F${lastRow}`).value = "Mengetahui,";
      sheet.getCell(`F${lastRow}`).alignment = { horizontal: 'center' };

      sheet.mergeCells(`F${lastRow+1}:H${lastRow+1}`);
      sheet.getCell(`F${lastRow+1}`).value = "Kepala Sekolah";
      sheet.getCell(`F${lastRow+1}`).alignment = { horizontal: 'center' };

      sheet.mergeCells(`F${lastRow+4}:H${lastRow+4}`);
      sheet.getCell(`F${lastRow+4}`).value = "TASLIM M., S.Pd.";
      sheet.getCell(`F${lastRow+4}`).font = { bold: true };
      sheet.getCell(`F${lastRow+4}`).alignment = { horizontal: 'center' };

      sheet.mergeCells(`F${lastRow+5}:H${lastRow+5}`);
      sheet.getCell(`F${lastRow+5}`).value = "NIP 197101251992031008";
      sheet.getCell(`F${lastRow+5}`).alignment = { horizontal: 'center' };

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `Rekap_Persentase_${bulanTahun}.xlsx`;
      link.click();
    });

  });
}

























































  async function rekappresent() {
  var bulanTahun = tglcek;
 
  document.getElementById("kdata4").innerHTML =
    '<i class="fas fa-spinner fa-spin" style="font-size: 25px; margin-right: 10px; color: white;"></i> Mencari data';

  const kebiasaanNames = {
    "7k1": "1. Bangun Pagi",
    "7k2": "2. Beribadah",
    "7k3": "3. Berolahraga",
    "7k4": "4. Makan Sehat",
    "7k5": "5. Gemar Belajar",
    "7k6": "6. Bermasyarakat",
    "7k7": "7. Tidur Cepat"
  };
  const kebiasaanNames1 = {
    "7k1": "Bangun Pagi",
    "7k2": "Beribadah",
    "7k3": "Berolahraga",
    "7k4": "Makan Sehat",
    "7k5": "Gemar Belajar",
    "7k6": "Bermasyarakat",
    "7k7": "Tidur Cepat"
  };
  const kelasList = ["7A", "7B", "8A", "8B", "9A", "9B"];

  let totalSekolah = { "7k1": 0, "7k2": 0, "7k3": 0, "7k4": 0, "7k5": 0, "7k6": 0, "7k7": 0 };
  let jumlahSekolah = 0;
  let dataKelas = {};
  kelasList.forEach(kelas => {
    dataKelas[kelas] = { total: { "7k1": 0, "7k2": 0, "7k3": 0, "7k4": 0, "7k5": 0, "7k6": 0, "7k7": 0 }, jumlahSiswa: 0 };
  });
  let cektot = 0;

  const promises = kelasList.map(kelas =>
    db.collection("presentase").doc(kelas).collection("bulan").doc(bulanTahun).get()
      .then(doc => {
        if (doc.exists) {
          const data = doc.data();
          const jumlah = data.tot || 0;
          cektot += jumlah;
          jumlahSekolah += jumlah;
          for (let k in totalSekolah) {
            totalSekolah[k] += data[k] || 0;
            dataKelas[kelas].total[k] = data[k] || 0;
          }
          dataKelas[kelas].jumlahSiswa = jumlah;
        }
      })
  );

  Promise.all(promises).then(() => {
    let output = `<b style="font-size:20px"><i class="fa fa-bullhorn"></i> Persentase Seluruh Siswa</b>`;

    // progress bar total sekolah
    for (let k in kebiasaanNames) {
      let persen = jumlahSekolah > 0 ? ((totalSekolah[k] / jumlahSekolah) * 100).toFixed(0) : 0;
      const radius = persen == 100 ? "25px" : "25px 0 0 25px";
      output += `
        <div class="progress-item">
          <div class="label">${kebiasaanNames[k]}</div>
          <div class="progress-container">
            <div class="progress-bar" style="width:${persen}%; background:linear-gradient(90deg, #f6d365, #fda085); color:white; border-radius:${radius}">
              ${persen}%
            </div>
          </div>
        </div>`;
    }

    // per kelas
    output += '<br><b style="font-size:20px"><i class="fa fa-bullhorn"></i> Persentase Per Kelas</b>';
    for (let kelas of kelasList) {
      output += `<br><b style="font-size:20px"><i class="fa fa-bullseye"></i> Kelas ${kelas}</b>`;
      for (let k in kebiasaanNames) {
        const jumlah = dataKelas[kelas].jumlahSiswa;
        const persen = jumlah > 0 ? ((dataKelas[kelas].total[k] / jumlah) * 100).toFixed(0) : 0;
        const radius = persen == 100 ? "25px" : "25px 0 0 25px";
        output += `
          <div class="progress-item">
            <div class="label">${kebiasaanNames[k]}</div>
            <div class="progress-container">
              <div class="progress-bar" style="width:${persen}%; background:linear-gradient(90deg, #f6d365, #fda085); color:white; border-radius:${radius}">
                ${persen}%
              </div>
            </div>
          </div>`;
      }
    }

    // tabel 1 total sekolah
    let tabelTotal = `<h3 style="display:none">Seluruh Siswa</h3>
      <table id="tblTotal" border="1" style="border-collapse:collapse;display:none"><thead><tr><th>Seluruh Siswa</th>`;
    for (let k in kebiasaanNames1) {
      tabelTotal += `<th>${kebiasaanNames1[k]}</th>`;
    }
    tabelTotal += `</tr></thead><tbody><tr><td>Persentase</td>`;
    for (let k in kebiasaanNames1) {
      let persen = jumlahSekolah > 0 ? ((totalSekolah[k] / jumlahSekolah) * 100).toFixed(0) : 0;
      tabelTotal += `<td>${persen}%</td>`;
    }
    tabelTotal += `</tr></tbody></table>`;

    // tabel 2 per kelas
    let tabelKelas = `<h3 style="display:none;">Per Kelas</h3>
      <table id="tblKelas" border="1" style="border-collapse:collapse;display:none"><thead><tr><th>Kelas</th>`;
    for (let k in kebiasaanNames1) {
      tabelKelas += `<th>${kebiasaanNames1[k]}</th>`;
    }
    tabelKelas += `</tr></thead><tbody>`;
    for (let kelas of kelasList) {
      tabelKelas += `<tr><td>${kelas}</td>`;
      for (let k in kebiasaanNames1) {
        const jumlah = dataKelas[kelas].jumlahSiswa;
        const persen = jumlah > 0 ? ((dataKelas[kelas].total[k] / jumlah) * 100).toFixed(0) : 0;
        tabelKelas += `<td>${persen}%</td>`;
      }
      tabelKelas += `</tr>`;
    }
    tabelKelas += `</tbody></table>`;

    document.getElementById("tp").innerHTML =
      `<b class="g5" style="padding:10px;font-size:20px;border-radius:10px;color:white">Rekap Bulan ${blncek}</b>`;

    container.innerHTML = output + tabelTotal + tabelKelas +
      `<br><button id="downloadXLS" style="max-width:250px;margin-left:15px;padding:10px 10px;border:none;border-radius:10px;background:green;color:white">
        <i class="fa fa-file-excel"></i> Download Excel
      </button><br>`;

    if (cektot <= 0) {
      document.getElementById("kdata4").innerHTML = `<i class="fas fa-users"></i>
        <div class="text-block">Persentase Per Kelas
          <span id="val">Rekap data siswa per kelas</span>
        </div>`;
      document.getElementById("loadingModal").style.display = "block";
      document.getElementById('tmodal').innerHTML = `<div class="pesan-box">
<i class="fas fa-database"></i>
<p>Tidak ada data siswa bulan ${blncek} </p>`;
document.body.style.overflow = "hidden"
      return;
    }

    modal2.style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById("kdata4").innerHTML = `<i class="fas fa-users"></i>
      <div class="text-block">Persentase Per Kelas
        <span id="val">Rekap data siswa per kelas</span>
      </div>`;

    // === ExcelJS Export ===
     // === ExcelJS Export ===
document.getElementById("downloadXLS").addEventListener("click", async function () {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet(`Rekap Bulan ${blncek}`);

sheet.columns = [
  { width: 15 },   // Kolom A
  { width: 15 },  // Kolom B
  { width: 15 },  // Kolom C
  { width: 15 },  // Kolom D
  { width: 15 },  // Kolom E
  { width: 15 },  // Kolom F
  { width: 15 },  // Kolom G
  { width: 15 }   // Kolom H
];
  // Judul
  sheet.mergeCells('A1:H1');
  const titleCell = sheet.getCell('A1');
  titleCell.value = `Laporan Persentase Per Kelas  UPTD SMPN 9 SINJAI`;
  titleCell.font = { bold: true, size: 14 };
  titleCell.alignment = { horizontal: 'center', vertical: 'middle' };

  // Tanggal
  const today = new Date();
  const formattedDate = today.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
  sheet.mergeCells('A2:H2');
  sheet.getCell('A2').value = `Rekap Bulan ${blncek}`;
  sheet.getCell('A2').alignment = { horizontal: 'center', vertical: 'middle' };
  sheet.getCell('A2').font = { bold: true, size: 14 };

 sheet.mergeCells('A3:H3');
  sheet.getCell('A3').value = `Tanggal Cetak: ${formattedDate}`;
  sheet.getCell('A3').alignment = { horizontal: 'center', vertical: 'middle' };
  sheet.getCell('A3').font = { italic: true, size: 11 };

  // Ambil tabel dari halaman
  const tables = container.querySelectorAll("table");
  let startRow = 4;
  tables.forEach((tbl, tIndex) => {
    const title = tbl.previousElementSibling?.innerText || `Tabel ${tIndex+1}`;
    sheet.getCell(`A${startRow}`).value = title;
    sheet.getCell(`A${startRow}`).font = { bold: true, size: 12 };
    startRow++;

    const rows = tbl.querySelectorAll("tr");
    rows.forEach((row, rIndex) => {
      const cells = row.querySelectorAll("th,td");
      const dataRow = [];
      cells.forEach(cell => dataRow.push(cell.innerText));
      sheet.addRow(dataRow);

      // === Tambahkan border di semua cell (header & data) ===
      const excelRow = sheet.lastRow;
      excelRow.eachCell((cell) => {
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' }
        };
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
      });

      // Styling header khusus (baris pertama tabel)
      if (rIndex === 0) {
        excelRow.eachCell((cell) => {
          cell.font = { bold: true, color: { argb: 'FFFFFFFF' } };
          cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4F81BD' } };
        });
      }
    });

    startRow = sheet.lastRow.number + 3;
    sheet.addRow([]);
  });

  // tanda tangan
  const lastRow = sheet.lastRow.number + 2;
  sheet.mergeCells(`F${lastRow}:H${lastRow}`);
  sheet.getCell(`F${lastRow}`).value = "Mengetahui,";
  sheet.getCell(`F${lastRow}`).alignment = { horizontal: 'center' };

  sheet.mergeCells(`F${lastRow+1}:H${lastRow+1}`);
  sheet.getCell(`F${lastRow+1}`).value = "Kepala Sekolah";
  sheet.getCell(`F${lastRow+1}`).alignment = { horizontal: 'center' };

  sheet.mergeCells(`F${lastRow+4}:H${lastRow+4}`);
  sheet.getCell(`F${lastRow+4}`).value = "TASLIM M., S.Pd.";
  sheet.getCell(`F${lastRow+4}`).font = { bold: true };
  sheet.getCell(`F${lastRow+4}`).alignment = { horizontal: 'center' };
  
  sheet.mergeCells(`F${lastRow+5}:H${lastRow+5}`);
  sheet.getCell(`F${lastRow+5}`).value = "NIP 197101251992031008";
  sheet.getCell(`F${lastRow+5}`).font = { bold: false };
  sheet.getCell(`F${lastRow+5}`).alignment = { horizontal: 'center' };

  // Freeze header (judul tetap di atas)
  //sheet.views = [{ state: 'frozen', ySplit: 3 }];

  // Download file
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `Rekap_Persentase_${bulanTahun}.xlsx`;
  link.click();
});

  });
}


 
async function rekappersiswa(bulanTahun = tglcek) {
  document.getElementById("kdata6").innerHTML =
    '<i class="fas fa-spinner fa-spin" style="font-size: 25px; margin-right: 10px; color: white;"></i> Mencari data...';

  const kebiasaanNames = {
    "7k1": "Bangun Pagi",
    "7k2": "Beribadah",
    "7k3": "Berolahraga",
    "7k4": "Makan Sehat",
    "7k5": "Gemar Belajar",
    "7k6": "Bermasyarakat",
    "7k7": "Tidur Cepat"
  };

  const kelasList = ["7A", "7B", "8A", "8B", "9A", "9B"];
  let dataKelas = {};
  kelasList.forEach(k => (dataKelas[k] = {}));

  db.collection("datasiswa")
    .where("bulan", "==", bulanTahun)
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        document.getElementById("kdata6").innerHTML = `
          <i class="fas fa-user-graduate"></i>
          <div class="text-block">
            Persentase Per Siswa
            <span id="val">Rekap data tiap siswa</span>
          </div>`;
        document.getElementById("loadingModal").style.display = "block";
        document.getElementById("tmodal").innerHTML = `<div class="pesan-box">
<i class="fas fa-database"></i>
<p>Tidak ada data siswa bulan ${blncek} </p>`;
document.body.style.overflow = "hidden"
        return;
      }

      snapshot.forEach(doc => {
        const data = doc.data();
        const kelas = data.kelas;
        const nama = data.nama || data.fullName || "Anonim";
        const nis = data.nis || "-";
        const wali = data.wali || "-";
        if (!kelasList.includes(kelas)) return;

        if (!dataKelas[kelas][nama]) {
          dataKelas[kelas][nama] = { nis, wali, totalHari: 0 };
          for (let i = 1; i <= 7; i++) dataKelas[kelas][nama][`7k${i}`] = 0;
        }

        dataKelas[kelas][nama].totalHari += 1;
        for (let i = 1; i <= 7; i++) {
          const key = `7k${i}`;
          dataKelas[kelas][nama][key] += data[key] ? 1 : 0;
        }
      });

      // === Tampilkan tabel di modal
      let output = `<b style="font-size:20px"><i class="fa fa-bullhorn"></i> Persentase Per Siswa</b>`;
      for (let kelas of kelasList) {
        const siswaObj = dataKelas[kelas];
        if (Object.keys(siswaObj).length === 0) continue;

        output += `<b style="font-size:20px"><i class="fa fa-bullseye"></i> Kelas ${kelas}</b>`;
        output += `<table id="tabelSiswa2" style="border-collapse: collapse; width: 100%">
          <thead>
            <tr>
              <th>No</th><th>NIS</th><th>Nama Siswa</th><th>Nama Wali</th><th>Total Input</th>
              ${Object.values(kebiasaanNames).map(n => `<th>${n}</th>`).join("")}
            </tr>
          </thead><tbody>`;

        let no = 1;
        for (let nama in siswaObj) {
          const s = siswaObj[nama];
          const persenArr = [1,2,3,4,5,6,7].map(i => {
            const key = `7k${i}`;
            return s.totalHari > 0 ? ((s[key] / s.totalHari) * 100).toFixed(0) + "%" : "0%";
          });
          output += `<tr>
            <td>${no++}</td><td>${s.nis}</td><td>${nama}</td><td>${s.wali}</td><td>${s.totalHari}</td>
            ${persenArr.map(p => `<td>${p}</td>`).join("")}
          </tr>`;
        }
        output += `</tbody></table><br>`;
      }

      output += `<button id="downloadXLS" style="max-width:250px;margin:10px;padding:10px;border:none;border-radius:10px;background:green;color:white">
        <i class="fa fa-file-excel"></i> Download Excel
      </button>`;

      container.innerHTML = output;
      modal2.style.display = "block";
	   document.getElementById("tp").innerHTML =
      `<b class="g5" style="padding:10px;font-size:20px;border-radius:10px;color:white">Rekap Bulan ${blncek}</b>`;
      document.body.style.overflow = "hidden";
      document.getElementById("kdata6").innerHTML = `
        <i class="fas fa-user-graduate"></i>
        <div class="text-block">
          Persentase Per Siswa
          <span id="val">Rekap data tiap siswa</span>
        </div>`;

      // === Download Excel pakai ExcelJS
      document.getElementById("downloadXLS").addEventListener("click", async () => {
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet("Persentase");

        // Judul
        sheet.mergeCells("A1:L1");
        sheet.getCell("A1").value = `Laporan Persentase Per Siswa  UPTD SMPN 9 Sinjai`;
        sheet.getCell("A1").font = { bold: true, size: 14 };
        sheet.getCell("A1").alignment = { horizontal: "center" };


 sheet.mergeCells('A2:L2');
  sheet.getCell('A2').value = `Rekap Bulan ${blncek}`;
  sheet.getCell('A2').alignment = { horizontal: 'center', vertical: 'middle' };
  sheet.getCell('A2').font = { bold: true, size: 14 };
 
        // Tanggal
        const today = new Date();
        const formattedDate = today.toLocaleDateString("id-ID",{ day: '2-digit', month: 'long', year: 'numeric'});
        sheet.mergeCells("A3:L3");
        sheet.getCell("A3").value = `Tanggal Cetak: ${formattedDate}`;
        sheet.getCell("A3").alignment = { horizontal: "center", vertical: "middle" };
        sheet.getCell("A3").font = { italic: true, size: 11 };

        let rowStart = 4;

        // Loop tiap kelas
        for (let kelas of kelasList) {
          const siswaObj = dataKelas[kelas];
          if (Object.keys(siswaObj).length === 0) continue;

          sheet.addRow([]);
          sheet.mergeCells(`A${rowStart}:H${rowStart}`);
          sheet.getCell(`A${rowStart}`).value = `Kelas ${kelas}`;
          sheet.getCell(`A${rowStart}`).font = { bold: true, size: 12 };
          rowStart++;

          const header = ["No","NIS","Nama Siswa","Nama Wali","Total Input", ...Object.values(kebiasaanNames)];
          sheet.addRow(header);

          let no = 1;
          for (let nama in siswaObj) {
            const s = siswaObj[nama];
            const persenArr = [1,2,3,4,5,6,7].map(i => {
              const key = `7k${i}`;
              return s.totalHari > 0 ? ((s[key] / s.totalHari) * 100).toFixed(0)+"%" : "0%";
            });
            sheet.addRow([no++, s.nis, nama, s.wali, s.totalHari, ...persenArr]);
          }

          // Styling tabel
          const lastRow = sheet.lastRow.number;
         for (let r = rowStart; r <= lastRow; r++) {
  const row = sheet.getRow(r);

  // Kolom C (3) dan D (4) rata kiri
  [3, 4].forEach(col => {
    const cell = row.getCell(col);
    cell.alignment = { horizontal: "left", vertical: "middle" };
    cell.border = { 
      top: { style: 'thin' }, 
      left: { style: 'thin' }, 
      bottom: { style: 'thin' }, 
      right: { style: 'thin' } 
    };
  });

  // Kolom lain default center
  row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
    if (![3,4].includes(colNumber)) {
      cell.alignment = { horizontal: "center", vertical: "middle" };
      cell.border = { 
        top: { style: 'thin' }, 
        left: { style: 'thin' }, 
        bottom: { style: 'thin' }, 
        right: { style: 'thin' } 
      };
    }
  });

  // Styling baris header
  if (r === rowStart) {
    row.eachCell({ includeEmpty: true }, (cell) => {
      cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "4F81BD" } };
    });
  }
}

          rowStart = lastRow+2;
        }

         sheet.columns = [
  { width: 5 },   // Kolom A
  { width: 8 },  // Kolom B
  { width: 22 },  // Kolom C
  { width: 22 },  // Kolom D
  { width: 14 },  // Kolom F
  { width: 15 },  // Kolom G
  { width: 15 },  // Kolom H
  { width: 15 },   // Kolom I
  { width: 15 },   // Kolom J
  { width: 15 },   // Kolom K
  { width: 15 },  // Kolom L
  { width: 15 }   // Kolom L
];
        // Tanda tangan
        const ttdRow = sheet.lastRow.number + 3;
        sheet.mergeCells(`J${ttdRow}:L${ttdRow}`);
        sheet.getCell(`J${ttdRow}`).value = "Mengetahui,";
        sheet.getCell(`J${ttdRow}`).alignment = { horizontal:"center" };
        sheet.mergeCells(`J${ttdRow+1}:L${ttdRow+1}`);
        sheet.getCell(`J${ttdRow+1}`).value = "Kepala Sekolah";
        sheet.getCell(`J${ttdRow+1}`).alignment = { horizontal:"center" };
        sheet.mergeCells(`J${ttdRow+4}:L${ttdRow+4}`);
        sheet.getCell(`J${ttdRow+4}`).value = "TASLIM M., S.Pd.";
        sheet.getCell(`J${ttdRow+4}`).font = { bold:true };
        sheet.getCell(`J${ttdRow+4}`).alignment = { horizontal:"center" };
		 sheet.mergeCells(`J${ttdRow+5}:L${ttdRow+5}`);
		  sheet.getCell(`J${ttdRow+5}`).value = "NIP 197101251992031008";
		  sheet.getCell(`J${ttdRow+5}`).font = { bold: false };
		  sheet.getCell(`J${ttdRow+5}`).alignment = { horizontal: 'center' };

        // Download
        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `Persentase_Siswa_${bulanTahun}.xlsx`;
        link.click();
      });
    })
    .catch(err => {
      document.getElementById("kdata6").innerHTML = `
        <i class="fas fa-user-graduate"></i>
        <div class="text-block">
          Persentase Per Siswa
          <span id="val">Rekap data tiap siswa</span>
        </div>`;
      console.error(err);
    });
}
 

function showpicker(){
	 
	let container = document.getElementById("progressList");
      container.innerHTML = "";
	 modal2.style.display = "block";
	   document.getElementById("tp").innerHTML = `
  <label style="font-weight:600; display:block; margin-bottom:6px; color:#2c3e50;">
    <i class="fas fa-calendar-alt" style="margin-right:6px; color:#007BFF;"></i>
    Pilih Rentang Tanggal
  </label>
  
  <input id="tanggal_rentang" type="text" placeholder="📅 Pilih Tanggal..." 
    style="
      padding: 10px 14px;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin: 5px 0;
      width: 250px;
      font-size: 14px;
      transition: all 0.3s ease;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
    "
    onfocus="this.style.borderColor='#007BFF'; this.style.boxShadow='0 0 6px rgba(0,123,255,0.5)'"
    onblur="this.style.borderColor='#ccc'; this.style.boxShadow='inset 0 1px 3px rgba(0,0,0,0.1)'"
  >
  
  <p id="hasil_tanggal" style="margin-top:10px; color:#555; font-style:italic;"></p>
`;

      document.body.style.overflow = "hidden";
      document.getElementById("kdata8").innerHTML = `
       <i class="fas fa-calendar"></i>
      <div class="text-block">
        Persentase Per Tanggal
        <span id="val">Rekap data siswa pertangal</span>
      </div>`;
  date();
	
}
 let containerg = document.getElementById("progressList");
 async function rekappertgl(tgl1b,tgl2b,tb1,tb2) {
  containerg.innerHTML =`<i class="fas fa-spinner fa-spin" style="font-size: 25px; margin-right: 10px; color: orange;"></i><br>`;
  
  const kebiasaanNames = {
    "7k1": "Bangun Pagi",
    "7k2": "Beribadah",
    "7k3": "Berolahraga",
    "7k4": "Makan Sehat",
    "7k5": "Gemar Belajar",
    "7k6": "Bermasyarakat",
    "7k7": "Tidur Cepat"
  };

  const kelasList = ["7A", "7B", "8A", "8B", "9A", "9B"];
  let dataKelas = {};
  kelasList.forEach(k => (dataKelas[k] = {}));

  db.collection("datasiswa")
    .where("tglsort", ">=", tgl1b)
	 .where("tglsort", "<=", tgl2b)
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        
      containerg.innerHTML = `<span style="background:#007BFF; color:#fff; padding:8px 14px; border-radius:8px; font-weight:bold;">
  Data siswa tidak ditemukan
</span>`

        
        return;
      }

      snapshot.forEach(doc => {
        const data = doc.data();
        const kelas = data.kelas;
        const nama = data.nama || data.fullName || "Anonim";
        const nis = data.nis || "-";
        const wali = data.wali || "-";
        if (!kelasList.includes(kelas)) return;

        if (!dataKelas[kelas][nama]) {
          dataKelas[kelas][nama] = { nis, wali, totalHari: 0 };
          for (let i = 1; i <= 7; i++) dataKelas[kelas][nama][`7k${i}`] = 0;
        }

        dataKelas[kelas][nama].totalHari += 1;
        for (let i = 1; i <= 7; i++) {
          const key = `7k${i}`;
          dataKelas[kelas][nama][key] += data[key] ? 1 : 0;
        }
      });

      // === Tampilkan tabel di modal
      let output = `<b style="font-size:20px"><i class="fa fa-bullhorn"></i> Persentase Per Siswa</b>`;
      for (let kelas of kelasList) {
        const siswaObj = dataKelas[kelas];
        if (Object.keys(siswaObj).length === 0) continue;

        output += `<b style="font-size:20px"><i class="fa fa-bullseye"></i> Kelas ${kelas}</b>`;
        output += `<table id="tabelSiswa2" style="border-collapse: collapse; width: 100%">
          <thead>
            <tr>
              <th>No</th><th>NIS</th><th>Nama Siswa</th><th>Nama Wali</th><th>Total Input</th>
              ${Object.values(kebiasaanNames).map(n => `<th>${n}</th>`).join("")}
            </tr>
          </thead><tbody>`;

        let no = 1;
        for (let nama in siswaObj) {
          const s = siswaObj[nama];
          const persenArr = [1,2,3,4,5,6,7].map(i => {
            const key = `7k${i}`;
            return s.totalHari > 0 ? ((s[key] / s.totalHari) * 100).toFixed(0) + "%" : "0%";
          });
          output += `<tr>
            <td>${no++}</td><td>${s.nis}</td><td>${nama}</td><td>${s.wali}</td><td>${s.totalHari}</td>
            ${persenArr.map(p => `<td>${p}</td>`).join("")}
          </tr>`;
        }
        output += `</tbody></table><br>`;
      }
 
      output += `<button id="downloadXLS" style="max-width:250px;margin:10px;padding:10px;border:none;border-radius:10px;background:green;color:white">
        <i class="fa fa-file-excel"></i> Download Excel
      </button><br><br><br><br><br>`;

      containerg.innerHTML = output;
      modal2.style.display = "block";
      document.body.style.overflow = "hidden";
      document.getElementById("kdata6").innerHTML = `
        <i class="fas fa-user-graduate"></i>
        <div class="text-block">
          Persentase Per Siswa
          <span id="val">Rekap data tiap siswa</span>
        </div>`;

      // === Download Excel pakai ExcelJS
      document.getElementById("downloadXLS").addEventListener("click", async () => {
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet("Persentase");

        // Judul
        sheet.mergeCells("A1:L1");
        sheet.getCell("A1").value = `Laporan Persentase  Siswa  UPTD SMPN 9 Sinjai`;
        sheet.getCell("A1").font = { bold: true, size: 14 };
        sheet.getCell("A1").alignment = { horizontal: "center" };


 sheet.mergeCells('A2:L2');
  sheet.getCell('A2').value = `dari ${tb1} s.d ${tb2}`;
  sheet.getCell('A2').alignment = { horizontal: 'center', vertical: 'middle' };
  sheet.getCell('A2').font = { bold: true, size: 14 };
 
        // Tanggal
        const today = new Date();
        const formattedDate = today.toLocaleDateString("id-ID",{ day: '2-digit', month: 'long', year: 'numeric'});
        sheet.mergeCells("A3:L3");
        sheet.getCell("A3").value = `Tanggal Cetak: ${formattedDate}`;
        sheet.getCell("A3").alignment = { horizontal: "center", vertical: "middle" };
        sheet.getCell("A3").font = { italic: true, size: 11 };

        let rowStart = 4;

        // Loop tiap kelas
        for (let kelas of kelasList) {
          const siswaObj = dataKelas[kelas];
          if (Object.keys(siswaObj).length === 0) continue;

          sheet.addRow([]);
          sheet.mergeCells(`A${rowStart}:H${rowStart}`);
          sheet.getCell(`A${rowStart}`).value = `Kelas ${kelas}`;
          sheet.getCell(`A${rowStart}`).font = { bold: true, size: 12 };
          rowStart++;

          const header = ["No","NIS","Nama Siswa","Nama Wali","Total Input", ...Object.values(kebiasaanNames)];
          sheet.addRow(header);

          let no = 1;
          for (let nama in siswaObj) {
            const s = siswaObj[nama];
            const persenArr = [1,2,3,4,5,6,7].map(i => {
              const key = `7k${i}`;
              return s.totalHari > 0 ? ((s[key] / s.totalHari) * 100).toFixed(0)+"%" : "0%";
            });
            sheet.addRow([no++, s.nis, nama, s.wali, s.totalHari, ...persenArr]);
          }

          // Styling tabel
          const lastRow = sheet.lastRow.number;
         for (let r = rowStart; r <= lastRow; r++) {
  const row = sheet.getRow(r);

  // Kolom C (3) dan D (4) rata kiri
  [3, 4].forEach(col => {
    const cell = row.getCell(col);
    cell.alignment = { horizontal: "left", vertical: "middle" };
    cell.border = { 
      top: { style: 'thin' }, 
      left: { style: 'thin' }, 
      bottom: { style: 'thin' }, 
      right: { style: 'thin' } 
    };
  });

  // Kolom lain default center
  row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
    if (![3,4].includes(colNumber)) {
      cell.alignment = { horizontal: "center", vertical: "middle" };
      cell.border = { 
        top: { style: 'thin' }, 
        left: { style: 'thin' }, 
        bottom: { style: 'thin' }, 
        right: { style: 'thin' } 
      };
    }
  });

  // Styling baris header
  if (r === rowStart) {
    row.eachCell({ includeEmpty: true }, (cell) => {
      cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "4F81BD" } };
    });
  }
}

          rowStart = lastRow+2;
        }

         sheet.columns = [
  { width: 5 },   // Kolom A
  { width: 8 },  // Kolom B
  { width: 22 },  // Kolom C
  { width: 22 },  // Kolom D
  { width: 14 },  // Kolom F
  { width: 15 },  // Kolom G
  { width: 15 },  // Kolom H
  { width: 15 },   // Kolom I
  { width: 15 },   // Kolom J
  { width: 15 },   // Kolom K
  { width: 15 },  // Kolom L
  { width: 15 }   // Kolom L
];
        // Tanda tangan
        const ttdRow = sheet.lastRow.number + 3;
        sheet.mergeCells(`J${ttdRow}:L${ttdRow}`);
        sheet.getCell(`J${ttdRow}`).value = "Mengetahui,";
        sheet.getCell(`J${ttdRow}`).alignment = { horizontal:"center" };
        sheet.mergeCells(`J${ttdRow+1}:L${ttdRow+1}`);
        sheet.getCell(`J${ttdRow+1}`).value = "Kepala Sekolah";
        sheet.getCell(`J${ttdRow+1}`).alignment = { horizontal:"center" };
        sheet.mergeCells(`J${ttdRow+4}:L${ttdRow+4}`);
        sheet.getCell(`J${ttdRow+4}`).value = "TASLIM M., S.Pd.";
        sheet.getCell(`J${ttdRow+4}`).font = { bold:true };
        sheet.getCell(`J${ttdRow+4}`).alignment = { horizontal:"center" };
		 sheet.mergeCells(`J${ttdRow+5}:L${ttdRow+5}`);
		  sheet.getCell(`J${ttdRow+5}`).value = "NIP 197101251992031008";
		  sheet.getCell(`J${ttdRow+5}`).font = { bold: false };
		  sheet.getCell(`J${ttdRow+5}`).alignment = { horizontal: 'center' };

        // Download
        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `Persentase_Siswa_${bulanTahun}.xlsx`;
        link.click();
      });
    })
    .catch(err => {
     
      console.error(err);
    });
}

function sortTableByDate() {
  let tbody = document.getElementById("rekapBody");
  let rows = Array.from(tbody.querySelectorAll("tr"));

  // urutkan berdasarkan kolom tanggal (kolom ke-2 = index 1)
  rows.sort((a, b) => {
    let tglA = a.cells[1].innerText.trim();
    let tglB = b.cells[1].innerText.trim();

    // parsing "DD-MM-YYYY"
    let [dA, mA, yA] = tglA.split("-").map(Number);
    let [dB, mB, yB] = tglB.split("-").map(Number);

    let dateA = new Date(yA, mA - 1, dA);
    let dateB = new Date(yB, mB - 1, dB);

    return dateA - dateB; // ascending
  });

  // kosongkan tbody, masukkan kembali dengan nomor baru
  tbody.innerHTML = "";
  rows.forEach((row, i) => {
    row.cells[0].innerText = i + 1; // kolom pertama diisi ulang (No)
    tbody.appendChild(row);
  });
}



function date(){
 const tanggalInput = document.getElementById('tanggal_rentang');
    const hasilParagraph = document.getElementById('hasil_tanggal');
  
    // Mendapatkan tanggal hari ini
    const today = new Date();
    // Mendapatkan tanggal 1 minggu ke depan
    const nextWeek = today //new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    const fp = flatpickr(tanggalInput, {
      mode: 'range',
      dateFormat: 'd M Y',
      locale: 'id',
      // Mengisi rentang tanggal secara otomatis saat inisialisasi
      defaultDate: [today, nextWeek],
      onChange: function(selectedDates, dateStr, instance) {
        if (selectedDates.length === 2) {
          const tgl11 = instance.formatDate(selectedDates[0], 'Y-m-d');
          const tgl22= instance.formatDate(selectedDates[1], 'Y-m-d');
		   const tb1 = instance.formatDate(selectedDates[0], 'd F Y');
          const tb2 = instance.formatDate(selectedDates[1], 'd F Y');
         //hasilParagraph.textContent = `Anda memilih tanggal dari ${tanggalMulai} sampai ${tanggalAkhir}.`;
		 rekappertgl(tgl11,tgl22,tb1,tb2)
        } else {
        //  hasilParagraph.textContent = 'Pilih rentang tanggal.';
        }
      }
    });
 
	
}


function gantipasword(ag) {
	 document.getElementById("tpas").style.display="none"
	  ag.style.display="block";
	document.getElementById("tpas1").style.display="none"
const oldPass1 = document.getElementById("oldPass").value;
const newPass1 = document.getElementById("newPass").value;
if (!oldPass1 || !newPass1) {
   
  return; // hentikan fungsi
}

if (oldPass1 == newPass1) {
   
  return; // hentikan fungsi
}

ag.disabled = true;
  ag.innerHTML = '<i class="fas fa-spinner fa-spin" style="font-size: 25px; margin-right: 10px; color: white;"></i> Proses...';
 
	 let mn12=localStorage.getItem("nis")
 const user1   = firebase.auth().currentUser;

 
 
  if (!user1) {
    alert("Tidak ada user login.");
    return;
  }

  const credential = firebase.auth.EmailAuthProvider.credential(
    user1.email,
    oldPass1
  );

  // Re-authenticate dulu
  user1.reauthenticateWithCredential(credential).then(() => {
    // Jika sukses, update password di Authentication
    return user1.updatePassword(newPass1);
  }).then(() => {
    // Setelah password di Auth berhasil diubah, update juga di Firestore
    return firebase.firestore()
      .collection("users")
      .doc(mn12) // ganti sesuai id dokumen user yg sedang login
      .update({
        pass: newPass1
      });
  }).then(() => {
	  
	   ag.disabled = false
   document.getElementById("tpas1").style.display="block"
   document.getElementById("tpas1").innerHTML=`✔️ Password Berhasil di ganti<br><span style="color:black"> ${newPass1}</span>`
        ag.style.display="none";
    
  }).catch((error) => {
	
	   ag.innerHTML ='Ganti';
   document.getElementById("tpas").style.display="block"
   setTimeout(()=>{  ag.disabled = false;document.getElementById("tpas").style.display="none"},3000)
  });
}


  // Buka modal
 
  function openPasswordModal() {
	   document.getElementById("gpas").disabled=false;
	  document.getElementById("gpas").style.display = "block";
	   document.getElementById("tpas").style.display="none"
	  
	document.getElementById("tpas1").style.display="none"
	  	 document.body.style.overflow = "hidden"
    document.getElementById("passwordModal").style.display = "flex";
	
	document.getElementById("oldPass").value="";
document.getElementById("newPass").value="";
  }

  // Tutup modal
  function closePasswordModal() {
	  	 document.body.style.overflow = "scroll"
    document.getElementById("passwordModal").style.display = "none";
	document.getElementById("gpas").style.display = "block";
	document.getElementById("gpas").innerHTML="Ganti";
  }
