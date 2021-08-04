// Call API and store result in catObject
const loadCats = () => {
  let addressApiUrl = "https://api.thecatapi.com/v1/breeds";
  fetch(addressApiUrl)
    .then((response) => response.json())
    .then((catsResponse) => {
      showCats(catsResponse);
    });
};

// const loadCats = () => {
//   let addressApiUrl = "https://api.thecatapi.com/v1/breeds";
//   fetch(addressApiUrl)
//     .then((response) => {
//       if (response.status != 200) {
//         throw Error("Invalid URL");
//       }
//       response.json();
//     })
//     .then((catsResponse) => {
//       showCats(catsResponse);
//     })
//     .catch((e) => {
//       alert(e);
//     });
// };

// Loop through catObject
function showCats(catObject) {
  for (let i = 0; i < catObject.length; i++) {
    let gridDiv = document.getElementById("gridDiv");
    const cardBody = document.createElement("div");
    const imgTag = document.createElement("img");
    const nameTag = document.createElement("h5");
    const descriptionTag = document.createElement("p");

    // Create card
    cardBody.id = "card" + i;
    cardBody.className = "card-div";

    // Create image
    imgTag.src = "";
    if (catObject[i].image.url) {
      imgTag.id = "img" + i;
      imgTag.src = catObject[i].image.url;
    }

    // Create name
    nameTag.id = "cat" + i;
    nameTag.className = "cat-name";
    nameTag.innerText = catObject[i].name;

    // Create description
    descriptionTag.id = "description" + i;
    descriptionTag.className = "cat-description";
    descriptionTag.innerText = catObject[i].description;

    // Append cat
    gridDiv.appendChild(cardBody);
    cardBody.append(imgTag);
    cardBody.append(nameTag);
    cardBody.append(descriptionTag);

    // imgTag.onclick = function () {
    //   flip(this);
    // };
  }
}

// function flip(imgobj) {
//   document.getElementById(imgobj.id).src = "images/back.jpg";
// }
