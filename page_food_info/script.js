var foodName = document.getElementById("foodName")
var meal = document.getElementById("meal")
var cuisine = document.getElementById("cuisine")
var carbs = document.getElementById("carbs")
var dish = document.getElementById("dish")
var ingredients = document.querySelector(".ingredients")
var source = document.getElementById("learn_more")
var food_image = document.getElementById("food_image");

var ingredients_data = JSON.parse(localStorage.getItem("ingredients"))
// var healthLabels_data = JSON.parse(localStorage.getItem("healthLabels"))


// function addlabels(labels) {
//     var li = document.createElement("li")
//     li.classList.add("col-3","p-1")
//     li.innerText = labels

//     return li
// }
function addIngredients(labelText,id) {
    var li = document.createElement('li');
    
    var label = document.createElement('label');
    label.htmlFor = id; 
    label.textContent = labelText;

    li.appendChild(createCheckbox(id))
    li.appendChild(label);

    return li;
}

function createCheckbox(itemId) {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = itemId;
    return checkbox;
}

foodName.innerText = localStorage.getItem("foodName")
meal.innerText = localStorage.getItem("meal")
cuisine.innerText = localStorage.getItem("cuisine")
carbs.innerText = localStorage.getItem("carbs")
dish.innerText = localStorage.getItem("dish")



ingredients_data.map((e,i) =>{
    ingredients.appendChild(addIngredients(e,"item"+i))
})



source.href = localStorage.getItem("source")

food_image.src = localStorage.getItem("image")
