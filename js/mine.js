let userName ;
let userEmail ;
let userPhone ;
let userAge ;
let userPass ;
let userRepass ;

$(document).ready(function()
{

  loading() ;

})

//======================ANIMATION FUNCTION=============================
new WOW().init();

//======================LOADING SITE=============================
function loading() 
{
  $("#loading .fa-spinner").fadeOut(100 , function(){
    $("#loading").fadeOut(100 , function(){
        $("#loading").remove() ;
        $("body").css("overflow" , "auto") ;
    })
  })
}


//======================PUT DEFULT MEALS AT HAME=============================
async function allMeals()
{

  let allMealUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`) ;

  let allMealData = await allMealUrl.json() ;

  let meal = await allMealData.meals ; 

  for(let i = 0; i < meal.length; i++)
  {

    $(".mealImages").append(`<div class="home col-md-6 col-lg-3 shadow my-3">
                                <div class="item shadow" onclick="selectItem(${i})">
                                  <img src=${meal[i].strMealThumb} class="img-fluid rounded">
                                  <div class="overLayout">
                                    <h2 class="text-center">${meal[i].strMeal}</h2>
                                  </div>
                                </div>
                            </div>`) ;
  }
}

allMeals() ;

async function selectItem(currentItem) 
{

  let allMealUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`) ;

  let allMealData = await allMealUrl.json() ;

  let meal = await allMealData.meals ;

  console.log(currentItem) ;
  $(".mealImages").html(` <div class="home shadow my-3">
                            <div class="row text-white">

                              <div class="col-md-4">
                                <img src=${meal[currentItem].strMealThumb} class="img-fluid rounded">
                                <h2 class="text-center">${meal[currentItem].strMeal}</h2>
                              </div>

                              <div class="col-md-8">
                                <h2>Instructions :</h2>
                                <p>${meal[currentItem].strInstructions}</p>
                                <p><b class="fw-bolder">Area : ${meal[currentItem].strArea}</b> Turkish</p>
                                <p><b class="fw-bolder">Category : ${meal[currentItem].strCategory}</b> Side</p>
                                <h3>Recipes : </h3>
                                <ul class="ulIngredients list-unstyled d-flex">

                                  <li class="my-3 mx-1 p-1 alert-success rounded flex-nowrap">
                                    ${meal[currentItem].strMeasure1} ${meal[currentItem].strIngredient1}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded flex-nowrap">
                                    ${meal[currentItem].strMeasure2} ${meal[currentItem].strIngredient2}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${meal[currentItem].strMeasure2} ${meal[currentItem].strIngredient3}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${meal[currentItem].strMeasure4} ${meal[currentItem].strIngredient4}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${meal[currentItem].strMeasure6} ${meal[currentItem].strIngredient5}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${meal[currentItem].strMeasure6} ${meal[currentItem].strIngredient6}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${meal[currentItem].strMeasure7} ${meal[currentItem].strIngredient7}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${meal[currentItem].strMeasure9} ${meal[currentItem].strIngredient9}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${meal[currentItem].strMeasure9} ${meal[currentItem].strIngredient10}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${meal[currentItem].strMeasur11} ${meal[currentItem].strIngredien11}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${meal[currentItem].strMeasure1} ${meal[currentItem].strIngredient12}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${meal[currentItem].strMeasure13} ${meal[currentItem].strIngredient13}
                                  </li>
                                  
                                </ul>
                                <h3>Tags :</h3>
                                <ul class="list-unstyled d-flex">
                                  <li class="my-3 mx-1 p-1 alert-danger rounded">
                                    ${meal[currentItem].strTags}
                                  </li>
                                </ul>

                                <button class="btn btn-success me-3">
                                  <a href="${meal[currentItem].strSource}">Source</a>
                                </button>

                                <button class="btn btn-danger me-3">
                                  <a href="${meal[currentItem].strYoutube}">Youtube</a>
                                </button>
                                
                              </div>

                            </div>
                                
                          </div>`) ;
}

//======================NAVIGATION BOX=============================
let navBoxWidth = $(".navBox").outerWidth(true) ;

$(".navigation").css( "left" , `-${navBoxWidth}` ) ;

$(".navigation .fa-align-justify").click(function(){

  // $(".fa-align-justify").toggle(1000 )

  // $(".fa-align-justify").addClass("d-none") ;
  // $(".fa-solid").removeClass("d-none"); 

  $(".navBox").addClass("wow") ;
  $(".navBox").addClass("backInUp") ;
  

  let leftNavigation = $(".navigation").css("left") ;

  if(leftNavigation == "0px")
  {
    $(".navigation").animate( {left : `-${navBoxWidth}`} , 1000 ) ;
  }
  else
  {
    $(".navigation").animate( {left : `0px`} , 1000 ) ;
  }
})


