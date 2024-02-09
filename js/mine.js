// ************** website -- loading icon **************
$(document).ready(function () {
    $('.loading .loader').fadeOut(1000, () => {
        $('.loading').fadeOut(1000, () => {
            $('.loading').remove();
            $('body').css('overflow', 'auto')
        })
    });
});

// ************** control on navigation list **************
let navListWidth = $("nav .navList").outerWidth(true) ;
$('nav').animate({left: `-${navListWidth}`});

$('.open-nav').click(function () { 
    if ($('nav').css('left') == '0px') {
        $('nav').animate( {left: `-${navListWidth}`}, 500 )
        $('.open-nav').addClass('fa-bars')
        $('.open-nav').removeClass('fa-close')
    }
    else{
        $('nav').animate({left: '0px'}, 500)
        $('.open-nav').removeClass('fa-bars')
        $('.open-nav').addClass('fa-close')
    }
});


// ************** display meals according to their kind **************
let mealsList= [];

// ************** display meals at home according to name **************
searchByName('')

// ************** display meals at default, name, firstLetter **************
function displayMeals(mealsList) {
    for(let i = 0; i < mealsList.length; i++){
        $('.display-meals .row').append(`<div class="col-md-4 col-lg-3">
                <div class="meal-data" onclick="displayMealDetails('${mealsList[i].idMeal}')">
                    <img class="img-fluid rounded" src=${mealsList[i].strMealThumb}  alt="${mealsList[i].strMeal}">
                    <div class="meal-overlay rounded">
                        <h2>${mealsList[i].strMeal}</h2>
                    </div>
                </div>
            </div>
        `)
    }
}

// ************** display search-inputs by search_link **************
$("a[href='#search']").click(async function () {
    $('.display-meals .row').empty();
    $('.display-meals .row').append(`
        <div class="col-md-6">
            <input onkeyup="searchByName(this.value)" class="form-control" type="text" name="" id="" placeholder="Search by name..">
        </div>
        <div class="col-md-6">
            <input onkeyup="searchByFirstLetter(this.value)" class="form-control" type="text" name="" id="" placeholder="Search by first letter..">
        </div>
        
    `);
})

// ************** display meals according to name **************
async function searchByName(mealName) {
    let mealNameUrl= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
    let mealNameObj= await mealNameUrl.json();
    mealsList= await mealNameObj.meals;

    if(mealsList){
        $('.display-meals .row .col-lg-3').empty();
        displayMeals(mealsList);
    }
    else '';
    
// mealsList[0].strMeal.toLowerCase().includes(mealName)
}

// ************** display meals according to first_letter **************
async function searchByFirstLetter(firstLetter) {
    let mealNameUrl= await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
    let mealNameObj= await mealNameUrl.json();
    mealsList= await mealNameObj.meals;

    if(mealsList){
        $('.display-meals .row .col-lg-3').empty();
        displayMeals(mealsList);
    }
    else '';
}

// ************** display meals according to all-categories **************
$("a[href='#category']").click(async function () {
    let categoryMealsUrl= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    let categoryMealsObj= await categoryMealsUrl.json();
    mealsList= await categoryMealsObj.categories;
    $('.display-meals .row').empty();
    for(let i = 0; i < mealsList.length; i++){
        $('.display-meals .row').append(`<div class="col-md-4 col-lg-3">
                <div class="meal-data" onclick="displaySingleCategoryMeals('${mealsList[i].strCategory}')">
                    <img class="img-fluid rounded" src=${mealsList[i].strCategoryThumb}  alt="">
                    <div class="meal-overlay rounded">
                        <h2 class="fw-bold">${mealsList[i].strCategory}</h2>
                        <p>${mealsList[i].strCategoryDescription.split(' ').slice(0,15).join(' ')}</p>
                    </div>
                </div>
            </div>
        `)
    }

});

// ************** display meals according to selected-category **************
async function displaySingleCategoryMeals(category) {
    let categoryMealsUrl= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    let categoryMealsObj= await categoryMealsUrl.json();
    mealsList= await categoryMealsObj.meals;
    $('.display-meals .row').empty();
    displayMeals(mealsList);
}

