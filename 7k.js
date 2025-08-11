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
    const db = firebase.firestore();
  
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
	 result.jk=jk;
	 result.kelas=kelas;
	 result.nis=mn1;
     result.nama=mn;
    result.kode=2;
	
	let mkn=document.getElementById("menu_makan_sehat").value;
	result.menu_makan_sehat=mkn;
	send2(result);
  // Tampilkan di layar
 // document.getElementById('outputJSON').textContent = JSON.stringify(result, null, 2);

   
});
   
      let errorMsg = document.getElementById("loginError");
	  var css='';
function login(ss) {
document.querySelector("#tabelSiswa tbody").innerHTML = '';	
 css=ss;
  let username = document.getElementById("username").value.trim();
      let password = document.getElementById("password").value.trim();
	 if (username && password) {
    ss.innerHTML = '<i class="fas fa-spinner fa-spin" style="font-size: 25px; margin-right: 10px; color: white;"></i>Login';
    ss.disabled=true;
	 
       send1(username,password)
      // Login sederhana
      }
    }
	let isup=0;
	function logout() {
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
		localStorage.removeItem("sbg");
		localStorage.removeItem("jk");
		localStorage.removeItem("kelas");
		
  // Kosongkan form login
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

  // Kosongkan hasil output JSON jika perlu
  document.getElementById("outputJSON").textContent = "";
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
      console.log("Data tidak ditemukan atau password salah");
	    localStorage.removeItem("nama");
		localStorage.removeItem("nis");
			localStorage.removeItem("sbg");
        errorMsg.style.display = "block";
		css.disabled=false;
		css.innerHTML = 'Login';
		 css.innerHTML = ' Login';
		 setTimeout(()=>{errorMsg.style.display = "none";},2000)
    } else {
      querySnapshot.forEach((doc) => {
        console.log("Nama siswa:", doc.data().nama);
		
		
									  
								  document.getElementsByClassName("container1")[0].style.marginTop="0px"
									 css.disabled=false;
									 if(doc.data().sbg==1){
									document.getElementById("loginCard").style.display = "none";
									document.getElementById("mainForm").style.display = "block";
									document.getElementById("logoutBtn").innerHTML=`
							  <div style="display: flex; justify-content: space-between; align-items: center;">
								<span>Selamat Datang <br><b> ${doc.data().nama}</b></span>
								<a href="#" onclick="logout()" style="color: white; text-decoration: none;"> Logout</a>
							  </div>
							`
									}
									  if(doc.data().sbg==2 || doc.data().sbg==3){  
							 
								if(doc.data().sbg==3){document.getElementById("jud").innerText='Daftar Siswa'}
								else{document.getElementById("jud").innerText='Daftar Siswa Perwalian Anda'}		  
									document.getElementById("loginCard").style.display = "none";
									document.getElementById("mainForm1").style.display = "block";
									document.getElementById("logoutBtn1").innerHTML=`
							  <div style="display: flex; justify-content: space-between; align-items: center;">
								<span>Selamat Datang <br><b> ${doc.data().nama}</b></span>
								<a href="#" onclick="logout()" style="color: white; text-decoration: none;">Logout</a>
							  </div>
							`
							 
								   send3(doc.data().nama,doc.data().sbg)
								}
									
									errorMsg.style.display = "none";
									localStorage.setItem("nama", doc.data().nama);
									localStorage.setItem("nis",doc.data().nis);
									localStorage.setItem("sbg", doc.data().sbg);
									localStorage.setItem("kelas", doc.data().kelas);
									localStorage.setItem("jk", doc.data().jk)
									
									css.innerHTML = 'Login';
									
									
									

								  
		
		 
		
      });
    }
  })
  .catch((error) => {css.disabled=false;
	css.innerHTML = 'Login';
    console.error("Error mencari data:", error);
  });

  
   
};

if(localStorage.getItem("nama") && localStorage.getItem("nis") && localStorage.getItem("sbg")==1 ){
document.getElementsByClassName("container1")[0].style.marginTop="0px"
let mn=localStorage.getItem("nama")
document.getElementById("logoutBtn").innerHTML=`
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <span>Selamat Datang <br><b> ${mn}</b></span>
    <a href="#" onclick="logout()" style="color: white; text-decoration: none;">Logout</a>
  </div>
`
document.getElementById("loginCard").style.display = "none";
        document.getElementById("mainForm").style.display = "block";
		 
}

