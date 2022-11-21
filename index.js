const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()) {
    let content = desc.innerText;


if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href = "#">...</a>';
    }


    desc.innerHTML = content;
}   

// const ratings = document.querySelectorAll(".rating-display .value");

// for (let rating of ratings) {
//     let ratingValue = parseFloat(rating.innerText);

// if (ratingValue > 4.7) {
//     rating.classList.add("high-rating")
//     rating.classList.remove("value")
//     }
// }

// const parks = document.querySelectorAll(".park-display");

// const numberParks = parks.length;

// const newElement = document.createElement("div");

// newElement.innerText = `${numberParks} exciting parks to visit`;

// newElement.classList.add("header-statement")

// const header  = document.querySelector("header");
// header.appendChild(newElement);

// const main = document.querySelector("main");

// const park = main.querySelector(".park-display");

// main.removeChild(park);

// const allBtns= document.querySelectorAll(".rate-button");

// allBtns.forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//         const park = event.target.parentNode;
//         park.style.backgroundColor = "#c8e6c9"
//     })
// });

const favoriteButtonClickHandler = (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
};


// function to sort by name
   const sortByName = (parkA, parkB) => {
        const parkAName = parkA.querySelector("h2").innerText;
        const parkBName = parkB.querySelector("h2").innerText;
        if (parkAName < parkBName) {
            return -1;
        } else if (parkAName > parkBName) {
            return 1;
        } else {
            return 0;
        }
    };
// function for handling the namesorter click
    const nameSorterClickerHandler = (event) => {
        event.preventDefault();
        // 1. get the main element
        const main = document.querySelector("main");
        // 2. get the list of parks
        const parksList = main.querySelectorAll(".park-display");
        // 3. empty out the main element
        main.innerHTML = "";
        // 4. create the array
        const parksArray = Array.from(parksList);
        // 4. sort the array
        parksArray.sort(sortByName);
        // 5. insert each park into the dom
    parksArray.forEach((park) => {
        main.appendChild(park);
    });
};

// function to sort by rating
const sortByRating = (parkA, parkB) => {
    const parkARating = 
      parkA.querySelector(".rating-display > .value").innerText
    ;
    const parkBRating = 
      parkB.querySelector(".rating-display > .value").innerText
    ;
    return parkBRating - parkARating;
  };

    const ratingSorterClickerHandler = (event) => {
        event.preventDefault();
        // 1. get the main element
        const main = document.querySelector("main");
        // 2. get the list of parks
        const parksList = main.querySelectorAll(".park-display");
        // 3. empty out the main element
        main.innerHTML = "";
        // 4. create the array
        const parksArray = Array.from(parksList);
        // 4. sort the array
        parksArray.sort(sortByRating);
        // 5. insert each park into the DOM
        parksArray.forEach((park) => {
            main.appendChild(park);
        });
    };

    const main = () => {
        const nameSorter = document.querySelector("#name-sorter");

        nameSorter.addEventListener("click", nameSorterClickerHandler);

        const ratingSorter = document.querySelector("#rating-sorter");

        ratingSorter.addEventListener("click", ratingSorterClickerHandler);

        const allBtns = document.querySelectorAll(".rate-button");

        allBtns.forEach((btn) => {
            btn.addEventListener("click", favoriteButtonClickHandler)
        });
    };

    window.addEventListener("DOMContentLoaded", main);

    const submitHandler  = (event) => {
        event.preventDefault();
        console.log("the form was submitted");
    }

    const sub = () => {
        const form = document.querySelector("#park-form");

        form.addEventListener("submit", submitHandler)
    };
    window.addEventListener("DOMContentLoaded", sub);