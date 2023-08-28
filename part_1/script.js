// // Part 1: Number Facts
// const numbersAPI = "http://numbersapi.com";

// // 1. Get a fact about your favorite number
// let favoriteNumber = 7;
// fetch(`${numbersAPI}/${favoriteNumber}?json`)
//   .then(response => response.json())
//   .then(data => console.log(data.text))
//   .catch(error => console.error(error));

// // 2. Get data on multiple numbers in a single request
// let numbers = [1, 2, 3, 4, 5];
// fetch(`${numbersAPI}/${numbers}?json`)
//   .then(response => response.json())
//   .then(data => {
//     for (let number in data) {
//       console.log(`${number}: ${data[number]}`);
//     }
//   })
//   .catch(error => console.error(error));

// // 3. Get 4 facts about your favorite number
// let promises = [];
// for (let i = 0; i < 4; i++) {
//   promises.push(fetch(`${numbersAPI}/${favoriteNumber}?json`));
// }

// Promise.all(promises)
//   .then(responses => Promise.all(responses.map(response => response.json())))
//   .then(data => {
//     data.forEach((fact, index) => console.log(`Fact ${index + 1}: ${fact.text}`));
//   })
//   .catch(error => console.error(error));


  // Part 1: Number Facts
const numbersAPI = "http://numbersapi.com";

// 1. Get a fact about your favorite number
let favoriteNumber = 12;
async function fetchFavoriteNumber() {
    try {
        let response = await fetch(`${numbersAPI}/${favoriteNumber}?json`);
        let data = await response.json();
        console.log(data.text);
    } catch (error) {
        console.error(error);
    }
}
fetchFavoriteNumber();

// 2. Get data on multiple numbers in a single request
let numbers = [1, 2, 3, 4, 5, 6, 8, 10];
async function fetchMultipleNumbers() {
    try {
        let response = await fetch(`${numbersAPI}/${numbers}?json`);
        let data = await response.json();
        for (let number in data) {
            console.log(`${number}: ${data[number]}`);
        }
    } catch (error) {
        console.error(error);
    }
}
fetchMultipleNumbers();

// 3. Get 4 facts about your favorite number
let promises = [];
for (let i = 0; i < 4; i++) {
    promises.push(fetch(`${numbersAPI}/${favoriteNumber}?json`));
}

async function fetchFacts() {
    try {
        let responses = await Promise.all(promises);
        let data = await Promise.all(responses.map(response => response.json()));
        data.forEach((fact, index) => console.log(`Fact ${index + 1}: ${fact.text}`));
    } catch(error) {
        console.error(error);
    }
}

fetchFacts();