if(localStorage.getItem("nama") && localStorage.getItem("nis") && ((localStorage.getItem("sbg")==2) || localStorage.getItem("sbg")==3 )){
document.getElementsByClassName("container1")[0].style.marginTop="0px"
let mn=localStorage.getItem("nama")
let sb=localStorage.getItem("sbg")
document.getElementById("logoutBtn1").innerHTML=`
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <span>Selamat Datang <br><b> ${mn}</b></span>
    <a href="#" onclick="logout()" style="color: white; text-decoration: none;">Logout</a>
  </div>
`
  
       send3(mn,sb)
	 
document.getElementById("loginCard").style.display = "none";
        document.getElementById("mainForm1").style.display = "block";
}
//eval(atob('aWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gIjdrLnNtcG45c2luamFpLnNjaC5pZCIpIHsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTCA9ICI8Y2VudGVyPjxoMT5Ba3NlcyBkaXRvbGFrPC9oMT48L2NlbnRlcj4iOyB9'))
function send2(data){
	
	
	 const tanggal = data.tanggal_bangun_pagi;
  
   
	
  var bagian = tanggal.split("-"); // ["2025", "08", "07"]
  var tglFormatBaru = bagian[2] + "-" + bagian[1] + "-" + bagian[0];


  const nis1 = data.nis;
   var now = new Date();
 

  
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

   var judul_buku1 = (data.judul_buku ) ? "Judul : "+data.judul_buku+", informasi yg didapat : "+data.informasi_didapat : ""
       
   var bermasyarakat1 = (data.bermasyarakat === "Ya") ? 'Ya Kegiatan : '+data.kegiatan_bermasyarakat+", Persaaan "+data.perasaan_bermasyarakat : 'Tidak alasan '+data.alasan_bermasyarakat;
     
 var tidur_cepat1 = (data.tidur_cepat === "Ya") ? 'Ya Jam tidur : '+data.jam_tidur :  'Tidak Jam tidur :'+data.jam_tidur+'  Alasan : '+data.alasan_tidur_cepat;

   var menu_makan_sehat1 = (data.menu_makan_sehat) ? data.menu_makan_sehat :  '';
	
	
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
	document.getElementById('tmodal').innerHTML="<b>"+"Gagal disimpan data sudah ada"+"</b>"
    document.getElementById("kdata").innerHTML='Kirim Jawaban';
     document.getElementById("kdata").disabled=false;
      console.log("⚠️ Data sudah ada, tidak disimpan.");
    } else {
      db.collection("datasiswa").add({
          tgl: tglFormatBaru ,
		  nis: nis1,
		  nama:nama1,
		  jk:jk1,
		  kelas:kls1,
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
	document.getElementById('tmodal').innerHTML="<b>"+"Data behasil di simpan"+"</b>"
    document.getElementById("kdata").innerHTML='Kirim Jawaban';
     document.getElementById("kdata").disabled=false;
        console.log("✅ Data berhasil ditambahkan.");
      })
      .catch(error => {
        console.error("❌ Error menambahkan data:", error);
		 document.getElementById("kdata").disabled=false;
   document.getElementById("kdata").innerHTML='Kirim Jawaban';
    document.getElementById("loadingModal").style.display = "block";
	document.getElementById('tmodal').innerHTML="<b>Tidak dapat terhubung ke server</b>"
  
      });
    }
  })
  .catch(error => {
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
    console.warn("Peran (sbg) tidak dikenali:", sbg);
    document.getElementById("lod").style.display = "none";
    return;
  }

  query.get()
    .then((querySnapshot) => {
      if (querySnapshot.empty) {
        console.log("⚠️ Data tidak ditemukan");
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
            <td>${d.nama}</td>
            <td style='text-align:center'>${d.jk}</td>
            <td style='text-align:center'>${d.kelas}</td>
          </tr>`;
        });

        tbody.innerHTML = ct;

        // Pasang event listener klik per baris
        tbody.querySelectorAll("tr").forEach(row => {
          row.addEventListener("click", function () {
            const nis2 = this.cells[1].textContent;
            rekap(nis2);
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
function rekap(niss){
 let ssbg=localStorage.getItem("sbg");
document.body.style.overflow = "hidden"
 const rekapBody = document.getElementById("rekapBody");
var ct=''
var mnn="";
var cpp=0;
var num=0;
 
db.collection("datasiswa")
  .where("nis", "==", niss)
  .get()
  .then(querySnapshot => {
    if (querySnapshot.empty) {
      console.log("⚠️ Tidak ada data dengan nis=2622");
	  document.getElementById("loadingModal").style.display = "block";
	document.getElementById('tmodal').innerHTML="<b>Tidak ada data</b>"
    } else {
		var nom=1;
		var mnn='';
      querySnapshot.forEach(doc => {
        console.log(`📄 ID: ${doc.id}`, doc.data());
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
	  rekapBody.innerHTML=ct; 
	document.getElementById("pp").innerHTML="Rekap Kegiatan Siswa : "+mnn;
    modal1.style.display = "block";
	  
    }
  })
  .catch(error => {
	  
    console.error("❌ Error mencari data:", error);
  });




   
}

var  bdata='';
 function sendp(){
	 
	  let dnis=localStorage.getItem("nis");
	 
	 
	 
 
  document.getElementById("kdata2").disabled=true;
  document.getElementById("kdata2").innerHTML='<i class="fas fa-spinner fa-spin" style="font-size: 25px; margin-right: 10px; color: white;"></i>Lihat Daftar Inputan';
  
  db.collection("datasiswa")
  .where("nis", "==", dnis)
  .get()
  .then(querySnapshot => {
    if (querySnapshot.empty) {
		document.getElementById("kdata2").disabled=false;
      console.log("⚠️ Tidak ada data dengan NIS 2422");
	  document.getElementById("kdata2").innerHTML='Lihat Daftar Inputan';
	  document.getElementById("loadingModal").style.display = "block";
	  document.getElementById('tmodal').innerHTML="<b>Tidak ada data</b>"
    } else {
     
		
													
								 
									 document.getElementById("kdata2").disabled=false;
								 document.getElementById("kdata2").innerHTML=' Lihat Daftar Inputan';
									 
								 
									 document.body.style.overflow = "hidden"
								 const rekapBody = document.getElementById("rekapBody");
								var ct=''
								var mnn="";
								var cpp=0;
								 var nom=1;
		querySnapshot.forEach(doc => {
        console.log("📄 ID:", doc.id, "Data:", doc.data()); 
							 
								 mnn=doc.data().nama;
								   
							 
								  cpp=1;
								   let ort = (doc.data().ortu == 0)
								  ? `<button class='btn' onclick='verifikasi(this, 1, "${doc.data().tgl}", "${doc.data().nis}")' style='font-size:13px;padding:5px'>
									  <i class='fa-solid fa-user'></i> Verifikasi
									 </button>`
								  : `<span class='success'><i class='fa-solid fa-circle-check' style='font-size: 20px'></i></span>`;

								   let gr=(doc.data().guru==0) ? "<button disabled class='btn' style='font-size:13px;padding:5px;background:#cfd1bd'><i class='fa-solid fa-user'  ></i> Verifikasi</button>" : "<span class='success'><i class='fa-solid fa-circle-check' style='font-size: 20px'></i></span>"
									  ct+="<tr><td style='text-align:center'>"+(nom++)+"</td><td class='nowrap' style='text-align:center;width:100px'>"+doc.data().tgl+"</td><td>"+doc.data().bagunpagi+"</td><td style='text-align:center'>"+doc.data().beribadah+"</td><td style='text-align:center'>"+doc.data().olahraga+"</td><td style='text-align:center'>"+doc.data().makansehat+"</td><td style='text-align:center'>"+doc.data().belajar+"</td><td style='text-align:center'>"+doc.data().bermasyarakat+"</td><td style='text-align:center'>"+doc.data().tidurcepat+"</td><td style='text-align:center;width:100px'>"+ort+"</td><td style='text-align:center;width:100px'>"+gr+"</td></tr>"
								   
								  
								 
								  
									if(cpp==1){
									rekapBody.innerHTML=ct; 
									document.getElementById("pp").innerHTML="Rekap Kegiatan Siswa : "+mnn;
									modal1.style.display = "block";
								   }
								   else{
									document.getElementById("loadingModal").style.display = "block";
									document.getElementById('tmodal').innerHTML="<b>Tidak ada data</b>"
								   }
									 
		   
		   
      });
    }
  })
  .catch(error => {
	  document.getElementById("kdata2").disabled=false;
   document.getElementById("kdata2").innerHTML='Lihat Daftar Inputan';
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
		  console.log("⚠️ Data tidak ditemukan");
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
								   cell.innerHTML = `<span class="success"><i class="fa-solid fa-circle-check" style="font-size: 24px"></i> ${tipe1 === 1 ? '' : ''}</span>`;
								console.log(`✅ Data dengan ID ${doc.id} berhasil diupdate (guru=1)`);
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
								  console.log("❌ Data tidak ditemukan");
								  return;
								}

								querySnapshot.forEach((doc) => {
								  db.collection("datasiswa").doc(doc.id).update({
									guru: 1
								  })
								  .then(() => {
									   cell.innerHTML = `<span class="success"><i class="fa-solid fa-circle-check" style="font-size: 24px"></i> ${tipe1 === 1 ? '' : ''}</span>`;
									console.log(`✅ Data dengan ID ${doc.id} berhasil diupdate (guru=1)`);
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









