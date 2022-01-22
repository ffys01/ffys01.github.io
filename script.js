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
const wylicz = document.getElementById('wylicz');
const wyniki = document.getElementById("wyniki");
let pensja = 0;
// default values

brutto = 0;
PIT = "nie";
koszty = "zwykle";
ulga = "brak";
ulgaS = "nie";
prog = "pierwszy";


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
            <h3>Zwolnienie z PIT</h3>
            <a href="#" id="exit" onclick="exit()" ><img class="x" src="./x.png"></a>
        </div>
        <div class="description">
            <h4>Tak</h4>
            <p>Wybierz tą opcje jeżeli:
                <li class="list">nie ukończyłeś <b>26</b> roku życia.</li>
                <li class="list">jesteś rodzice przynajmniej <b>czwórki dzieci</b></li>
                <li class="list">zrezygnowałeś z pobierania emerytury w celu dalszej aktywności zawodowej</li>
            </p>
            <p>W takim przypadku jesteś <b>zwolniony z płacenia</b> podatku dochodowego</p>
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
            <h3>Koszty</h3>
            <a href="#" id="exit" onclick="exit()" ><img class="x" src="./x.png"></a>
        </div>
        <div class="description">
            <h4>Zwykłe</h4>
            <p>Wybierz tą opcję jeżeli, twój zakład pracy leży w tej <b>samej miejscowości,</b> w której mieszkasz.</p>
            <p>W takim przypadku zaliczka na podatek dochodowy będzie <b>zmniejszona o 250zł.</b></p>
            <h4>Podwyższone</h4>
            <p>Wybierz tą opcję jeżeli twój zakład pracy leży w <b>innej miejscowiści,</b> niż tak w której mieszkasz</p>
            <p>W takim przypadku zaliczka na podatek dochodowy będzie <b>zmniejszona o 300zł.</b></p>
        </div>

    `
})
qUlga.addEventListener("click", () => {

    poppedQ.style.display = "flex";
    form.style.display = "none";
    h1.style.display = "none";

    poppedQ.innerHTML = `
        <div class="nav-q">
            <h3>Ulga</h3>
            <a href="#" id="exit" onclick="exit()" ><img class="x" src="./x.png"></a>
        </div>
        <div class="description">
            <h4>Brak</h4><p>Wybierz tą opcje jeżeli nie ukończyłeś <b>26</b> roku życia.</p>
            <h4>Pojedyńcza</h4><p>Wybierz tą opcje jeżeli złożeś deklaracje <br><b>PIT-2</b></p>
            <p>W takim przypadku twój podatek zostanie <b>pomniejszony o 425zł</b></p>
        </div>

    `
})
qUlgaS.addEventListener("click", () => {

    poppedQ.style.display = "flex";
    form.style.display = "none";
    h1.style.display = "none";

    poppedQ.innerHTML = `
        <div class="nav-q">
            <h3>Ulga dla<br> klasy średniej</h3>
            <a href="#" id="exit" onclick="exit()" ><img class="x" src="./x.png"></a>
        </div>
        <div class="description">
            <h4>Nie</h4><p>Wybierz tą opcje jeżeli twoje roczne przychody <b>nie przekroczyły 68 412zł.</b></p>
            <h4>Tak</h4><p>Wybierz tą opcje jeżeli twoje roczne przychody są <b>wyższe od 68 412zł</b> ale <b>mniejsze od 133692zł.</b></p>
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
            <h4>Pierwszy</h4>
            <p>Wybierz tą opcję jeżeli twoje roczne dochody wynoszą <b>mniej niż 85 528zł</b></p>
            <p>W takim przypadku twój próg podatkowy wynosi <b>17%</b></p>
            <h4>Drugi</h4>
            <p>Wybierz tą opcje jeżeli twoje roczne dochody wynoszą <b>więcej niż 85 528zł</b></p>
            <p>W takim przypadku twój próg podatkowy wynosi <b>32%</b></p>
        </div>

    `
})
qFundusz.addEventListener("click", () => {

    poppedQ.style.display = "flex";
    form.style.display = "none";
    h1.style.display = "none";

    poppedQ.innerHTML = `
        <div class="nav-q">
            <h3>Fundusz Pracy</h3>
            <a href="#" id="exit" onclick="exit()" ><img class="x" src="./x.png"></a>
        </div>
        <div class="description">
            <img class ="wrench" src="./wrench.png"><p>Working progress :)</p>
        </div>

    `
})
qFGSP.addEventListener("click", () => {

    poppedQ.style.display = "flex";
    form.style.display = "none";
    h1.style.display = "none";

    poppedQ.innerHTML = `
        <div class="nav-q">
            <h3>FGŚP</h3>
            <a href="#" id="exit" onclick="exit()" ><img class="x" src="./x.png"></a>
        </div>
        <div class="description">
            <img class ="wrench" src="./wrench.png"><p>Working progress :)</p>
        </div>

    `
})
qPPK.addEventListener("click", () => {

    poppedQ.style.display = "flex";
    form.style.display = "none";
    h1.style.display = "none";

    poppedQ.innerHTML = `
        <div class="nav-q">
            <h3>PPK</h3>
            <a href="#" id="exit" onclick="exit()" ><img class="x" src="./x.png"></a>
        </div>
            <div class="description">
            <img class ="wrench" src="./wrench.png"><p>Working progress :)</p>
        </div>

    `
})

function exit() {
    poppedQ.style.display = "none";
    form.style.display = "flex";
    h1.style.display = "block"
}

function onChange_(e, x) {
    if(x == "wpisz"){
         brutto = e;
        console.log(brutto);
    }
    else if(x == "PIT"){
        PIT = e;
        console.log(PIT)
    }
    else if(x == "koszty"){
        koszty = e;
        console.log(koszty);
    }
    else if(x == "ulga"){
        ulga = e;
        console.log(ulga);
    }
    else if(x == "ulgaS"){
        ulgaS = e;
        console.log(ulgaS);
    }
    else if(x == "prog"){
        prog = e;
        console.log(prog);
    }
}

function calculate() {



    function result() {
        console.log("wywlono mnie")
        form.style.display = "none";
        h1.style.display = "none"
        wyniki.style.display = "block";

        wyniki.innerHTML += `
            <h2>Wyniki</h2>
            <div class="przychod">
                <h4>Twój przychód(netto) wynosi:</h4>
                <p> ${pensja} </p>
            </div>
            <button id="powtorz">Powtórz</button>
        `
    }

    let bruttoWithoutSocial = 0;
    let socialTax = 0;
    let brutto_SocialAndMedicalTax = 0;
    let taxBase = 0;
    let tax = 0;
    let ulgaMiddle1 = 0;
    let ulgaMiddle2 = 0;


    /* done */
    function calculateTaxBase(){
        function calculateBrutto (){

            bruttoWithoutSocial = brutto - (brutto * 0.1371);
            console.log("brutto bez socialy " + bruttoWithoutSocial)

            socialTax = brutto * 0.1371;
            console.log("Składka socjlana " + socialTax)

            brutto_SocialAndMedicalTax = bruttoWithoutSocial - 0.09;

            return brutto_SocialAndMedicalTax;
            console.log("składka zdrowotna " + brutto_SocialAndMedicalTax)

        }

        calculateBrutto()
    }




    function calculateTax() {

        if(PIT == "nie"){
            calculateTaxBase();
            console.log("sprawdzam nie pit")




            function checkKoszty() {
                if(koszty == "zwykłe"){
                    console.log(taxBase)
                    return taxBase = Math.round(bruttoWithoutSocial - 250);

                }else if(koszty == "podwyższone"){
                    console.log(taxBase)
                    return taxBase = Math.round(bruttoWithoutSocial - 300);
                }
            }

            function checkUlga(){
                if(ulga == "poj"){
                    return 425
                }else if(ulga == "brak") {
                    return 0;
                }
            }
            taxBase = taxBase - checkKoszty
            taxBase = taxBase - checkUlga();

            function checkUlgaS(){
                if(ulgaS == "tak"){

                    checkKoszty();
                    checkUlga();
                    checkProg();

                    if(pensja > 5701 && pensja < 8549){

                        ulgaMiddle1 = (pensja * 0.668-380.5)/0.17
                        console.log(ulgaMiddle1)
                        return taxBase = taxBase-ulgaMiddle1

                    }else if(pensja > 8549 && pensja < 11141){

                        checkKoszty();
                        checkUlga();
                        checkProg();

                        ulgaMiddle2 = (pensja * (-0.735) + 819.08)/0.17
                        console.log(ulgaMiddle2)
                        return taxBase = taxBase-ulgaMiddle2
                    }
                }else{
                    return pensja = pensja
                }
            }

            function checkProg(){
                if(prog == "pierwszy"){
                    tax = taxBase * 0.17;
                    return pensja = pensja - tax;
                }else if(prog == "drugi"){
                    tax = taxBase * 0.32;
                    return pensja = pensja - tax;
                }
            }
            
            checkProg();
            result();

        }else if(PIT == "tak"){
            calculateTaxBase();
            pensja = calculateBrutto();
            result()
        }
    }

    calculateTax();

}






wylicz.addEventListener("click", calculate)



function checkCheckbox() {
    console.log(fundusz.checked);
    console.log(FGSP.checked);
    console.log(PPK.checked);
}


