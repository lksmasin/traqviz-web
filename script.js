// Funkce pro otevření aplikace
function openApp() {
    window.open("https://lksmasin.github.io/traqviz/", "_blank");  // Otevře webovou stránku aplikace
}

// Funkce pro stažení aplikace
function downloadApp() {
    window.open("https://github.com/lksmasin/traqviz", "_blank");  // Otevře Google Play Store
}

// Funkce pro změnu obrázku při najetí myší
function changeImage(isHover) {
    const screenshot = document.getElementById('app-screenshot');
    if (isHover) {
        screenshot.src = "./screen2.png"; // Nový obrázek při hoveru
    } else {
        screenshot.src = "./screen1.png"; // Původní obrázek
    }
}
