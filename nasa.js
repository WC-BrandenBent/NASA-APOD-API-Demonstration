// const url = `https://api.nasa.gov/planetary/ap`;
// let dateInput = document.getElementById("dateInput");



// fetch(urlWithKey)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

const url = `https://api.nasa.gov/planetary/apod?api_key=`;

// Replace YOUR_API_KEY with your actual API key
const apiKey = "YOUR_API_KEY_GOES_HERE";


const getData = async () => {
  try {
    const response = await fetch(`${url}${apiKey}`);
    const data = await response.json();
    console.log("NASA APOD data", data);

	console.log(typeof(data));
    displayData(data);
  } catch (error) {
    console.log(error);
  }
};

//     This returns the JSON data for a specific date, which must be a string of the form YYYY-MM-DD. If date is None,
//     then it defaults to the current date.


async function getDataForDate(apiKey, date) {
	return fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
		.then(response => response.json())
		.then(data => {
			console.log("NASA APOD data", data);
			displayData(data);
		})
		.catch(error => {
			console.error(error);
		});
}

const displayData = data => {
  document.getElementById("title").textContent = data.title;
  document.getElementById("date").textContent = data.date;
  document.getElementById("picture").src = data.hdurl;
  document.getElementById("explanation").textContent = data.explanation;
  
};

function clearDisplayData() {
  document.getElementById("title").textContent = "";
  document.getElementById("date").textContent = "";
  document.getElementById("picture").src = "";
  document.getElementById("explanation").textContent = "";
}

dateInput.addEventListener("input", () => {
	const userInput = dateInput.value;
	console.log("User input:", userInput);
	getDataForDate(apiKey, userInput);
	clearDisplayData();
});

getData();
console.log("random words and stuff");