//======================SEARCH FUNCTION=============================
async function searchAboutData() 
{
  $(".navigation").animate( {"left" : `-${navBoxWidth}`} , 1000) ;
  $(".home").fadeOut(1000 , function(){

    loading() ;

  })
  
  $(".mealImages").html(`<div class="col-md-6 input1">
                            <input type="text" class="searchName form-control mb-2" placeholder="Search by name">
                          </div>
                                  
                          <div class="col-md-6 input2">
                            <input type="text" class="searchFirstLetter form-control mb-2"     placeholder="Search by first letter..">
                          </div>`) ;
 

  //======================SEARCH BY NAME=============================
  let valueOfName = document.querySelector(".searchName") ;

  $(valueOfName).keyup(async function () { 

    let searchNameUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${valueOfName.value}`) ;

    let searchNameData = await searchNameUrl.json() ;

    let searchedNameList = await searchNameData.meals ; 

    for(let i = 0; i < searchedNameList.length; i++)
    {
      if( ( searchedNameList[i].strMeal.toLowerCase().includes(valueOfName.value.toLowerCase()) ) == true)
      {

        function displaySearchedData() 
        {
          
          $(".mealImages").append(`<div class="home col-md-6 col-lg-3 shadow my-3">
                                    <div class="item shadow">
                                      <img src=${searchedNameList[i].strMealThumb} class="img-fluid rounded">
                                      <div class="overLayout">
                                        <h2>${searchedNameList[i].strMeal}</h2>
                                      </div>
                                    </div>
                                  </div>`) ;
        }
        displaySearchedData() ;
        
      }
    }
  }); 


  //======================SEARCH BY FIRST_LETTER=============================
  let valueOfLetter = document.querySelector(".searchFirstLetter") ;

  $(valueOfLetter).keyup(async function () { 

    let searchLitterUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${valueOfLetter.value}`) ;

    let searchLitterData = await searchLitterUrl.json() ;

    let letterList = await searchLitterData.meals ; 

    // console.log(letterList) ;
    console.log(valueOfLetter.value) ;

    for(let i = 0; i < letterList.length; i++)
    {
      if( letterList[i].strMeal.toLowerCase().slice(0,1) == valueOfLetter.value.toLowerCase() )
      {

        function displaySearchedData() 
        {
          $(".mealImages").append(`<div class="home col-md-6 col-lg-3 shadow my-3">
                                  <div class="item shadow">
                                    <img src=${letterList[i].strMealThumb} class="img-fluid rounded">
                                    <div class="overLayout">
                                      <h2>${letterList[i].strMeal}</h2>
                                    </div>
                                  </div>
                              </div>`) ;
        }
        displaySearchedData() ;
      }
    }

  })
}


