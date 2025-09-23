# Übungsaufgabe "ZutatenZirkus - Drachenatem-Curry"
## Einleitung
Im Rahmen meiner Weiterbildung zum Webfrontend-Entwickler entstand dieses JavaScript-Projekt als mehrteilige Übungsaufgabe. Das Ziel bestand darin, eine Rezeptwebseite zu entwickeln, bei der ich mich auf ein spezielles Rezept konzentrierte und es Schritt für Schritt aufbaute. Die Anwendung ermöglicht es, Zutatenmengen dynamisch an die gewünschte Portionszahl anzupassen. Als Besonderheit habe ich mit LESS gearbeitet, da ich die Übungsaufgabe im CSS-Teil zuvor ausgelassen hatte.

In dieser Dokumentation präsentiere ich das Gesamtergebnis ohne auf die einzelnen Entwicklungsschritte einzugehen.

## Grundstruktur
Die Webseite basiert auf drei Technologien: HTML, CSS und JavaScript.
### HTML-Teil
Das Grundgerüst für die Webseite war vorgegeben, mit Ausnahme des Overlays für die "Allergene". Diesen Teil fügte ich im Selbststudium hinzu. Der finale HTML-Code gestaltet sich wie folgt:
```html
<!DOCTYPE html>
<html lang="de">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ZutatenZirkus - Drachenatem - V6</title>
        <link rel="stylesheet" type="text/css" href="styles.css" />
    </head>
    <body>
        <div class="popup-overlay"></div>
        <div class="popup">
            <div class="popup-header">
                <!-- Header-Inhalt hier -->
                <h2>Allergene <span>(und andere übernatürliche Gefahren):</span></h2>
                <span class="closeBtn" id="closeBtn">x</span>
            </div>
            <div class="popup-content">
                <ul>
                    <li><strong>Chili (Stufe: Inferno)</strong> - Kann spontane Feuerspeiendeffekte verursachen.</li>
                    <li><strong>Ingwer</strong> - Wirkt wie ein Jetpack für deinen Kreislauf. Zündet von innen!</li>
                    <li><strong>Kokosmilch</strong> - Enthält Kokos. Überraschung! Kann Spuren von Palmenurlaub enthalten.</li>
                    <li><strong>Knoblauch</strong> - Nicht allergen, aber garantiert vampirresistent.</li>
                    <li><strong>Mut</strong> - Erforderlich in großen Mengen. Nicht für Zartbeseitete empfohlen.</li>
                    <li><strong>Drachenenergie (vermutlich Spuren enthalten)</strong> - Nicht offiziell bestätigt, aber... Du wirst es merken.</li>
                </ul>
            </div>
        </div>
        <div class="wrapper">
            <header>
                <h1>ZutatenZirkus</h1>
                <hr class="header-hr" />
                <h3>~ für alle die gern kochen ~</h3>
            </header>
            <main>
                <div class="card">
                    <h2>
                        Drachenatem-Curry
                        <span
                            id="info"
                            title="Mögliche Allergene & Inhaltsstoffe anzeigen"
                            >&#9432;</span
                        >
                    </h2>
                    <div class="card-content">
                        <p>
                            Dieses Curry ist nicht nur für mutige Esser gemacht,
                            sondern bringt dein Abendessen auf Hochtouren! Mit
                            seiner pikanten Chili-Note und dem wärmenden Ingwer
                            wird jeder Bissen zu einer explosiven
                            Geschmacksreise. Das beste daran? Dein Atem wird so
                            feurig sein, dass selbst Drachen neidisch werden
                            würden! Perfekt für alle, die es ein bisschen hotter
                            mögen - aber keine Angst: Die Kokosmilch sorgt
                            dafür, dass das Feuer im richtigen Maß bleibt. Also,
                            bereite dich auf einen kulinarischen Abenteuersprung
                            in den Orient vor - aber lass niemanden zu nahe
                            kommen, nachdem du davon probiert hast...
                        </p>
                    </div>
                </div>
                <div class="reciepe">
                    <div class="portion">
                        <form id="portionsForm" onsubmit="return false;">
                            <input
                                type="submit"
                                class="button"
                                value="Portionen"
                            />
                            <input type="text" id="portions" value="4" />
                        </form>
                    </div>
                    <div class="details">
                        <div class="ingredients">
                            <h4>Was Du brauchst:</h4>
                            <hr class="hr-details" />
                            <table>
                                <tbody>
                                    <tr>
                                        <td id="ingredient1">Huhn</td>
                                        <td id="ammount1">1 Stk</td>
                                    </tr>
                                    <tr>
                                        <td id="ingredient2">Currypulver</td>
                                        <td id="ammount2">10g</td>
                                    </tr>
                                    <tr>
                                        <td id="ingredient3">Kokosmilch</td>
                                        <td id="ammount3">250ml</td>
                                    </tr>
                                    <tr>
                                        <td id="ingredient4">Ingwer</td>
                                        <td id="ammount4">2ml</td>
                                    </tr>
                                    <tr>
                                        <td id="ingredient5">Zwiebel</td>
                                        <td id="ammount5">1 Stk</td>
                                    </tr>
                                    <tr>
                                        <td id="ingredient6">Reis</td>
                                        <td id="ammount6">200g</td>
                                    </tr>
                                    <tr>
                                        <td id="ingredient7">Zitronensaft</td>
                                        <td id="ammount7">20ml</td>
                                    </tr>
                                    <tr>
                                        <td id="ingredient8">Chili</td>
                                        <td id="ammount8">0.5g</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="todo">
                            <h4>So wird's gemacht</h4>
                            <hr class="hr-todo" />
                            <ol>
                                <li>
                                    <p>
                                        Den Reis nach Packungsanweisung in
                                        leicht gesalzenem Wasser weich kochen.
                                        Abschöpfen und warm stellen.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        In einem großen Topf oder einer Pfanne
                                        etwas Öl erhitzen (nicht im Rezept
                                        aufgeführt, aber empfohlen: 1-2 EL ÖI).
                                        Die fein gewürfelten Zwiebeln darin
                                        glasig anschwitzen.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Das gewürfelte Huhn zur Zwiebeln geben
                                        und von allen Seiten anbraten, bis es
                                        eine goldbraune Farbe bekommt. Ingwer
                                        und Chili hinzufügen: Den geriebenen
                                        Ingwer sowie die fein gehackte
                                        Chilischote zum Huhn geben und alles
                                        kurz mitanschwitzen lassen. So entfaltet
                                        sich der aromatische Duft!
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Das Currypulver einstreuen und gut unter
                                        das Huhn mischen. Etwa 1 Minute...
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <script src="ressources/JS/myScripts.js"></script>
    </body>
</html>
```

