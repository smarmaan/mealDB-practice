const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  const foodContainer = document.getElementById("food-container");
  foodContainer.innerText = "";

  if (meals.length < 6) {
    for (let i = 0; i < meals.length; i++) {
      const meal = meals[i];

      // console.log(meal);

      const foodDiv = document.createElement("div");
      foodDiv.innerHTML = `

    <div class="card card-side bg-white shadow-xl text-black text-xl ">
    <figure><img class="w-[40rem] h-[20rem]" src="${
      meal.strMealThumb ? meal.strMealThumb : ""
    }
    " /></figure>
    <div class="card-body">
        <h2 class="card-title">${meal.strMeal}</h2>
        <p>There are many variations of passages of available, but the majority have suffered.</p>
        <div class="card-actions justify-end">
            <button id="details-btn" class="btn btn-primary">View Details</button>
        </div>
    </div>
</div>
    

    `;

      foodContainer.appendChild(foodDiv);
      document.getElementById("show-btn").classList.remove("hidden");
    }
  } else {
    for (let i = 0; i < 6; i++) {
      const meal = meals[i];

      // console.log(meal);

      const foodDiv = document.createElement("div");
      foodDiv.innerHTML = `
  
      <div class="card card-side bg-white shadow-xl text-black text-xl ">
      <figure><img class="w-[40rem] h-[20rem]" src="${
        meal.strMealThumb ? meal.strMealThumb : ""
      }
      " /></figure>
      <div class="card-body">
          <h2 class="card-title">${meal.strMeal}</h2>
          <p>There are many variations of passages of available, but the majority have suffered.</p>
          <div class="card-actions justify-end">
              <button id="details-btn" class="btn btn-primary">View Details</button>
          </div>
      </div>
  </div>
      
  
      `;

      foodContainer.appendChild(foodDiv);
      document.getElementById("show-btn").classList.remove("hidden");
    }
  }
};

const loadMealsAll = () => {
  const searchValue = document.getElementById("input-field").value;
  document.getElementById("input-field").value = "";

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealsAll(data.meals));
};

const displayMealsAll = (meals) => {
  console.log(meals);
  const foodContainer = document.getElementById("food-container");

  for (let i = 6; i < meals.length; i++) {
    const meal = meals[i];
    console.log(meals);
    //     // document.getElementById("show-btn").classList.add("disabled")
    //     // console.log(meal);

    // foodContainer.innerHTML = "";

    const foodDiv = document.createElement("div");
    foodDiv.innerHTML = `

       <div class="card card-side bg-white shadow-xl text-black text-xl ">
       <figure><img class="w-[40rem] h-[20rem]" src="${
         meal.strMealThumb ? meal.strMealThumb : ""
       }
       " /></figure>
       <div class="card-body">
           <h2 class="card-title">${meal.strMeal}</h2>
           <p>There are many variations of passages of available, but the majority have suffered.</p>
           <div class="card-actions justify-end">
               <button id="details-btn" class="btn btn-primary">View Details</button>
           </div>
      </div>
   </div>

       `;

    foodContainer.appendChild(foodDiv);
    document.getElementById("show-btn").classList.add("hidden");
  }
};

const searchMeals = () => {
  const searchValue = document.getElementById("input-field").value;
  // document.getElementById("input-field").value = "";

  loadMeals(searchValue);
  // loadMealsAll(searchValue);
  return searchValue;
};
