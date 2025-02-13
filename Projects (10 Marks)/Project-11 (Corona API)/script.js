const apiURL = "https://api.rootnet.in/covid19-in/stats/history";
const cardContainer = document.getElementById("cardContainer");
const dateInput = document.getElementById("dateInput");
const stateInput = document.getElementById("stateInput");
const fetchButton = document.getElementById("fetchButton");
const searchStatesButton = document.getElementById("searchStatesButton");
const stateSearchBox = document.getElementById("stateSearchBox");

let allStatesData = [];

const stateIcons = {
  AndhraPradesh: "🌾",
  ArunachalPradesh: "🏔️",
  Assam: "🍵",
  Bihar: "📜",
  Chandigarh: "🏢",
  Chhattisgarh: "⛏️",
  DamanDiu: "⚓",
  Delhi: "🏙️",
  Goa: "🏖️",
  Gujarat: "🦁",
  Haryana: "🚜",
  HimachalPradesh: "🏔️",
  JammuKashmir: "❄️",
  Jharkhand: "⛏️",
  Karnataka: "🐘",
  Kerala: "🌴",
  Lakshadweep: "🏝️",
  MadhyaPradesh: "🏹",
  Maharashtra: "🏰",
  Manipur: "⛵",
  Meghalaya: "🌧️",
  Mizoram: "🎵",
  Nagaland: "🎭",
  Odisha: "🦢",
  Punjab: "🏏",
  Rajasthan: "🏜️",
  Sikkim: "🏔️",
  TamilNadu: "🕉️",
  Telangana: "🏛️",
  Tripura: "🏯",
  UttarPradesh: "🕌",
  Uttarakhand: "🕉️",
  WestBengal: "🐅",
};

function fetchData() {
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      fetchButton.addEventListener("click", function () {
        const selectedDate = dateInput.value;
        const dayData = data.data.find((item) => item.day === selectedDate);

        if (dayData) {
          allStatesData = dayData.regional;
          displayStateData(allStatesData);
          stateSearchBox.style.display = "flex";
        } else {
          cardContainer.innerHTML = `<p class="no-data">No data available for the selected date.</p>`;
          stateSearchBox.style.display = "none";
        }
      });

      searchStatesButton.addEventListener("click", function () {
        const searchQuery = stateInput.value.trim().toLowerCase();
        const filteredData = allStatesData.filter((state) =>
          state.loc.toLowerCase().includes(searchQuery)
        );
        displayStateData(filteredData);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function displayStateData(states) {
  cardContainer.innerHTML = "";
  if (states.length === 0) {
    cardContainer.innerHTML = `<p class="no-data">No matching data found.</p>`;
  } else {
    states.forEach((state) => {
      const card = document.createElement("div");
      card.className = "card";
      const stateSymbol = stateIcons[state.loc.replace(/ /g, "")] || "📍";
      card.innerHTML = `
              <h3><span>${stateSymbol}</span> ${state.loc}</h3>
              <p>Confirmed: ${state.totalConfirmed}</p>
              <p>Recovered: ${state.discharged}</p>
              <p>Deaths: ${state.deaths}</p>
          `;
      cardContainer.appendChild(card);
    });
  }
}

fetchData();
