
  
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
	  let bb={"kode":1,"username":username,"password":password}
       send1(bb)
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
  // Kosongkan form login
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

  // Kosongkan hasil output JSON jika perlu
  document.getElementById("outputJSON").textContent = "";
}

let glink=window.atob('aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J4UFhWdUNSVTQyMVQwUE5qeS16VndhcFhvVFFaaXU3SzVUZmRWLUNKMmEtTU92czdfS09IUVIzNnB2eWh4UGxRVmd0QS9leGVj')
function send1(data){
  errorMsg.style.display = "none";
var xhr = new XMLHttpRequest();
  xhr.open("POST", glink); // GANTI LINK
   

  xhr.onload = function() {
    if (xhr.status === 200) {  
	 
    let bdata=JSON.parse(xhr.responseText); // tampilkan respon dari server
  
	  if (bdata.kode==7) {  
	  document.getElementsByClassName("container1")[0].style.marginTop="0px"
	     css.disabled=false;
		 if(bdata.sbg==1){
        document.getElementById("loginCard").style.display = "none";
        document.getElementById("mainForm").style.display = "block";
		document.getElementById("logoutBtn").innerHTML=`
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <span>Selamat Datang <br> ${bdata.nama}</span>
    <a href="#" onclick="logout()" style="color: white; text-decoration: none;"> Logout</a>
  </div>
`
		}
		  if(bdata.sbg==2 || bdata.sbg==3){  
 
	if(bdata.sbg==3){document.getElementById("jud").innerText='Daftar Siswa'}
	else{document.getElementById("jud").innerText='Daftar Siswa Perwalian Anda'}		  
        document.getElementById("loginCard").style.display = "none";
        document.getElementById("mainForm1").style.display = "block";
		document.getElementById("logoutBtn1").innerHTML=`
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <span>Selamat Datang <br> ${bdata.nama}</span>
    <a href="#" onclick="logout()" style="color: white; text-decoration: none;">Logout</a>
  </div>
`
let bb1={"kode":3,"nama":bdata.nama}
       send3(bb1)
	}
		
        errorMsg.style.display = "none";
		localStorage.setItem("nama", bdata.nama);
		localStorage.setItem("nis", bdata.nis);
		localStorage.setItem("sbg", bdata.sbg);
		
		css.innerHTML = 'Login';
		
		
		

      } else {
	   localStorage.removeItem("nama");
		localStorage.removeItem("nis");
			localStorage.removeItem("sbg");
        errorMsg.style.display = "block";
		css.disabled=false;
		css.innerHTML = 'Login';
		 css.innerHTML = ' Login';
		 setTimeout(()=>{errorMsg.style.display = "none";},2000)
      }
 
    } else {
	css.disabled=false;
	css.innerHTML = 'Login';
      alert("Terjadi kesalahan saat mengirim data.");
    }
  };
  
  xhr.onerror = function() {
    alert("Tidak dapat terhubung ke server.");
  };

  xhr.send(JSON.stringify(data));
};

if(localStorage.getItem("nama") && localStorage.getItem("nis") && localStorage.getItem("sbg")==1 ){
document.getElementsByClassName("container1")[0].style.marginTop="0px"
let mn=localStorage.getItem("nama")
document.getElementById("logoutBtn").innerHTML=`
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <span>Selamat Datang <br> ${mn}</span>
    <a href="#" onclick="logout()" style="color: white; text-decoration: none;">Logout</a>
  </div>
`
document.getElementById("loginCard").style.display = "none";
        document.getElementById("mainForm").style.display = "block";
		 
}

