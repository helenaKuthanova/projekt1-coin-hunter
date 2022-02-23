// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program
let panacek = document.getElementById("panacek")
let x = 400;
let y = 300;
let posunPanacka = 10

// výchozí postavení
panacek.style.left = x + "px";
panacek.style.top = y + "px";

// pohyb panáčka
// zjistím key klávesy: ArrowDown, ArrowUp, ArrowRight, ArrowLeft
function stiskKlavesy(udalost) {
    kodKlavesy = udalost.key
    console.log(kodKlavesy)

    if (kodKlavesy === "ArrowDown") {
        y += posunPanacka;
        panacek.style.left = x + "px";
        panacek.style.top = y + "px";
    }

    if (kodKlavesy === "ArrowUp") {
        y -= posunPanacka;
        panacek.style.left = x + "px";
        panacek.style.top = y + "px";
    }

    if (kodKlavesy === "ArrowLeft") {
        x -= posunPanacka;
        panacek.style.left = x + "px";
        panacek.style.top = y + "px";
    }

    if (kodKlavesy === "ArrowRight") {
        x += posunPanacka;
        panacek.style.left = x + "px";
        panacek.style.top = y + "px";
    }
}