//======================CATEGERY FUNCTION=============================
async function categeryData() {
  $(".navigation").animate( {"left" : `-${navBoxWidth}`} , 1000) ;
  let allCatUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`) ;

  let allCatData = await allCatUrl.json() ;

  let categery = await allCatData.categories ; 

  $(".home").fadeOut(1000 , function(){

    loading() ;

  })
    
  let hasala = `` ;
  function displayCategeries() 
  {
    for(let i = 0; i < categery.length; i++)
    {

      hasala +=`<div class="home col-md-6 col-lg-3 shadow my-3">
                  <div class="item shadow" onclick="selectedCategory(${i})">
                    <img src=${categery[i].strCategoryThumb} class="img-fluid rounded">
                    <div class="overLayout">
                      <h2 class="text-center d-block">${categery[i].strCategory}</h2>
                      <p class=" d-block overflow-hidden">${categery[i].strCategoryDescription}</p>
                    </div>
                  </div>
                </div>`
    }
    document.querySelector(".mealImages").innerHTML = hasala ;
  }

  displayCategeries() ;
}


async function selectedCategory(currentCategory) {

  let allCatUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`) ;

  let allCatData = await allCatUrl.json() ;

  let categery = await allCatData.categories ; 

  let selectedCatUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categery[currentCategory].strCategory}`) ;

  let currentSelectedCatData = await selectedCatUrl.json() ;

  let currentSelectedCat = await currentSelectedCatData.meals ;

  let hasala = `` ;
  function displaySelectedCategeries() 
  {
    for(let i = 0; i < currentSelectedCat.length; i++)
    {

      hasala +=`<div class="home col-md-6 col-lg-3 shadow my-3">
                  <div class="item shadow" onclick="selectedCategoryItem(${i})">
                    <img src=${currentSelectedCat[i].strMealThumb} class="img-fluid rounded">
                    <div class="overLayout">
                      <h2 class="text-center">${currentSelectedCat[i].strMeal}</h2>
                    </div>
                  </div>
                </div>`
    }
    document.querySelector(".mealImages").innerHTML = hasala ;
  }

  displaySelectedCategeries() ;
}


//======================SELECTED CATEGERY_ITEM INGR=============================

async function selectedCategoryItem(currentCategoryItem) 
{
  let allCatUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`) ;

  let allCatData = await allCatUrl.json() ;

  let categery = await allCatData.categories ;

  let selectedCatUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categery[currentCategoryItem].strCategory}`) ;

  let selectedCatData = await selectedCatUrl.json() ;

  let selectedCategory = await selectedCatData.meals ;

  let currentSelectedCatUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${selectedCategory[currentCategoryItem].strMeal}`) ;

  let currentSelectedCatData = await currentSelectedCatUrl.json() ;

  let currentSelectedCat = await currentSelectedCatData.meals ;

  $(".mealImages").html(` <div class="home shadow my-3">
                            <div class="row text-white">

                              <div class="col-md-4">
                                <img src=${currentSelectedCat[currentCategoryItem].strMealThumb} class="img-fluid rounded">
                                <h2 class="text-center">${currentSelectedCat[currentCategoryItem].strMeal}</h2>
                              </div>

                              <div class="col-md-8">
                                <h2>Instructions :</h2>
                                <p>${currentSelectedCat[currentCategoryItem].strInstructions}</p>
                                <p><b class="fw-bolder">Area : ${currentSelectedCat[currentCategoryItem].strArea}</b> Turkish</p>
                                <p><b class="fw-bolder">Category : ${currentSelectedCat[currentCategoryItem].strCategory}</b> Side</p>
                                <h3>Recipes : </h3>
                                <ul class="ulIngredients list-unstyled d-flex">

                                  <li class="my-3 mx-1 p-1 alert-success rounded flex-nowrap">
                                    ${currentSelectedCat[currentCategoryItem].strMeasure1} ${currentSelectedCat[currentCategoryItem].strIngredient1}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded flex-nowrap">
                                    ${currentSelectedCat[currentCategoryItem].strMeasure2} ${currentSelectedCat[currentCategoryItem].strIngredient2}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${currentSelectedCat[currentCategoryItem].strMeasure2} ${currentSelectedCat[currentCategoryItem].strIngredient3}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${currentSelectedCat[currentCategoryItem].strMeasure4} ${currentSelectedCat[currentCategoryItem].strIngredient4}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${currentSelectedCat[currentCategoryItem].strMeasure6} ${currentSelectedCat[currentCategoryItem].strIngredient5}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${currentSelectedCat[currentCategoryItem].strMeasure6} ${currentSelectedCat[currentCategoryItem].strIngredient6}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${currentSelectedCat[currentCategoryItem].strMeasure7} ${currentSelectedCat[currentCategoryItem].strIngredient7}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${currentSelectedCat[currentCategoryItem].strMeasure9} ${currentSelectedCat[currentCategoryItem].strIngredient9}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${currentSelectedCat[currentCategoryItem].strMeasure9} ${currentSelectedCat[currentCategoryItem].strIngredient10}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${currentSelectedCat[currentCategoryItem].strMeasur11} ${currentSelectedCat[currentCategoryItem].strIngredien11}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${currentSelectedCat[currentCategoryItem].strMeasure1} ${currentSelectedCat[currentCategoryItem].strIngredient12}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${currentSelectedCat[currentCategoryItem].strMeasure13} ${currentSelectedCat[currentCategoryItem].strIngredient13}
                                  </li>
                                  
                                </ul>
                                <h3>Tags :</h3>
                                <ul class="list-unstyled d-flex">
                                  <li class="my-3 mx-1 p-1 alert-danger rounded">
                                    ${currentSelectedCat[currentCategoryItem].strTags}
                                  </li>
                                </ul>

                                <button class="btn btn-success me-3">
                                  <a href="${currentSelectedCat[currentCategoryItem].strSource}">Source</a>
                                </button>

                                <button class="btn btn-danger me-3">
                                  <a href="${currentSelectedCat[currentCategoryItem].strYoutube}">Youtube</a>
                                </button>
                                
                              </div>

                            </div>
                                
                          </div>`) ;

}


