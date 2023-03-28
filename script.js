// first dropdown-1

const wrappers = document.querySelector(".dropdown-1");
const search = document.querySelector(".search");

const selectButton = wrappers.querySelector(".select-button");
selectButton.addEventListener("click", () => {
  wrappers.classList.toggle("active");
  search.classList.toggle("active");
});

const optionButton = document.querySelectorAll(".dropdown-1 .options");

for (let i = 0; i < optionButton.length; i++) {
  optionButton[i].addEventListener("click", () => {
    const selectButton = document.querySelector(".dropdown-1 .select-button");
    selectButton.innerHTML = optionButton[i].innerHTML;
    from = selectButton.innerText;
    const dropdownRemove = document.querySelector(".dropdown-1");
    dropdownRemove.classList.remove("active");
    search.classList.remove("active");
  });
}

// second dropdown-2
const wrapper1 = document.querySelector(".dropdown-2");
const search2 = document.querySelector(".search2");

const selectButton1 = wrapper1.querySelector(".select-button");
selectButton1.addEventListener("click", () => {
  wrapper1.classList.toggle("active");
  search2.classList.toggle("active");
});

const optionButton1 = document.querySelectorAll(".dropdown-2 .options");

for (let i = 0; i < optionButton1.length; i++) {
  optionButton1[i].addEventListener("click", () => {
    const selectButton1 = document.querySelector(".dropdown-2 .select-button");
    selectButton1.innerHTML = optionButton1[i].innerHTML;
    to = selectButton1.innerText;
    const dropdownRemove = document.querySelector(".dropdown-2");
    dropdownRemove.classList.remove("active");
    search2.classList.remove("active");
  });
}

// data for sending requests
let from;
let to;
let amount;

// getting value for the amount variable
const inputs = document.getElementById("input");

inputs.addEventListener("input", () => {
  const inputValue = inputs.value;
  amount = inputValue;
});

const currencyConversionApi = async (resource) => {
  const response = await fetch(resource);

  if (response.status !== 200) {
    throw new error("Request failed to fetch data successfully");
  }

  const data = await response.json();
  return data;
};

const convertButton = document.querySelector(".convert-button");
const output = document.querySelector(".output-result");
convertButton.addEventListener("click", () => {
  convertButton.classList.add("active");
  setTimeout(() => {
    convertButton.classList.remove("active");
  }, 3000);
  currencyConversionApi(
    `https://api.currencybeacon.com/v1/convert?api_key=55ee9acbd3cbef4ea67d07f8e579f50b&from=${from}&to=${to}&amount=${amount}`
  )
    .then((data) => {
      let value = data.response.value;
      let result = value.toFixed(2);
      output.innerText = result;
      // console.log("resolved", data);
    })
    .catch((err) => {
      console.log("resolved", err.message);
    });
});

// Implementing the search filter for drop-down-list-1

const searchInput = document.querySelector(".search-input");
const listOfButtons = document.querySelector(".drop-down-list-1");
const buttonList = Array.from(listOfButtons.getElementsByTagName("button"));

function filterItems1(searchTerm) {
  return buttonList.filter((button) => {
    return button.innerText.toLowerCase().includes(searchTerm.toLowerCase());
  });
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value;
  console.log(searchTerm);
  const filteredItems = filterItems1(searchTerm);
  listOfButtons.innerHTML = "";
  filteredItems.forEach((item) => {
    listOfButtons.appendChild(item);
  });
});

// Implementing the search filter for drop-down-list-2

const searchInput2 = document.querySelector(".search-input2");
const listOfButtons2 = document.querySelector(".drop-down-list-2");
const buttonList2 = Array.from(listOfButtons2.getElementsByTagName("button"));

function filterItems2(searchTerm2) {
  return buttonList2.filter((button2) => {
    return button2.innerText.toLowerCase().includes(searchTerm2.toLowerCase());
  });
}

searchInput2.addEventListener("input", () => {
  const searchTerm2 = searchInput2.value;
  const filteredItems2 = filterItems2(searchTerm2);
  listOfButtons2.innerHTML = "";
  filteredItems2.forEach((item) => {
    listOfButtons2.appendChild(item);
  });
});
