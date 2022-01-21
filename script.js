let brutto = document.getElementById("wpisz");
let PIT = document.getElementById("PIT")
let koszty = document.getElementById("koszty");
let ulga = document.getElementById("ulga");
let ulgaS = document.getElementById("ulgaS");
let prog = document.getElementById("prog");
let fundusz = document.getElementById("fundusz");
let FGSP = document.getElementById("FGSP");
let PPK = document.getElementById("PPK");
let body = document.body;
const form = document.getElementById("formularz");
const cont = document.getElementsByClassName("container");

// fetched question

let qPIT = document.getElementById("q-PIT");
let qKoszty = document.getElementById("q-koszty");
let qUlga = document.getElementById("q-ulga");
let qUlgaS = document.getElementById("q-ulgaS");
let qProg = document.getElementById("q-prog");
let qFundusz = document.getElementById("q-fundusz");
let qFGSP = document.getElementById("q-FGSP");
let qPPK = document.getElementById("q-PPK");

let fetchedQuestion = [qPIT, qKoszty, qUlga, qUlgaS, qProg, qFundusz, qFGSP, qPPK]


qPIT.addEventListener("click", () => {

    form.style.display = "none";

    body.innerHTML += `

    <div class="popped-q" style="display: flex"><p>PIT</p></div>

    `
}
)
qKoszty.addEventListener("click", () => {

    form.style.display = "none";

    body.innerHTML += `

    <div class="popped-q" style="display: flex"><p>KOSZTY</p></div>

    `
})
qUlga.addEventListener("click", () => {

    form.style.display = "none";

    body.innerHTML += `

    <div class="popped-q" style="display: flex"><p>ULGA</p></div>

    `
})
qUlgaS.addEventListener("click", () => {

    form.style.display = "none";

    body.innerHTML += `

    <div class="popped-q" style="display: flex"><p>ULGAS</p></div>

    `
})
qProg.addEventListener("click", () => {

    form.style.display = "none";

    body.innerHTML += `

    <div class="popped-q" style="display: flex"><p>PROG</p></div>

    `
})
qFundusz.addEventListener("click", () => {

    form.style.display = "none";

    body.innerHTML += `

    <div class="popped-q" style="display: flex"><p>FUNDUSZ</p></div>

    `
})
qFGSP.addEventListener("click", () => {

    form.style.display = "none";

    body.innerHTML += `

    <div class="popped-q" style="display: flex"><p>FGSP</p></div>

    `
})
qPPK.addEventListener("click", () => {

    form.style.display = "none";

    body.innerHTML += `

    <div class="popped-q" style="display: flex"><p>PPK</p></div>

    `
})

// default values

brutto = 0;
PIT = "Nie";
koszty = "Zwykle";
ulga = "Brak";
ulgaS = "Nie";
prog = "Pierwszy";

// functions
console.log(fetchedQuestion[0].id)
console.log(fetchedQuestion[1].id)

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


