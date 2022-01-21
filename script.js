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
const h1 = document.getElementById("h-1")
let poppedQ = document.getElementById("popped-q");

// default values

brutto = 0;
PIT = "Nie";
koszty = "Zwykle";
ulga = "Brak";
ulgaS = "Nie";
prog = "Pierwszy";

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






// functions
qPIT.addEventListener("click", () => {

    poppedQ.style.display = "flex";
    form.style.display = "none";
    h1.style.display = "none";

    poppedQ.innerHTML = `
        <div class="nav-q">
            <h3>PIT</h3>
            <a href="#" id="exit" onclick="exit()" ><img class="x" src="./x.png"></a>
        </div>
        <div class="description">
            <h4>Tak</h4><p>Wybierz tą opcje jeżeli nie ukończyłeś <b>26</b> roku życia.</p>
            <h4>Nie</h4><p>Wybierz tą opcje jeżeli ukończyłeś <b>26</b> rok życia.</p>
        </div>

    `
}
)
qKoszty.addEventListener("click", () => {

    poppedQ.style.display = "flex";
    form.style.display = "none";
    h1.style.display = "none";

    poppedQ.innerHTML = `
        <div class="nav-q">
            <h3>PIT</h3>
            <a href="#" id="exit" onclick="exit()" ><img class="x" src="./x.png"></a>
        </div>
        <div class="description">
            <h4>Tak</h4><p>Wybierz tą opcje jeżeli nie ukończyłeś <b>26</b> roku życia.</p>
            <h4>Nie</h4><p>Wybierz tą opcje jeżeli ukończyłeś <b>26</b> rok życia.</p>
        </div>

    `
})
qUlga.addEventListener("click", () => {

    poppedQ.style.display = "flex";
    form.style.display = "none";
    h1.style.display = "none";

    poppedQ.innerHTML = `
        <div class="nav-q">
            <h3>PIT</h3>
            <a href="#" id="exit" onclick="exit()" ><img class="x" src="./x.png"></a>
        </div>
        <div class="description">
            <h4>Tak</h4><p>Wybierz tą opcje jeżeli nie ukończyłeś <b>26</b> roku życia.</p>
            <h4>Nie</h4><p>Wybierz tą opcje jeżeli ukończyłeś <b>26</b> rok życia.</p>
        </div>

    `
})
qUlgaS.addEventListener("click", () => {

    poppedQ.style.display = "flex";
    form.style.display = "none";
    h1.style.display = "none";

    poppedQ.innerHTML = `
        <div class="nav-q">
            <h3>PIT</h3>
            <a href="#" id="exit" onclick="exit()" ><img class="x" src="./x.png"></a>
        </div>
        <div class="description">
            <h4>Tak</h4><p>Wybierz tą opcje jeżeli nie ukończyłeś <b>26</b> roku życia.</p>
            <h4>Nie</h4><p>Wybierz tą opcje jeżeli ukończyłeś <b>26</b> rok życia.</p>
        </div>

    `
})
qProg.addEventListener("click", () => {

    poppedQ.style.display = "flex";
    form.style.display = "none";
    h1.style.display = "none";

    poppedQ.innerHTML = `
        <div class="nav-q">
            <h3>PIT</h3>
            <a href="#" id="exit" onclick="exit()" ><img class="x" src="./x.png"></a>
        </div>
        <div class="description">
            <h4>Tak</h4><p>Wybierz tą opcje jeżeli nie ukończyłeś <b>26</b> roku życia.</p>
            <h4>Nie</h4><p>Wybierz tą opcje jeżeli ukończyłeś <b>26</b> rok życia.</p>
        </div>

    `
})
qFundusz.addEventListener("click", () => {

    poppedQ.style.display = "flex";
    form.style.display = "none";
    h1.style.display = "none";

    poppedQ.innerHTML = `
        <div class="nav-q">
            <h3>PIT</h3>
            <a href="#" id="exit" onclick="exit()" ><img class="x" src="./x.png"></a>
        </div>
        <div class="description">
            <h4>Tak</h4><p>Wybierz tą opcje jeżeli nie ukończyłeś <b>26</b> roku życia.</p>
            <h4>Nie</h4><p>Wybierz tą opcje jeżeli ukończyłeś <b>26</b> rok życia.</p>
        </div>

    `
})
qFGSP.addEventListener("click", () => {

    poppedQ.style.display = "flex";
    form.style.display = "none";
    h1.style.display = "none";

    poppedQ.innerHTML = `
        <div class="nav-q">
            <h3>PIT</h3>
            <a href="#" id="exit" onclick="exit()" ><img class="x" src="./x.png"></a>
        </div>
        <div class="description">
            <h4>Tak</h4><p>Wybierz tą opcje jeżeli nie ukończyłeś <b>26</b> roku życia.</p>
            <h4>Nie</h4><p>Wybierz tą opcje jeżeli ukończyłeś <b>26</b> rok życia.</p>
        </div>

    `
})
qPPK.addEventListener("click", () => {

    poppedQ.style.display = "flex";
    form.style.display = "none";
    h1.style.display = "none";

    poppedQ.innerHTML = `
        <div class="nav-q">
            <h3>PIT</h3>
            <a href="#" id="exit" onclick="exit()" ><img class="x" src="./x.png"></a>
        </div>
        <div class="description">
            <h4>Tak</h4><p>Wybierz tą opcje jeżeli nie ukończyłeś <b>26</b> roku życia.</p>
            <h4>Nie</h4><p>Wybierz tą opcje jeżeli ukończyłeś <b>26</b> rok życia.</p>
        </div>

    `
})

function exit() {
    poppedQ.style.display = "none";
    form.style.display = "flex";
    h1.style.display = "block"
}



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


