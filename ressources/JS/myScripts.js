document.addEventListener("DOMContentLoaded", function () {
    const portionsForm = document.getElementById("portionsForm");

    portionsForm.addEventListener("submit", function (event) {
        event.preventDefault();
        updatePortions();
    });

    // Setup popup event listeners
    const infoBtn = document.getElementById("info");
    const closeBtn = document.getElementById("closeBtn");
    const popupOverlay = document.querySelector('.popup-overlay');
    
    infoBtn.addEventListener("click", showPopup);
    closeBtn.addEventListener("click", closePopup);
    
    // Close popup when clicking outside
    popupOverlay.addEventListener("click", function(event) {
        // Only close if the overlay itself was clicked, not its children
        if (event.target === popupOverlay) {
            closePopup();
        }
    });
    
    // Close popup with ESC key
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && document.documentElement.classList.contains("popup-active")) {
            closePopup();
        }
    });
});

function showPopup() {
    // Store scroll position
    const scrollY = window.scrollY;
    document.documentElement.style.setProperty('--scroll-position', `-${scrollY}px`);
    
    document.documentElement.classList.add('popup-active');
    document.body.classList.add('popup-active');
    
    document.querySelector('.popup-overlay').style.display = 'block';
    document.querySelector('.popup').style.display = 'flex';
}

function closePopup() {
    document.documentElement.classList.remove("popup-active");
    document.body.classList.remove("popup-active");

    document.querySelector(".popup-overlay").style.display = 'none';
    document.querySelector(".popup").style.display = 'none';

    // Restore scroll position
    const scrollY = parseInt(document.documentElement.style.getPropertyValue('--scroll-position') || '0');
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
    const quantityPerOne = [1, 10, 250, 2, 1, 200, 20, 0.5];

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
