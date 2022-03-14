
let selectContainer = document.getElementsByClassName("card-container");
let selectInputValue;
let selectSearchButton = document.getElementById('submit');

// click event 

    selectSearchButton.addEventListener( "click", (e) => {

        selectInputValue = document.getElementById('input').value;
        
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${selectInputValue}`)
        .then(response => response.json())
        .then(data => {

            if (data.meals) {
                data.meals.forEach(element => {

                    let cardHtml = "";
    
                    cardHtml += `
                    <div class="card w-25">
                    <img src="${element.strMealThumb}" alt="holas" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${element.strMeal}</h5>
                            <h6 class="card-subtitle">${element.strCategory}</h6>
                            <a href="#" class="ms-5">Click for full reciepe. </a>
                        </div>
    
                    </div>
                    `  
                    selectContainer[0].innerHTML += cardHtml;
    
                });    
            } else {
                alert("sorry recipe not found")
            }   
            
        })

        e.preventDefault();
    })



    function showModal(id) {
        if (id) {
            console.log("modal showing up");
        }
    }

