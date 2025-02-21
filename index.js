const cislo = Number(prompt('Zadej číslo od 0 do 36'));
let vysledek = 0;
if (cislo === 0) {
    vysledek = 'nula';
} else if (((cislo > 0 && cislo <10) || (cislo >=19 && cislo <28)) && (cislo % 2 !== 0)){
    vysledek = 'liché a červené';
} else if ((cislo > 0 && cislo <=10) || (cislo >19 && cislo <=28) && (cislo % 2 === 0)) {
    vysledek = 'sudé a černé';
} else if (((cislo >=10 && cislo <=19) || (cislo >=19 && cislo <=36)) && (cislo % 2 === 0)){
    vysledek = 'sudé a červené';  
} else if ((cislo >=10 && cislo <=19) || (cislo >=19 && cislo <=36) && (cislo % 2 !== 0)){
  vysledek = 'liché a černé';
} 
document.body.innerHTML += 'Zadané číslo je: ' + vysledek + '.';