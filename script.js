let brutto = document.getElementById("wpisz");
let PIT = document.getElementById("PIT")
let koszty = document.getElementById("koszty");
let ulga = document.getElementById("ulga");
let ulgaS = document.getElementById("ulgaS");
let prog = document.getElementById("prog");
let fundusz = document.getElementById("fundusz");
let FGSP = document.getElementById("FGSP");
let PPK = document.getElementById("PPK");

// default values

brutto = 0;
PIT = "Nie";
koszty = "Zwykle";
ulga = "Brak";
ulgaS = "Nie";
prog = "Pierwszy";

// functions

function onChange_(e, x) {
   if(x = "wpisz"){
       brutto = e;
       console.log(brutto);
   }
   else if(x = "PIT"){
       PIT = e;
       console.log(PIT)
   }
   else if(x = "koszty"){
    koszty = e;
    console.log(koszty);
    }
    else if(x = "ulga"){
        ulga = e;
        console.log(ulga);
    }
    else if(x = "ulgaS"){
        ulgaS = e;
        console.log(ulgaS);
    }
    else if(x = "prog"){
        prog = e;
        console.log(prog);
    }
}

function checkCheckbox() {
    console.log(fundusz.checked);
    console.log(FGSP.checked);
    console.log(PPK.checked);
}
