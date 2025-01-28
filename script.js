const button = document.getElementById('showCardButton');
const card = document.getElementById('card');

button.addEventListener('click', () => {
    if (card.classList.contains('hidden')) {
        card.classList.remove('hidden');
        card.classList.add('visible');
    } else {
        card.classList.remove('visible');
        card.classList.add('hidden');
    }
});
