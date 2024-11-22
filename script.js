document.getElementById('offerteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Voorkom standaardgedrag van formulier

    // Verzamel ingevoerde gegevens
    const zaak = document.getElementById('zaak').value;
    const strafbaarheid = document.getElementById('strafbaarheid').value;
    const strafeis = document.getElementById('strafeis').value;
    const cliënten = document.getElementById('cliënten').value;
    const tijd = document.getElementById('tijd').value;

    // Bereken de prijs op basis van de tijd (hier kun je je eigen formule implementeren)
    const advocaatKosten = calculateAdvocaatKosten(tijd);

    // Genereer een uniek dossiernummer
    const dossiernummer = generateDossiernummer();

    // Genereer de inhoud van het tekstbestand
    const documentInhoud = `
        Dossiernummer: ${dossiernummer}
        Zaak van: ${zaak}
        Strafbaarheid: ${strafbaarheid}
        Strafeis(en): ${strafeis}
        Aantal cliënten: ${cliënten}
        Tijd (in minuten): ${tijd}
        Advocaatkosten: ${advocaatKosten} euro
    `;

    // Download het tekstbestand
    downloadDocument(documentInhoud, `Offerte_${dossiernummer}.txt`);
});

// Functie om advocaatkosten te berekenen
function calculateAdvocaatKosten(tijd) {
    // Realistische formule om advocaatkosten te berekenen
    return tijd * 300; // Bijvoorbeeld: 300 euro per uur
}

// Functie om een uniek dossiernummer te genereren
function generateDossiernummer() {
    return Math.floor(Math.random() * 10000000000); // Genereer een 10-cijferig nummer
}

// Functie om een tekstbestand te genereren en downloaden
function downloadDocument(inhoud, bestandsnaam) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(inhoud));
    element.setAttribute('download', bestandsnaam);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}
