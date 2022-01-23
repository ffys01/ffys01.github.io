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

let bruttoWithoutSocial = 0;
let socialTax = 0;
let brutto_SocialAndMedicalTax = 0;
let tax = 0;
let ulgaMiddle1 = 0;
let ulgaMiddle2 = 0;
let taxBase = 0;

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
                <li class="list">jesteś rodzicem przynajmniej <b>czwórki dzieci</b></li>
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
            <h4>Nie</h4><p>Wybierz tą opcje jeżeli twoje roczne wynagrodzenie <b>nie przekroczyło 68 412zł brutto.</b></p>
            <h4>Tak</h4><p>Wybierz tą opcje jeżeli twoje roczne wynagrodzenie jest <b>wyższe od 68 412zł</b> ale <b>mniejsze od 133692zł.</b></p>
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

    /* done */
    function calculateBrutto (){
        /* Obliczanie brutto bez socjali */
        bruttoWithoutSocial = brutto - (brutto * 0.1371);

        socialTax = brutto * 0.1371;

        /* Oblicznie składki zdrowotnej */
        brutto_SocialAndMedicalTax = bruttoWithoutSocial * 0.09;
        brutto_SocialAndMedicalTax =  brutto_SocialAndMedicalTax.toFixed(2)

        socialTax = brutto - bruttoWithoutSocial
        socialTax = socialTax.toFixed(2)
        console.log()
    }
    calculateBrutto()


    function calculateTax() {

        function checkKoszty() {
            if(koszty == "zwykle"){
                taxBase = Math.round(taxBase - 250)
            }else if(koszty == "podwyzszone"){
                taxBase = Math.round(taxBase - 300);
            }
            taxBase = taxBase + bruttoWithoutSocial
        }
        /* Sprawdz PIT */
        if(PIT == "nie"){
            console.log("wykonuje sie")

            /* Sprawdz Ulga */
            function checkUlgaS(){
                if(ulgaS == "tak"){
                    /* checkProgM() */
                    /* Pierwszy przedzial */
                    if(brutto > 5701 && brutto < 8549){
                        ulgaMiddle1 = (brutto * 0.0668 - 380.5)/0.17
                        taxBase = taxBase - ulgaMiddle1
                        checkKoszty()
                        console.log(taxBase)
                    }
                    /* Drugi przedzial */
                    else if(brutto > 8549 && brutto < 11141){

                        ulgaMiddle2 = (brutto * -(0.0735) + 819.08)/0.17
                        taxBase = taxBase - ulgaMiddle2
                        checkKoszty()
                    }
                }else{
                    return pensja = pensja
                }
            }

            /* Sprawdz jaka ulga sie nalezy */
            function checkUlga() {
                if(ulga == "poj"){
                     console.log(tax + " podatek")
                    if(tax > 425){
                        tax = tax - 425
                    }else{
                        tax = 0;
                    }
                }else if(ulga == "brak") {
                            console.log("brakulgi")
                    }
            }

            /* Sprawdz jaki jest prog */
            function checkProg(){
                console.log("wykonuje prog")
                if(prog == "pierwszy"){
                    console.log("pierwszy prog")
                    if(ulgaS == "tak"){
                        checkUlgaS()
                        console.log(taxBase)
                        tax = taxBase * 0.17;
                        tax = Math.round(tax)

                        console.log(tax)
                        checkUlga()

                        pensja = brutto - tax - socialTax - brutto_SocialAndMedicalTax;
                        pensja = pensja.toFixed(2)
                        return pensja
                    }else{
                        checkKoszty()
                        console.log(taxBase)
                        tax = taxBase * 0.17;
                        tax = Math.round(tax)

                        console.log(tax)
                        checkUlga()

                        pensja = brutto - tax - socialTax - brutto_SocialAndMedicalTax;
                        pensja = pensja.toFixed(2)
                        return pensja
                    }
                }else if(prog == "drugi"){
                    if(ulgaS == "tak"){
                        checkUlgaS()
                        tax = taxBase * 0.32;
                        tax = Math.round(tax)
    
                        checkUlga();
    
                        pensja = brutto - tax - socialTax - brutto_SocialAndMedicalTax;
                        pensja = pensja.toFixed(2)
                        
                        return pensja
                    }else {
                        checkKoszty()

                        tax = taxBase * 0.32;
                        tax = Math.round(tax)

                        checkUlga();

                        pensja = brutto - tax - socialTax - brutto_SocialAndMedicalTax;
                        pensja = pensja.toFixed(2)
                        
                        return pensja
                    }
                    

                }
            }
    

            calculateBrutto();
            checkProg();
            console.log(pensja)
            result();
            console.log("rezultaty")

        }else if(PIT == "tak"){
            calculateBrutto();
            pensja = brutto - socialTax - brutto_SocialAndMedicalTax;
            pensja = pensja.toFixed(2)
            result()
        }

    }

    function result() {
        form.style.display = "none";
        h1.style.display = "none"
        wyniki.style.display = "block";

        wyniki.innerHTML = `
            <h2>Wyniki</h2>
            <div class="przychod">
                <p><b>Twój przychód:</b> ${pensja}zł</p>
                <p><b>Składka socjalna:</b> ${socialTax}zł</p>
                <p><b>Składka zdrowotna:</b> ${brutto_SocialAndMedicalTax}zł</p>
                <button id="powtorz" style="display: flex">Powtórz</button>
            </div>
        `
    }

    calculateTax();

    powtorz.addEventListener("click", () => {
        bruttoWithoutSocial = 0;
        socialTax = 0;
        brutto_SocialAndMedicalTax = 0;
        tax = 0;
        ulgaMiddle1 = 0;
        ulgaMiddle2 = 0;
        taxBase = 0;
        wpisz.value = ''
        console.log("pensja powtorz " + pensja)
        pensja = 0;

        form.style.display = "flex";
        h1.style.display = "flex"
        h1.style.textAlign = "center"
        wyniki.style.display = "none";
        powtorz.style.display = "none"
    })
}

wylicz.addEventListener("click", calculate)




