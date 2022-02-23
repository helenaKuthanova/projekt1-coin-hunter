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
        if (y < window.innerHeight) {
            panacek.style.left = x + "px";
            panacek.style.top = y + "px";
        }
    }

    if (kodKlavesy === "ArrowUp") {
        y -= posunPanacka;
        if (y > 0) {
            panacek.style.left = x + "px";
            panacek.style.top = y + "px";
        }
    }

    if (kodKlavesy === "ArrowRight") {
        x += posunPanacka;
        if (x < window.innerWidth) {
            panacek.style.left = x + "px";
            panacek.style.top = y + "px";
        }
    }

    if (kodKlavesy === "ArrowLeft") {
        x -= posunPanacka;
        if (x > 0) {
            panacek.style.left = x + "px";
            panacek.style.top = y + "px";
        }
    }


}

