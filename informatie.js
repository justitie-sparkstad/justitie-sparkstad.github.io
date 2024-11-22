// Dummy data: Voeg hier eenvoudig nieuwe FAQ's toe
const faqData = [
    {
        title: "Hoe kan ik een advocaat aanvragen?",
        text: "U kunt een advocaat aanvragen door het formulier op onze website in te vullen.",
        category: "Advocaat"
    },
    {
        title: "Wat zijn de kosten van een zaak?",
        text: "De kosten zijn afhankelijk van de complexiteit van de zaak. Bereken de kosten op onze website.",
        category: "Kosten"
    },
    {
        title: "Waar kan ik het wetboek raadplegen?",
        text: "Het wetboek kunt u raadplegen via de pagina 'Wetboek' op onze website.",
        category: "Informatie"
    },
];

// Dynamisch de FAQ's toevoegen aan de pagina
const faqContainer = document.getElementById('faq-container');

faqData.forEach((faq, index) => {
    const faqItem = document.createElement('div');
    faqItem.classList.add('faq-item');
    faqItem.setAttribute('data-title', faq.title.toLowerCase());
    faqItem.setAttribute('data-text', faq.text.toLowerCase());
    faqItem.setAttribute('data-category', faq.category.toLowerCase());

    faqItem.innerHTML = `
        <h2 class="faq-title">${index + 1}. ${faq.title}</h2>
        <p class="faq-category">Categorie: ${faq.category}</p>
        <p class="faq-text">${faq.text}</p>
    `;
    faqContainer.appendChild(faqItem);
});

// Zoekfunctie
function filterFAQs() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const faqs = document.querySelectorAll('.faq-item');

    faqs.forEach(faq => {
        const title = faq.getAttribute('data-title');
        const text = faq.getAttribute('data-text');
        const category = faq.getAttribute('data-category');

        if (title.includes(query) || text.includes(query) || category.includes(query)) {
            faq.style.display = 'block';
        } else {
            faq.style.display = 'none';
        }
    });
}
