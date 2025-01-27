// panáček a jeho pozice
let panacek = document.getElementById("panacek");
let panacekX = window.innerWidth / 2;
let panacekY = window.innerHeight / 2;
let posunPanacka = 10;

// mince a její pozice
let mince = document.getElementById("mince");
let minceX = Math.floor(Math.random() * window.innerWidth);
let minceY = Math.floor(Math.random() * window.innerHeight);

let pocitadlo = 0;
let ukazatelSkore = document.getElementById("score");

let zvukMince = document.getElementById("zvukmince");
let fanfara = document.getElementById("zvukfanfara");

// rozměry obrázků panáčka a mince
panacekSirka = 50;
panacek.style.width = panacekSirka + "px";
panacekVyska = 55;
panacek.style.height = panacekVyska + "px";
minceSirka = 30;
mince.style.width = minceSirka + "px";
minceVyska = 30;
mince.style.height = minceVyska + "px";

function priNacteniStranky() {
    // výchozí postavení panáčka a mince
    panacek.style.left = panacekX + "px";
    panacek.style.top = panacekY + "px";
    mince.style.left = minceX + "px";
    mince.style.top = minceY + "px";
}

function pohybPanacka() {
    // posunutí panáčka na novou pozici
    panacek.style.left = panacekX + "px";
    panacek.style.top = panacekY + "px";
}

function novaMince() {
    // nová pozice mince
    minceX = Math.floor(Math.random() * window.innerWidth);
    minceY = Math.floor(Math.random() * window.innerHeight);
    mince.style.left = minceX + "px";
    mince.style.top = minceY + "px";
}

function kolizePanacka() {
    // panáček a mince se překrývají
    if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
        return true
    }
}

function stavPocitadla() {
    // cink + změna elementu skóre
    pocitadlo++;
    ukazatelSkore.textContent = pocitadlo;
    return pocitadlo
}

function vitez() {
    // 5. mince => vítěz + fanfára + mince zmizí
    console.log("Vyhrál jsi! Konec hry.");
    ukazatelSkore.textContent = "Vítěz!";
    mince.style.visibility = "hidden";  // mince už se neobjeví
    fanfara.play();
}

// mění se obrázek, omezení šířkou/výškou okna
function priStisknutiKlavesy(udalost) {
    // stisknutá klávesa
    kodKlavesy = udalost.key;

    if (kodKlavesy === "ArrowDown") {
        panacek.src="obrazky/panacek.png";
        panacekY += posunPanacka;
        if (panacekY < window.innerHeight) {
            pohybPanacka()
        }
    }

    if (kodKlavesy === "ArrowUp") {
        panacek.src="obrazky/panacek-nahoru.png";
        panacekY -= posunPanacka;
        if (panacekY > 0) {
            pohybPanacka()
        }
    }

    if (kodKlavesy === "ArrowRight") {
        panacek.src="obrazky/panacek-vpravo.png";
        panacekX += posunPanacka;
        if (panacekX < window.innerWidth) {
            pohybPanacka()
        }
    }

    if (kodKlavesy === "ArrowLeft") {
        panacek.src="obrazky/panacek-vlevo.png";
        panacekX -= posunPanacka;
        if (panacekX > 0) {
            pohybPanacka()
        }
    }

    if (kolizePanacka()) {
        novaMince()
        let pocitadlo = stavPocitadla()

    if (pocitadlo < 5) {
        zvukMince.play();
        }

    if (pocitadlo === 5) {
        vitez()
        }
    }
}
