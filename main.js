// panáček a jeho pozice
let panacek = document.getElementById("panacek");
let panacekX = 400;
let panacekY = 300;
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

// výchozí postavení panáčka a mince
panacek.style.left = panacekX + "px";
panacek.style.top = panacekY + "px";
mince.style.left = minceX + "px";
mince.style.top = minceY + "px";

// pohyb panáčka - změní se obrázek, omezení šířkou/výškou okna
function hra(udalost) {
    // stisknutá klávesa
    kodKlavesy = udalost.key;

    if (kodKlavesy === "ArrowDown") {
        panacek.src="obrazky/panacek.png";
        panacekY += posunPanacka;
        if (panacekY < window.innerHeight) {
            panacek.style.left = panacekX + "px";
            panacek.style.top = panacekY + "px";
        }
    }

    if (kodKlavesy === "ArrowUp") {
        panacek.src="obrazky/panacek-nahoru.png";
        panacekY -= posunPanacka;
        if (panacekY > 0) {
            panacek.style.left = panacekX + "px";
            panacek.style.top = panacekY + "px";
        }
    }

    if (kodKlavesy === "ArrowRight") {
        panacek.src="obrazky/panacek-vpravo.png";
        panacekX += posunPanacka;
        if (panacekX < window.innerWidth) {
            panacek.style.left = panacekX + "px";
            panacek.style.top = panacekY + "px";
        }
    }

    if (kodKlavesy === "ArrowLeft") {
        panacek.src="obrazky/panacek-vlevo.png";
        panacekX -= posunPanacka;
        if (panacekX > 0) {
            panacek.style.left = panacekX + "px";
            panacek.style.top = panacekY + "px";
        }
    }

    // pokud se obrázek panáčka a mince překrývají
    if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
        // nová pozice mince
        minceX = Math.floor(Math.random() * window.innerWidth);
        minceY = Math.floor(Math.random() * window.innerHeight);
        mince.style.left = minceX + "px";
        mince.style.top = minceY + "px";

        // zvýší se skóre
        // 1.-4. mince => cink + změna elementu skóre
        pocitadlo++
        if (pocitadlo < 5) {
            zvukMince.play();
        }
        console.log(pocitadlo);
        ukazatelSkore.textContent = pocitadlo;

        // 5. mince => vítěz + fanfára + mince zmizí
        if (pocitadlo >= 5) {
            console.log("Vyhrál jsi! Konec hry.");
            ukazatelSkore.textContent = "Vítěz!";
            mince.style.visibility = "hidden";  // mince už se neobjeví
            fanfara.play();
        }
    }
}