//======================AREA FUNCTION=============================
async function areaData() {
  $(".navigation").animate( {"left" : `-${navBoxWidth}`} , 1000) ;
  let allAreaUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`) ;

  let allAreaData = await allAreaUrl.json() ;

  let area = await allAreaData.meals ;

  $(".home").fadeOut(1000 , function(){

    loading() ;

  })

  let hasala = `` ;
  function displayArea() 
  {
    for(let i = 0; i < area.length; i++)
    {
      hasala +=`<div class="home col-md-6 col-lg-3 shadow my-3">
                  <div class="shadow text-center" onclick="selectedArea(${i})">
                    <i class="fa-solid fa-city fa-3x text-danger"></i>
                    <h2 class="text-white text-center">${area[i].strArea}</h2>
                  </div>
                </div>` ;
    }
    document.querySelector(".mealImages").innerHTML = hasala ;
  }

  displayArea() ;
}


async function selectedArea(currentArea) 
{
  let allAreaUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`) ;

  let allAreaData = await allAreaUrl.json() ;

  let area = await allAreaData.meals ; 

  let selectedAreaUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area[currentArea].strArea}`) ;

  let selectedAreaData = await selectedAreaUrl.json() ;

  let selectedArea = await selectedAreaData.meals ;

  console.log(selectedArea) ;

  let hasala = `` ;
  function displaySelectedArea() 
  {
    for(let i = 0; i < selectedArea.length; i++)
    {

      hasala +=`<div class="home col-md-6 col-lg-3 shadow my-3">
                  <div class="item shadow" onclick="selectedAreaIngr(${i})">
                    <img src=${selectedArea[i].strMealThumb} class="img-fluid rounded">
                    <div class="overLayout">
                      <h2 class="text-center">${selectedArea[i].strMeal}</h2>
                    </div>
                  </div>
                </div>`
    }
    document.querySelector(".mealImages").innerHTML = hasala ;
  }

  displaySelectedArea() ;

}


async function selectedAreaIngr(currentAreaItem)
{
  let allAreaUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`) ;

  let allAreaData = await allAreaUrl.json() ;

  let area = await allAreaData.meals ; 

  let selectedAreaUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area[currentAreaItem].strArea}`) ;

  let selectedAreaData = await selectedAreaUrl.json() ;

  let selectedArea = await selectedAreaData.meals ;

  console.log(selectedArea) ;

  let selectedAreaItemUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${selectedArea[currentAreaItem].strMeal}`) ;

  let selectedAreaItemData = await selectedAreaItemUrl.json() ;

  let selectedAreaItem = await selectedAreaItemData.meals ;

  $(".mealImages").html(` <div class="home shadow my-3">
                            <div class="row text-white">

                              <div class="col-md-4">
                                <img src=${selectedAreaItem[currentAreaItem].strMealThumb} class="img-fluid rounded">
                                <h2 class="text-center">${selectedAreaItem[currentAreaItem].strMeal}</h2>
                              </div>

                              <div class="col-md-8">
                                <h2>Instructions :</h2>
                                <p>${selectedAreaItem[currentAreaItem].strInstructions}</p>
                                <p><b class="fw-bolder">Area : ${selectedAreaItem[currentAreaItem].strArea}</b> Turkish</p>
                                <p><b class="fw-bolder">Category : ${selectedAreaItem[currentAreaItem].strCategory}</b> Side</p>
                                <h3>Recipes : </h3>
                                <ul class="ulIngredients list-unstyled d-flex">

                                  <li class="my-3 mx-1 p-1 alert-success rounded flex-nowrap">
                                    ${selectedAreaItem[currentAreaItem].strMeasure1} ${selectedAreaItem[currentAreaItem].strIngredient1}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded flex-nowrap">
                                    ${selectedAreaItem[currentAreaItem].strMeasure2} ${selectedAreaItem[currentAreaItem].strIngredient2}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${selectedAreaItem[currentAreaItem].strMeasure2} ${selectedAreaItem[currentAreaItem].strIngredient3}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${selectedAreaItem[currentAreaItem].strMeasure4} ${selectedAreaItem[currentAreaItem].strIngredient4}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${selectedAreaItem[currentAreaItem].strMeasure6} ${selectedAreaItem[currentAreaItem].strIngredient5}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${selectedAreaItem[currentAreaItem].strMeasure6} ${selectedAreaItem[currentAreaItem].strIngredient6}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${selectedAreaItem[currentAreaItem].strMeasure7} ${selectedAreaItem[currentAreaItem].strIngredient7}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${selectedAreaItem[currentAreaItem].strMeasure9} ${selectedAreaItem[currentAreaItem].strIngredient9}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${selectedAreaItem[currentAreaItem].strMeasure9} ${selectedAreaItem[currentAreaItem].strIngredient10}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${selectedAreaItem[currentAreaItem].strMeasur11} ${selectedAreaItem[currentAreaItem].strIngredien11}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${selectedAreaItem[currentAreaItem].strMeasure1} ${selectedAreaItem[currentAreaItem].strIngredient12}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${selectedAreaItem[currentAreaItem].strMeasure13} ${selectedAreaItem[currentAreaItem].strIngredient13}
                                  </li>
                                  
                                </ul>
                                <h3>Tags :</h3>
                                <ul class="list-unstyled d-flex">
                                  <li class="my-3 mx-1 p-1 alert-danger rounded">
                                    ${selectedAreaItem[currentAreaItem].strTags}
                                  </li>
                                </ul>

                                <button class="btn btn-success me-3">
                                  <a href="${selectedAreaItem[currentAreaItem].strSource}">Source</a>
                                </button>

                                <button class="btn btn-danger me-3">
                                  <a href="${selectedAreaItem[currentAreaItem].strYoutube}">Youtube</a>
                                </button>
                                
                              </div>

                            </div>
                                
                          </div>`) ;

}

