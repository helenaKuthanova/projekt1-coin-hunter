// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/

let panacek = document.getElementById("panacek");
let panacekX = 400;
let panacekY = 300;
let posunPanacka = 10;

let mince = document.getElementById("mince");
let koeficientMince = 300
let minceX = Math.floor(Math.random() * koeficientMince);
let minceY = Math.floor(Math.random() * koeficientMince);

let pocitadlo = 0
let ukazatelSkore = document.getElementById("score")

let zvukMince = document.getElementById("zvukmince")
let fanfara = document.getElementById("zvukfanfara")

panacekSirka = 50
panacek.style.width = panacekSirka + "px"
panacekVyska = 50
panacek.style.height = panacekVyska + "px"
minceSirka = 30
mince.style.width = minceSirka + "px"
minceVyska = 30
mince.style.height = minceVyska + "px"

// výchozí postavení
panacek.style.left = panacekX + "px";
panacek.style.top = panacekY + "px";
mince.style.left = minceX + "px";
mince.style.top = minceY + "px";

// pohyb panáčka
// zjistím key klávesy: ArrowDown, ArrowUp, ArrowRight, ArrowLeft
function stiskKlavesy(udalost) {
    kodKlavesy = udalost.key

    if (kodKlavesy === "ArrowDown") {
        panacekY += posunPanacka;
        if (panacekY < window.innerHeight) {
            panacek.style.left = panacekX + "px";
            panacek.style.top = panacekY + "px";
        }
    }

    if (kodKlavesy === "ArrowUp") {
        panacekY -= posunPanacka;
        if (panacekY > 0) {
            panacek.style.left = panacekX + "px";
            panacek.style.top = panacekY + "px";
        }
    }

    if (kodKlavesy === "ArrowRight") {
        panacekX += posunPanacka;
        if (panacekX < window.innerWidth) {
            panacek.style.left = panacekX + "px";
            panacek.style.top = panacekY + "px";
        }
    }

    if (kodKlavesy === "ArrowLeft") {
        panacekX -= posunPanacka;
        if (panacekX > 0) {
            panacek.style.left = panacekX + "px";
            panacek.style.top = panacekY + "px";
        }
    }

    // parseInt() pro převod na integer?? CSS vlastnost je string

    if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
        // panacek a mince se prekryvaji
        minceX = Math.floor(Math.random() * koeficientMince);
        minceY = Math.floor(Math.random() * koeficientMince);
        mince.style.left = minceX + "px";
        mince.style.top = minceY + "px";

        pocitadlo++
        if (pocitadlo < 5) {
            zvukMince.play()
        }
        console.log(pocitadlo)
        ukazatelSkore.textContent = pocitadlo

        if (pocitadlo >= 5) {
            console.log("Vyhrál jsi! Konec hry.")
            ukazatelSkore.textContent = "Vítěz!"
            mince.style.visibility = "hidden"  // mince už se neobjeví
            fanfara.play()
        }
    }
}
