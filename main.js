var laukums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
shuffle(laukums); 

var atverta1 = 0; // nulle nozime, ka karts nav atverta
var atverta2 = 0; // otra karts atverta
var gajieni = 0; 
var pasleptas = 0;



function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function cikAtvertas() { // noskaidro, cik laukuma atvertas kartis
    let rez = 0;
    if (atverta1 > 0) { rez++; }
    if (atverta2 > 0) { rez++; }
    return rez;
}

function aizvert() { 
    if (cikAtvertas() == 2 && laukums[atverta1 - 1] == laukums[atverta2 - 1]) { // paslepj kartis, ja vienadas
        document.getElementById('bilde' + atverta1).style.visibility = "hidden";
        document.getElementById('bilde' + atverta2).style.visibility = "hidden";
        pasleptas += 2;
    } else { // aizver abas kartis, ja nav vienadas
        document.getElementById('bilde' + atverta1).src= "image/backgr.png";
        document.getElementById('bilde' + atverta2).src= "image/backgr.png";
    }
    document.getElementById('bilde' + atverta1).style.transform = "none"; 
    document.getElementById('bilde' + atverta2).style.transform = "none"; 
    atverta1 = 0;
    atverta2 = 0;
    if (pasleptas >= 12) { // Speles beigas
      document.getElementById("myDialog").showModal();
      let beiguRez = gajieni;
      document.getElementById("beiguRez").innerHTML = beiguRez;
    }
}

function poga(){ // Restartet speli
    location.reload();
}

function atvert(bildesNr) { // funkcija atver to karti, kuras numurs ir parametra
    if (cikAtvertas() < 2 && bildesNr != atverta1) {
        // versim vala nospiesto karti, ja sobrid kopuma atvertas ir mazak neka divas UN atverama karts nav ta pati, kuru atvera pirmo
        let karts = document.getElementById('bilde' + bildesNr);
        karts.src='image/' + laukums[bildesNr - 1] + '.png';
        karts.style.transform = "rotateY(180deg)";
        if (atverta1 == 0 ) { // ja nav atverta pirma karts, tad to atveram
            atverta1 = bildesNr;
        } else if (atverta2 == 0 && bildesNr != atverta1) { // ja ir javer vala otra karts
            atverta2 = bildesNr;
            setTimeout(function(){aizvert();}, "500")
            document.getElementById("gajieni").innerHTML = ++gajieni; // Izvada gajienu skaitu
        }
    }
}
 