//======================INGRIDIENT FUNCTION=============================
async function ingredientData() 
{
  $(".navigation").animate( {"left" : `-${navBoxWidth}`} , 1000) ;
  let allIngredientUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`) ;

  let allIngredientData = await allIngredientUrl.json() ;

  let ingredient = await allIngredientData.meals ; 

  $(".home").fadeOut(1000 , function(){

    loading() ;
    $(".input1").fadeOut(1000 , function(){
      $(".input2").fadeOut(1000) ;
    })

  })

  let hasala = `` ;
  for(let i = 0; i < 20; i++)
  {
    hasala += ` <div class="home col-md-6 col-lg-3 shadow my-3">
                  <div class="shadow text-white text-center" onclick="selectedIngredient(${i})">
                    <i class="fa-solid fa-bowl-food fa-3x text-success"></i>
                    <h2 class="text-white text-center">${ingredient[i].strIngredient}</h2>
                    <p>${ingredient[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
                  </div>
                </div>  `
    // $(".mealImages").append(`<div class="home col-md-6 col-lg-3 shadow my-3">
    //                             <div class="shadow text-white text-center"    onclick="selectedIngredient(${i})">
    //                               <i class="fa-solid fa-bowl-food fa-3x text-success"></i>
    //                               <h2 class="text-white text-center">${ingredient[i].strIngredient}</h2>
    //                               <p>${ingredient[i].strDescription}</p>
    //                             </div>
    //                          </div> `)
  }
  document.querySelector(".mealImages").innerHTML = hasala ;
}

async function selectedIngredient(currentIngredient) {

  let allIngredientUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`) ;

  let allIngredientData = await allIngredientUrl.json() ;

  let ingredient = await allIngredientData.meals ;

  let selectedIngredientUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredient[currentIngredient].strIngredient}`) ;

  let selectedIngredientData = await selectedIngredientUrl.json() ;

  let selectedIngredient = await selectedIngredientData.meals ;

  let hasala = `` ;
  function displaySelectedIngredient() 
  {
    for(let i = 0; i < selectedIngredient.length; i++)
    {

      hasala +=`<div class="home col-md-6 col-lg-3 shadow my-3">
                  <div class="item shadow" onclick="selectedIngredientItem(${i})">
                    <img src=${selectedIngredient[i].strMealThumb} class="img-fluid rounded">
                    <div class="overLayout">
                      <h2 class="text-center">${selectedIngredient[i].strMeal}</h2>
                    </div>
                  </div>
                </div>`
    }
    document.querySelector(".mealImages").innerHTML = hasala ;
  }

  displaySelectedIngredient() ;
}


