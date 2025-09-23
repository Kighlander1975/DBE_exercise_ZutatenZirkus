// Warte, bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function () {
    // Formular-Element auswählen
    const portionsForm = document.getElementById("portionsForm");

    // Event-Listener für das Absenden des Formulars hinzufügen
    portionsForm.addEventListener("submit", function (event) {
        // Standardverhalten des Formulars verhindern (kein Neuladen der Seite)
        event.preventDefault();

        // Funktion zur Berechnung aufrufen
        updatePortions();
    });
});

function updatePortions() {
    const meinInput = document.getElementById("portions");
    const portionsInput = meinInput.value;
    // Zutatenarrays
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
    const quantityPerOne = [1, 10, 250, 2, 1, 200, 20, 0.5];

    // Prüfen, ob der Eingabewert eine Dezimalzahl enthält
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

    // Restliche Prüfungen
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

    let ausgabe = "";
    for (let i = 0; i < ingredients.length; i++) {
        if (units[i] === "Stk") {
            ausgabe =
                ingredients[i] + ": " + quantityPerOne[i] + " " + units[i];
        } else {
            ausgabe = ingredients[i] + ": " + quantityPerOne[i] + units[i];
        }
        console.log(ausgabe);
    }
}
// Anmerkung: Ich habe lediglich die Ausgabe der einfachen Mengen-/Portionsberechnung entfernt, da die Aufgabe in V4 bereits korrekt gelöst wurde