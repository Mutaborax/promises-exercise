const deckAPI = "https://deckofcardsapi.com/api/deck";
const drawCardButton = document.getElementById('draw-card');
const cardImage = document.getElementById('card-image');


document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('draw-card').addEventListener('click', () => {
        // Assuming that 'response' is obtained from some API or function
        if (response) {
            document.getElementById('card-image').style.display = "block";
        } else {
            document.getElementById('card-image').style.display = "none";
        }
    });
});

fetch(`${deckAPI}/new/shuffle/?deck_count=1`)
  .then(response => response.json())
  .then(data => {
    let deckId = data.deck_id;
    drawCardButton.addEventListener('click', () => drawCard(deckId));
  })
  .catch(error => console.error(error));

function drawCard(deckId) {
  fetch(`${deckAPI}/${deckId}/draw/?count=1`)
    .then(response => response.json())
    .then(data => {
      if (data.remaining === 0) {
        alert('No cards left in the deck!');
        drawCardButton.disabled = true;
      } else {
        let card = data.cards[0];
        cardImage.src = card.image;
      }
    })
    .catch(error => console.error(error));
}