// ************** display meals according to area **************
$("a[href='#area']").click(async function () {
    let areaMealsUrl= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    let areaMealsObj= await areaMealsUrl.json();
    mealsList= await areaMealsObj.meals;
    $('.display-meals .row').empty();
    for(let i = 0; i < mealsList.length; i++){
        $('.display-meals .row').append(`<div class="col-md-4 col-lg-3">
                <div class="meal-data" onclick="displayAreaMeals('${mealsList[i].strArea}')">
                    <i class="fas fa-building text-danger"></i>
                    <div class="meal-text-content text-white">
                        <h2>${mealsList[i].strArea}</h2>
                    </div>
                </div>
            </div>
        `)
    }
});

// ************** display meals according to selected-area **************
async function displayAreaMeals(area) {
    let areaMealsUrl= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    let areaMealsObj= await areaMealsUrl.json();
    mealsList= await areaMealsObj.meals;
    $('.display-meals .row').empty();
    displayMeals(mealsList);
}

// ************** display meals according to ingredients **************
$("a[href='#ingredients']").click(async function () {
    let ingredientsMealsUrl= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    let ingredientsMealsObj= await ingredientsMealsUrl.json();
    mealsList= await ingredientsMealsObj.meals;
    $('.display-meals .row').empty();
    for(let i = 0; i < mealsList.length; i++){
        $('.display-meals .row').append(`<div class="col-md-4 col-lg-3">
                <div class="meal-data" onclick="displayIngredientsMeals('${mealsList[i].strIngredient}')">
                    <i class="fa-solid fa-bowl-food text-success"></i>
                    <div class="meal-text-content text-white">
                        <h2>${mealsList[i].strIngredient}</h2>
                        <p>${mealsList[i].strDescription?.split(' ').slice(0,15).join(' ')}</p>
                    </div>
                </div>
            </div>
        `)
    }
});

