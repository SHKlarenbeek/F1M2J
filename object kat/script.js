const kat1= {
    naam: "mila",
    leeftijd: 14,
    foto: "https://www.rtlnieuws.nl/sites/default/files/content/images/eht/2020/93/1544448883_catheaderfoto.jpg?itok=6B0jr3Rj&width=1024&height=576&impolicy=semi_dynamic"
}

   ///  console.log(kat1.naam)
   ///  console.log(kat1.leeftijd)
    /// console.log(kat1.foto)
    /// console.log(kat1)

let nHeader = document.createElement("h1");
nHeader.innerHTML = kat1.naam;
document.body.appendChild(nHeader);

let Leeftijd = document.createElement("h1");
Leeftijd.innerHTML = kat1.leeftijd;
document.body.appendChild(Leeftijd);

let foto = document.createElement("img");
foto.src = kat1.foto;
document.body.appendChild(foto);

///document.getElementById("").innerHTML = kat1.naam
///document.getElementById("").innerHTML = kat1.leeftijd
///document.getElementById("").src = kat1.foto