async function selectedIngredientItem(currentIngredient) 
{
  let allIngredientUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`) ;

  let allIngredientData = await allIngredientUrl.json() ;

  let ingredient = await allIngredientData.meals ;

  let selectedIngredientUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredient[currentIngredient].strIngredient}`) ;

  let selectedIngredientData = await selectedIngredientUrl.json() ;

  let selectedIngredient = await selectedIngredientData.meals ;

  $(".mealImages").html(` <div class="home shadow my-3">
                            <div class="row text-white">

                              <div class="col-md-4">
                                <img src=${selectedIngredient[currentIngredient].strMealThumb} class="img-fluid rounded">
                                <h2 class="text-center">${selectedIngredient[currentIngredient].strMeal}</h2>
                              </div>

                              <div class="col-md-8">
                                <h2>Instructions :</h2>
                                <p>${selectedIngredient[currentIngredient].strInstructions}</p>
                                <p><b class="fw-bolder">Area : ${selectedIngredient[currentIngredient].strArea}</b> </p>
                                <p><b class="fw-bolder">Category : ${selectedIngredient[currentIngredient].strIngredient}</b> </p>
                                <h3>Recipes : </h3>
                                <ul class="ulIngredients list-unstyled d-flex flax-wrap">

                                  <li class="my-3 mx-1 p-1 alert-success rounded flex-nowrap">
                                    ${selectedIngredient[currentIngredient].strMeasure1} ${selectedIngredient[currentIngredient].strIngredient1}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded flex-nowrap">
                                    ${selectedIngredient[currentIngredient].strMeasure2} ${selectedIngredient[currentIngredient].strIngredient2}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${selectedIngredient[currentIngredient].strMeasure2} ${selectedIngredient[currentIngredient].strIngredient3}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${selectedIngredient[currentIngredient].strMeasure4} ${selectedIngredient[currentIngredient].strIngredient4}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${selectedIngredient[currentIngredient].strMeasure6} ${selectedIngredient[currentIngredient].strIngredient5}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${selectedIngredient[currentIngredient].strMeasure6} ${selectedIngredient[currentIngredient].strIngredient6}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${selectedIngredient[currentIngredient].strMeasure7} ${selectedIngredient[currentIngredient].strIngredient7}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${selectedIngredient[currentIngredient].strMeasure9} ${selectedIngredient[currentIngredient].strIngredient9}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${selectedIngredient[currentIngredient].strMeasure9} ${selectedIngredient[currentIngredient].strIngredient10}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${selectedIngredient[currentIngredient].strMeasur11} ${selectedIngredient[currentIngredient].strIngredien11}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${selectedIngredient[currentIngredient].strMeasure1} ${selectedIngredient[currentIngredient].strIngredient12}
                                  </li>

                                  <li class="my-3 mx-1 p-1 alert-success rounded">
                                    ${selectedIngredient[currentIngredient].strMeasure13} ${selectedIngredient[currentIngredient].strIngredient13}
                                  </li>
                                  
                                </ul>
                                <h3>Tags :</h3>
                                <ul class="list-unstyled d-flex">
                                  <li class="my-3 mx-1 p-1 alert-danger rounded">
                                    ${selectedIngredient[currentIngredient].strTags}
                                  </li>
                                </ul>

                                <button class="btn btn-success me-3">
                                  <a href="${selectedIngredient[currentIngredient].strSource}">Source</a>
                                </button>

                                <button class="btn btn-danger me-3">
                                  <a href="${selectedIngredient[currentIngredient].strYoutube}">Youtube</a>
                                </button>
                                
                              </div>

                            </div>
                                
                          </div>`) ;
}