// ************** display meals according to selected-ingredients **************
async function displayIngredientsMeals(ingredients) {
    let ingredientsMealsUrl= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`);
    let ingredientsMealsObj= await ingredientsMealsUrl.json();
    mealsList= await ingredientsMealsObj.meals;
    $('.display-meals .row').empty();
    displayMeals(mealsList);
}

// ************** display details about single meal **************
async function displayMealDetails(mealId) {
    let mealDetailsUrl= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    let mealDetailsObj= await mealDetailsUrl.json();
    mealsList= await mealDetailsObj.meals[0];
    console.log(mealsList);
    $('.display-meals .row').empty();

    // how to display ingredients
    let ingredients=``
    for (let i = 0; i < 20; i++) {
        if(mealsList[`strIngredient${i}`]){
            ingredients += `<li class="alert alert-info fs-6 me-2 mt-3 p-2">${mealsList[`strMeasure${i}`]} ${mealsList[`strIngredient${i}`]}</li>`
        }
    }

    // how to display tags
    let tags= mealsList.strTags?.split(',');
    let tagsStr = '';
    
    if(!tags){
        tags=[] ;
        tagsStr= `<li class="alert alert-success fs-6 me-2 mt-3 p-2">no tags found!</li>`
    } 
    
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `<li class="alert alert-success fs-6 me-2 mt-3 p-2">${tags[i]}</li>`
    }
    

    $('.display-meals .row').append(`<div class="col-md-5 col-lg-4 text-white">
            <div class="meal-data" onclick="displayMealDetails('${mealsList.idMeal}')">
                <img class="img-fluid rounded" src=${mealsList.strMealThumb}  alt="">
                <div class="pt-2 rounded">
                    <h2>${mealsList.strMeal}</h2>
                </div>
            </div>
        </div>

        <div class="col-md-7 col-lg-8 text-white">
            <h2 class="fw-bold">Instructions :</h2>
            <p>${mealsList.strInstructions}</p>
            <hr/>
            <h5><b>Area : </b><span class="fs-4">${mealsList.strArea}</span></h5>
            <hr/>
            <h5><b>Category : </b><span class="fs-4">${mealsList.strCategory}</span></h5>
            <hr/>
            <h5><b>Recipes : </b>
                <ul class="d-flex flex-wrap align-items-center">
                    ${ingredients}
                </ul>
            </h5>
            <hr/>
            <h5><b>Tags : </b>
                <ul class="d-flex flex-wrap align-items-center">
                    ${tagsStr}
                </ul>
            </h5>
            <hr/>

            <a href=${mealsList.strSource} target='_blank'>
                <button class="btn btn-info me-3"> Source </button>
            </a>
            
            <a href=${mealsList.strYoutube} target='_blank'>
                <button class="btn btn-danger"> Youtube </button>
            </a>
            
        </div>
    `)
}

// ************************* concatnation *************************

// ************** display contact_inputs by contact-link **************
let password;
$("a[href='#contact']").click(async function () {
    $('.display-meals .row').addClass('contact');
    $('.display-meals .row').empty();
    $('.display-meals .row').html(`
    
        <h2 class="text-white text-center">ContactUs..</h2>

        <div class="col-md-6 contact-name">
            <div class="d-flex">
                <input onkeyup="validateName(this.value);" type="text" class="form-control name-input" placeholder="Enter Your Name"/>
                <img class="d-none" src="images/excellentsvg.svg" />
            </div>
            <div class="alert alert-danger py-1 name-alert d-none"></div>    
        </div>
        
        <div class="col-md-6 contact-email">
            <div class="d-flex">
                <input onkeyup="validateEmail(this.value);" type="email" class="form-control email-input" placeholder="Enter Your Email"/>
                <img class="d-none" src="images/excellentsvg.svg" />    
            </div>
            <div class="alert alert-danger py-1 email-alert d-none"></div>
        </div>

        <div class="col-md-6 contact-phone">
            <div class="d-flex">
                <input onkeyup="validatePhone(this.value);" type="number" class="form-control phone-input" placeholder="Enter Your Phone"/>
                <img class="d-none" src="images/excellentsvg.svg" />
            </div>
            <div class="alert alert-danger py-1 phone-alert d-none"></div>    
        </div>

        <div class="col-md-6 contact-age">
            <div class="d-flex">
                <input onkeyup="validateAge(this.value);" type="number" class="form-control age-input" placeholder="Enter Your Age"/>
                <img class="d-none" src="images/excellentsvg.svg" />
            </div>
            <div class="alert alert-danger py-1 age-alert d-none"></div>    
        </div>

        <div class="col-md-6 contact-pass">
            <div class="d-flex">
                <input onkeyup="validatePassword(this.value);" type="password" class="form-control pass-input" placeholder="Enter Your Password"/>
                <img class="d-none" src="images/excellentsvg.svg" />
            </div>
            <div class="alert alert-danger py-1 pass-alert d-none"></div>    
        </div>

        <div class="col-md-6 contact-repass">
            <div class="d-flex">
                <input onkeyup="validateRepassword(this.value);" type="password" class="form-control repass-input" placeholder="Confirm password"/>
                <img class="d-none" src="images/excellentsvg.svg" />
            </div>
            <div class="alert alert-danger py-1 repass-alert d-none"></div>    
        </div>
        
        <button disabled class="btn btn-outline-danger text-center mt-3">
            Submit
        </botton>
       
        
    `)

password =document.querySelector('.pass-input');
})

// ************** name validation **************
function validateName(nameValue) {
    let reg= /^[A-Z][\w]{2,}\s?(\w{1,})?$/

    if (reg.test(nameValue)) {
        $('.contact .contact-name img').removeClass('d-none');
        $('.contact .contact-name input').css('border-color', '#28a745');
        $('.contact .name-alert').addClass('d-none');
        return true
    }
    else if (nameValue == '') {
        $('.contact .name-alert').removeClass('d-none')
        $('.contact .name-alert').text('Name is required!')
        $('.contact .contact-name input').css('border-color', 'red');
    }
    else if (!reg.test(nameValue)) {
        $('.contact .name-alert').removeClass('d-none');
        $('.contact .name-alert').text(`Special charecters or numbers are not allowed with name`)
        $('.contact .contact-name input').css('border-color', 'red');
    }
}

// ************** email validation **************
function validateEmail(emailValue) {
    let reg= /^[a-z]{3,}\.?\w+@(gmail|google|yahoo)(.com)$/
    if (reg.test(emailValue)) {
        $('.contact .contact-email img').removeClass('d-none');
        $('.contact .contact-email input').css('border-color', '#28a745');
        $('.contact .email-alert').addClass('d-none');
        return true
    }
    else if (emailValue == '') {
        $('.contact .email-alert').removeClass('d-none')
        $('.contact .email-alert').text('Email is required!')
        $('.contact .contact-email input').css('border-color', 'red');
    }
    else if (!reg.test(emailValue)) {
        $('.contact .email-alert').removeClass('d-none');
        $('.contact .email-alert').text(`Email not valid *exemple*aaaa.eee@gmail|google|yahoo .com`)
        $('.contact .contact-email input').css('border-color', 'red');
    }
}

// ************** phone validation **************
function validatePhone(phoneValue) {
    let reg= /^(01)[0125][0-9]{8}$/
    if (reg.test(phoneValue)) {
        $('.contact .contact-phone img').removeClass('d-none');
        $('.contact .contact-phone input').css('border-color', '#28a745');
        $('.contact .phone-alert').addClass('d-none');
        return true
    }
    else if (phoneValue == '') {
        $('.contact .phone-alert').removeClass('d-none')
        $('.contact .phone-alert').text('Phone number is required!')
        $('.contact .contact-phone input').css('border-color', 'red');
    }
    else if (!reg.test(phoneValue)) {
        $('.contact .phone-alert').removeClass('d-none');
        $('.contact .phone-alert').text(`Please enter a correct phone number`)
        $('.contact .contact-phone input').css('border-color', 'red');
    }
}

// ************** age validation **************
function validateAge(ageValue) {
    let reg= /(1[6-9])|([2-7][0-9]|80)$/
    if (reg.test(ageValue)) {
        $('.contact .contact-age img').removeClass('d-none');
        $('.contact .contact-age input').css('border-color', '#28a745');
        $('.contact .age-alert').addClass('d-none');
        return true
    }
    else if (ageValue == '') {
        $('.contact .age-alert').removeClass('d-none')
        $('.contact .age-alert').text('Age is required!')
        $('.contact .contact-age input').css('border-color', 'red');
    }
    else if (!reg.test(ageValue)) {
        $('.contact .age-alert').removeClass('d-none');
        $('.contact .age-alert').text(`Minimum age is 16`)
        $('.contact .contact-age input').css('border-color', 'red');
    }
}

// ************** password validation **************
function validatePassword(passValue) {
    let reg= /^[a-z]{3,}\W?\w{3,}[0-9]{2,}$/
    if (reg.test(passValue)) {
        $('.contact .contact-pass img').removeClass('d-none');
        $('.contact .contact-pass input').css('border-color', '#28a745');
        $('.contact .pass-alert').addClass('d-none');
        return true
    }
    else if (passValue == '') {
        $('.contact .pass-alert').removeClass('d-none')
        $('.contact .pass-alert').text('Password is required!')
        $('.contact .contact-pass input').css('border-color', 'red');
    }
    else if (!reg.test(passValue)) {
        $('.contact .pass-alert').removeClass('d-none');
        $('.contact .pass-alert').text(`Password must be a 8 strong characters`)
        $('.contact .contact-pass input').css('border-color', 'red');
    }
}

// ************** re-password validation **************
function validateRepassword(repassValue) {
    if (repassValue == password.value) {
        $('.contact .contact-repass img').removeClass('d-none');
        $('.contact .contact-repass input').css('border-color', '#28a745');
        $('.contact .repass-alert').addClass('d-none');
        return true
    }
    else if (repassValue == '') {
        $('.contact .repass-alert').removeClass('d-none')
        $('.contact .repass-alert').text('Re-password is required!')
        $('.contact .contact-repass input').css('border-color', 'red');
    }
    else if (repassValue !== password.valu) {
        $('.contact .repass-alert').removeClass('d-none');
        $('.contact .repass-alert').text(`Re-password is not confirmed yet!`)
        $('.contact .contact-repass input').css('border-color', 'red');
    }
    contactBtn()
}

// ************** enable cobtact btn **************
function contactBtn() {
    console.log('at contactBtn function');
    
    if( validateName() && validateEmail() && validatePhone() && validateAge() && validatePassword() && validateRepassword() ){
        console.log('yaaaaa');
        $('.contact button').removeAttribute('disabled');
    }
    else {
        console.log('nooooooo');
        $('.contact button').attr("disabled", true)
    }
}