### CSS-Teil
Die CSS-Struktur wurde mithilfe von LESS entwickelt. Die folgende Ordnerstruktur verdeutlicht meinen Aufbau (Ordner: ./ressources/less/):
```
│   all.less
│
├───base
│       _mixings.less
│       _reset.less
│       _typography.less
│       _variables.less
│
├───components
│       _buttons.less
│       _cards.less
│
├───layout
│       _header.less
│
└───pages
        _dragon.less
```

Bei der Strukturierung des CSS-Teils legte ich Wert auf eine klare Organisation. Zunächst ließ ich mich durch KI-Empfehlungen zu Best Practices in der LESS-Strukturierung beraten. Diese Struktur erwies sich als effizient und bildete die Grundlage für meine weitere Entwicklung.

### JavaScript
Der JavaScript-Teil stellt das Herzstück der Webseite dar und wuchs mit den implementierten Funktionalitäten stetig an. Die anspruchsvollste Komponente war die Berechnung der Zutatenmengen bei unterschiedlichen Portionsgrößen. Als Ausgangsbasis dienten die Werte der statischen Seite, die für vier Portionen konzipiert waren.
```javascript
document.addEventListener("DOMContentLoaded", function () {
    const portionsForm = document.getElementById("portionsForm");

    portionsForm.addEventListener("submit", function (event) {
        event.preventDefault();
        updatePortions();
    });

    // Setup popup event listeners
    const infoBtn = document.getElementById("info");
    const closeBtn = document.getElementById("closeBtn");
    const popupOverlay = document.querySelector(".popup-overlay");

    infoBtn.addEventListener("click", showPopup);
    closeBtn.addEventListener("click", closePopup);

    // Close popup when clicking outside
    popupOverlay.addEventListener("click", function (event) {
        // Only close if the overlay itself was clicked, not its children
        if (event.target === popupOverlay) {
            closePopup();
        }
    });

    // Close popup with ESC key
    document.addEventListener("keydown", function (event) {
        if (
            event.key === "Escape" &&
            document.documentElement.classList.contains("popup-active")
        ) {
            closePopup();
        }
    });
});

function showPopup() {
    // Store scroll position
    const scrollY = window.scrollY;
    document.documentElement.style.setProperty(
        "--scroll-position",
        `-${scrollY}px`
    );

    document.documentElement.classList.add("popup-active");
    document.body.classList.add("popup-active");

    document.querySelector(".popup-overlay").style.display = "block";
    document.querySelector(".popup").style.display = "flex";
}

function closePopup() {
    document.documentElement.classList.remove("popup-active");
    document.body.classList.remove("popup-active");

    document.querySelector(".popup-overlay").style.display = "none";
    document.querySelector(".popup").style.display = "none";

    // Restore scroll position
    const scrollY = parseInt(
        document.documentElement.style.getPropertyValue("--scroll-position") ||
            "0"
    );
    window.scrollTo(0, Math.abs(scrollY));
}

function updatePortions() {
    const meinInput = document.getElementById("portions");
    const portionsInput = meinInput.value;
    // Ingredient arrays
    const ingredients = [
        "Huhn",
        "Currypulver",
        "Kokosmilch",
        "Ingwer",
        "Zwiebel",
        "Reis",
        "Zitronensaft",
        "Chili",
    ];
    const units = ["Stk", "g", "ml", "ml", "Stk", "g", "ml", "g"];
    const quantityPerFour = [1, 10, 250, 2, 1, 200, 20, 0.5];

    // Check for decimal values
    if (portionsInput.includes(".") || portionsInput.includes(",")) {
        setTimeout(function () {
            alert(
                "Ungültige Angaben bei Portionen. Bitte geben Sie nur ganze Zahlen ein."
            );
            setTimeout(function () {
                meinInput.focus();
                meinInput.select();
            }, 0);
        }, 0);
        return;
    }

    const portionsMenge = parseInt(portionsInput);

    // Validate input
    if (portionsMenge <= 0 || isNaN(portionsMenge)) {
        setTimeout(function () {
            alert("Ungültige Angaben bei Portionen");
            setTimeout(function () {
                meinInput.focus();
                meinInput.select();
            }, 0);
        }, 0);
        return;
    }

    console.clear();
    let ausgabe = "";
    // First: calculate quantities
    let newQuantities = [];

    for (let i = 0; i < ingredients.length; i++) {
        newQuantities[i] = (quantityPerFour[i] * portionsMenge) / 4;
    }

    for (let i = 0; i < ingredients.length; i++) {
        const elementId = "ammount" + (i+1);
        const element = document.getElementById(elementId);
        if (units[i] === "Stk") {
            // For piece counts: Convert to simple fractions based on division
            let numerator = quantityPerFour[i] * portionsMenge;
            let denominator = 4;

            // Reduce the fraction
            const gcd = (a, b) => (b ? gcd(b, a % b) : a);
            const divisor = gcd(numerator, denominator);
            numerator = numerator / divisor;
            denominator = denominator / divisor;

            // Format output with special entities for 1/4, 1/2, 3/4
            if (numerator % denominator === 0) {
                // Whole number
                ausgabe =
                    numerator / denominator +
                    " " +
                    units[i];
            } else {
                const whole = Math.floor(numerator / denominator);
                const remainder = numerator % denominator;

                let fractionSymbol = remainder + "/" + denominator; // Standard representation

                // Special entities for common fractions
                if (remainder === 1 && denominator === 4) fractionSymbol = "¼";
                if (remainder === 1 && denominator === 2) fractionSymbol = "½";
                if (remainder === 3 && denominator === 4) fractionSymbol = "¾";

                if (whole === 0) {
                    ausgabe =
                        fractionSymbol + " " + units[i];
                } else {
                    ausgabe =
                        whole +
                        fractionSymbol +
                        " " +
                        units[i];
                }
            }
        } else {
            // Round to one decimal place
            let roundedValue = Math.round(newQuantities[i] * 10) / 10;
            
            // Convert units when exceeding 1000
            let displayUnit = units[i];
            
            if (units[i] === "g" && roundedValue >= 1000) {
                roundedValue = roundedValue / 1000;
                displayUnit = "kg";
            } else if (units[i] === "ml" && roundedValue >= 1000) {
                roundedValue = roundedValue / 1000;
                displayUnit = "l";
            }
            
            // Format with one decimal place
            let formattedValue = roundedValue.toFixed(1);
            
            // Remove decimal place if it's 0
            if (formattedValue.endsWith(".0")) {
                formattedValue = formattedValue.slice(0, -2);
            }
            
            ausgabe = formattedValue + displayUnit;
        }
        element.innerHTML = ausgabe;
        console.log(ingredients[i] + ": " + ausgabe);
    }
}
```
Um die Benutzerfreundlichkeit zu erhöhen, implementierte ich folgende Funktionen:
- Rundung der Werte auf eine Nachkommastelle für bessere Lesbarkeit
- Verwendung von Bruchzeichen (½, ¼, ¾) bei Stückzahlen statt Dezimalzahlen
- Automatische Umrechnung von Maßeinheiten (g zu kg bzw. ml zu l) bei größeren Mengen

Diese Optimierungen sorgen für eine übersichtliche Darstellung der Zutatenliste bei gleichzeitiger Flexibilität in der Portionsberechnung.

## Fazit
Die Entwicklung dieser Webseite bot mir die Gelegenheit, meine JavaScript-Kenntnisse in einem praxisnahen Projekt anzuwenden und zu vertiefen. Besonders die dynamische Berechnung der Zutatenmengen stellte eine interessante Herausforderung dar, die ich durch logische Algorithmen und benutzerfreundliche Formatierungen lösen konnte. Die Arbeit mit LESS erweiterte zudem meine CSS-Kompetenzen und ermöglichte mir einen strukturierteren Ansatz bei der Gestaltung.

Insgesamt verdeutlicht dieses Projekt, wie bereits grundlegende Webtechnologien ausreichen, um interaktive und nützliche Anwendungen zu erstellen. Die gewonnenen Erkenntnisse werde ich in zukünftigen Projekten weiter ausbauen und verfeinern.