//======================CONTACT_US FUNCTION=============================
async function contactData() {

  $(".navigation").animate( {"left" : `-${navBoxWidth}`} , 1000) ;
  $(".home").fadeOut(1000 , function(){

    loading() ;

  })

  $(".mealImages").html(`<h2 class="text-white text-center pb-3">ContactUs..</h2>
                          <div class="contact d-flex flex-wrap w-75 mx-auto">
                            <div class="chechName col-md-6 text-white text-center px-2 pb-4">
                              <div class="d-flex col-md-12">
                                <input type="text" id="userName" class="form-control mb-2" placeholder="Enter Your Name">
                                <img src="images/excellentsvg.svg" class="img-fluid d-none">
                              </div>
                              <p class="text-white col-md-12 alert d-none fs-6">Special Characters and Numbers not allowed</p>
                            </div>
                                      
                            <div class="chechEmail col-md-6 text-white text-center px-4 pb-4">
                              <div class="d-flex col-md-12">
                                <input type="text" id="userEmail" class="form-control mb-2" placeholder="Enter Your Email">
                                <img src="images/excellentsvg.svg" class="img-fluid d-none">
                              </div>
                              <p class="text-white col-md-12 alert d-none fs-6">Enter valid email. *Ex: xxx@gmail(or)google.com</p>
                            </div>

                            <div class="chechPhone col-md-6 text-white text-center  px-4 pb-4">
                              <div class="d-flex col-md-12">
                                <input type="text" id="userPhone" class="form-control mb-2" placeholder="Enter Your Phone">
                                <img src="images/excellentsvg.svg" class="img-fluid d-none">
                              </div>
                              <p class="text-white col-md-12 alert d-none fs-6">Enter valid Phone Number</p>
                            </div>
                                    
                            <div class="checkAge col-md-6 text-white text-center  px-4 pb-4">
                              <div class="d-flex col-md-12">
                                <input type="text" id="userAge" class="form-control mb-2" placeholder="Enter Your Age">
                                <img src="images/excellentsvg.svg" class="img-fluid d-none">
                              </div>
                              <p class="text-white col-md-12 alert d-none fs-6">Enter valid Age</p>
                            </div>

                            <div class="checkPass col-md-6 text-white text-center  px-4 pb-4">
                              <div class="d-flex col-md-12">
                                <input type="text" id="userPass" class="form-control mb-2" placeholder="Enter Your Password">
                                <img src="images/excellentsvg.svg" class="img-fluid d-none">
                              </div>
                              <p class="text-white col-md-12 alert d-none fs-6">Enter valid password *Minimum eight characters, at least one letter and one number:*</p>
                            </div>
                                      
                            <div class="col-md-6 text-white text-center  px-4 pb-4">
                              <div class="checkRepass d-flex col-md-12">
                                <input type="text" id="userRepass" class="form-control mb-2" placeholder="Enter Your Repassword">
                                <img src="images/excellentsvg.svg" class="img-fluid d-none">
                              </div>
                              <p class="text-white col-md-12 alert d-none fs-6">Enter valid Repassword</p>
                            </div>

                          </div>
                          <button class="btnContact btn btn-outline-danger text-center disabled">Submit</botton>`) ;
                          
  userName = document.getElementById("userName") ;
  userEmail = document.getElementById("userEmail") ;
  userPhone = document.getElementById("userPhone") ;
  userAge = document.getElementById("userAge") ;
  userPass = document.getElementById("userPass") ;
  userRepass = document.getElementById("userRepass") ;

  nameValidation() ;

  emailValidation() ;

  phonValidation() ;

  ageValidation() ;

  passValidation() ;

  rePassValidation() ;

  allInputsValidation() ;
}


function nameValidation() {
  $(userName).keyup(function(){

    let userNameReg = /[a-zA-Z]+$/ ;  
    
    if(userNameReg.test(userName.value) == true)
    {
      console.log("yaaaaaa") ;
      $(".contact .chechName img").removeClass("d-none");
      $(".contact .chechName p").addClass("d-none") ;
      $("#userName").css( "border-color" , "#28a745" ) ;
      return true ;
    }
    if(userName.value == "")
    {
      $(".contact img").addClass("d-none");
      $("#userName").css( "border-color" , "red" ) ;
      $(".contact .chechName p").removeClass("d-none") ;
      $(".contact .chechName p").css( "background-color" , "palevioletred" ) ;
    }
    if(userNameReg.test(userName.value) == false)
    {
      $(".contact .chechName img").addClass("d-none");
      $("#userName").css( "border-color" , "red" ) ;
      $(".contact .chechName p").removeClass("d-none") ;
      $(".contact .chechName p").css( "background-color" , "palevioletred" ) ;
      // return false ;
    }
  
    
  })
}

function emailValidation() {
  $(userEmail).keyup(function(){
    
    var userEmailReg = /^[a-z0-9](\.?[a-z0-9]){4,}@((g(oogle)?mail)|yahoo)\.com$/
    
    if(userEmailReg.test(userEmail.value) == true)
    {
      console.log("yaaaaaa") ;
      $(".contact .chechEmail img").removeClass("d-none");
      $(".contact .chechEmail p").addClass("d-none") ;
      $("#userEmail").css( "border-color" , "#28a745" ) ;
      return true ;
    }
    if(userEmail.value == "")
    {
      $(".contact .chechEmail img").addClass("d-none");
      $("#userEmail").css( "border-color" , "red" ) ;
      $(".contact .chechEmail p").removeClass("d-none") ;
      $(".contact .chechEmail p").css( "background-color" , "palevioletred" ) ;
    }
    if(userEmailReg.test(userEmail.value) == false)
    {
      $(".contact .chechEmail img").addClass("d-none");
      $("#userEmail").css( "border-color" , "red" ) ;
      $(".contact .chechEmail p").removeClass("d-none") ;
      $(".contact .chechEmail p").css( "background-color" , "palevioletred" ) ;
      // return false ;
    }
  
    
  })
}

