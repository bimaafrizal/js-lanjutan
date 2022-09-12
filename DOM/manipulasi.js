//membuat element
const newElement = document.createElement('p');
newElement.innerText = "Selamat datang ke html";
//bisa juga menambahkan tag didalamnya
newElement.innerHTML = "<b>Selamat datang</b> ke HTML kosong ini :)";

const newElementImg = document.createElement('img');
//setting attribute
newElementImg.setAttribute("src", "https://picsum.photos/200/300")
//kode di atas tidak akan muncul karena belum ditambahkan ke tag html menambahkan ke html

//manipulasi attribute
const gambar = document.getElementById("gambar");
gambar.setAttribute("width", "300"); 
gambar.setAttribute("height", "21%"); 

//mencoba merubah tombol play
const buttons = document.querySelectorAll(".button");
const playButton = buttons[3];
// playButton.setAttribute("disabled", "disabled");
//mengembalikan semua element yang terdapat di dalam tag
const playButtonElement = playButton.childNodes[0];
playButtonElement.setAttribute('disabled', 'disabled');


//memanipulasi konten melalui innerText, inner html, style.property
//inner html mengambil semua termasuk tag
//inner text yang diambil textnya saja

const links = document.getElementById("dicodingLink");
links.innerText = "Belajar Coding";

links.innerHTML = "<i>Belajar Coding</i>";

const buttons2 = document.querySelectorAll(".button");
for(let item of buttons2) {
    item.childNodes[0].style.borderRadius = "4px";
}


//menambahkan elemen HTML ke DOM
//oppendChild => menambahkan elemen html pada bagian terakhir pada element parentnya
const newInsertElement = document.createElement("li");
newInsertElement.innerText = "Ayo belajar!";
const kata = document.getElementById("kata");
kata.appendChild(newInsertElement);

//insertBefore
const elementAwal = document.createElement("li");
elementAwal.innerText = "Bangun tidur woy!";
const awalKata = document.getElementById("awal");
kata.insertBefore(elementAwal, awalKata);