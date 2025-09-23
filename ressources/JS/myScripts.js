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
