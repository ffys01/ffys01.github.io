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

// qPIT.setAttribute(role, 'button')
// qKoszty.setAttribute(role, 'button')
// qUlga.setAttribute(role, 'button')
// qUlgaS.setAttribute(role, 'button')
// qProg.setAttribute(role, 'button')
// qFundusz.setAttribute(role, 'button')
// qFGSP.setAttribute(role, 'button')
// qPPK.setAttribute(role, 'button')

// default values

brutto = 0;
PIT = "Nie";
koszty = "Zwykle";
ulga = "Brak";
ulgaS = "Nie";
prog = "Pierwszy";


// functions
console.log(fetchedQuestion[0].id)
function popQ() {
    switch(brutto) {
    case 0:
        fetchedQuestion[0].id = "q-PIT";
        form.style.display = "none"

        body.innerHTML += `

        <div class="popped-q" style="display: flex"><p>PIT</p></div>
        `
        break;
    case 1:
        fetchedQuestion[1].id = "q-koszty";
        form.style.display = "none"

        body.innerHTML += `

        <div class="popped-q" style="display: flex"><p>KOSZTY</p></div>
        `
        break;
}
    // if(e = "q-PIT"){
    //     form.style.display = "none"

    //     body.innerHTML += `

    //     <div class="popped-q" style="display: flex"><p>PIT</p></div>
    //     `
    // }else if(e = "q-koszty") {
    //     form.style.display = "none"

    //     body.innerHTML += `

    //     <div class="popped-q" style="display: flex"><p>KOSZTY</p></div>
    //     `
    // }
};

// function fetchQuestionId(e) {
//     return e;
// }








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