if(localStorage.getItem("nama") && localStorage.getItem("nis") && ((localStorage.getItem("sbg")==2) || localStorage.getItem("sbg")==3 )){
document.getElementsByClassName("container1")[0].style.marginTop="0px"
let mn=localStorage.getItem("nama")
document.getElementById("logoutBtn1").innerHTML=`
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <span>Selamat Datang <br> ${mn}</span>
    <a href="#" onclick="logout()" style="color: white; text-decoration: none;">Logout</a>
  </div>
`
 let bb={"kode":3,"nama":mn}
       send3(bb)
	 
document.getElementById("loginCard").style.display = "none";
        document.getElementById("mainForm1").style.display = "block";
}
eval(atob('aWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gIjdrLnNtcG45c2luamFpLnNjaC5pZCIpIHsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTCA9ICI8Y2VudGVyPjxoMT5Ba3NlcyBkaXRvbGFrPC9oMT48L2NlbnRlcj4iOyB9'))
function send2(data){
  document.getElementById("kdata").disabled=true;
 document.getElementById("kdata").innerHTML='<i class="fas fa-spinner fa-spin" style="font-size: 25px; margin-right: 10px; color: white;"></i>Kirim Jawaban';
  
var xhr = new XMLHttpRequest();
  xhr.open("POST", glink); // GANTI LINK
   

  xhr.onload = function() {
    if (xhr.status === 200) {  
	   if( xhr.responseText =="Berhasil Disimpan"){isup=0;}
	document.getElementsByClassName("container1")[0].style.marginTop="0px"
	//alert(xhr.responseText)
	 document.getElementById("loadingModal").style.display = "block";
	document.getElementById('tmodal').innerHTML="<b>"+xhr.responseText+"</b>"
    document.getElementById("kdata").innerHTML='Kirim Jawaban';
     document.getElementById("kdata").disabled=false;
 	
	   }
	   }
  
  xhr.onerror = function() {
   document.getElementById("kdata").disabled=false;
   document.getElementById("kdata").innerHTML='Kirim Jawaban';
    document.getElementById("loadingModal").style.display = "block";
	document.getElementById('tmodal').innerHTML="<b>Tidak dapat terhubung ke server</b>"
     
  };

  xhr.send(JSON.stringify(data));
};
function closeModal() {
    document.body.style.overflow = "scroll"	
  document.getElementById("loadingModal").style.display = "none";
}

let mn1=localStorage.getItem("nama")
 
 var bdata='';

function send3(data){
   document.getElementById("lod").style.display="block"
var xhr = new XMLHttpRequest();
  xhr.open("POST", glink); // GANTI LINK
   

  xhr.onload = function() {
    if (xhr.status === 200) {  
	     document.getElementById("kdata3").style.display = "block";
	 bdata=JSON.parse(xhr.responseText)
	 document.getElementById("lod").style.display="none"
  var tbody = document.getElementById("tabelSiswa").getElementsByTagName("tbody")[0];
var ct=''
  for (var i = 0; i < bdata.data1.length; i++) {
      ct+="<tr><td style='text-align:center'>"+(i+1)+"</td><td style='text-align:center'>"+bdata.data1[i][0]+"</td><td>"+bdata.data1[i][1]+"</td><td style='text-align:center'>"+bdata.data1[i][2]+"</td><td style='text-align:center'>"+bdata.data1[i][3]+"</td></tr>"
  }
	tbody.innerHTML=ct; 
	
	 const rows = document.querySelectorAll("#tabelSiswa tbody tr");

    for (let i = 0; i < rows.length; i++) {
      rows[i].addEventListener("click", function () {
        const nis2 = this.cells[1].textContent; // ambil isi kolom ke-2 (NIS)
		rekap(nis2)
        return;
      });
    }
	
	
 	
	   }
	   }
  
  xhr.onerror = function() {
   
    
     
  };

  xhr.send(JSON.stringify(data));
};
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
  for (var i = 1; i < bdata.data2.length; i++) {
   
  if (bdata.data2[i][2]==niss){
  mnn=bdata.data2[i][3]
  cpp=1;
  num++;
     // ct+="<tr><td style='text-align:center'>"+(i)+"</td><td class='nowrap' style='text-align:center;width:100px'>"+bdata.data2[i][1]+"</td><td>"+bdata.data2[i][6]+"</td><td style='text-align:center'>"+bdata.data2[i][7]+"</td><td style='text-align:center'>"+bdata.data2[i][8]+"</td><td style='text-align:center'>"+bdata.data2[i][9]+"</td><td style='text-align:center'>"+bdata.data2[i][10]+"</td><td style='text-align:center'>"+bdata.data2[i][11]+"</td><td style='text-align:center'>"+bdata.data2[i][12]+"</td></tr>"
let gr=''; 
 if (ssbg==2){
   gr = (bdata.data2[i][14] == 0)
  ? `<button class='btn' onclick='verifikasi(this, 2, "${bdata.data2[i][1]}", "${bdata.data2[i][2]}")' style='font-size:13px;padding:5px'>
      <i class='fa-solid fa-user'></i> Verifikasi
     </button>`
  : `<span class='success'><i class='fa-solid fa-circle-check' style='font-size: 20px'></i></span>`;
  
  }
  else {
	  gr=(bdata.data2[i][14]==0) ? "<button disabled class='btn' style='font-size:13px;padding:5px;background:#cfd1bd'><i class='fa-solid fa-user'  ></i> Verifikasi</button>" : "<span class='success'><i class='fa-solid fa-circle-check' style='font-size: 20px'></i></span>"
	  
  }

   let ort=(bdata.data2[i][13]==0) ? "<button disabled class='btn' style='font-size:13px;padding:5px;background:#cfd1bd'><i class='fa-solid fa-user'  ></i> Verifikasi</button>" : "<span class='success'><i class='fa-solid fa-circle-check' style='font-size: 20px'></i></span>"
      ct+="<tr><td style='text-align:center'>"+num+"</td><td class='nowrap' style='text-align:center;width:100px'>"+bdata.data2[i][1]+"</td><td>"+bdata.data2[i][6]+"</td><td style='text-align:center'>"+bdata.data2[i][7]+"</td><td style='text-align:center'>"+bdata.data2[i][8]+"</td><td style='text-align:center'>"+bdata.data2[i][9]+"</td><td style='text-align:center'>"+bdata.data2[i][10]+"</td><td style='text-align:center'>"+bdata.data2[i][11]+"</td><td style='text-align:center'>"+bdata.data2[i][12]+"</td><td style='text-align:center;width:100px'>"+ort+"</td><td style='text-align:center;width:100px'>"+gr+"</td></tr>"
   
  
  
  }
  }
    if(cpp==1){
	rekapBody.innerHTML=ct; 
	document.getElementById("pp").innerHTML="Rekap Kegiatan Siswa : "+mnn;
    modal1.style.display = "block";
   }
   else{
    document.getElementById("loadingModal").style.display = "block";
	document.getElementById('tmodal').innerHTML="<b>Tidak ada data</b>"
   }
}