function phonValidation() {
  $(userPhone).keyup(function(){
    
    var userPhoneReg = /^(01)[0-9]{9}$/
    
    if(userPhoneReg.test(userPhone.value) == true)
    {
      console.log("yaaaaaa") ;
      $(".contact .chechPhone img").removeClass("d-none");
      $(".contact .chechPhone p").addClass("d-none") ;
      $("#userPhone").css( "border-color" , "#28a745" ) ;
      return true ;
    }
    if(userPhone.value == "")
    {
      $(".contact .chechPhone img").addClass("d-none");
      $("#userPhone").css( "border-color" , "red" ) ;
      $(".contact .chechPhone p").removeClass("d-none") ;
      $(".contact .chechPhone p").css( "background-color" , "palevioletred" ) ;
    }
    if(userPhoneReg.test(userPhone.value) == false)
    {
      $(".contact .chechPhone img").addClass("d-none");
      $("#userPhone").css( "border-color" , "red" ) ;
      $(".contact .chechPhone p").removeClass("d-none") ;
      $(".contact .chechPhone p").css( "background-color" , "palevioletred" ) ;
      // return false ;
    }
  
    
  })
}

function ageValidation() {
  $(userAge).keyup(function(){
    
    var userAgeReg = /[0-9]{2}$/
    
    if(userAgeReg.test(userAge.value) == true)
    {
      console.log("yaaaaaa") ;
      $(".contact .checkAge img").removeClass("d-none");
      $(".contact .checkAge p").addClass("d-none") ;
      $("#userAge").css( "border-color" , "#28a745" ) ;
      return true ;
    }
    if(userAge.value == "")
    {
      $(".contact .checkAge img").addClass("d-none");
      $("#userAge").css( "border-color" , "red" ) ;
      $(".contact .checkAge p").removeClass("d-none") ;
      $(".contact .checkAge p").css( "background-color" , "palevioletred" ) ;
    }
    if(userAgeReg.test(userAge.value) == false)
    {
      $(".contact .checkAge img").addClass("d-none");
      $("#userAge").css( "border-color" , "red" ) ;
      $(".contact .checkAge p").removeClass("d-none") ;
      $(".contact .checkAge p").css( "background-color" , "palevioletred" ) ;
      // return false ;
    }
  
    
  })
}

function passValidation() {
  $(userPass).keyup(function(){
    
    var userPassReg = /[a-z0-9]{7,}[a-z]+[0-9]+/
    
    if(userPassReg.test(userPass.value) == true)
    {
      $(".contact .checkPass img").removeClass("d-none");
      $(".contact .checkPass p").addClass("d-none") ;
      $("#userPass").css( "border-color" , "#28a745" ) ;
      return true ;
    }
    if(userPass.value == "")
    {
      $(".contact .checkPass img").addClass("d-none");
      $("#userPass").css( "border-color" , "red" ) ;
      $(".contact .checkPass p").removeClass("d-none") ;
      $(".contact .checkPass p").css( "background-color" , "palevioletred" ) ;
    }
    if(userPassReg.test(userPass.value) == false)
    {
      $(".contact .checkPass img").addClass("d-none");
      $("#userPass").css( "border-color" , "red" ) ;
      $(".contact .checkPass p").removeClass("d-none") ;
      $(".contact .checkPass p").css( "background-color" , "palevioletred" ) ;
      // return false ;
    }
  })

}

function rePassValidation() {
  $(userRepass).keyup(function(){
    
    if(userRepass.value == userPass.value )
    {
      $(".contact .checkRepass img").removeClass("d-none");
      $(".contact .checkRepass p").addClass("d-none") ;
      $("#userRepass").css( "border-color" , "#28a745" ) ;
      return true ;

    }
    if(userRepass.value == "")
    {
      $(".contact .checkRepass img").addClass("d-none");
      $("#userRepass").css( "border-color" , "red" ) ;
      $(".contact .checkRepass p").removeClass("d-none") ;
      $(".contact .checkRepass p").css( "background-color" , "palevioletred" ) ;
    }
    if(userRepass.value != userPass.value)
    {
      $(".contact .checkRepass img").addClass("d-none");
      $("#userRepass").css( "border-color" , "red" ) ;
      $(".contact .checkRepass p").removeClass("d-none") ;
      $(".contact .checkRepass p").css( "background-color" , "palevioletred" ) ;
      // return false ;
    }
  })

}

function allInputsValidation() 
{
  if( nameValidation() == true && emailValidation() == true && phonValidation() == true && ageValidation() == true && passValidation() == true && rePassValidation() == true )
  {
    $(".contact button").removeClass("disabled") ;
  }  
}

//End