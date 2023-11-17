var create_card = (foodNum, Foodname, img_src, cal) => {
  // Create the main card element
  var card = document.createElement("div");
  card.classList.add("card");
  card.id = foodNum;

  // Create the image element
  var image = document.createElement("img");
  image.src = img_src;
  image.classList.add("card-img-top");

  // Create the card body element
  var cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "text-center");

  // Create the heading element
  var heading = document.createElement("h5");
  heading.textContent = Foodname;

  // Create the first horizontal rule
  var hr1 = document.createElement("hr");
  hr1.classList.add("m-3");

  // Create the paragraph element for calories
  var calories = document.createElement("p");
  calories.classList.add("card-text", "m-0");
  calories.textContent = "Calories: " + cal;

  // Create the second horizontal rule
  var hr2 = document.createElement("hr");
  hr2.classList.add("m-3");

  // Create the link element
  var link = document.createElement("a");
  // link.href = "../page_food_info/index.html";
  link.classList.add("btn", "btn-primary", "btn-foodInfo");
  link.textContent = "Go somewhere";
  link.onclick = foodInfo;

  // Append elements to build the structure
  cardBody.appendChild(heading);
  cardBody.appendChild(hr1);
  cardBody.appendChild(calories);
  cardBody.appendChild(hr2);
  cardBody.appendChild(link);

  card.appendChild(image);
  card.appendChild(cardBody);

  return card;
};

let search = document.getElementById("go_search");
let input = document.getElementById("input");
let food_card = document.getElementById("food-card");
let search_query;
let search_button = document.getElementById("go_search");

search_query = localStorage.getItem("default_search");
var parsedData;

search.addEventListener("click", function () {
  get_food_data();
});

function foodInfo() {
  window.location.href = "../page_food_info/index.html";
  localStorage.setItem(
    "foodName",
    parsedData["hits"][this.parentNode.parentNode.id]["recipe"]["label"]
  );
  localStorage.setItem(
    "meal",
    parsedData["hits"][this.parentNode.parentNode.id]["recipe"]["mealType"][0]
  );
  localStorage.setItem(
    "cuisine",
    parsedData["hits"][this.parentNode.parentNode.id]["recipe"][
      "cuisineType"
    ][0]
  );
  localStorage.setItem(
    "carbs",
    parsedData["hits"][this.parentNode.parentNode.id]["recipe"]["dietLabels"][0]
  );
  localStorage.setItem(
    "dish",
    parsedData["hits"][this.parentNode.parentNode.id]["recipe"]["dishType"][0]
  );

  let ing = [];
  "ingredients",
    parsedData["hits"][this.parentNode.parentNode.id]["recipe"][
      "ingredients"
    ].map((e) => {
      ing.push(e["text"]);
    });

  let ingredients = JSON.stringify(ing);
  localStorage.setItem("ingredients", ingredients);

  localStorage.setItem(
    "source",
    parsedData["hits"][this.parentNode.parentNode.id]["recipe"]["url"]
  );

  localStorage.setItem(
    "image",
    parsedData["hits"][this.parentNode.parentNode.id]["recipe"]["image"]
  );
}

let default_view = () => {
  input.setAttribute("value", localStorage.getItem("default_search"));
  let request = new XMLHttpRequest();

  request.open(
    "GET",
    "https://api.edamam.com/api/recipes/v2?type=public&q=" +
      search_query +
      "&app_id=858e7994&app_key=599e5094ae743172f128d90d303c2588%09"
  );

  request.onload = function () {
    var response = request.response;
    parsedData = JSON.parse(response);

    $(".food-card").empty();
    parsedData["hits"].map((e, i) => {
      document
        .querySelector(".food-card")
        .appendChild(
          create_card(
            i,
            e["recipe"]["label"],
            e["recipe"]["image"],
            (parseInt(e["recipe"]["calories"]) | 0).toString()
          )
        );
    });
  };
  request.send();
};

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    if (input.value !== "") {
      get_food_data();
    }
  }
});


default_view();

function get_food_data() {
  search_query = input.value;
  let request = new XMLHttpRequest();

  request.open(
    "GET",
    "https://api.edamam.com/api/recipes/v2?type=public&q=" +
      search_query +
      "&app_id=858e7994&app_key=599e5094ae743172f128d90d303c2588%09"
  );

  request.onload = function () {
    var response = request.response;
    parsedData = JSON.parse(response);

    $(".food-card").empty();
    parsedData["hits"].map((e, i) => {
      document
        .querySelector(".food-card")
        .appendChild(
          create_card(
            i,
            e["recipe"]["label"],
            e["recipe"]["image"],
            (parseInt(e["recipe"]["calories"]) | 0).toString()
          )
        );
    });
  };
  request.send();
}
