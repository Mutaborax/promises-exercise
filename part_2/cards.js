// const deckAPI = "https://deckofcardsapi.com/api/deck";

// const drawCardButton = document.getElementById('draw-card');
// const cardImage = document.getElementById('card-image');

// cardImage.style.display = "none"; // Ensure that image is initially hidden

// document.addEventListener('DOMContentLoaded', (event) => {
//     drawCardButton.addEventListener('click', () => {
//         cardImage.style.display = "none"; // Hide image each time the button is clicked
//     });
// });

// fetch(`${deckAPI}/new/shuffle/?deck_count=1`)
//   .then(response => response.json())
//   .then(data => {
//     let deckId = data.deck_id;
//     drawCardButton.addEventListener('click', () => drawCard(deckId));
//   })
//   .catch(error => console.error(error));

// function drawCard(deckId) {
//   fetch(`${deckAPI}/${deckId}/draw/?count=1`)
//     .then(response => response.json())
//     .then(data => {
//       if (data.remaining === 0) {
//         alert('No cards left in the deck!');
//         drawCardButton.disabled = true;
//       } else {
//         let card = data.cards[0];
//         cardImage.src = card.image;
//         cardImage.style.display = "block"; // Card drawn, show the image
//       }
//     })
//     .catch(error => console.error(error));
// }

const deckAPI = "https://deckofcardsapi.com/api/deck";

const drawCardButton = document.getElementById('draw-card');
const cardContainer = document.getElementById('card-container');

document.addEventListener('DOMContentLoaded', (event) => {
    drawCardButton.addEventListener('click', () => {
        cardContainer.innerHTML = ''; // clear the container
    });
});

let cardArray = [];

async function getDeckId() {
    try {
        let response = await fetch(`${deckAPI}/new/shuffle/?deck_count=1`);
        let data = await response.json();
        let deckId = data.deck_id;
        drawCardButton.addEventListener('click', () => drawCard(deckId));
    } catch (error) {
        console.error(error);
    }
}

getDeckId();

async function drawCard(deckId) {
  try {
      let response = await fetch(`${deckAPI}/${deckId}/draw/?count=1`);
      let data = await response.json();
      if (data.remaining === 0) {
          alert('No cards left in the deck!');
          drawCardButton.disabled = true;
      } else {
          let card = data.cards[0];
          cardArray.push(card); // add card to the end of the array
          cardContainer.innerHTML = ''; // clear the container
          cardArray.forEach((c, index) => {
              let img = document.createElement('img');
              img.src = c.image;
              img.style.position = 'absolute';
              img.style.transform = `rotate(${index * 5}deg)`; // apply rotation
              cardContainer.appendChild(img);
          });
      }
  } catch (error) {
      console.error(error);
  }
}