var  bdata='';
 function sendp(){
	 
	  let dnis=localStorage.getItem("nis");
	  let bb2={"kode":4,"nis":dnis}
     
	 if(isup==1){               var ct='';
																  var mnn="";
														var cpp=0;
														 
														  for (var i = 0; i < bdata.length; i++) {
														   
														   
														  mnn=bdata[i][3]
														  cpp=1;
														   let ort = (bdata[i][13] == 0)
														  ? `<button class='btn' onclick='verifikasi(this, 1, "${bdata[i][1]}", "${bdata[i][2]}")' style='font-size:13px;padding:5px'>
															  <i class='fa-solid fa-user'></i> Verifikasi
															 </button>`
														  : `<span class='success'><i class='fa-solid fa-circle-check' style='font-size: 24px'></i></span>`;

														   let gr=(bdata[i][14]==0) ? "<button disabled class='btn' style='font-size:13px;padding:5px;background:#cfd1bd'><i class='fa-solid fa-user'  ></i> Verifikasi</button>" : "<span class='success'><i class='fa-solid fa-circle-check' style='font-size: 24px'></i></span>"
															  ct+="<tr><td style='text-align:center'>"+(i+1)+"</td><td class='nowrap' style='text-align:center;width:100px'>"+bdata[i][1]+"</td><td>"+bdata[i][6]+"</td><td style='text-align:center'>"+bdata[i][7]+"</td><td style='text-align:center'>"+bdata[i][8]+"</td><td style='text-align:center'>"+bdata[i][9]+"</td><td style='text-align:center'>"+bdata[i][10]+"</td><td style='text-align:center'>"+bdata[i][11]+"</td><td style='text-align:center'>"+bdata[i][12]+"</td><td style='text-align:center;width:100px'>"+ort+"</td><td style='text-align:center;width:100px'>"+gr+"</td></tr>"
														   
														  }
														 
														  
															if(cpp==1){
															document.body.style.overflow = "hidden"
															rekapBody.innerHTML=ct; 
															document.getElementById("pp").innerHTML="Rekap Kegiatan Siswa : "+mnn;
															modal1.style.display = "block";
														   }
														   else{
															   document.body.style.overflow = "hidden"
															document.getElementById("loadingModal").style.display = "block";
															document.getElementById('tmodal').innerHTML="<b>Tidak ada data</b>"
														   }
																 return;
		 
	 }
	
 
  document.getElementById("kdata2").disabled=true;
  document.getElementById("kdata2").innerHTML='<i class="fas fa-spinner fa-spin" style="font-size: 25px; margin-right: 10px; color: white;"></i>Lihat Daftar Inputan';
  
var xhr = new XMLHttpRequest();
  xhr.open("POST", glink); // GANTI LINK
   

  xhr.onload = function() {
    if (xhr.status === 200) {  
	 isup=1;
	 document.getElementById("kdata2").disabled=false;
 document.getElementById("kdata2").innerHTML=' Lihat Daftar Inputan';
	  bdata=JSON.parse(xhr.responseText)
 
	 document.body.style.overflow = "hidden"
 const rekapBody = document.getElementById("rekapBody");
var ct=''
var mnn="";
var cpp=0;
 
  for (var i = 0; i < bdata.length; i++) {
   
   
  mnn=bdata[i][3]
  cpp=1;
   let ort = (bdata[i][13] == 0)
  ? `<button class='btn' onclick='verifikasi(this, 1, "${bdata[i][1]}", "${bdata[i][2]}")' style='font-size:13px;padding:5px'>
      <i class='fa-solid fa-user'></i> Verifikasi
     </button>`
  : `<span class='success'><i class='fa-solid fa-circle-check' style='font-size: 20px'></i></span>`;

   let gr=(bdata[i][14]==0) ? "<button disabled class='btn' style='font-size:13px;padding:5px;background:#cfd1bd'><i class='fa-solid fa-user'  ></i> Verifikasi</button>" : "<span class='success'><i class='fa-solid fa-circle-check' style='font-size: 20px'></i></span>"
      ct+="<tr><td style='text-align:center'>"+(i+1)+"</td><td class='nowrap' style='text-align:center;width:100px'>"+bdata[i][1]+"</td><td>"+bdata[i][6]+"</td><td style='text-align:center'>"+bdata[i][7]+"</td><td style='text-align:center'>"+bdata[i][8]+"</td><td style='text-align:center'>"+bdata[i][9]+"</td><td style='text-align:center'>"+bdata[i][10]+"</td><td style='text-align:center'>"+bdata[i][11]+"</td><td style='text-align:center'>"+bdata[i][12]+"</td><td style='text-align:center;width:100px'>"+ort+"</td><td style='text-align:center;width:100px'>"+gr+"</td></tr>"
   
  }
 
  
    if(cpp==1){
	rekapBody.innerHTML=ct; 
	document.getElementById("pp").innerHTML="Rekap Kegiatan Siswa : "+mnn;
    modal1.style.display = "block";
   }
   else{
    document.getElementById("loadingModal").style.display = "block";
	document.getElementById('tmodal').innerHTML="<b>Tidak ada data</b>"
   }
	 
	 
 	
	   }
	   }
  
  xhr.onerror = function() {
   document.getElementById("kdata2").disabled=false;
   document.getElementById("kdata2").innerHTML='Lihat Daftar Inputan';
    document.getElementById("loadingModal").style.display = "block";
	document.getElementById('tmodal').innerHTML="<b>Tidak dapat terhubung ke server</b>"
     
  };
  xhr.send(JSON.stringify(bb2));
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
	 
var xhr = new XMLHttpRequest();
  xhr.open("POST", glink); // GANTI LINK
   

  xhr.onload = function() {
    if (xhr.status === 200) {  
	 
	
	 
	   cell.innerHTML = `<span class="success"><i class="fa-solid fa-circle-check" style="font-size: 24px"></i> ${tipe1 === 1 ? '' : ''}</span>`;
	    var  gdata=JSON.parse(xhr.responseText)
   
       
		if (gdata.data1 == 2) {
  for (let i = 1; i < bdata.data2.length; i++) {
    if (bdata.data2[i][1] == gdata.data2 && bdata.data2[i][2] == gdata.data3) {
      bdata.data2[i][14] = 1;
      break;
    }
  }
}  
		if (gdata.data1 == 1) {
  for (let i = 0; i < bdata.length; i++) {
    if (bdata[i][1] == gdata.data2 && bdata[i][2] == gdata.data3) {
      bdata[i][13] = 1;
      break;
    }
  }
}  	  
	}
  }
	 
  xhr.onerror = function() {
    alert('error')
  };
  xhr.send(JSON.stringify(bv));
 }
document.body.style.background = "linear-gradient(135deg, #dbe9f4 0%, #fce8e6 25%, #e6f7f1 50%, #fff4e6 75%, #e8eaf6 100%)";
document.body.style.backgroundAttachment = "fixed";








